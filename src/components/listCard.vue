<template>
  <div class="list-item" @click="gotToUrl()">
    <b-card class="text-center">
      <div class="text-dark d-flex card-content">
        <div class="photo pr-5">
          <img :src="picture" alt="photo">
        </div>
        <div class="px-5 text-left">
          <p class="m0"><strong>First name:</strong> {{firstname}}</p>
          <p class="m0"><strong>Last name:</strong> {{lastname}}</p>
        </div>
        <div class="pl-5 text-left d-flex flex-column justify-content-end">
          <p><strong>Date of birth:</strong> {{bod | formatDate}}</p>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'app-listCard',
  props: ['picture', 'firstname', 'lastname', 'bod', 'id'],
  filters: {
    formatDate (date) {
      return moment(String(date)).format('LL')
    }
  },
  methods: {
    gotToUrl () {
      this.$router.push('/profile-card/' + this.id)
    }
  }
}
</script>

<style scoped>
  .list-item {
    margin: 5px 0px;
    cursor: pointer;
  }

  @media(max-width: 600px) {
    .card-content {
      flex-direction: column;
      align-items: start;
    }

    .photo {
      padding:0 0 20px 20px;
    }
  }
</style>
