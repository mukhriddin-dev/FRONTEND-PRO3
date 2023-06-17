export const POST = {

    state: () => (
        {loading: true, post: []}
    ),
    mutations: {

        setPost(state, e) {
            state.post = e;
            state.loading = false;
        }

    },

    actions: {
        async getPost({commit}) {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const result = await response.json();
                commit('setPost', result);

            } catch (e) {
                console.log(e)
            }
        }
    }
}
