import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from "../api/login";
export default new Vuex.Store({
  state: {
    // 保存登陆之后获取的列表数据
    menus: [],
  },
  mutations: {
   
  },
  actions: {
  },
  modules: {}
})