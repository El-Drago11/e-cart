import Link from "next/link"
import CartBtn from "./CartBtn"
import SortDropdown from "./SortItems"
import { Suspense } from "react"
import SiderBar from "./SiderBar"

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 h-fit">
      <div className=" bg-slate-800 w-full py-4 px-4 text-white flex justify-between flex-wrap gap-4">
        <Link href='/'>
          <div className=" text-2xl font-bold">E-cart</div>
        </Link>
        <SiderBar/>
      </div>
    </div>
  )
}

export default Navbar