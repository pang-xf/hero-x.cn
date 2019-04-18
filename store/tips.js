export const state = () => ({
  showAd:true,
  showGlTips:true
})

export const mutations = {
  SET_SHOWAD(state, datum) {
    state.showAd = datum
  },
  SET_SHOWGLTIPS(state, datum) {
    state.showGlTips = datum
  },
}
export const actions = {
}   
