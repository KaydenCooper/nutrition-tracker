import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/search/",
  timeout: 3000,
  headers: {
    "x-app-key": "3438593d93cc1df96599ded5e5fd2ac1",
    "x-app-id": "bf22a3be"
  }
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foundFood: [],
  },
  mutations: {
    setFoundFood(state, foods) {
      state.foundFood = foods
    }
  },
  actions: {
    async findFood({ commit }, query) {
      try {
        let res = await api.post("instant?q=", query)
        console.log(res.data);
        commit("setFoundFood", res.data.branded)
      } catch (error) {
        debugger
        console.error(error)
      }
    }
  },
  modules: {
  }
})
