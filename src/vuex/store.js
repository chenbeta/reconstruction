import Vue from 'vue';
import Vuex from 'vuex';
import com from './modules/com';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //放置公用状态

  },
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    com
  }
});