import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    employees,
    search
  }
})
