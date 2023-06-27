import axios from '../axios'

export const getAllProducts = () => axios.get('/products');
export const getProductItem=(id)=> axios.get(`/products/${id}`)
