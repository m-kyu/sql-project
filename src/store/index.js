import { createStore } from 'vuex'
import {testMember} from './modules/test-member';

export default createStore({
  modules: {
    testMember
  }
})
