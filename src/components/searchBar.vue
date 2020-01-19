<template>
  <b-form-input
    size="sm"
    class="mr-sm-2 custom-input"
    placeholder="Search..."
    v-model.trim="input"
    v-on:input="search()"
    ref="input"
  />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'search',
  data: () => ({
    input: ''
  }),
  methods: {
    ...mapActions(['updateCuratedList']),
    search () {
      this.updateCuratedList(this.input)
      this.$store.commit('SET_LIST_SEARCH', this.input)
    }
  }
}
</script>

<style>
  .custom-input {
    width: auto!important;
  }
</style>
