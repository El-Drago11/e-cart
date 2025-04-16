import { apiConnector } from "@/apiConnector/apiConnector";

export const getAllProduct = async()=>{
    let res;
    try {
        const response =  await apiConnector('GET','https://fakestoreapi.com/products')
        res = response.data;
    } catch (error) {
        console.log('Error : ',error);
    }
    return res;
}