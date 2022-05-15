import axios from 'axios'



// initial state
const state = () => ({
  statusCode:null,
  token:localStorage.getItem('token')

})

// getters
const getters = {


}


// mutations
const mutations = {
  registerSuccess:(state, status) => {
    state.statusCode = status
  },

  loginSuccess:(state, token) => {
    localStorage.setItem('token', token.access)
    localStorage.setItem('refreshToken', token.refresh)
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
        email:data.lowerCaseEmail.value, 
        phone_number:data.phoneNumber.value,
        password:data.password.value
      })
      .then( response => {
        console.log(response)
        commit('registerSuccess', response.status)
      })
      .catch(err => console.log(err))
  },


  loginUser:({commit}, data) => {
    console.log(data, 'jhdjsd')
    axios.post('http://127.0.0.1:8000/api/users/',{
        email:data.email.value, 
        password:data.password.value
      })
      .then( response => {
        console.log(response.data.refresh, 'zzzz')
        commit('loginSuccess', response.data)
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