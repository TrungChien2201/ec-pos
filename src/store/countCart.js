import { createSlice } from '@reduxjs/toolkit'

export const countCartSlice = createSlice({
  name: 'countCart',
  initialState: 0,
  reducers: {
    initCountCart: (state, action) => {
      return action.payload
    },
  },
})

export const { initCountCart } = countCartSlice.actions

export default countCartSlice.reducer
