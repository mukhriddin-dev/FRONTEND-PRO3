export const COUNTER = {
    state: () => (
        {counter: 0}
    ),
    mutations: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        }
    }
}
