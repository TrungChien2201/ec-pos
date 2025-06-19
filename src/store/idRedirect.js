import { createSlice } from '@reduxjs/toolkit'

export const idRedirectSlice = createSlice({
  name: 'idRedirect',
  initialState: {
    pageId: null,
  },
  reducers: {
    setPageId: (state, action) => {
      state.pageId = action.payload
    },
  },
})

export const { setPageId } = idRedirectSlice.actions
export default idRedirectSlice.reducer
