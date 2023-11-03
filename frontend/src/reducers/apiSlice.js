import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { routes } from '../helpers/Routes.jsx';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/', headers: { 'Content-Type': ' application/json' } }),
  endpoints: (builder) => ({
    getAllSellers: builder.query({
      query: (page = 1) => `${routes.users.getSellers}?page=${page}`,
      providesTags: (result, error, page) =>
        result
          ? [...result.data?.map(({ id }) => ({ type: 'SELLER', id })), { type: 'SELLER', id: 'PARTIAL-LIST' }]
          : [{ type: 'SELLER', id: 'PARTIAL-LIST' }],
    }),
    getAllProducts: builder.query({
      query: (page = 1) => `${routes.products.allProducts}?page=${page}`,
      providesTags: (result, error, page) =>
        result
          ? [...result.data?.map(({ id }) => ({ type: 'Products', id })), { type: 'Products', id: 'PARTIAL-LIST' }]
          : [{ type: 'Products', id: 'PARTIAL-LIST' }],
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
      query: (sellerId, page = 1) => `${routes.products.getProductsBySeller}${sellerId}?page=${page}`,
    }),
    loginUser: builder.mutation({
      query: (loginRequest) => ({
        url: routes.auth.login,
        method: 'POST',
        body: loginRequest,
      }),
    }),
    updateUser: builder.mutation({
      query: (updateRequest) => ({
        url: routes.auth.user,
        method: 'PUT',
        body: updateRequest,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (forgotRequest) => ({
        url: routes.auth.forgotPassword,
        method: 'POST',
        body: forgotRequest,
      }),
    }),
    sendFeedBackEmail: builder.mutation({
      query: (feedBackForm) => ({
        url: routes.email.sendFeedBackEmail,
        method: 'POST',
        body: feedBackForm,
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
        headers: {
          'Content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryY2zumZlB8OHh3bBN',
        },
        // formData: true,
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
  useGetAllProductsQuery,
  useSendFeedBackEmailMutation,
  useUpdateUserMutation,
} = apiSlice;
