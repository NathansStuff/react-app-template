import { RootState } from '@/context/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { EGender } from './borrowerSliceTypes';

// Define a type for the slice state
interface BorrowerSlice {
  // eslint-disable-next-line no-undef
  gender: EGender | null;
}

// Define the initial state using that type
const initialState: BorrowerSlice = {
  gender: null,
};

export const borrowerSlice = createSlice({
  name: 'borrower',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<EGender>) => {
      state.gender = action.payload;
    },
  },
});

export const { setGender } = borrowerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGender = (state: RootState): EGender | null =>
  state.borrowerReducer.gender;

const borrowerReducer = borrowerSlice.reducer;
export { borrowerReducer };
