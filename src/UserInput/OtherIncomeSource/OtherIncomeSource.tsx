import { RadioGroup } from '@/components/RadioGroup';
import {
  EOtherIncomeSource,
  selectOtherIncomeSource,
  setOtherIncomeSource,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';

export interface IOtherIncomeSource {
  baseId: string;
  showErrors: boolean;
}

export function OtherIncomeSource({
  baseId,
  showErrors,
}: IOtherIncomeSource): JSX.Element {
  // ***** Redux *****
  const otherIncomeSource = useAppSelector(selectOtherIncomeSource);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    dispatch(setOtherIncomeSource(value as EOtherIncomeSource));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Rental / Investment',
      value: EOtherIncomeSource.RENTAL_OR_INVESMENT,
      id: `${baseId}-button-otherIncomeSource-permanent`,
    },
    {
      label: 'Government Benefits',
      value: EOtherIncomeSource.GOVERNMENT_BENEFITS,
      id: `${baseId}-button-otherIncomeSource-casual`,
    },
    {
      label: 'Other',
      value: EOtherIncomeSource.OTHER,
      id: `${baseId}-button-otherIncomeSource-other`,
    },
  ];
  return (
    <div data-testid='OtherIncomeSource'>
      <RadioGroup
        title='Source of other income'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={otherIncomeSource}
      />
    </div>
  );
}
