import ProductCard from "@/Common/ProductCard";

const { getAllProduct } = require("@/apis/landingPage");

const ProductLayout = async() => {
  const resp = await getAllProduct();
  return (
    <div className='grid grid-cols-1 gap-4 w-11/12 mx-auto mt-20'>
      {
        resp.map((curr)=>(
          <ProductCard title={curr?.title} price={curr?.price} description={curr.description} category={curr?.category} productImage={curr?.image} rating={curr?.rating?.rate} key={curr?.id}/>
        ))
      }
    </div>
  )
}

export default ProductLayout