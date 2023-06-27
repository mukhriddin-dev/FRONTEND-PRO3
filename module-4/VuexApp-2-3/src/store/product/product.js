import axios from "../../service/axios";
export const useProductStore = {
    state: () => (
        {
            products: [],
            loading: true,
            errorMessage: null
        }
    ),

    mutations: {
        setPost(state, data) {
            state.products = data;
        },
        setLoading(state) {
            state.loading = false;
        },
        setErrorMessage(state, txt) {
            state.errorMessage = txt
        }
    },

    getters: {
        productLength(state) {
            return state.products.length
        },

        
    },

    actions: {
        async getPost({commit}) {
            try {
                const result = await axios.get("/products")
                commit('setPost', result.data)
                commit('setLoading')

            } catch (e) {
                console.log(e)
                commit('setErrorMessage', 'Error 404 ')
                commit('setLoading')
            }
        },
      
    }
}
