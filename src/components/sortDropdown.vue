<template>
  <b-dropdown id="dropdown-1" text="Sorting" class="mb-4 mb-md-2 m-md-2" size="sm" right variant="outline-light">
    <b-dropdown-item @click="sort()">Sort By Name</b-dropdown-item>
    <b-dropdown-item @click="sortA()">Sort By Age</b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app-dropdown',
  methods: {
    ...mapActions(['sortByName', 'sortByAge']),
    sort () {
      this.sortByName()
      console.log('sort')
    },
    sortA () {
      this.sortByAge()
    }
  }
}
</script>
