import { store } from '@/context/store';

import { setGender } from './borrowerSlice';
import { EGender } from './borrowerSliceTypes';

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
  });
});
