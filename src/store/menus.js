import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menus',
  initialState: {
    menus: [],
    sections: [],
  },
  reducers: {
    initMenu: (state, action) => {
      return { ...state, menus: action.payload }
    },
    initHomeSection: (state, action) => {
      return { ...state, sections: action.payload }
    },
  },
})

export const { initMenu, initHomeSection } = menuSlice.actions

export default menuSlice.reducer
