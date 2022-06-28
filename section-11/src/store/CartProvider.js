
import { useReducer } from "react";
import CartContext from "./cart-context";
// Provides cart data to all components that want it

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  // Add new cart item
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCarItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );

    const existingCarItem = state.items[existingCarItemIndex];

    let updatedItems;

    if (existingCarItem) {
      const updatedItem = {
        ...existingCarItem,
        amount: existingCarItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCarItemIndex] = updatedItem;
    }
    else {
      updatedItems = state.items.concat(action.item);
    }

    //const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }; 
  }

  if (action.type === 'REMOVE') {

    const existingCarItemIndex = state.items.findIndex(
      item => item.id === action.id
    );
    const existingItem = state.items[existingCarItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if(existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id );
    }
    else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCarItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  // Clear cart
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;