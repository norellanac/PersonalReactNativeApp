import { useEffect } from 'react';
import { setCryptos } from './../../../redux/slices/cryptoSlice';
import { useAppDispatch } from './../../../hooks/useAppDispatch';
import { useGetAllCrypstosQuery } from '../../../services/cryptoApi';

const useCryptos = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetAllCrypstosQuery();

  useEffect(() => {
    // Dispatch the action only after the data has been fetched
    if (data) {
      dispatch(setCryptos(data.data));
    }
  }, [data, dispatch]);

  console.log('fetching data', '=== useCryptos.useGetAllCrypstosQuery', data);

  return { data, error, isLoading };
};

export default useCryptos;
