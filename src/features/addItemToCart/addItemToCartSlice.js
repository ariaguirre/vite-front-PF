import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [], 
}

export const addItemToCart = createSlice({
    name: 'addItemToCart',
    initialState,
    reducers: {
        setItemToCart: (state, action) => {            
            state.cartItems = addCartItem(state.cartItems,action.payload);            
        },      
    }
})

const addCartItem =(cartItems, productToAdd) => {
    //find if cartItems contains productsToAdd 
    const existingCartItem = cartItems.find(
        (cardItem)=> cardItem.id === productToAdd.id
    );
    // if found, increment quantity        
    if(existingCartItem){
        return cartItems.map((cartItem)=> 
        cartItem.id === productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem        
        )
    }
    // return new array with modified cartItems / new cart Item    
    return [...cartItems, { ...productToAdd, quantity: 1}]
}


export const { setItemToCart } = addItemToCart.actions

export default addItemToCart.reducer