import { apiConnector } from "@/apiConnector/apiConnector";

export const LoginUser = async(userEmail,userPassword)=>{
    let userDetails;
    try {
        const response =  await apiConnector('GET','https://fakestoreapi.com/users')
        const userList = response.data;
        userDetails = await userList.find((curr)=> curr.email==userEmail && curr.password==userPassword)
        if(!userDetails){
            alert('invalid user credintials')
            throw new Error('Invalid user details')
        }
        localStorage.setItem('userProfile',JSON.stringify(userDetails));
    } catch (error) {
        console.log('Error : ',error);
    }
    return userDetails;
}