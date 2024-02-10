import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "finalScore",
  initialState: {
    value: 0,
  },
  reducers: {
    addScore: (state, action) => {
      state.value = state.value + action.payload;
    },
    resetScore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addScore,resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
