import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: string,
    productName: string,
    maxAmount: number,
    taxRate: number,
    price: number
}
export interface ProductState {
  value: number,
  products: Array<Product>,
  currentProduct?: Product
}

const initialState: ProductState = {
  value: 0,
  products: [],
  currentProduct: undefined
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload
    },
    setCurrentProduct: (state, action: PayloadAction<string>) => {
        const product = state.products.filter((product) => product.id === action.payload)[0];
        if(product) {
            state.currentProduct = product;
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addProducts, setCurrentProduct } = productsSlice.actions

export default productsSlice.reducer