import axios from "axios";

export const getAllProducts =  async () =>{
    return await axios.get("/api/products");
}

export const getProductById = (id) => async () =>{
    return await axios.get(`/api/products/${id}`);
}