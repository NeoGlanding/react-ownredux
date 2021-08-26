import { configureStore } from "@reduxjs/toolkit";
import { functionalCounterState } from "./functionalCounter";

const store = configureStore({
    reducer: functionalCounterState.reducer
});

export default store;