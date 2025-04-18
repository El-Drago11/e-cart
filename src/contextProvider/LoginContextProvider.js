'use client'

import { LoginUser } from "@/apis/LoginApi";
import { useRouter } from "next/navigation";

const { createContext, useContext, useState, useEffect } = require("react")

const LoginContext = createContext();

export const LoginContextProvider = ({children})=>{

    const router = useRouter();
    const[isLogin,setIsLogin] = useState(false);

    const LoginDetails = async(email,password)=>{
        const Response = await LoginUser(email,password)
        if(Response){
            setIsLogin(true)
            alert('Login successfully')
            router.push('/')
        }
    }

    const LogoutUser = ()=>{
        localStorage.removeItem('userProfile');
        setIsLogin(false)
        router.push('/');
    }

    useEffect(()=>{
        const userDetail = JSON.parse(localStorage.getItem('userProfile'))
        if(userDetail){
            setIsLogin(true);
        }
    },[])

    return(
        <LoginContext.Provider value={{LoginDetails,LogoutUser,isLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContextProvider = ()=>useContext(LoginContext);