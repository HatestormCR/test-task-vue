import moment from 'moment'

export default ({
  state: {
    loading: true,
    employees: [],
    curatedList: [],
    msg: false
  },
  mutations: {
    UPDATE_EMPLOYESS: (state, payload) => {
      state.employees = payload
    },
    SET_CURATED_LIST: (state, payload) => {
      state.curatedList = payload.data
      state.msg = payload.msg
    },
    END_LOADING: (state) => {
      state.loading = false
    },
    SORT_BY_NAME: (state, payload) => {
      state.curatedList = payload
    },
    SORT_BY_DOB: (state, payload) => {
      state.curatedList = payload
    },
    FILTER_BY_DOB: (state, payload) => {
      state.curatedList = payload.data
      state.msg = payload.msg
    }
  },
  actions: {
    async fetchEmployees ({ commit }) {
      const res = await fetch('https://randomuser.me/api/?nat=us&results=30&inc=id,name,dob,picture,phone,email')
      const employees = await res.json()

      commit('UPDATE_EMPLOYESS', employees)
      commit('END_LOADING')
    },
    updateCuratedList ({ commit, state }, value) {
      const s = value.toLowerCase()
      var newData

      const sortData = {
        results: state.employees.results.filter(n => Object.values([n.name.first, n.name.last]).some(m => m.toLowerCase().includes(s)))
      }

      if (sortData.results.length === 0) {
        newData = { data: sortData, msg: 'No Results.' }
        commit('SET_CURATED_LIST', newData)
        return false
      }

      commit('SET_CURATED_LIST', newData = { data: sortData, msg: false })
    },
    sortByName ({ commit, state }) {
      const dataCopy = state.curatedList.results ? state.curatedList.results.map(item => ({ ...item })) : state.employees.results.map(item => ({ ...item }))

      const sortData = {
        results: dataCopy.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
      }

      commit('SORT_BY_NAME', sortData)
    },
    sortByAge ({ commit, state }) {
      const dataCopy = state.curatedList.results ? state.curatedList.results.map(item => ({ ...item })) : state.employees.results.map(item => ({ ...item }))
      const sortData = {
        results: dataCopy.sort((a, b) => a.dob.date > b.dob.date ? 1 : -1)
      }

      commit('SORT_BY_DOB', sortData)
    },
    filterByAge ({ commit, state }, payload) {
      var dataCopy
      var filteredData
      if (state.curatedList.results && state.curatedList.results.length !== 0) {
        dataCopy = state.curatedList.results.map(item => ({ ...item }))
      } else {
        dataCopy = state.employees.results.map(item => ({ ...item }))
      }

      if (payload[1]) {
        filteredData = {
          results: dataCopy.filter((number) => moment(String(number.dob.date)).format('YYYY-MM-DD') >= payload[0] && moment(String(number.dob.date)).format('YYYY-MM-DD') <= payload[1])
        }
      } else {
        filteredData = {
          results: dataCopy.filter((number) => moment(String(number.dob.date)).format('YYYY-MM-DD') >= payload[0])
        }
      }

      var newData

      if (filteredData.results.length === 0) {
        newData = { data: filteredData, msg: 'No Results. Select the correct range.' }
        commit('FILTER_BY_DOB', newData)
        return false
      }

      commit('FILTER_BY_DOB', newData = { data: filteredData, msg: false })
    },
    getCurrentEmployee ({ commit, state }, payload) {
      if (state.employees.results) {
        // в параметрах url вынужден передавать phone вместо id так как API некорректно работает и часто возвращает вместо id null либо пустую строку
        const currentEmployee = state.employees.results.filter(a => a.phone === payload)
        return currentEmployee
      } else {
        return null
      }
    }
  },
  getters: {
    getCuratedList: (state, getters, rootState) => {
      if (!state.curatedList.results && rootState.search.listSearch === '') {
        return state.employees
      } else if (
        state.curatedList.results &&
        rootState.search.listSearch !== ''
      ) {
        return state.curatedList
      } else if (rootState.search.listSearch === '') {
        return state.curatedList
      }
    },
    getMsg: state => state.msg,
    getAllEmployees: state => state.employees,
    getLoading: state => state.loading
  }
})
