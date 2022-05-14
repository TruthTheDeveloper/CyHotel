import { createStore, createLogger } from 'vuex'
import auth from './modules/auth';
import rooms from './modules/rooms';

// const debug = process.env.NODE_ENV !== 'production'

// export default createStore({
//   modules: {
//     auth,
//     rooms
//   }
// })