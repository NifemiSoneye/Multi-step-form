import { createSlice} from "@reduxjs/toolkit";

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
      state[field as keyof FormDataType] = value;
    },
    setPlan: (state, action) => {
      const { name, price, billing } = action.payload;
      state.plan.name = name;
      state.plan.price = price;
      state.plan.billing = billing;
    },
    toggleAddOn: (state, action) => {
      const isMonthly = state.plan.billing === "Monthly";
      const addOnName = action.payload as
        | "onlineService"
        | "largerStorage"
        | "customizableProfile";
      state.addOns[addOnName] = !state.addOns[addOnName];

      if (addOnName === "onlineService") {
        state.addOns.price.onlineServicePrice = state.addOns.onlineService
          ? isMonthly
            ? 1
            : 10
          : 0;
      } else if (addOnName === "largerStorage") {
        state.addOns.price.largerStoragePrice = state.addOns.largerStorage
          ? isMonthly
            ? 2
            : 20
          : 0;
      } else if (addOnName === "customizableProfile") {
        state.addOns.price.customizableProfilePrice = state.addOns
          .customizableProfile
          ? isMonthly
            ? 2
            : 20
          : 0;
      }
      state.addOns.price.total =
        state.plan.price +
        state.addOns.price.onlineServicePrice +
        state.addOns.price.largerStoragePrice +
        state.addOns.price.customizableProfilePrice;
    },
    recalculateAddOnPrices: (state) => {
      const isMonthly = state.plan.billing === "Monthly";

      state.addOns.price.onlineServicePrice = state.addOns.onlineService
        ? isMonthly
          ? 1
          : 10
        : 0;

      state.addOns.price.largerStoragePrice = state.addOns.largerStorage
        ? isMonthly
          ? 2
          : 20
        : 0;

      state.addOns.price.customizableProfilePrice = state.addOns
        .customizableProfile
        ? isMonthly
          ? 2
          : 20
        : 0;
      state.addOns.price.total =
        state.plan.price +
        state.addOns.price.onlineServicePrice +
        state.addOns.price.largerStoragePrice +
        state.addOns.price.customizableProfilePrice;
    },
  },
});

export const { setPersonalInfo, setPlan, toggleAddOn, recalculateAddOnPrices } =
  formSlice.actions;

// Export reducer
export default formSlice.reducer;
