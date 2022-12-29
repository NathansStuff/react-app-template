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

interface IEmployment {
  status: EEmploymentStatus | null;
  years: number | null;
  months: number | null;
}

export interface IEmploymentByIndex {
  index: number;
  employment: IEmployment;
}

export interface IExpenses {
  expensesShared: boolean | null;
  billsPaidFrequency: EFrequency | null;
  general: number | null;
  transportVehicle: number | null;
  education: number | null;
  otherLoans: number | null;
  mortgageRent: number | null;
}

// Define a type for the slice state
interface BorrowerSlice {
  gender: EGender | null;
  address: IAddress[];
  residencyStatus: EResidencyStatus | null;
  visaNumber: number | null;
  hasChildren: boolean | null;
  numberOfChildren: number | null;
  paidFrequency: EFrequency | null;
  paidAmount: number | null;
  otherIncome: number | null;
  otherIncomeSource: EOtherIncomeSource | null;
  employments: IEmployment[];
  expenses: IExpenses;
}

// Define the initial state using that type
export const initialBorrowerState: BorrowerSlice = {
  gender: null,
  address: [{ ownershipType: null }],
  residencyStatus: null,
  visaNumber: null,
  hasChildren: null,
  numberOfChildren: null,
  paidFrequency: null,
  paidAmount: null,
  otherIncome: null,
  otherIncomeSource: null,
  employments: [],
  expenses: {
    expensesShared: null,
    billsPaidFrequency: null,
    general: null,
    transportVehicle: null,
    education: null,
    otherLoans: null,
    mortgageRent: null,
  },
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
    setEmploymentStatusByIndex: (
      state,
      action: PayloadAction<IEmploymentByIndex>
    ) => {
      state.employments[action.payload.index] = action.payload.employment;
    },
    // Expenses
    setExpenses: (state, action: PayloadAction<IExpenses>) => {
      state.expenses = action.payload;
    },
    setExpensesShared: (state, action: PayloadAction<boolean | null>) => {
      state.expenses.expensesShared = action.payload;
    },
    setBillsPaidFrequency: (
      state,
      action: PayloadAction<EFrequency | null>
    ) => {
      state.expenses.billsPaidFrequency = action.payload;
    },
    setGeneral: (state, action: PayloadAction<number | null>) => {
      state.expenses.general = action.payload;
    },
    setTransportVehicle: (state, action: PayloadAction<number | null>) => {
      state.expenses.transportVehicle = action.payload;
    },
    setEducation: (state, action: PayloadAction<number | null>) => {
      state.expenses.education = action.payload;
    },
    setOtherLoans: (state, action: PayloadAction<number | null>) => {
      state.expenses.otherLoans = action.payload;
    },
    setMortgageRent: (state, action: PayloadAction<number | null>) => {
      state.expenses.mortgageRent = action.payload;
    },
  },
});

export const { setGender } = borrowerSlice.actions;
export const { setAddressByIndex } = borrowerSlice.actions;
export const { setResidencyStatus } = borrowerSlice.actions;
export const { setVisaNumber } = borrowerSlice.actions;
export const { setHasChildren } = borrowerSlice.actions;
export const { setNumberOfChildren } = borrowerSlice.actions;
export const { setPaidFrequency } = borrowerSlice.actions;
export const { setPaidAmount } = borrowerSlice.actions;
export const { setOtherIncome } = borrowerSlice.actions;
export const { setOtherIncomeSource } = borrowerSlice.actions;
export const { setEmploymentStatusByIndex } = borrowerSlice.actions;
// Expenses
export const { setExpenses } = borrowerSlice.actions;
export const { setExpensesShared } = borrowerSlice.actions;
export const { setBillsPaidFrequency } = borrowerSlice.actions;
export const { setGeneral } = borrowerSlice.actions;
export const { setTransportVehicle } = borrowerSlice.actions;
export const { setEducation } = borrowerSlice.actions;
export const { setOtherLoans } = borrowerSlice.actions;
export const { setMortgageRent } = borrowerSlice.actions;

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
export const selectPaidFrequency = (state: RootState): EFrequency | null =>
  state.borrowerReducer.paidFrequency;
export const selectPaidAmount = (state: RootState): number | null =>
  state.borrowerReducer.paidAmount;
export const selectOtherIncome = (state: RootState): number | null =>
  state.borrowerReducer.otherIncome;
export const selectOtherIncomeSource = (
  state: RootState
): EOtherIncomeSource | null => state.borrowerReducer.otherIncomeSource;
export const selectEmploymentStatusByIndex = (
  state: RootState,
  index: number
): IEmployment => state.borrowerReducer.employments[index];
export const selectExpenses = (state: RootState): IExpenses =>

  // Expenses
  state.borrowerReducer.expenses;
export const selectExpensesShared = (state: RootState): boolean | null =>
  state.borrowerReducer.expenses.expensesShared;
export const selectBillsPaidFrequency = (state: RootState): EFrequency | null =>
  state.borrowerReducer.expenses.billsPaidFrequency;
export const selectGeneral = (state: RootState): number | null =>
  state.borrowerReducer.expenses.general;
export const selectTransportVehicle = (state: RootState): number | null =>
  state.borrowerReducer.expenses.transportVehicle;
export const selectEducation = (state: RootState): number | null =>
  state.borrowerReducer.expenses.education;
export const selectOtherLoans = (state: RootState): number | null =>
  state.borrowerReducer.expenses.otherLoans;
export const selectMortgageRent = (state: RootState): number | null =>
  state.borrowerReducer.expenses.mortgageRent;


const borrowerReducer = borrowerSlice.reducer;
export { borrowerReducer };
