import { createSlice } from "@reduxjs/toolkit";

export const dataLoading = createSlice({
  name: "dataLoading",
  initialState: {
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = dataLoading.actions;

export default dataLoading.reducer;
