import { useDispatch, useSelector } from 'react-redux';

import { RadioGroup } from '@/components/RadioGroup';
import {
  EAddressOwnershipType,
  IAddress,
  selectAddressByIndex,
  setAddressByIndex,
} from '@/context/borrower';
import { RootState } from '@/context/store';

export interface ILivingStatusProps {
  baseId: string;
  showErrors: boolean;
}

export function LivingStatus({ baseId, showErrors }: ILivingStatusProps): JSX.Element {
  // ***** Redux *****
  // Not using the redux hooks (eg, useAppSelector) here because we need to use the index - extra args
  const address = useSelector((state: RootState) =>
    selectAddressByIndex(state, 0)
  );
  const { ownershipType } = address;
  const dispatch = useDispatch();

  // ***** Event Handlers *****
  function handleChange(value: string | boolean): void {
    const newAddress: IAddress = {
      ...address,
      ownershipType: value as EAddressOwnershipType,
    };
    dispatch(setAddressByIndex({ index: 0, address: newAddress }));
  }

  // ***** Render *****
  const options = [
    {
      label: 'Property Owner',
      value: EAddressOwnershipType.OWNER,
      id: `${baseId}-button-livingStatus-propertyOwner`,
    },
    {
      label: 'Renter',
      value: EAddressOwnershipType.RENTING,
      id: `${baseId}-button-livingStatus-renter`,
    },
    {
      label: 'Boarding / Other',
      value: EAddressOwnershipType.BOARDING,
      id: `${baseId}-button-livingStatus-boarderOther`,
    },
  ];
  return (
    <div data-testid='livingStatus'>
      <RadioGroup
        title='living status'
        showErrors={showErrors}
        onChange={handleChange}
        options={options}
        value={ownershipType}
      />
    </div>
  );
}
