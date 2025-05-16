import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NameSpace, OpenElement } from '@/constants/const';

// %======================== openElementProcess.slice ========================% //

type OpenElementProcess = {
  openElement: OpenElement | null;
};

const initialState: OpenElementProcess = {
  openElement: null,
};

export const openElementProcess = createSlice({
  name: NameSpace.OpenElementProcess,
  initialState,
  reducers: {
    setOpenElement: (state, action: PayloadAction<OpenElement>) => {
      state.openElement = action.payload;
    },
    dropOpenElement: (state) => {
      state.openElement = null;
    },
  },
  selectors: {
    getOpenElement: (state) => state.openElement,
  }
});

export const { setOpenElement, dropOpenElement } = openElementProcess.actions;
export const { getOpenElement } = openElementProcess.selectors;