import { Input } from '@/components/Input';
import {
  selectNumberOfChildren,
  setNumberOfChildren,
} from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { getNumber } from '@/utils/valueFormat';

export interface INumberOfKidsProps {
  baseId: string;
  showErrors: boolean;
}

export function NumberOfKids({
  baseId,
  showErrors,
}: INumberOfKidsProps): JSX.Element {
  // ***** Redux *****
  const numberOfChildren = useAppSelector(selectNumberOfChildren);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    // MAXIMUM
    const MAXIMUM = 9;
    const intValue = getNumber(value, MAXIMUM);
    if (intValue === numberOfChildren) return;
    dispatch(setNumberOfChildren(intValue));
  }

  // ***** Render *****
  return (
    <div data-testid='numberOfKids'>
      <Input
        title='gender'
        placeholder='The number of children living at home with you'
        showErrors={showErrors}
        onChange={handleChange}
        id={`${baseId}-input-numberOfKids`}
        value={numberOfChildren?.toLocaleString() ?? ''}
      />
    </div>
  );
}
