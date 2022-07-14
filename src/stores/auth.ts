import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuth = defineStore("auth", ()=> {
    const state = reactive({
        userinfo: 'test!' as string | undefined
    }) 

    const checkAuth = ()=> {
        state.userinfo = 'testUser'
    }

    return { state, checkAuth }
})