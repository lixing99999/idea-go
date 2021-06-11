export const state = () => ({
    username : ""
})

export const mutations = {
    updateUser(state, username){
        state.username = username
        localStorage.setItem('username', username)
    }
}