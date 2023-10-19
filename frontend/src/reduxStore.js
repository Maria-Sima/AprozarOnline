import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { apiSlice } from "./reducers/apiSlice.js"
import authSlice from "./reducers/authSlice.js"

import cartSlice from "./reducers/cartSlice.js"

const persistConfig = {
  key: "root",
  storage,
}
const rootReducer = combineReducers({
  api: apiSlice.reducer,
  auth: authSlice,
  cart: cartSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
})

export default store
export const persistor = persistStore(store)
