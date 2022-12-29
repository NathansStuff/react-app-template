import { RadioGroup } from '@/components/RadioGroup';
import {
  EFrequency,
  selectPaidFrequency,
  setPaidFrequency,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';

export interface IPayBillsFrequency {
  baseId: string;
  showErrors: boolean;
}

export function PayBillsFrequency({
  baseId,
  showErrors,
}: IPayBillsFrequency): JSX.Element {
  // ***** Redux *****
  const paidFrequency = useAppSelector(selectPaidFrequency);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    dispatch(setPaidFrequency(value as EFrequency));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Monthly',
      value: EFrequency.MONTHLY,
      id: `${baseId}-button-paidFrequency-monthly`,
    },
    {
      label: 'Fortnightly',
      value: EFrequency.FORTNIGHTLY,
      id: `${baseId}-button-paidFrequency-fornightly`,
    },
    {
      label: 'Weekly',
      value: EFrequency.WEEKLY,
      id: `${baseId}-button-paidFrequency-weekly`,
    },
  ];
  return (
    <div data-testid='PaidFrequency'>
      <RadioGroup
        title='I Get Paid'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={paidFrequency}
      />
    </div>
  );
}
