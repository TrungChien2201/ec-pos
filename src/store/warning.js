import { createSlice } from '@reduxjs/toolkit'

export const warningSlice = createSlice({
  name: 'warning',
  initialState: {
    showModal: false,
    linkRedriect: '',
  },
  reducers: {
    initWarning: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { initWarning } = warningSlice.actions

export default warningSlice.reducer
