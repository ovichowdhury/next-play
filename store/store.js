import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { loginSlice } from './slices/login';


export const store = configureStore({
    reducer: {
        login: loginReducer
    }
})