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

export enum EEmploymentStatus {
  PERMANENT = 'PERMANENT',
  CASUAL = 'CASUAL',
  OTHER = 'OTHER',
}

export enum EFrequency {
  WEEKLY = 'WEEKLY',
  FORTNIGHTLY = 'FORTNIGHTLY',
  MONTHLY = 'MONTHLY',
}

export enum EOtherIncomeSource {
  RENTAL_OR_INVESMENT = 'RENTAL_OR_INVESMENT',
  GOVERNMENT_BENEFITS = 'GOVERNMENT_BENEFITS',
  OTHER = 'OTHER',
}

// Define a type for the slice state
interface BorrowerSlice {
  gender: EGender | null;
  address: [IAddress];
  residencyStatus: EResidencyStatus | null;
  visaNumber: number | null;
  hasChildren: boolean | null;
  numberOfChildren: number | null;
  employmentStatus: EEmploymentStatus | null;
  paidFrequency: EFrequency | null;
  paidAmount: number | null;
  otherIncome: number | null;
  otherIncomeSource: EOtherIncomeSource | null;
}

// Define the initial state using that type
export const initialBorrowerState: BorrowerSlice = {
  gender: null,
  address: [{ ownershipType: null }],
  residencyStatus: null,
  visaNumber: null,
  hasChildren: null,
  numberOfChildren: null,
  employmentStatus: null,
  paidFrequency: null,
  paidAmount: null,
  otherIncome: null,
  otherIncomeSource: null,
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
    setNumberOfChildren: (state, action: PayloadAction<number | null>) => {
      state.numberOfChildren = action.payload;
    },
    setEmploymentStatus: (
      state,
      action: PayloadAction<EEmploymentStatus | null>
    ) => {
      state.employmentStatus = action.payload;
    },
    setPaidFrequency: (state, action: PayloadAction<EFrequency | null>) => {
      state.paidFrequency = action.payload;
    },
    setPaidAmount: (state, action: PayloadAction<number | null>) => {
      state.paidAmount = action.payload;
    },
    setOtherIncome: (state, action: PayloadAction<number | null>) => {
      state.otherIncome = action.payload;
    },
    setOtherIncomeSource: (
      state,
      action: PayloadAction<EOtherIncomeSource | null>
    ) => {
      state.otherIncomeSource = action.payload;
    },
  },
});

export const { setGender } = borrowerSlice.actions;
export const { setAddressByIndex } = borrowerSlice.actions;
export const { setResidencyStatus } = borrowerSlice.actions;
export const { setVisaNumber } = borrowerSlice.actions;
export const { setHasChildren } = borrowerSlice.actions;
export const { setNumberOfChildren } = borrowerSlice.actions;
export const { setEmploymentStatus } = borrowerSlice.actions;
export const { setPaidFrequency } = borrowerSlice.actions;
export const { setPaidAmount } = borrowerSlice.actions;
export const { setOtherIncome } = borrowerSlice.actions;
export const { setOtherIncomeSource } = borrowerSlice.actions;

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
export const selectEmploymentStatus = (
  state: RootState
): EEmploymentStatus | null => state.borrowerReducer.employmentStatus;
export const selectPaidFrequency = (state: RootState): EFrequency | null =>
  state.borrowerReducer.paidFrequency;
export const selectPaidAmount = (state: RootState): number | null =>
  state.borrowerReducer.paidAmount;
export const selectOtherIncome = (state: RootState): number | null =>
  state.borrowerReducer.otherIncome;
export const selectOtherIncomeSource = (
  state: RootState
): EOtherIncomeSource | null => state.borrowerReducer.otherIncomeSource;

const borrowerReducer = borrowerSlice.reducer;
export { borrowerReducer };
