<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto d-flex align-items-center align-items-lg-center mt-3 mt-lg-0">
            <RangePicker />
            <SortDropdown />
            <SearchBar />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import SortDropdown from '@/components/sortDropdown.vue'
import RangePicker from '@/components/rangePicker.vue'

export default {
  name: 'app-header',
  components: {
    SearchBar,
    SortDropdown,
    RangePicker
  }
}
</script>

<style scoped>

</style>
