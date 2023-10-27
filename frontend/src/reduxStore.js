import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {apiSlice} from "./reducers/apiSlice.js"
import authSlice from "./reducers/authSlice.js"

import cartSlice from "./reducers/cartSlice.js"
import loadingMiddleware from "./middleware/loadingMiddleware.js";


const persistedAuthReducer = persistReducer(
    {
        key: 'auth',
        storage,
    },
    authSlice
);

const persistedCartReducer = persistReducer(
    {
        key: 'cart',
        storage,
    },
    cartSlice
);

const rootReducer = combineReducers({
    api: apiSlice.reducer,
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware, loadingMiddleware),
    devTools: true
})

export default store
export const persistor = persistStore(store)
