// 导入axios对象
import axios from "axios"
import store from "../store"

import { Loading } from 'element-ui';

// 2.用axios创建一个axios的实例
const Server = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //根域名
    timeout: 50000, //超时时间
})
const loading = {
    LoadingService:null,
       open(){
           if(this.LoadingService==null){
               this.LoadingService = Loading.service({
                   target:'#mains',
                   text:'正在加载中请稍后·······',
                   background:'rgba(0,0,0,0.5)',
               })
           }
       }, 
       close(){
           if(this.LoadingService!=null){
             this.LoadingService.close()
           }
           this.LoadingService = null
       },
   }
// 3.定义请求拦截器
Server.interceptors.request.use((config) => {
    console.log(sessionStorage.getItem('user_token'));
  // 设置请求头信息
  config.headers['token'] = window.sessionStorage.getItem('user_token')
    // loading.open()
    return config
}), (error) => {
    return Promise.reject(error)
}

// 定义相应拦截器
Server.interceptors.response.use((response) => {
    // loading.close()
  
    // 过滤响应回来的数据，取出data中的值
    if (response.status == 200) {
        return response.data
    }
    
}), (error) => {
    // loading.close()
    return Promise.reject(error)
}

// 定义抛出对象
export default Server