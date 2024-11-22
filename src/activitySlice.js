import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  circles: [
    { label: "Online Shopping", amount: "Rs. 3,200", color: "green" },
    { label: "Taxi", amount: "Rs. 1,200", color: "white" },
    { label: "Food", amount: "Rs. 2,000", color: "gray" },
  ],
  progress: [
    { label: "This Month", color: "green", percentage: 60 },
    { label: "This Month", color: "gray", percentage: 50 },
  ],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    updateCircle(state, action) {
      const { index, data } = action.payload;
      state.circles[index] = { ...state.circles[index], ...data };
    },
    updateProgress(state, action) {
      const { index, data } = action.payload;
      state.progress[index] = { ...state.progress[index], ...data };
    },
  },
});

export const { updateCircle, updateProgress } = activitySlice.actions;
export default activitySlice.reducer;
