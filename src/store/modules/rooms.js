import axios from 'axios';

// initial state
// shape: [{ id, quantity }]
const state = () => ({
 allRooms:[],
 roomsCache:{},
 loading:false,
 adminRooms:[],
 isCreated:false,
 updateRoomsFormDetails:{}
});

// getters
const getters = {
  
  isRoomCreated (state) {
    return state.isCreated
  },

  roomDetails(state){
    return state.updateRoomsFormDetails
  }

};

// mutations
const mutations = {
  setRoomsToState:(state, res) => {
    state.allRooms = res

    console.log(state.allRooms,'state')
  },

  setLoading:(state, loading) => {
    state.loading = loading
  },


  setCreateRoom:(state, res) => {
    state.adminRooms = res
  },

  roomCreated:(state, created) => {
    state.isCreated = created
  },

  roomsUpdateDetails:(state, details) => {
    state.updateRoomsFormDetails = details
  }
}

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
  },

  postRooms:({commit, state},payload) => {
    console.log(payload, 'image')
    let data = new FormData()
    data.append('room_type', payload.roomTitle.value)
    data.append('room_description', payload.roomDescription.value)
    data.append('room_price', payload.roomPrice.value)
    data.append('room_Image', payload.roomImage.value)
    axios.post('http://127.0.0.1:8000/api/rooms/',data)
      .then( response => {
        console.log(response, 'ur only')
        commit('setCreateRoom', response.data)
        commit('roomCreated', true)
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
        commit('roomCreated', false)
      })
  },
  updateRooms:({commit, state},payload) => {
    console.log('update', 'image')
    let data = new FormData()
    data.append('room_type', payload.roomTitle.value)
    data.append('room_description', payload.roomDescription.value)
    data.append('room_price', payload.roomPrice.value)
    data.append('room_Image', payload.roomImage.value)
    axios.put(`http://127.0.0.1:8000/api/rooms/${payload.roomId.value}/`,data)
    .then( response => {
      console.log(response, 'ur only')
      commit('roomCreated', true)
    })
    .catch(err => {
      console.log(err)
    
    })
    
  }
  

}
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