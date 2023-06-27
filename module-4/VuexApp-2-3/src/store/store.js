import {createStore} from 'vuex';
import {useProductStore} from './product/product';
import { useAuthStore } from './auth/auth';

export const store = createStore({modules: {
        useProductStore,
        useAuthStore,
    }})
