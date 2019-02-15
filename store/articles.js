import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const state = () => ({
  articles:''
})

export const mutations = {
  SET_ARTICLE(state, data) {
    state.articles = data;
  },
}
export const actions = {
  async findByConditions({ commit }) {
    let _self = this;
    try {
      const res = await _self.$axios.post('/article/findByConditions');
      commit('SET_ARTICLE', res.data.data);
    } catch (error) {
      console.log(error);
      throw error.response
    }
  },
}   
