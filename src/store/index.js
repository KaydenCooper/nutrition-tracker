import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/search/",
  timeout: 3000,
  headers: {
    "x-app-key": "2eb17763bc92fced80f94b2f64f1ee05",
    "x-app-id": "b6e0e4a2"
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

      }
    }
  },
  modules: {
  }
})
