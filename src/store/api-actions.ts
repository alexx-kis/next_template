import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkType } from './store-types';

// %======================== api-actions ========================% //

export const doAsyncAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkType
>('domain/doAsyncAction', async (_arg, { extra: api }) => {
  const { data } = await api.get('APIRoute.SomeAddress');
  return data;
});
