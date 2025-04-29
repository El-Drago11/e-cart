'use client'

import Link from "next/link"
import CartBtn from "./CartBtn"
import { Suspense} from "react"
import SortDropdown from "./SortItems"
import { useLoginContextProvider } from "@/contextProvider/LoginContextProvider"
import { usePathname } from "next/navigation"
import {useThemeContextProvider } from "@/contextProvider/ThemeContextProvider"

const SiderBar = () => {
    const themeProvider = useThemeContextProvider();
    const {getTheme,setTheme} = themeProvider
    const pathname = usePathname()
    const {isLogin,LogoutUser} = useLoginContextProvider();

    const changeTheme = ()=>{
        setTheme((prev)=>prev=='dark'?'light':'dark')
    }

    return (
        <div className="flex gap-2.5 flex-wrap justify-between">
            <CartBtn />
            {
                isLogin ? 
                <button className=" bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md w-fit cursor-pointer font-bold" onClick={()=>LogoutUser()}>Logout </button>
                :
                <Link href={'/login'}>
                    <button className=" bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md w-fit cursor-pointer font-bold">Login </button>
                </Link>
            }
            {
                pathname==='/' && <Suspense fallback={<div>Loading...</div>}>
                    <SortDropdown />
                </Suspense> 
            }
            <button className="bg-white text-black rounded-full px-2 py-1 cursor-pointer hover:bg-slate-100 font-semibold" onClick={()=>changeTheme()}>{getTheme=='dark'?'Light-Mode' : 'Dark-Mode'}</button>
            
        </div>
    )
}

export default SiderBar