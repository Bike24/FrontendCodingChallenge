import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import generalReducer from './slices/generalSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    general: generalReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch