import { AppDispatch, AppState } from '@/types/redux-types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// %======================== redux hooks ========================% //

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;