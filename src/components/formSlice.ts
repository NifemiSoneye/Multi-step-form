import { createSlice, createSelector } from "@reduxjs/toolkit";

type AddOnsType = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  price: {
    onlineServicePrice: number;
    largerStoragePrice: number;
    customizableProfilePrice: number;
    total: number;
  };
};
type FormDataType = {
  Name: string;
  Email: string;
  Phone: string;
  plan: {
    name: string;
    price: number;
    billing: string;
  };
  addOns: AddOnsType;
};

const initialState: FormDataType = {
  Name: "",
  Email: "",
  Phone: "",
  plan: {
    name: "",
    price: 0,
    billing: "Monthly", // or "yearly"
  },
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
    price: {
      onlineServicePrice: 0,
      largerStoragePrice: 0,
      customizableProfilePrice: 0,
      total: 0,
    },
  },
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setPlan: (state , action) =>
  },
});

export const { setPersonalInfo } = formSlice.actions;

// Export reducer
export default formSlice.reducer;
