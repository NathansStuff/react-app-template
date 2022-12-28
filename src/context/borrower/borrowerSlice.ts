import { RootState } from '@/context/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  EAddressOwnershipType,
  EGender,
  EResidencyStatus,
} from './borrowerSliceTypes';

export interface IAddress {
  ownershipType: EAddressOwnershipType | null;
}

// Define a type for the slice state
interface BorrowerSlice {
  gender: EGender | null;
  address: [IAddress];
  residencyStatus: EResidencyStatus | null;
  visaNumber: number | null;
  hasChildren: boolean | null;
  numberOfChildren: number | null;
}

// Define the initial state using that type
export const initialBorrowerState: BorrowerSlice = {
  gender: null,
  address: [{ ownershipType: null }],
  residencyStatus: null,
  visaNumber: null,
  hasChildren: null,
  numberOfChildren: null,
};

export const borrowerSlice = createSlice({
  name: 'borrower',
  initialState: initialBorrowerState,
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
    setResidencyStatus: (state, action: PayloadAction<EResidencyStatus>) => {
      state.residencyStatus = action.payload;
    },
    setVisaNumber: (state, action: PayloadAction<number | null>) => {
      state.visaNumber = action.payload;
    },
    setHasChildren: (state, action: PayloadAction<boolean>) => {
      state.hasChildren = action.payload;
    },
    setNumberOfChildren: (state, action: PayloadAction<number>) => {
      state.numberOfChildren = action.payload;
    },
  },
});

export const { setGender } = borrowerSlice.actions;
export const { setAddressByIndex } = borrowerSlice.actions;
export const { setResidencyStatus } = borrowerSlice.actions;
export const { setVisaNumber } = borrowerSlice.actions;
export const { setHasChildren } = borrowerSlice.actions;
export const { setNumberOfChildren } = borrowerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGender = (state: RootState): EGender | null =>
  state.borrowerReducer.gender;
export const selectAddressByIndex = (
  state: RootState,
  index: number
): IAddress => state.borrowerReducer.address[index];
export const selectResidencyStatus = (
  state: RootState
): EResidencyStatus | null => state.borrowerReducer.residencyStatus;
export const selectVisaNumber = (state: RootState): number | null =>
  state.borrowerReducer.visaNumber;
export const selectHasChildren = (state: RootState): boolean | null =>
  state.borrowerReducer.hasChildren;
export const selectNumberOfChildren = (state: RootState): number | null =>
  state.borrowerReducer.numberOfChildren;

const borrowerReducer = borrowerSlice.reducer;
export { borrowerReducer };
