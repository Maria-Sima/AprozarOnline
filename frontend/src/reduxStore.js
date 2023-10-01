import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authReducer.js";
const persistConfig={
    key:'root',
    storage
}
const rootReducer = combineReducers({
    auth: authReducer,
    cart:cartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }).concat()
});

export default store;
export const persistor = persistStore(store);