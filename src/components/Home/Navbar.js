import Link from "next/link"
import CartBtn from "./CartBtn"
import SortDropdown from "./SortItems"
import { Suspense } from "react"

const Navbar = async () => {
  return (
    <div className="w-full fixed top-0 h-fit">
      <div className=" bg-slate-800 w-full py-4 px-4 text-white flex justify-between">
        <Link href='/'>
          <div className=" text-2xl font-bold">E-cart</div>
        </Link>
        <div className="flex gap-2.5">
          <CartBtn />
          <button className=" bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md w-fit cursor-pointer font-bold">Login </button>
          <Suspense fallback={<div>Loading...</div>}>
            <SortDropdown/>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Navbar