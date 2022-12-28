import { useSelector } from 'react-redux';

import { RadioGroup } from '@/components/RadioGroup';
import {
  EEmploymentStatus,
  IEmploymentByIndex,
  selectEmploymentStatusByIndex,
  setEmploymentStatusByIndex,
} from '@/context/borrower';
import { RootState } from '@/context/store';
import { useAppDispatch } from '@/context/storeHooks';

import { CasualLength } from '../CasualLength';

export interface IEmploymentStatus {
  baseId: string;
  showErrors: boolean;
}

export function EmploymentStatus({
  baseId,
  showErrors,
}: IEmploymentStatus): JSX.Element {
  // ***** Redux *****
  const employment = useSelector((state: RootState) =>
    selectEmploymentStatusByIndex(state, 0)
  );
  const employmentStatus = employment?.status;
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    const dispatchObjext: IEmploymentByIndex = {
      index: 0,
      employment: {
        ...employment,
        status: value as EEmploymentStatus,
      },
    };
    dispatch(setEmploymentStatusByIndex(dispatchObjext));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Permanent',
      value: EEmploymentStatus.PERMANENT,
      id: `${baseId}-button-employmentStatus-permanent`,
    },
    {
      label: 'Casual',
      value: EEmploymentStatus.CASUAL,
      id: `${baseId}-button-employmentStatus-casual`,
    },
    {
      label: 'Other',
      value: EEmploymentStatus.OTHER,
      id: `${baseId}-button-employmentStatus-other`,
    },
  ];
  return (
    <>
      <div data-testid='EmploymentStatus'>
        <RadioGroup
          title='employment status'
          showErrors={showErrors}
          onChange={handleChange}
          options={options}
          value={employmentStatus}
        />
      </div>
      {employmentStatus === EEmploymentStatus.CASUAL && (
        <CasualLength baseId={baseId} showErrors={showErrors} />
      )}
    </>
  );
}
