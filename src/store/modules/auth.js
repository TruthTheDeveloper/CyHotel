import axios from 'axios'



// initial state
const state = () => ({
  statusCode:null

})

// getters
const getters = {


}


// mutations
const mutations = {
  registerSuccess:(state, status) => {
    state.statusCode = status
  }

}


// actions
const actions = {

  // increment: (ctx) => {
  //   console.log('sucess')
  // }
  registerUser:({commit}, data) => {
    console.log(data, 'jhdjsd')
    axios.post('http://127.0.0.1:8000/api/users/register/',{
        username:data.username.value, 
        email:data.email.value, 
        phone_number:data.phoneNumber.value,
        password:data.password.value
      })
      .then( response => {
        console.log(response)
        commit('registerSuccess', response.status)
      })
      .catch(err => console.log(err))
  },


  getRooms:({commit}, {username, email, phoneNumber, password}) => {
    console.log({username, email, phoneNumber, password}, 'jhdjsd')
    axios.get('http://127.0.0.1:8000/api/rooms/')
      .then( response => console.log(response))
      .catch(err => console.log(err))
  }
}
  

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}