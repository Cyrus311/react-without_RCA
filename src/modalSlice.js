import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalVisible: false },
  reducers: {
    toggle(state) {
      state.isModalVisible = !state.isModalVisible;
    }
  }
});

export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;
