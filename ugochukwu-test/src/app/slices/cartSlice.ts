import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartProduct {
    id: string,
    productName: string,
    maxAmount: number,
    taxRate: number,
    price: number,
    amount: number
}
export interface CartState {
  value: number,
  products: Array<CartProduct>
}

const initialState: CartState = {
  value: 0,
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
        state.products.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
    }
  },
})

export const { addProductToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer