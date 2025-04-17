export const cartInitialState = {
    cart: [],
    totalAmount : 0.00
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        //---> Add items 
        case taskName.ADD_ITEM:
            //check if Item is present
            var found = false;
            const IncreasedCountCart = state.cart.map((curr) => {
                //if present update the cart item count;
                if (curr.item_data.title == action.value.title) {
                    found = true;
                    return { ...curr, count: curr.count + 1 }
                }
                return curr;
            })

            if (found) {
                return {
                    cart: [...IncreasedCountCart],
                    totalAmount: parseFloat((state.totalAmount + parseFloat(action.value.price)).toFixed(2))
                };
            }

            return {
                cart: [...state.cart, { index: state.cart.length + 1, item_data: action.value, count: 1 }],
                totalAmount: parseFloat((state.totalAmount + parseFloat(action.value.price)).toFixed(2))
            }
        //---> Remove Item
        case taskName.REMOVE_ITEM:
            let updatedCart = state.cart.filter((curr) => curr != action.value)
            return {
                cart: [...updatedCart],
                totalAmount: parseFloat((state.totalAmount - parseFloat(action.value.price)).toFixed(2))

            }
        //---> Empty Cart
        case taskName.EMPTY_CART:
            return {
                cart: [],
                totalAmount : 0.00
            }
        //---> Increase the Item count
        case taskName.INCREASE_COUNT:
            const IncrementedCountCart = state.cart.map((curr) => {
                //if present update the cart item count;
                if (curr.item_data.title == action.value.title) {
                    return { ...curr, count: curr.count + 1 }
                }
                return curr;
            })
            return {
                cart: [...IncrementedCountCart],
                totalAmount: parseFloat((state.totalAmount + parseFloat(action.value.price)).toFixed(2))
            };
        //---> Decrease the Item count
        case taskName.DECREASE_COUNT:
            //check for the item present
            const currValue = state.cart.find((curr)=>curr.item_data.title == action.value.title)
            if(!currValue) return;

            let DecrementedCountCart;
            //if count greater than 1 just decrease the count
            if(currValue.count>1){
                DecrementedCountCart = state.cart.map((curr) => {
                    if (curr.item_data.title == action.value.title) {
                        return { ...curr, count: curr.count - 1 }
                    }
                    return curr;
                })
                
            }
            //if count equal to 1 than remove the item
            else{
                DecrementedCountCart = state.cart.filter((curr) => curr.item_data.title != action.value.title)
            }
            
            return {
                cart: [...DecrementedCountCart],
                totalAmount: parseFloat((state.totalAmount - parseFloat(action.value.price)).toFixed(2))

            };

        default:
            return cart;
    }
}

export const taskName = {
    ADD_ITEM: 'add_item',
    REMOVE_ITEM: 'remove_item',
    EMPTY_CART: 'empty_cart',
    INCREASE_COUNT: 'increment_count',
    DECREASE_COUNT: 'decrement_count',
}