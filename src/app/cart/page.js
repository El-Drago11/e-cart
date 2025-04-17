'use client'

import ProductCard from "@/Common/ProductCard";
import { useCartContextProvider } from "@/contextProvider/cartContextProvider";

const UserCart =()=>{

    const cartContext = useCartContextProvider();
    const{cartState} = cartContext;

    return(
        <div className="w-11/12 mx-auto mt-32">
            {
                cartState.totalAmount !=0 && 
                <div className="text-2xl font-semibold bg-amber-500 px-4 w-fit py-1 rounded-md text-black">
                    Total Price =  <sup>₹</sup>{cartState.totalAmount}
                </div>
            }
            
            <div className="grid grid-cols-1 gap-4 w-full mt-20">
            {
                cartState?.cart?.length ? 
                cartState?.cart?.map((curr,index)=>(
                    <ProductCard title={curr?.item_data?.title} price={curr?.item_data?.price} description={curr?.description} category={curr?.item_data?.category} productImage={curr?.item_data?.productImage} rating={curr?.item_data?.rating} key={index} ItemCount={curr?.count}/>
                ))
                :
                <div className=" text-4xl text-slate-400 text-center font-bold">No item in cart</div>
            }
            </div>
        </div>
        
    )
}

export default UserCart;