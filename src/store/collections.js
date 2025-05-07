import { createSlice } from '@reduxjs/toolkit'

export const collectionSlice = createSlice({
  name: 'collections',
  initialState: [],
  reducers: {
    initCollection: (state, action) => {
      return [...state, ...action.payload]
    },
  },
})

export const { initCollection } = collectionSlice.actions

export default collectionSlice.reducer
