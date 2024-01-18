import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../stores/store';
export interface Crypto {
  id: string | number;
  name: string;
  symbol: string;
  price_usd: string;
}

interface CryptoState {
  cryptos?: Crypto[];
}

const initialState: CryptoState = {
  cryptos: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    // ? Logout the user by returning the initial state
    clear: () => initialState,
    // Save the info
    setCryptos: (state, action: PayloadAction<Crypto[]>) => {
      state.cryptos = action.payload;
    },
  },
});

export const selectCryptos = (state: RootState) => state.cryptos.cryptos;
export const { clear, setCryptos } = cryptoSlice.actions;
// ? Export the productSlice.reducer to be included in the store.
export default cryptoSlice.reducer;
