import { NameSpace } from '@/constants/const';
import { Process } from '@/types/redux-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { doAsyncAction } from './api-actions';

// %======================== process.slice ========================% //

const initialState: Process = {
  field: 'true',
};

export const process = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {
    doSomethingAction: (state, action: PayloadAction<string>) => {
      state.field = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(doAsyncAction.pending, (state) => {
  //       // do something
  //     })
  //     .addCase(doAsyncAction.fulfilled, (state, action) => {
  //       // do something
  //     })
  //     .addCase(doAsyncAction.rejected, (state) => {
  //       // do something

  //     });
  // },
  selectors: {
    getField: (state) => state.field,
  }
});


export const { doSomethingAction, } = process.actions;
export const { getField } = process.selectors;