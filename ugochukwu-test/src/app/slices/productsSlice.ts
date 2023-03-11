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

export const { addProducts, setCurrentProduct } = productsSlice.actions

export default productsSlice.reducer