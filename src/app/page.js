export const revalidate = 60; // Tells Next.js to skip caching

import { sortTheItems } from "@/Assets/sortItems";
import ProductCard from "@/Common/ProductCard";
const { getAllProduct } = require("@/apis/landingPage");

const ProductLayout = async({searchParams }) => {
  const resp = await getAllProduct();
  const {sort="default"} = await searchParams;
  sortTheItems(sort,resp)

  return (
    <div className='grid grid-cols-1 gap-'>
      {
        resp.map((curr)=>(
          <ProductCard title={curr?.title} price={curr?.price} description={curr.description} category={curr?.category} productImage={curr?.image} rating={curr?.rating?.rate} key={curr?.id} productId={curr?.id}/>
        ))
      }
    </div>
  )
}

export default ProductLayout