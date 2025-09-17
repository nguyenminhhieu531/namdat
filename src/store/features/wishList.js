import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    wishList: JSON.parse(localStorage.getItem("wishListStorage")) || [],
};

export const wishSlice = createSlice({
    name: "wishSlice",
    initialState,
    reducers: {
        addProductToWishList: (state, action) => {
            const productExists = state.wishList.some((item) => item.id === action.payload.id);
            if (!productExists) {
                console.log("Adding product:", action.payload); // Log sản phẩm được thêm
                state.wishList.push(action.payload);
                // Lưu vào localStorage
                localStorage.setItem("wishListStorage", JSON.stringify(state.wishList))
            }
        },
        removeProductFromWishList: (state, action) => {
            console.log("Removing product ID:", action.payload); // Log sản phẩm bị xóa
            state.wishList = state.wishList.filter((item) => item.id !== action.payload);
            localStorage.setItem("wishListStorage", JSON.stringify(state.wishList));
        },
    },
});

export const { addProductToWishList, removeProductFromWishList } = wishSlice.actions;
export default wishSlice.reducer;
