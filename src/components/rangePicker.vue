<template>
    <v-menu
        :close-on-content-click="false"
        :close-on-click="false"
        transition="scale-transition"
        v-model="menu"
        class="picker-menu"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="dateRangeText"
            label="Filter by date of birth"
            prepend-icon="event"
            readonly
            v-on="on"
            dark
          ></v-text-field>
        </template>
        <v-date-picker v-model="dates" range no-title scrollable @blur="closePicker()">
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="closePicker()">Cancel</v-btn>
          <v-btn text color="primary" @click="ageFilter()">OK</v-btn>
        </v-date-picker>
      </v-menu>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app-rangePicker',
  data: () => ({
    dates: [],
    menu: false
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    }
  },
  methods: {
    ...mapActions(['filterByAge']),
    ageFilter () {
      this.dates = this.dates.slice().sort()
      this.menu = false
      this.filterByAge(this.dates)
    },
    closePicker () {
      this.menu = false
      this.dates = []
    }
  }
}
</script>
