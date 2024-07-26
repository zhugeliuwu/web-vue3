import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
    const token = "token"
    const userInfo = shallowRef<any>()

    // 获取用户信息
    const getInfo = async () => {
        //请求
    }

    return {
        token,
        userInfo,
        getInfo
    }
})

export default useUserStore;
