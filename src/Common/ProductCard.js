'use client'

import { taskName } from "@/Assets/cartReducer"
import { useCartContextProvider } from "@/contextProvider/cartContextProvider"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import {TiStarFullOutline} from "react-icons/ti"

const ProductCard = ({ title, price, description, category, productImage, rating,ItemCount=0 }) => {

  const pathname = usePathname()

  const cartContext = useCartContextProvider()

  const {dispatch} = cartContext;

  const addToCart = () => {
    dispatch({type:taskName.ADD_ITEM,value:{title, price, description, category, productImage, rating}})
  }

  const increaseItemCount = ()=>{
    dispatch({type:taskName.INCREASE_COUNT,value:{title, price, description, category, productImage, rating}})
  }
  const decreaseItemCount = ()=>{
    dispatch({type:taskName.DECREASE_COUNT,value:{title, price, description, category, productImage, rating}})
  }

  useEffect(()=>{

  },[pathname])

  return (
    <div className='mb-10 bg-slate-100 py-2 px-3 rounded-md hover:shadow-slate-400 shadow-md flex flex-col md:flex-row gap-10 justify-center md:justify-start'>
      <Image src={productImage} alt={"productImage_image"} width={200} height={200} className="h-[200px] w-full md:w-[200px] rounded-xl object-contain flex items-center" />
      <div className='flex flex-col mt-2 justify-center gap-1 py-5'>
        <p className="font-bold capitalize text-2xl">{title}</p>
        <div className='flex gap-1'>
          <span className="flex gap-1">
            {[...new Array(Math.floor(rating))].map((_, i) => {
              return <TiStarFullOutline key={i} size={20} color={'orange'} />
            })}
            ({rating})
          </span>
        </div>
        <p className="capitalize"><span className="font-bold"><sup className=" font-light">Brand</sup> </span> {category}</p>
        <p className='text-richblack-5 text-2xl font-bold'><sup>₹</sup>{price}<span className="font-light text-sm ml-2">MRP</span></p>
        {
          pathname!='/cart' ? 
          <button className=" bg-yellow-400 hover:bg-amber-500 text-black px-2 py-1 rounded-full w-fit cursor-pointer font-semibold" onClick={() => addToCart()}>Add to Cart</button>
          :
          <div className="flex gap-1 mt-4">
            <button className=" bg-yellow-400 hover:bg-amber-500 text-black px-4 py-1 rounded-md w-fit cursor-pointer font-extrabold flex justify-center items-center" onClick={()=>decreaseItemCount()}>-</button>
            <button className="text-black px-2 py-1 rounded-full w-fit cursor-pointer font-semibold">{ItemCount}</button>
            <button className=" bg-yellow-400 hover:bg-amber-500 text-black px-4 py-1 rounded-md w-fit cursor-pointer font-extrabold flex justify-center items-center" onClick={()=>increaseItemCount()}>+</button>
          </div>
        }
        
      </div>
    </div>
  )
}

export default ProductCard