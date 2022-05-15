import axios from 'axios'


// initial state
const state = () => ({
    token:localStorage.getItem('token') || null,
    user:[]
 
})

// getters
const getters = {


}

// mutations
const mutations = {
  
}


// actions
const actions = {
    // registerUser = ({state, mutations}, {username, email, phoneNumber, password}) => {
    //   axios.post('http://127.0.0.1:8000/api/register',{
    //       username, 
    //       email, 
    //       phone_number:phoneNumber,
    //       password
    //     })
    //     .then( response => console.log(response))
    //     .catch(err => console.log(err))
    // }
  }
  

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}