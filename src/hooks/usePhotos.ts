import {useEffect, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../redux/store';
import {setPhotos, updatePhotos} from '../redux/slices/photoSlice';

export const usePhotos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos.photos);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPhotos = async (pageNumber = 1, shouldReset = false) => {
    if (shouldReset) {
      setIsRefreshing(true);
    } else {
      setIsLoadingMore(true);
    }

    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=20`,
      );
      const data = await response.json();

      if (shouldReset) {
        dispatch(setPhotos(data));
        setIsRefreshing(false);
      } else {
        dispatch(updatePhotos(data));
        setIsLoadingMore(false);
      }
    } catch (error) {
      console.error('Failed to fetch photos', error);
      setIsRefreshing(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPhotos(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const refreshPhotos = useCallback(() => {
    setPage(1);
    fetchPhotos(1, true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMorePhotos = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  return {photos, refreshPhotos, loadMorePhotos, isRefreshing, isLoadingMore};
};
