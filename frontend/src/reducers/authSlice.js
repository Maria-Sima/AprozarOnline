import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth_token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.auth_token = action.payload.token;
            state.user=action.payload.user;
        },
        removeAuth: (state) => {
            state.auth_token = null;
            state.user = null;
            state.user_id = null;
        },
    },
});

export const { setAuthToken, setUser, removeAuth } = authSlice.actions;
export const selectCurrentUser=(state)=>state.auth.user;
export const authToken=(state)=>state.auth.auth_token;
export default authSlice.reducer;