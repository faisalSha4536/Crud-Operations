import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "./slices/userDetailSlice";

 export const store = configureStore({
    reducer:{
        app: userDetailSlice
    }
})