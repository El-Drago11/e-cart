'use client'
const { cartReducer, cartInitialState } = require("@/Assets/cartReducer");
const { useContext, createContext, useReducer } = require("react");

const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cartState,dispatch] = useReducer(cartReducer,cartInitialState)
    return(
        <CartContext.Provider value={{cartState,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContextProvider =()=> useContext(CartContext)