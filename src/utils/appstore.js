import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
 const appstore = configureStore({
    reducer: {
        userReducer: userReducer,
    },
 })

export default appstore;