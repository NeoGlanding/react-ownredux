import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const functionalCounterState = createSlice({
    name: 'Functional Counter State',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    }
});

export const functionalCounterStateAction = functionalCounterState.actions;

export default functionalCounterState.reducer;