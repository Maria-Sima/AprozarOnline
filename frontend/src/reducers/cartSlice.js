import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cartData.find((item) => item.productdata.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cartData.push({ productdata: product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.cartData = state.cartData.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const productIndex = state.cartData.findIndex((item) => item.productdata.id === productId);
      if (productIndex !== -1 && quantity === 0) {
        state.cartData.splice(productIndex, 1);
      } else if (productIndex !== -1) {
        state.cartData[productIndex].quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
