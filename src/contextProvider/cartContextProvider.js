'use client'
const { cartReducer, cartInitialState, getCartInitialState } = require("@/Assets/cartReducer");
const { useContext, createContext, useReducer, useEffect } = require("react");

const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    
    const [cartState,dispatch] = useReducer(cartReducer,cartInitialState,getCartInitialState)
    // Sync to localStorage on client side only
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cartState.cart));
            localStorage.setItem("totalAmount", JSON.stringify(cartState.totalAmount));
        }
    }, [cartState.cart, cartState.totalAmount]);

    return(
        <CartContext.Provider value={{cartState,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContextProvider =()=> useContext(CartContext)