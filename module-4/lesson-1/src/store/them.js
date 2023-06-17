export const THEM = {
    state: () => (
        {them: 'light'}
    ),
    mutations: {
        toogleMode(state, e) {
            console.log(e)
            state.them = e;
        }
    }
}
