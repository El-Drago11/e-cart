'use client'

import { useEffect, useState } from "react"

const AddressSummary = () => {

    const [getAddress,setAddress] = useState({});

    useEffect(()=>{
        const userDetail = JSON.parse(localStorage.getItem('userProfile'))
        console.log(userDetail?.address)
        setAddress(userDetail?.address)
    },[])

  return (
    <div className=" self-start font-semibold text-slate-700 border-2 border-slate-400 w-full md:w-1/2 lg:w-1/4 py-2 px-4 rounded-md">
        <div className="text-lg font-bold mb-2">Address Summary</div>
        <div className="flex gap-2 capitalize border-b-2 border-slate-300 mb-2 pb-1">
            <div>City : </div>
            <div>{getAddress?.city}</div>
        </div>
        <div className="flex gap-2 capitalize border-b-2 border-slate-300 mb-2 pb-1">
            <div>Street : </div>
            <div>{getAddress?.street}</div>
        </div>
        <div className="flex gap-2 capitalize border-b-2 border-slate-300 mb-2 pb-1">
            <div>Zipcode : </div>
            <div>{getAddress?.zipcode}</div>
        </div>
        <div className="flex gap-2 capitalize">
            <div>Contact Info : </div>
            <div>{getAddress?.number}</div>
        </div>
        <div className="mt-4 text-sm text-blue-500 hover:text-blue-600 cursor-pointer capitalize">Change contact info?</div>
    </div>
  )
}

export default AddressSummary