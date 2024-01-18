import {
  loginUser,
  logoutUser,
  setAuthenticated,
} from '../../../redux/slices/userSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = async (email: string, name: string, id: number) => {
    try {
      dispatch(loginUser({ email, name, id }));
      dispatch(setAuthenticated(true));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    dispatch(setAuthenticated(false));
    dispatch(logoutUser());
  };

  return { login, logout };
};
