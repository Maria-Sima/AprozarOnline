import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {routes} from "../Api/Axios/Routes.jsx";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/', headers: { 'Content-Type': ' application/json' } }),
  endpoints: (builder) => ({
    getAllSellers: builder.query({
      query: () => routes.users.getSellers,
    }),
    registerUser: builder.mutation({
      query: (reqisterRequest) => ({
        url: routes.auth.register,
        method: 'POST',
        body: reqisterRequest,
      }),
    }),
    getSellerInfo: builder.query({
      query: (sellerId) => `${routes.users.user}${sellerId}`,
    }),
    logoutUser: builder.query({
      query: () => `auth/logout`,
    }),
    getProductsBySeller: builder.query({
      query: (sellerId) => `${routes.products.getProductsBySeller}${sellerId}`,
    }),
    loginUser: builder.mutation({
      query: (loginRequest) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginRequest,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (forgotRequest) => ({
        url: 'auth/forgot',
        method: 'POST',
        body: forgotRequest,
      }),
    }),
    resetPassword: builder.mutation({
      query: (resetRequest) => ({
        url: 'auth/reset',
        method: 'POST',
        body: resetRequest,
      }),
    }),
    addProduct: builder.mutation({
      query: (addProductRequest) => ({
        url: 'seller/addProduct',
        method: 'POST',
        body: addProductRequest,
        headers: { 'Content-Type': 'multipart/form-data' },
        formData: true,
      }),
    }),
  }),
});

export const {
  useGetAllSellersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useAddProductMutation,
  useGetSellerInfoQuery,
  useGetProductsBySellerQuery,
} = apiSlice;
