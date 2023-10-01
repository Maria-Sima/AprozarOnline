import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: []
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
            const productId = action.payload;
       state.cartData=state.cartData.filter((item) => {
           console.log(item+" id:"+item.id)
           item.id !== productId});
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const productIndex = state.cartData.findIndex((item) => item.productdata.id === productId);
            if (productIndex !== -1 && quantity === 0) {
                state.cartData.splice(productIndex, 1);
                console.log(state.cartData);
            } else if (productIndex !== -1) {
                state.cartData[productIndex].quantity = quantity;
            }
        },
        // initializeCart: (state, action) => {
        //     state.cartData = action.payload;
        // },
    },
});

export const { addToCart, removeFromCart, updateQuantity,initializeCart } = cartSlice.actions;
export default cartSlice.reducer;