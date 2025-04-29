import { getAllProduct } from '@/apis/landingPage';
import { Modal } from '../../../Common/modal';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';

const PhotoModal = async({ params })=> {
  const {productId} = await params;
  const productList = await getAllProduct();
  const productDetails = productList.find((curr)=>curr.id == productId)

  return(
    <Modal>
        <div className='bg-slate-100 py-2 px-3 rounded-md gap-10 justify-center md:justify-start h-full w-full custom-scroll overflow-y-scroll'>
              <Image src={productDetails?.image} alt={"productImage_image"} width={200} height={200} className="h-[200px] w-full rounded-xl object-contain flex items-center" />
              <div className='flex flex-col mt-2 justify-center gap-1 py-5'>
                <p className="font-bold capitalize text-2xl">{productDetails?.title}</p>
                <div className='flex gap-1'>
                  <span className="flex gap-1">
                    {[...new Array(Math.floor(productDetails?.rating?.rate))].map((_, i) => {
                      return <TiStarFullOutline key={i} size={20} color={'orange'} />
                    })}
                    ({productDetails?.rating?.rate})
                  </span>
                </div>
                <p className="capitalize"><span className="font-bold"><sup className=" font-light">Brand</sup> 
                  </span> {productDetails?.category}
                </p>
                <p className='text-2xl font-bold'><sup>₹</sup>{productDetails?.price}<span className="font-light text-sm ml-2">MRP</span></p> 
                <p className="font-light capitalize text-lg">{productDetails?.description}</p>
              </div>
            </div>
    </Modal>
  )
}

export default PhotoModal;
