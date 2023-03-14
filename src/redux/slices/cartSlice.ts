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
            const productLength = state.products.length;
            if (state.products.length < 10 && productLength < 10) {
                const ids = state.products.map((prod) => prod.id);
                const index = ids.indexOf(action.payload.id);
                if (index !== -1) {
                    const currentAmount = state.products[index].amount
                    if (currentAmount < state.products[index].maxAmount) {
                        state.products[index] = {
                            ...action.payload,
                            amount: state.products[index].amount + action.payload.amount
                        }
                    }
                } else {
                    state.products.push(action.payload);
                }

            }
        },
        removeItemFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        clearCart: (state) => {
            state.products = []
        }
    },
})

export const { addProductToCart, removeItemFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer