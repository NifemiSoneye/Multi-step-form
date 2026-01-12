import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import navigationReducer from "./navigationSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
