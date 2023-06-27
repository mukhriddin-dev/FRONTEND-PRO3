export const useAuthStore = {
    state: () => (
        {username: null, role: null, token: null, isAuth: false}
    ),

    mutations: {
        SET_USERNAME(state, username) {
            state.username = username;
        },
        SET_ROLE(state, role) {
            state.role = role;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_AUTH(state) {
            state.isAuth = true;
        }
    },

    getters: {
        useToken(state) {
            return state.token;
        },
        isAuth(state) {
            return state.isAuth;
        },
        isUser(state) {
            return state.username;
        }
    }
}
