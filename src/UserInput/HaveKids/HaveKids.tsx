import { RadioGroup } from '@/components/RadioGroup';
import { selectHasChildren, setHasChildren } from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { getBoolean } from '@/utils/valueFormat';

export interface IHaveKidsProps {
  baseId: string;
  showErrors: boolean;
}

export function HaveKids({ baseId, showErrors }: IHaveKidsProps): JSX.Element {
  // ***** Redux *****
  // Not using the redux hooks (eg, useAppSelector) here because we need to use the index - extra args
  const hasChildren = useAppSelector(selectHasChildren);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    const booleanValue = getBoolean(value);
    dispatch(setHasChildren(booleanValue));
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
    </div>
  );
}
