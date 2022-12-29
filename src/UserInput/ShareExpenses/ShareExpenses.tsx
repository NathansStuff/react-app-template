import { RadioGroup } from '@/components/RadioGroup';
import { selectExpensesShared, setExpensesShared } from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { getBoolean } from '@/utils/valueFormat';

export interface IShareExpenses {
  baseId: string;
  showErrors: boolean;
}

export function ShareExpenses({
  baseId,
  showErrors,
}: IShareExpenses): JSX.Element {
  // ***** Redux *****
  const shareExpenses = useAppSelector(selectExpensesShared);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    const booleanValue = getBoolean(value);
    dispatch(setExpensesShared(booleanValue));
    if (!booleanValue) dispatch(setExpensesShared(null));
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
        title='do you share household expenses?'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={shareExpenses}
      />
    </div>
  );
}
