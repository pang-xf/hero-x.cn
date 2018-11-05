export const state = () => ({
  showAd:true
})

export const mutations = {
    SET_SHOWAD(state, datum) {
        state.showAd = datum
    },
}
export const actions = {
    // async sureIdCard({ commit }, { idCard }) {
    //     try {
    //         const data = await axios.post('/resume/checkId', { 'id':idCard })
    //         if(data.data.status==0){
    //             commit('SET_IS_SEND_IDCARD', 0)
    //         }else if(data.data.status==1){
    //             commit('SET_IS_SEND_IDCARD', 1)
    //         }else if(data.data.status==2){
    //             commit('SET_IS_SEND_IDCARD', 2)
    //         }
    //     } catch (error) {
    //         if(error.response.data.code&&error.response.data.code==202){
    //             // token过期
    //             this.dispatch('user/logout')
    //         }
    //         throw error.response
    //     }
    // },
}   
