<template>
  <v-app>
    <div id="app">
    <router-view/>
  </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: mapActions(['fetchEmployees']),
  async mounted () {
    this.fetchEmployees()
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .v-application ul {
    padding-left: 0!important;
  }

  .v-application a {
    color: inherit!important;
  }

  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
  }

  .modal-open {
    padding-right: 0!important;
  }

  .v-menu__content {
    max-width: 100%!important;
  }
</style>
