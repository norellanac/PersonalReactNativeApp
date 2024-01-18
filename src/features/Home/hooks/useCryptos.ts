import { setCryptos } from './../../../redux/slices/cryptoSlice';
import { useAppDispatch } from './../../../hooks/useAppDispatch';
import { useGetAllCrypstosQuery } from '../../../services/cryptoApi';

const useCryptos = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetAllCrypstosQuery();
  dispatch(setCryptos(data?.data));
  console.log(
    'fetching data',
    '=== useCryptos.useGetAllCrypstosQuery - ',
    data,
  );
  return { data, error, isLoading };
};
export default useCryptos;
