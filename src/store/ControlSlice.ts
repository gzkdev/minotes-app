import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type controlInterface = "NOTES" | "TO-DO";

interface ControlSliceInterface {
  control: controlInterface;
}

const initialState: ControlSliceInterface = {
  control: "NOTES",
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    toggleControl: function (state, action: PayloadAction<controlInterface>) {
      state.control = action.payload;
    },
  },
});

export const { toggleControl } = controlSlice.actions;
export default controlSlice.reducer;
