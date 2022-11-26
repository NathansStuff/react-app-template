import { RadioGroup } from '@/components/RadioGroup';
import {
  EResidencyStatus,
  selectResidencyStatus,
  setResidencyStatus,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';

export interface IResidencyStatus {
  baseId: string;
  showErrors: boolean;
}

export function ResidencyStatus({
  baseId,
  showErrors,
}: IResidencyStatus): JSX.Element {
  // ***** Redux *****
  const residencyStatus = useAppSelector(selectResidencyStatus);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    dispatch(setResidencyStatus(value as EResidencyStatus));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Citizen',
      value: EResidencyStatus.AUSTRALIAN_CITIZEN,
      id: `${baseId}-button-residencyStatus-citizen`,
    },
    {
      label: 'Permanent Resident',
      value: EResidencyStatus.PERMANENT_RESIDENT,
      id: `${baseId}-button-residencyStatus-permanentResident`,
    },
    {
      label: 'Visa',
      value: EResidencyStatus.VISA_HOLDER,
      id: `${baseId}-button-residencyStatus-visaHolder`,
    },
  ];
  return (
    <div data-testid='residencyStatus'>
      <RadioGroup
        title='residency status'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={residencyStatus}
      />
    </div>
  );
}
