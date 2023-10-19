import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {routes} from "../middleware/Routes.jsx";

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
      query: () => routes.auth.logout,
    }),
    getProductsBySeller: builder.query({
      query: (sellerId) => `${routes.products.getProductsBySeller}${sellerId}`,
    }),
    loginUser: builder.mutation({
      query: (loginRequest) => ({
        url: routes.auth.login,
        method: 'POST',
        body: loginRequest,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (forgotRequest) => ({
        url: routes.auth.forgotPassword,
        method: 'POST',
        body: forgotRequest,
      }),
    }),
    resetPassword: builder.mutation({
      query: (resetRequest) => ({
        url: routes.auth.forgotPassword,
        method: 'POST',
        body: resetRequest,
      }),
    }),
    addProduct: builder.mutation({
      query: (addProductRequest) => ({
        url: routes.products.addProduct,
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
