import { NameSpace } from '@/constants/const';
import { combineReducers } from '@reduxjs/toolkit';
import { openElementProcess } from './open-element-process';
import { process } from './process';

// %======================== rootReducer ========================% //

export const rootReducer = combineReducers({
  [NameSpace.Process]: process.reducer,
  [NameSpace.OPEN_ELEMENTS]: openElementProcess.reducer,
});