import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'CounterSlices',
  initialState,
  reducers: {
    setIncrement: (state, action) => {
      state.count += 1;
    },
    setDecrement: (state, action) => {
      state.count -= 1;
    },
    setCount: (state, action) => {
      state.count += action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;
export const { setDecrement, setCount, setIncrement } = counterSlice.actions;

export default counterReducer;


