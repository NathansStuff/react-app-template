import { Input } from '@/components/Input';
import {
  selectOtherIncome,
  setOtherIncome,
  setOtherIncomeSource,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { getNumber } from '@/utils/valueFormat';

import { OtherIncomeSource } from '../OtherIncomeSource';

export interface IOtherIncome {
  baseId: string;
  showErrors: boolean;
}

export function OtherIncome({ baseId, showErrors }: IOtherIncome): JSX.Element {
  // ***** Redux *****
  const otherIncome = useAppSelector(selectOtherIncome);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    // MAXIMUM
    const MAXIMUM = 99999;
    const intValue = getNumber(value, MAXIMUM);
    if (intValue === otherIncome) return;
    dispatch(setOtherIncome(intValue));
    if (intValue !== 0) return;
    dispatch(setOtherIncomeSource(null));
  }

  // ***** Render *****
  return (
    <>
      <div data-testid='OtherIncome'>
        <Input
          title='Any other income'
          placeholder='Income not from your job'
          showErrors={showErrors}
          onChange={handleChange}
          id={`${baseId}-input-otherIncome`}
          value={otherIncome?.toLocaleString() ?? ''}
        />
      </div>
      {otherIncome !== null && otherIncome > 0 && (
        <OtherIncomeSource baseId={baseId} showErrors={showErrors} />
      )}
    </>
  );
}
