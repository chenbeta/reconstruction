import * as types from '../types';
import { getUser } from '@/util/http';

const state = {
  loginSuccess: false,
  userData: {}
};

const mutations = {
  [types.COM_USER_LOGIN](state, data) {
    state.loginSuccess = true;
    state.userData = data;
  }
};

const actions = {
  setUserData({ commit }) {
    getUser().then(res => {
      if (res.success && res.resultObject !== '') {
        commit(types.COM_USER_LOGIN, res.resultObject);
      }
    });
  }
};
const getters = {
  getUserData: state => state.userData,
  getLoginSuccess: state => state.loginSuccess
};

export default {
  state,
  mutations,
  getters,
  actions
};
