import axios from 'axios';

// initial state
// shape: [{ id, quantity }]
const state = () => ({
 allRooms:[],
 roomsCache:{},
 loading:false,
 adminRooms:[],
 isCreated:false,
 updateRoomsFormDetails:{},
 pageNum:1,
 lastPage:false,
 adminPageNum:1,
 adminLastPage:false,
 checkIn:new Date(),
 checkOut:new Date(),
 guest:1,

 roomData:{
  roomImage:null,
  roomType:null,
  roomDescription:null,
  roomPrice:null
 }
 

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
  },

  incrementPageNumber:(state) => {
    state.pageNum = state.pageNum + 1
  },
  setLastPage:(state) => {
    state.lastPage = true
  },
  incrementAdminPageNumber:(state) => {
    state.adminPageNum = state.adminPageNum + 1
  },
  setAdminLastPage:(state) => {
    state.adminLastPage = true
  },

  setGuest:(state, num) => {
    state.guest = num
    console.log(state.guest, 'guest')
  },


  checkInMutation:(state, data) => {
    state.checkIn = data
    console.log(state.checkIn, 'chackin')
  },

  checkOutMutation:(state, data) => {
    state.checkOut = data,
    console.log(state.checkOut, 'chackout')
  },

  roomsData:(state, data) => {
    state.roomData.roomImage = data.roomImage,
    state.roomData.roomType = data.roomType,
    state.roomData.roomDescription = data.roomDescription,
    state.roomData.roomPrice = data.roomPrice
  }

}

// actions
const actions = {
  getRooms:({commit, state}, pageNum) => {
    console.log(pageNum, 'page')
    commit('setLoading', true)
    if(state.allRooms.length >=1){
      return
    }else{
      console.log('send response')
      axios.get(`http://127.0.0.1:8000/api/rooms/?available=True&page=${pageNum}`)
      .then( response => {
        console.log(response)
        commit('setRoomsToState', response.data.results)
        commit('incrementPageNumber')
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
      })
    }
  },

  nextPage:({commit, state}, pageNum) => {
    console.log(pageNum, 'page')
    commit('setLoading', true)
    if(state.lastPage){
      return
    }else{
      axios.get(`http://127.0.0.1:8000/api/rooms/?available=True&page=${pageNum}`)
      .then( response => {
        // console.log(response)
        if(response.data.results.length >= 1){
          state.allRooms = [...state.allRooms, ...response.data.results]
          if(response.data.next !== null){
            commit('incrementPageNumber')
          }

          if(response.data.next === null){
            commit('setLastPage')
          }
          console.log(state.allRooms, 'rroms')

        }else{
          return
        }
        
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
      })
      }
    
  },

  getAdminRooms:({commit, state}, pageNum) => {

    commit('setLoading', true)
    if(state.allRooms.length >=1){
      return
    }else{
      console.log('send response')
      axios.get(`http://127.0.0.1:8000/api/rooms/?page=${pageNum}`)
      .then( response => {
        console.log(response)
        commit('setRoomsToState', response.data.results)
        commit('setLoading', false)
        commit('incrementAdminPageNumber')
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
      })
    }
  },

  adminNextPage:({commit, state}, pageNum) => {

    commit('setLoading', true)
    if(state.adminLastPage){
      return
    }else{
      console.log('send response')
      axios.get(`http://127.0.0.1:8000/api/rooms/?page=${pageNum}`)
      .then( response => {
        if(response.data.results.length >= 1){
          state.allRooms = [...state.allRooms, ...response.data.results]
          if(response.data.next !== null){
            commit('incrementAdminPageNumber')
          }

          if(response.data.next === null){
            commit('setAdminLastPage')
          }
          console.log(state.allRooms, 'rroms')

        }else{
          return
        }
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
        commit('setCreateRoom', response.data.results)
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
    
  },

  bookRoom:({commit}, payload) => {
    console.log(payload)
    axios.post(`http://127.0.0.1:8000/api/userInfo/`,{
      title:payload.title.value,
      first_name:payload.firstName.value,
      last_name:payload.lastName.value,
      phone_number:payload.phone.value,
      email:payload.email.value,
      check_in:payload.storeCheckIn.value,
      check_out:payload.storeCheckOut.value
    })
    .then(response => {
      console.log(response, 'res')
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