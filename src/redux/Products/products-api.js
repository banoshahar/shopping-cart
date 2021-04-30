import axios from "axios";

export const getAllProducts =  async () =>{
    return await axios.get("/api/products");
}

export const getProductById = async (id) =>{
    return await axios.get(`/api/products/${id}`);
}