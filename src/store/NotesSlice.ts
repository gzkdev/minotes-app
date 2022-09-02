import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const NotesSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    addNote: function () {},
    deleteNote: function () {},
    addNoteToTrash: function () {},
    addNoteToFavorite: function () {},
  },
});

export const { addNote, deleteNote, addNoteToTrash, addNoteToFavorite } =
  NotesSlice.actions;
export default NotesSlice.reducer;
