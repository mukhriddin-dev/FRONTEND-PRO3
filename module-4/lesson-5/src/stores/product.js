import {ref, computed} from "vue";
import {defineStore} from "pinia";
import axios from "../service/axios";

export const useProductStore = defineStore('product', () => {

    const products = ref([]);
    const loading = ref(true);
    const errorMessage = ref(null);


    async function setPost() {
        try {
            const response =await axios.get("/products");
            products.value = response.data;
            setLoading()
        } catch (err) {
            console.log(err)
            setErrorMessage(err.message)
            if(err.message){
                setLoading()
            }
        }
    }

    function setLoading() {
        loading.value = false;
    }

    function setErrorMessage(message) {
        errorMessage.value = message;
    }

    const productLength = computed(() => products.value.length)

    return {
        products,
        loading,
        errorMessage,
        setPost,
        setLoading,
        setErrorMessage,
        productLength
    }

})
