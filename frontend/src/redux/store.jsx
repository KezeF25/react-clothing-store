import { configureStore } from "@reduxjs/toolkit";
import dataSlices from "./Slices/dataSlices.jsx";
import dataLoading from "./Slices/dataLoading.jsx";

export default configureStore({
  reducer: {
    dataSlices,
    dataLoading,
  },
});
