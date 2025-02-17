import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./feature";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export type CineHubDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const CineHubUseSelector = useSelector.withTypes<RootState>();

export default store;