import { RootState } from '@/context/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { EDisplays } from './displayTypes';

// Define a type for the slice state
interface CounterState {
  // eslint-disable-next-line no-undef
  display: EDisplays;
}

// Define the initial state using that type
const initialState: CounterState = {
  display: EDisplays.INCOME,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setDisplay: (state, action: PayloadAction<EDisplays>) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = displaySlice.actions;

export const selectDisplay = (state: RootState): EDisplays =>
  state.displayReducer.display;

const displayReducer = displaySlice.reducer;
export { displayReducer };
