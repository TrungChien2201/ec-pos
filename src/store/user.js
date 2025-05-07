import { createSlice } from '@reduxjs/toolkit'

function flattenObject(obj, prefix = '') {
  let result = {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = prefix ? `${prefix}.${key}` : key
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], newKey))
      } else {
        result[newKey] = obj[key]
      }
    }
  }

  return result
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    countOrder: null,
    showModalLogin: false,
    locale: {},
  },
  reducers: {
    initUser: (state, action) => {
      return { ...state, user: action.payload }
    },
    initCountOrder: (state, action) => {
      return { ...state, countOrder: action.payload }
    },
    logoutUser: (state, action) => {
      return { ...state, user: null }
    },
    showModalLogin: (state, action) => {
      return { ...state, showModalLogin: true }
    },
    closeModalLogin: (state, action) => {
      return { ...state, showModalLogin: false }
    },
    setLocale: (state, action) => {
      return { ...state, locale: flattenObject(action.payload) }
    },
  },
})

export const { initUser, initCountOrder, logoutUser, showModalLogin, closeModalLogin, setLocale } =
  userSlice.actions

export default userSlice.reducer
