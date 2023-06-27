import axios from "./axios";

export const Auth=(userdata)=>axios.post("/auth/login",userdata)