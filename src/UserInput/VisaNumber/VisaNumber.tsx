import { Input } from '@/components/Input';
import { selectVisaNumber, setVisaNumber } from '@/context/borrower';
import { useAppDispatch, useAppSelector } from '@/context/storeHooks';
import { getNumber } from '@/utils/valueFormat';

export interface IVisaNumber {
  baseId: string;
  showErrors: boolean;
}

export function VisaNumber({ baseId, showErrors }: IVisaNumber): JSX.Element {
  // ***** Redux *****
  const visanumber = useAppSelector(selectVisaNumber);
  const dispatch = useAppDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    // MAXIMUM
    const MAXIMUM = 999;
    if (value.toLocaleString().length > 3) return;
    const intValue = getNumber(value, MAXIMUM);
    if (intValue === visanumber) return;
    dispatch(setVisaNumber(intValue));
  }

  // ***** Render *****
  return (
    <div data-testid='VisaNumber'>
      <Input
        title='Visa Number'
        placeholder='Visa subclass'
        showErrors={showErrors}
        onChange={handleChange}
        id={`${baseId}-input-visanumber`}
        value={visanumber?.toLocaleString() ?? ''}
      />
    </div>
  );
}
