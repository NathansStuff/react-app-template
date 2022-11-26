import { IRadioGroup } from './RadioGroup';

export const mockRadioGroupProps: IRadioGroup = {
  title: 'DO YOU SHARE THE HOUSEHOLD EXPENSES?',
  options: [
    {
      label: 'Yes, I Share The Household Expenses',
      value: true,
      id: 'shareHouseholdExpensesYes',
    },
    {
      label: 'No, I Pay For All The Household Expenses',
      value: false,
      id: 'shareHouseholdExpensesNo',
    },
  ],
  showErrors: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onChange: (value) => {},
};
