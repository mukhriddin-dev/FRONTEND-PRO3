import axios from "../axios";


const getAllProducts=async()=> axios.get("/products");

export default getAllProducts



