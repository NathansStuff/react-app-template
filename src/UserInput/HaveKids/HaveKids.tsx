import { RadioGroup } from '@/components/RadioGroup';
import {
  selectHasChildren,
  setHasChildren,
  setNumberOfChildren,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { NumberOfKids } from '@/UserInput/NumberOfKids';
import { getBoolean } from '@/utils/valueFormat';

export interface IHaveKidsProps {
  baseId: string;
  showErrors: boolean;
}

export function HaveKids({ baseId, showErrors }: IHaveKidsProps): JSX.Element {
  // ***** Redux *****
  const hasChildren = useAppSelector(selectHasChildren);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    const booleanValue = getBoolean(value);
    dispatch(setHasChildren(booleanValue));
    if (!booleanValue) dispatch(setNumberOfChildren(null));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Yes',
      value: true,
      id: `${baseId}-button-hasChildren-yes`,
    },
    {
      label: 'No',
      value: false,
      id: `${baseId}-button-hasChildren-no`,
    },
  ];
  return (
    <div data-testid='haveKids'>
      <RadioGroup
        title='do you have kids?'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={hasChildren}
      />
      {hasChildren && <NumberOfKids baseId={baseId} showErrors={showErrors} />}
    </div>
  );
}
