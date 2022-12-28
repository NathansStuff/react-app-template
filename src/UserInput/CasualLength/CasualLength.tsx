import { useSelector } from 'react-redux';

import { Input } from '@/components/Input';
import {
  IEmploymentByIndex,
  selectEmploymentStatusByIndex,
  setEmploymentStatusByIndex,
} from '@/context/borrower';
import { RootState } from '@/context/store';
import { useAppDispatch } from '@/context/storeHooks';
import { getNumber } from '@/utils/valueFormat';

export interface ICasualLength {
  baseId: string;
  showErrors: boolean;
}

export function CasualLength({
  baseId,
  showErrors,
}: ICasualLength): JSX.Element {
  // ***** Redux *****
  const employment = useSelector((state: RootState) =>
    selectEmploymentStatusByIndex(state, 0)
  );
  const employmentYears = employment?.years;
  const employmentMonths = employment?.months;
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleYearChange(value: string | boolean): void {
    // MAXIMUM
    const MAXIMUM = 99;
    const intValue = getNumber(value, MAXIMUM);
    if (intValue === employmentYears) return;

    const dispatchObjext: IEmploymentByIndex = {
      index: 0,
      employment: {
        ...employment,
        years: intValue,
      },
    };
    dispatch(setEmploymentStatusByIndex(dispatchObjext));
  }
  function handleMonthChange(value: string | boolean): void {
    // MAXIMUM
    const MAXIMUM = 12;
    const intValue = getNumber(value, MAXIMUM);
    if (intValue === employmentMonths) return;

    const dispatchObjext: IEmploymentByIndex = {
      index: 0,
      employment: {
        ...employment,
        months: intValue,
      },
    };
    dispatch(setEmploymentStatusByIndex(dispatchObjext));
  }

  // ***** Render *****
  return (
    <div data-testid='casualLength' className='flex space-x-5'>
      <Input
        title='Years'
        placeholder='Years'
        showErrors={showErrors}
        onChange={handleYearChange}
        id={`${baseId}-input-casualLength-years`}
        value={employmentYears?.toLocaleString() ?? ''}
      />
      <Input
        title='Months'
        placeholder='Months'
        showErrors={showErrors}
        onChange={handleMonthChange}
        id={`${baseId}-input-casualLength-months`}
        value={employmentMonths?.toLocaleString() ?? ''}
      />
    </div>
  );
}
