import { createSlice } from "@reduxjs/toolkit";

interface ControlSliceInterface {
  control: "NOTES" | "TO-DO";
}

const initialState: ControlSliceInterface = {
  control: "NOTES",
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    toggleControl: function (state) {
      if (state.control === "NOTES") {
        state.control = "TO-DO";
        return;
      }
      state.control = "NOTES";
    },
  },
});

export const { toggleControl } = controlSlice.actions;
export default controlSlice.reducer;
