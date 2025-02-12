import { NameSpace } from '@/constants/const';
import { combineReducers } from '@reduxjs/toolkit';
import { process } from './process';

// %======================== rootReducer ========================% //

export const rootReducer = combineReducers({
  [NameSpace.Process]: process.reducer,
});