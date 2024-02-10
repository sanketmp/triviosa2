import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./slices/scoreSlice";
import quizReducer from "./slices/quizSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    quiz: quizReducer,
  },
});
