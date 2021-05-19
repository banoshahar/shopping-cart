import axios , {cancelToken}from "../utills/api";

export const getAllProducts =  async () =>{
    return await axios.get("/api/products", { cancelToken: cancelToken.token });
}

export const getProductById = async (id) =>{
    return await axios.get(`/api/products/${id}`, { cancelToken: cancelToken.token });
}