'use client'

import ProductCard from "@/Common/ProductCard";
import { useCartContextProvider } from "@/contextProvider/cartContextProvider";

const userCart =()=>{

    const cartContext = useCartContextProvider();
    const{cartState} = cartContext;

    return(
        <div className="grid grid-cols-1 gap-4 w-11/12 mx-auto mt-20">
            {
                cartState?.cart?.length ? 
                cartState?.cart?.map((curr,index)=>(
                    <ProductCard title={curr?.item_data?.title} price={curr?.item_data?.price} description={curr?.description} category={curr?.item_data?.category} productImage={curr?.item_data?.productImage} rating={curr?.item_data?.rating} key={index} ItemCount={curr?.count}/>
                ))
                :
                <div className=" text-4xl text-slate-400 text-center font-bold">No item in cart</div>
            }
        </div>
    )
}

export default userCart;