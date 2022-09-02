import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice";
import ControlSlice from "./ControlSlice";

export const store = configureStore({
  reducer: {
    notes: NotesSlice,
    control: ControlSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
