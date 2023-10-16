import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiData = createAsyncThunk('api/fetchData', async (url) => {
    const response = await axios.get(url);
    return response.data;
});

export const postApiData = createAsyncThunk('api/postData', async (request) => {
    const response = await axios({
        method: request.method,
        url: request.url,
        data: request.data,
        headers: request.headers,
    });
    return response.data;
});


const initialState = {
    isLoading: false,
    apiData: null,
    serverError: null,
    postResponse: null,
};


const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchApiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.apiData = action.payload;
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = action.error.message;
            })
            .addCase(postApiData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postApiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.postResponse = action.payload;
            })
            .addCase(postApiData.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = action.error.message;
            });
    },
});

export default apiSlice.reducer;