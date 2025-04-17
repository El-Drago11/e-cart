export const cartInitialState = {
    cart: [], 
    // localStorage.getItem('cart')?[...JSON.parse(localStorage.getItem('cart'))]:
    totalAmount: 0.00,
    // localStorage.getItem('totalAmount')?JSON.parse(localStorage.getItem('totalAmount')):
};

export const getCartInitialState = () => {
    if (typeof window !== "undefined") {
      try {
        return {
          cart: JSON.parse(localStorage.getItem("cart")) || [],
          totalAmount: parseFloat(localStorage.getItem("totalAmount")) || 0.0,
        };
      } catch (err) {
        console.error("Failed to parse cart from localStorage", err);
      }
    }
    return cartInitialState;
  };

export const taskName = {
    ADD_ITEM: 'add_item',
    REMOVE_ITEM: 'remove_item',
    EMPTY_CART: 'empty_cart',
    INCREASE_COUNT: 'increment_count',
    DECREASE_COUNT: 'decrement_count',
};

export const cartReducer = (state, action) => {
    let updatedCart = [];
    let updatedAmount = state.totalAmount;

    switch (action.type) {
        // ---> Add item
        case taskName.ADD_ITEM: {
            const itemExists = state.cart.find(curr => curr.item_data.title === action.value.title);

            if (itemExists) {
                updatedCart = state.cart.map(curr =>
                    curr.item_data.title === action.value.title
                        ? { ...curr, count: curr.count + 1 }
                        : curr
                );
            } else {
                updatedCart = [...state.cart, {
                    index: state.cart.length + 1,
                    item_data: action.value,
                    count: 1
                }];
            }

            updatedAmount = parseFloat((updatedAmount + parseFloat(action.value.price)).toFixed(2));

            break;
        }

        // ---> Remove item
        case taskName.REMOVE_ITEM: {
            updatedCart = state.cart.filter(curr => curr.item_data.title !== action.value.title);
            updatedAmount = parseFloat((updatedAmount - (parseFloat(action.value.price) * action.value.count)).toFixed(2));
            break;
        }

        // ---> Empty cart
        case taskName.EMPTY_CART: {
            updatedCart = [];
            updatedAmount = 0.00;
            break;
        }

        // ---> Increase count
        case taskName.INCREASE_COUNT: {
            updatedCart = state.cart.map(curr =>
                curr.item_data.title === action.value.title
                    ? { ...curr, count: curr.count + 1 }
                    : curr
            );
            updatedAmount = parseFloat((updatedAmount + parseFloat(action.value.price)).toFixed(2));
            break;
        }

        // ---> Decrease count
        case taskName.DECREASE_COUNT: {
            const currentItem = state.cart.find(curr => curr.item_data.title === action.value.title);
            if (!currentItem) return state;

            if (currentItem.count > 1) {
                updatedCart = state.cart.map(curr =>
                    curr.item_data.title === action.value.title
                        ? { ...curr, count: curr.count - 1 }
                        : curr
                );
            } else {
                updatedCart = state.cart.filter(curr => curr.item_data.title !== action.value.title);
            }

            updatedAmount = parseFloat((updatedAmount - parseFloat(action.value.price)).toFixed(2));
            break;
        }

        default:
            return state;
    }

    return {
        cart: updatedCart,
        totalAmount: updatedAmount
    };
};
