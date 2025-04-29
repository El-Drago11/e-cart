'use client'

import { useCartContextProvider } from "@/contextProvider/cartContextProvider";

const OrderSummary = () => {

    const cartContext = useCartContextProvider();
    const { cartState } = cartContext;

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center flex-col items-center border-2 border-slate-200 rounded-lg p-2 mb-10">
            <div className=" text-2xl font-bold border-b-2 border-slate-200 w-full py-2">Order Summary</div>
            <ul className="w-full px-4 flex flex-col gap-4 text-[oklch(var(--text-muted))] my-10">
                <li className="flex justify-between">
                    <div>Product Cost</div>
                    <div><sup>₹</sup>{cartState?.totalAmount}</div>
                </li>
                <li className="flex justify-between">
                    <div>Shipping Cost</div>
                    <div><sup>₹</sup>101</div>
                </li>
                <li className="flex justify-between">
                    <div>Coupon Code</div>
                    <div className=" text-md font-bold text-slate-400">NONE</div>
                </li>
            </ul>
            <div className="w-full flex justify-between border-t-2 border-slate-200 py-1">
                <div className=" text-2xl font-semibold w-fit py-2">SubTotal</div>
                <div className="w-fit text-2xl font-semibold py-2 text-green-500"><sup>₹</sup>{cartState?.totalAmount}</div>
            </div>
            <button className="text-2xl font-semibold bg-amber-500 hover:bg-amber-600 px-4 w-fit py-1 rounded-md text-white cursor-pointer self-end">Pay</button>
        </div>
    )
}

export default OrderSummary