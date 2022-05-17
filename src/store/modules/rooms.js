import axios from 'axios';

// initial state
// shape: [{ id, quantity }]
const state = () => ({
 allRooms:[],
 roomsCache:{},
 loading:false
});

// getters
const getters = {


};

// mutations
const mutations = {
  setRoomsToState:(state, res) => {
    state.allRooms = res

    console.log(state.allRooms,'state')
  },

  setLoading:(state, loading) => {
    state.loading = loading
  }
};

// actions
const actions = {
  getRooms:({commit, state}) => {

    commit('setLoading', true)
    if(state.allRooms.length >=1){
      return
    }else{
      console.log('send response')
      axios.get('http://127.0.0.1:8000/api/rooms/')
      .then( response => {
        // console.log(response)
        commit('setRoomsToState', response.data)
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
      })
    }
  }
};



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};


// const store = createStore({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   },
//   actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   }
// })