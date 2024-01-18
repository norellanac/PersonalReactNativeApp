// reducers/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../stores/store';

interface UserState {
  user: {
    email: string;
    id: number;
    name: string;
  } | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
    },
    logoutUser: () => initialState,
    setAuthenticated(state, value: PayloadAction<boolean>) {
      state.isAuthenticated = value.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
export const { loginUser, logoutUser, setAuthenticated } = userSlice.actions;

export default userSlice.reducer;
