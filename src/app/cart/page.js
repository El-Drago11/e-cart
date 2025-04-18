'use client'

import ProductCard from "@/Common/ProductCard";
import { useCartContextProvider } from "@/contextProvider/cartContextProvider";
import { useLoginContextProvider } from "@/contextProvider/LoginContextProvider";
import { useRouter } from "next/navigation";

const UserCart = ()=>{

    const {isLogin} = useLoginContextProvider();
    const router = useRouter();

    const cartContext = useCartContextProvider();
    const{cartState} = cartContext;

    const proccedCheckout = ()=>{
        if(isLogin){
            router.push('cart/checkout')
        }else{
            router.push('/login')
        }
        return;
    }


    return(
        <div className="mx-auto">
            {
                cartState.totalAmount !=0 && 
                <div className=" flex justify-between flex-wrap-reverse gap-5">
                    <div className="text-2xl font-semibold bg-amber-500 px-4 w-fit py-1 rounded-md text-black">
                        Total Price =  <sup>₹</sup>{cartState.totalAmount}
                    </div>
                    <button className="text-2xl font-semibold bg-green-500 px-4 w-fit py-1 rounded-md text-white cursor-pointer" onClick={()=>proccedCheckout()}>Checkout</button>
                </div>
            }
            
            <div className="grid grid-cols-1 gap-4 w-full mt-10">
            {
                cartState?.cart?.length ? 
                cartState?.cart?.map((curr,index)=>(
                    <ProductCard title={curr?.item_data?.title} price={curr?.item_data?.price} description={curr?.description} category={curr?.item_data?.category} productImage={curr?.item_data?.productImage} rating={curr?.item_data?.rating} key={index} ItemCount={curr?.count} productId={curr?.item_data?.productId} />
                ))
                :
                <div className=" text-4xl text-slate-400 text-center font-bold">No item in cart</div>
            }
            </div>
        </div>
        
    )
}

export default UserCart;