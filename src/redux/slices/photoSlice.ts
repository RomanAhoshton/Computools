import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Photos} from '../../types';

export interface PhotosState {
  photos: Photos[];
}

const initialState: PhotosState = {
  photos: [],
};

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photos[]>) => {
      state.photos = action.payload;
    },
  },
});

export const {setPhotos} = photoSlice.actions;

export default photoSlice.reducer;
