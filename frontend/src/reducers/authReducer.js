import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth_token: "",
    user: "",
    user_id: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.auth_token = action.payload.token;
            state.user_id = action.payload.id;
            state.user=action.payload.user;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeAuth: (state) => {
            state.auth_token = null;
            state.user = null;
            state.user_id = null;
        },
    },
});

export const { setAuthToken, setUser, removeAuth } = authSlice.actions;
export default authSlice.reducer;