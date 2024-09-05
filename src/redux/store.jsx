import { configureStore } from "@reduxjs/toolkit";
import { romzzApi } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
      [romzzApi.reducerPath]: romzzApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(romzzApi.middleware),
  })