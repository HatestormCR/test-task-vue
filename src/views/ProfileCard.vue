<template>
  <Spinner v-if="loading"/>
  <div v-else class="profile-card">
    <div class="wrapper pt-5">
      <router-link to="/" class="py-5 px-3 ">Back to Home</router-link>
      <div class="d-flex justify-content-center pt-5" v-if="currentEmployee">
        <b-card
          :title="currentEmployee[0].name.title + ' ' + currentEmployee[0].name.first + ' ' +currentEmployee[0].name.last"
          :img-src="currentEmployee[0].picture.large"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 card-image"
          @click="$bvModal.show('bv-modal-example')"
        >
          <b-card-text class="pt-5">
            <p><strong>Phone number: </strong>{{ currentEmployee[0].phone }}</p>
            <p><strong>Email: </strong>{{ currentEmployee[0].email }}</p>
          </b-card-text>
        </b-card>
        <div>

          <b-modal id="bv-modal-example" hide-footer size="lg">
            <div class="d-block text-center">
              <div class="img-container">
                <img :src="currentEmployee[0].picture.large" alt="photo" class="employee-img">
              </div>
            </div>
          </b-modal>
        </div>
      </div>
      <div class="pr-5 d-flex justify-content-center align-items-center notfound" v-else>
        <p>The employee is not found</p>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/spinner.vue'

export default {
  name: 'profile-card',
  data: () => ({
    currentEmployee: null,
    loading: true
  }),
  async mounted () {
    const id = this.$route.params.id
    const employee = await this.$store.dispatch('getCurrentEmployee', id)

    this.currentEmployee = employee
    this.loading = false
  },
  methods: {
  },
  components: {
    Spinner
  }
}
</script>

<style scoped>
  .card-image img {
    cursor: pointer;
  }

  .employee-img {
    object-fit: cover;
    width: 90%;
    max-height: 500px;
  }

  .notfound {
    height: 300px;
  }
</style>
