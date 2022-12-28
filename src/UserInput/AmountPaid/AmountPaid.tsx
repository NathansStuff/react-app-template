import { Input } from '@/components/Input';
import { selectPaidAmount, setPaidAmount } from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { getNumber } from '@/utils/valueFormat';

export interface IAmountPaid {
  baseId: string;
  showErrors: boolean;
}

export function AmountPaid({ baseId, showErrors }: IAmountPaid): JSX.Element {
  // ***** Redux *****
  const amountPaid = useAppSelector(selectPaidAmount);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    // MAXIMUM
    const MAXIMUM = 99999;
    const intValue = getNumber(value, MAXIMUM);
    if (intValue === amountPaid) return;
    dispatch(setPaidAmount(intValue));
  }

  // ***** Render *****
  return (
    <div data-testid='AmountPaid'>
      <Input
        title='Amount Paid'
        placeholder='Monthly income from all of your jobs'
        showErrors={showErrors}
        onChange={handleChange}
        id={`${baseId}-input-amountPaid`}
        value={amountPaid?.toLocaleString() ?? ''}
      />
    </div>
  );
}
