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
    async getAllArticles({ commit }) {
        try {
            const data = await axios.post('/article/getAllArticle');
            commit('SET_ARTICLE', data.data);
        } catch (error) {
          console.log(error);
          throw error.response
        }
    },
}   
