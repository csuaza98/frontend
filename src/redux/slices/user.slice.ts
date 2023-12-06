import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  accessToken: string | null;
}

const initialState: UserState = {
  accessToken: null
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    }
  }
});

export const { setAccessToken } = userSlice.actions;

export default userSlice;
