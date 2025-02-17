import { configureStore } from "@reduxjs/toolkit";
import { adminSlice, authSlice } from "./feature";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice
    }
})

export type CineHubDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const CineHubUseSelector = useSelector.withTypes<RootState>();

export default store;