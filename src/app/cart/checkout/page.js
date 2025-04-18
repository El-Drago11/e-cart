
import AddressSummary from "@/components/checkout/AddressSummary";
import OrderSummary from "@/components/checkout/OrderSummary";

const Checkout = () => {

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="text-left font-bold text-2xl w-full mb-4 text-slate-500">Checkout</div>
        <div className=" flex w-full justify-evenly gap-10 items-center flex-wrap">
            <AddressSummary/>
            <OrderSummary/>
        </div>
    </div>
  )
}

export default Checkout