import { configureStore } from '@reduxjs/toolkit'

import collectionReducer from './collections'
import countCartReducer from './countCart'
import menuReducer from './menus'
import userReducer from './user'
import warningReducer from './warning'

export const store = configureStore({
  reducer: {
    collections: collectionReducer,
    menus: menuReducer,
    user: userReducer,
    countCart: countCartReducer,
    warning: warningReducer,
  },
})
