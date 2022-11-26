import { store } from '@/context/store';

import { setAddressByIndex, setGender } from './borrowerSlice';
import { EAddressOwnershipType, EGender } from './borrowerSliceTypes';

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
        ownershipType: EAddressOwnershipType.RENTING
      };
      // Act
      store.dispatch(setAddressByIndex({ index: 0, address: mockAddress }));
      const state = store.getState();
      // Assert
      expect(state.borrowerReducer.address[0]).toEqual(mockAddress);
    });
  });
});
