//1. Import configureStore and slice 
import { configureStore } from "@reduxjs/toolkit";
import bgReducer from "./bgSlice";
import { createWrapper } from "next-redux-wrapper";

//2. Create a store using configureStore
export const store = configureStore({
    reducer: bgReducer
})