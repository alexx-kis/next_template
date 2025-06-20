import { store } from '@/store/store';
import { AxiosInstance } from 'axios';

// %======================== redux types ========================% //

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Process = {
  field: string;
};

export type AsyncThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

// %------------------------ processes ------------------------% //
export type OpenElementsProcess = {
  openElements: (string | null)[];
};