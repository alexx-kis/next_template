import { createReducer } from '@reduxjs/toolkit';

// %======================== reducer ========================% //

type InitialState = {
  // field: boolean;
};

const initialState: InitialState = {
  // field: true,
};

export const reducer = createReducer(initialState, (builder) => {
  // builder
  //   .addCase(doSomethingAction, (state, action) => {
  //     state.field = false;
  //   });
});