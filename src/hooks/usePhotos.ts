import {useEffect} from 'react';
import type {RootState} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {setPhotos} from '../redux/slices/photoSlice';

export const usePhotos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos.photos);

  const fetchPhotos = async () => {
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();

    if (data) {
      dispatch(setPhotos(data));
    }
  };

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {photos};
};
