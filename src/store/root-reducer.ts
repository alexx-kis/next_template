import { NameSpace } from '@/constants/const';
import { combineReducers } from '@reduxjs/toolkit';
import { openElementProcess } from './processes/open-element.process';

// %======================== rootReducer ========================% //

export const rootReducer = combineReducers({
  [NameSpace.OPEN_ELEMENTS]: openElementProcess.reducer,
});