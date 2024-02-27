import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    allProduct: [],
    data: [],
    newCollections: [],
    cartItems: [],
  },
  reducers: {
    setAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setNewCollections: (state, action) => {
      state.newCollections = action.payload;
    },
    addToCart: (state, action) => {
      const findDuplicate = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findDuplicate) {
        findDuplicate.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const findDuplicate = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (findDuplicate) {
        findDuplicate.count--;

        if (findDuplicate.count === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setAllProduct,
  setData,
  setNewCollections,
  addToCart,
  removeFromCart,
  deleteFromCart,
} = dataSlice.actions;

export default dataSlice.reducer;
