import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// %======================== store ========================% //

export const store = configureStore({ reducer });