import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    addToCart:(state,action)=>{
state.cart.push(action.payload)
    },
    updateQty:(state,action)=>{
state.cart.splice(action.payload.index,1,action.payload.item)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,updateQty} = cartSlice.actions

export default cartSlice.reducer