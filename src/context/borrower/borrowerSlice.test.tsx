import { store } from '@/context/store';

import {
  setAddressByIndex,
  setGender,
  setResidencyStatus,
} from './borrowerSlice';
import {
  EAddressOwnershipType,
  EGender,
  EResidencyStatus,
} from './borrowerSliceTypes';

describe('BorrowerReducer redux state tests', () => {
  describe('Reducers', () => {
    it('setGender should set the gender state', async () => {
      // Arrange
      // Act
      store.dispatch(setGender(EGender.FEMALE));
      const state = store.getState();
      // Assert
      expect(state.borrowerReducer.gender).toEqual(EGender.FEMALE);
    });
    it('setAddressByIndex should set the address state', async () => {
      // Arrange
      const mockAddress = {
        ownershipType: EAddressOwnershipType.RENTING,
      };
      // Act
      store.dispatch(setAddressByIndex({ index: 0, address: mockAddress }));
      const state = store.getState();
      // Assert
      expect(state.borrowerReducer.address[0]).toEqual(mockAddress);
    });
    it('setResidencyStatus should set the residency status state', async () => {
      // Arrange
      // Act
      store.dispatch(setResidencyStatus(EResidencyStatus.VISA_HOLDER));
      const state = store.getState();
      // Assert
      expect(state.borrowerReducer.residencyStatus).toEqual(
        EResidencyStatus.VISA_HOLDER
      );
    });
  });
});
