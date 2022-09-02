import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice";

export const store = configureStore({
  reducer: {
    notes: NotesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
