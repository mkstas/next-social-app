import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import colorSchemeReducer from './slices/src/colorShemeSlice';
import { api } from './queries/api';

export const store = configureStore({
  reducer: {
    colorScheme: colorSchemeReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();
