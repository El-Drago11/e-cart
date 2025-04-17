'use client'
import { useCartContextProvider } from "@/contextProvider/cartContextProvider"
import Link from "next/link"
import { TiShoppingCart } from "react-icons/ti"

const CartBtn = () => {
    const cartContext = useCartContextProvider();
    const {cartState} = cartContext;


    return (
        <div className="relative">
            <Link href='/cart'>
                <button className=" bg-yellow-400 hover:bg-amber-500 text-black hover:text-white px-4 py-1 rounded-md w-fit cursor-pointer font-semibold h-full"><TiShoppingCart size={25} /></button>
            </Link>
            {cartState?.cart.length >0 && <div className="text-sm font-bold absolute top-[-5px] right-[-5px] bg-red-600 rounded-full px-1.5">{cartState?.cart.length}</div>}
        </div>
    )
}

export default CartBtn