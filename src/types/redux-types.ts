import { store } from '@/store';

// %======================== redux types ========================% //

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Process = {
  field: string;
};