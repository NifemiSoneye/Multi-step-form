import { createSlice } from "@reduxjs/toolkit";

type NavigationState = {
  pageNumber: number;
  isYearly: boolean;
};

const initialState: NavigationState = {
  pageNumber: 1,
  isYearly: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    previousPage: (state) => {
      state.pageNumber = state.pageNumber - 1;
    },
    goToPage: (state, action) => {
      state.pageNumber = action.payload;
    },
    toggleBillingCycle: (state) => {
      state.isYearly = !state.isYearly;
    },
  },
});

export const { nextPage, previousPage, goToPage, toggleBillingCycle } =
  navigationSlice.actions;

export default navigationSlice.reducer;
