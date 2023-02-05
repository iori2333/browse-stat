import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveRecord {
  id: number;
  url: string;
  created: number;
}

interface TabState {
  current: ActiveRecord | null;
}

const initialState: TabState = {
  current: null
};

export const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCurrent: (
      state,
      action: PayloadAction<{
        id: number;
        url: string;
      }>
    ) => {
      state.current = { ...action.payload, created: Date.now() };
    }
  }
});

export const { setCurrent } = tabSlice.actions;

export default tabSlice.reducer;
