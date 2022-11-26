import { RootState } from '@/context/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { EAddressOwnershipType, EGender } from './borrowerSliceTypes';

export interface IAddress {
  ownershipType: EAddressOwnershipType | null;
}

// Define a type for the slice state
interface BorrowerSlice {
  gender: EGender | null;
  address: [IAddress];
}

// Define the initial state using that type
const initialState: BorrowerSlice = {
  gender: null,
  address: [{ ownershipType: null }],
};

export const borrowerSlice = createSlice({
  name: 'borrower',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<EGender>) => {
      state.gender = action.payload;
    },
    setAddressByIndex: (
      state,
      action: PayloadAction<{ index: number; address: IAddress }>
    ) => {
      state.address[action.payload.index] = action.payload.address;
    },
  },
});

export const { setGender } = borrowerSlice.actions;
export const { setAddressByIndex } = borrowerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGender = (state: RootState): EGender | null =>
  state.borrowerReducer.gender;
export const selectAddressByIndex = (
  state: RootState,
  index: number
): IAddress => state.borrowerReducer.address[index];

const borrowerReducer = borrowerSlice.reducer;
export { borrowerReducer };
