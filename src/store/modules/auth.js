import axios from 'axios'
import store from '..'



// initial state
const state = () => ({
  statusCode:null,
  token:  localStorage.getItem('token') || "",
  message:'',

})

// getters
const getters = {


}


// mutations
const mutations = {
  registerSuccess:(state, res) => {
    state.statusCode = res.status
    state.message = res.data.message
  },

  registerFail:(state, res) => {
    state.statusCode = res.data.status_code
    state.message = res.data.message
  },

  loginSuccess:(state, token) => {
    localStorage.setItem('token', token.access)
    localStorage.setItem('refreshToken', token.refresh)
    state.token = localStorage.getItem('token')
    state.statusCode = token.status
    state.message = token.message
  },

  loginFail:(state, res) => {
    state.statusCode = res.status
    state.message = res.data.message

    
  }

}


// actions
const actions = {

  // increment: (ctx) => {
  //   console.log('sucess')
  // }
  registerUser:({commit}, data) => {
    axios.post('http://127.0.0.1:8000/api/users/register/',{
        username:data.username.value, 
        email:data.lowerCaseEmail.value, 
        phone_number:data.phoneNumber.value,
        password:data.password.value
      })
      .then( response => {
        console.log(response)
        commit('registerSuccess', response)
      })
      .catch(err =>{
        // console.log()
        commit('registerFail', err.response)
      })
  },


  loginUser:({commit}, data) => {
    axios.post('http://127.0.0.1:8000/api/users/',{
        email:data.email.value, 
        password:data.password.value
      })
      .then( response => {
        console.log(response)
        commit('loginSuccess', response.data)
      })
      .catch(err => {
        commit('loginFail', err.response)
      })
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