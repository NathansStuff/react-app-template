import { RadioGroup } from '@/components/RadioGroup';
import { EGender, selectGender, setGender } from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';

export interface IGenderProps {
  baseId: string;
  showErrors: boolean;
}

export function Gender({ baseId, showErrors }: IGenderProps): JSX.Element {
  // ***** Redux *****
  const gender = useAppSelector(selectGender);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    dispatch(setGender(value as EGender));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Male',
      value: EGender.MALE,
      id: `${baseId}-button-gender-male`,
    },
    {
      label: 'Female',
      value: EGender.FEMALE,
      id: `${baseId}-button-gender-female`,
    },
  ];
  return (
    <div data-testid='gender'>
      <RadioGroup
        title='gender'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={gender}
      />
    </div>
  );
}
