import {configureStore} from '@reduxjs/toolkit';
import photoSlice from './slices/photoSlice';

export const store = configureStore({
  reducer: {
    photos: photoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
