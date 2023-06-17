import {createStore} from 'vuex';
import {POST} from "./posts";
import {THEM} from "./them";
import {COUNTER} from "./counter";
const store = createStore({
    modules: {
        POST,
        THEM,
        COUNTER
    }
})


export default store;
