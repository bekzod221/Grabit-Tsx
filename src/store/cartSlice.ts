import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem{
    price: number,
    data: any,
    id: string,
    quantity: number,
}

interface CartState {
    carts: CartItem[]
}

const initialState: CartState = {
    carts: JSON.parse(localStorage.getItem('cartItems') || '[]'),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.carts.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            } else {
                state.carts.push(action.payload)
            }
            localStorage.setItem('cartItems', JSON.stringify(state.carts))
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.carts));
        },
        incQuantity: (state, action: PayloadAction<string>) => {
            const item = state.carts.find((item)=> item.id === action.payload)
            if(item) {
                item.quantity += 1
            }
            localStorage.setItem('cartItems', JSON.stringify(state.carts))
        },
        decQuantity: (state, action: PayloadAction<string>) => {
            const item = state.carts.find((item)=> item.id === action.payload)
            if(item) {
                item.quantity -= 1
            }
            localStorage.setItem('cartItems', JSON.stringify(state.carts))
        },
        clearCart: (state) => {
            state.carts = [],
            localStorage.setItem('cartItems', JSON.stringify(state.carts))
        }
    }
})

export const { addItem, removeItem, clearCart, incQuantity, decQuantity } = cartSlice.actions

export default cartSlice.reducer