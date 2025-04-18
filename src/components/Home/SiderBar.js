'use client'

import Link from "next/link"
import CartBtn from "./CartBtn"
import { Suspense} from "react"
import SortDropdown from "./SortItems"
import { useLoginContextProvider } from "@/contextProvider/LoginContextProvider"

const SiderBar = () => {

    const {isLogin,LogoutUser} = useLoginContextProvider();

    return (
        <div className="flex gap-2.5">
            <CartBtn />
            {
                isLogin ? 
                <button className=" bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md w-fit cursor-pointer font-bold" onClick={()=>LogoutUser()}>Logout </button>
                :
                <Link href={'/login'}>
                    <button className=" bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md w-fit cursor-pointer font-bold">Login </button>
                </Link>
            }
            
            <Suspense fallback={<div>Loading...</div>}>
                <SortDropdown />
            </Suspense>
        </div>
    )
}

export default SiderBar