import { AppDispatch, AppState } from '@/types/redux-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// %======================== api-actions ========================% //

type AsyncThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

export const doAsyncAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkType
>('domain/doAsyncAction', async (_arg, { extra: api }) => {
  const { data } = await api.get('APIRoute.SomeAddress');
  return data;
});
