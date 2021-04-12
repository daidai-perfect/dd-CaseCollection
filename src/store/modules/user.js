import { login, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
// import { resetRouter } from "@/router";
// import { Base64 } from "js-base64";

const state = {
  token: getToken(),
  sysUser: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_SYSUSER: (state, user) => {
    state.sysUser = user;
  }
};

const actions = {
  // user login
  login({ commit }, form) {
    return new Promise((resolve, reject) => {
      login(form)
        .then(response => {
          const data = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          const data = response.data;
          console.log(data);
          commit("SET_SYSUSER", data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("SET_TOKEN", "");
      commit("SET_SYSUSER", {});
      removeToken();
      resolve();
    });
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resetRouter()
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
