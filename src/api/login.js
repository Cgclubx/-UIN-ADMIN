import request from "@/utils/request"
export default {
    // 登陆接口
    login(username, password) {
        return request({
            url: `/login`,
            method: 'post',
            data: {
                username,
                password
            }
        })
    },
    // 退出登陆接口
    logout() {
        return request({
            url: `/logout`,
            method: 'post',
        })
    },

}