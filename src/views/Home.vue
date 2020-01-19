<template>
  <div class="home">
    <Spinner v-if="getLoading" />
    <div v-else>
      <Header />
      <p v-if="getMsg" class="text-center pt-5 mt-5">{{ getMsg }}</p>
      <div class="wrapper pt-5 px-2">
        <ListCard
          v-for="(employee, index) in getCuratedList.results"
          :picture="employee.picture.medium"
          :firstname="employee.name.first"
          :lastname="employee.name.last"
          :bod="employee.dob.date"
          :id="employee.phone"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/header.vue'
import Spinner from '@/components/spinner.vue'
import ListCard from '@/components/listCard.vue'

export default {
  name: 'home',
  data: () => ({
    input: ''
  }),
  computed: mapGetters(['getLoading', 'getCuratedList', 'getMsg']),
  components: {
    Header,
    Spinner,
    ListCard
  }
}
</script>
