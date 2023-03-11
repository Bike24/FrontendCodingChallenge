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
    }
  },
})

export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer