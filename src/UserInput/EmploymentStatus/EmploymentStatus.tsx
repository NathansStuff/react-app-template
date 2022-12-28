import { RadioGroup } from '@/components/RadioGroup';
import {
  EEmploymentStatus,
  selectEmploymentStatus,
  setEmploymentStatus,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';

export interface IEmploymentStatus {
  baseId: string;
  showErrors: boolean;
}

export function EmploymentStatus({
  baseId,
  showErrors,
}: IEmploymentStatus): JSX.Element {
  // ***** Redux *****
  const employmentStatus = useAppSelector(selectEmploymentStatus);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    dispatch(setEmploymentStatus(value as EEmploymentStatus));
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
    <div data-testid='EmploymentStatus'>
      <RadioGroup
        title='employment status'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={employmentStatus}
      />
    </div>
  );
}
