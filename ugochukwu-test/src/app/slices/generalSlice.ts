import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GeneralState {
    showMessage: boolean;
    message: string;
}

const initialState: GeneralState = {
    showMessage: false,
    message: ''
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleshowConfirmStatus: (state, action: PayloadAction<boolean>) => {
        state.showMessage = action.payload
    },
    setMessage: (state, action: PayloadAction<string>) => {
        state.message = action.payload
    },
  },
})

export const { toggleshowConfirmStatus, setMessage } = generalSlice.actions

export default generalSlice.reducer