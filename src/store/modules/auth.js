

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    token:localStorage.getItem('token') || null,
    user:[]
 
})

// getters
const getters = {


}

// actions
const actions = {
  
}

// mutations
const mutations = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    nested
  }
}