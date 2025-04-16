
const Navbar = async() => {
  return (
      <div className="w-full bg-slate-800 py-2 px-4 text-white flex justify-between fixed top-0">
        <div className=" text-2xl font-bold">E-cart</div>
        <div>
        <button className=" bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md w-fit cursor-pointer font-bold">Login </button>
        </div>
      </div>
  )
}

export default Navbar