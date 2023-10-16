import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/', headers: { 'Content-Type': ' application/json' } }),
  endpoints: (builder) => ({
    getAllSellers: builder.query({
      query: () => 'seller/all',
    }),
    registerUser: builder.mutation({
      mutation: (reqisterRequest) => ({
        url: 'auth/register',
        method: 'POST',
        body: reqisterRequest,
      }),
    }),
    getSellerInfo: builder.query({
      query: (sellerId) => `seller/info/${sellerId}`,
    }),
    getProductsBySeller: builder.query({
      query: (sellerId) => `seller/${sellerId}/products`,
    }),
    loginUser: builder.mutation({
      mutation: (loginRequest) => ({
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
      mutation: (addProductRequest) => ({
        url: 'seller/addProduct',
        method: 'POST',
        body: addProductRequest,
        headers: { 'Content-Type': 'multipart/form-data' },
        formData: true,
      }),
    }),
    logout: builder.mutation({
      query: (_logout) => ({
        url: 'auth/logout',
        method: 'POST',
        body: {},
      }),
    }),
  }),
});

export const {
  useGetAllSellersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useAddProductMutation,
  useGetSellerInfoQuery,
  useGetProductsBySellerQuery,
} = apiSlice;
