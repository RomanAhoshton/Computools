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

    updatePhotos: (state, action: PayloadAction<Photos[]>) => {
      const newPhotos = action.payload.filter(
        newPhoto => !state.photos.some(photo => photo.id === newPhoto.id),
      );
      state.photos = [...state.photos, ...newPhotos];
    },
  },
});

export const {setPhotos, updatePhotos} = photoSlice.actions;

export default photoSlice.reducer;
