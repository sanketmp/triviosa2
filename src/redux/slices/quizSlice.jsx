import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk("fetchQues", async () => {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
  );
  return res.json();
});

const quizSlice = createSlice({
  name: "fetchQuestions",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default quizSlice.reducer;
