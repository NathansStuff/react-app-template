import { store } from '@/context/store';

import { displaySlice, selectDisplay, setDisplay } from './displaySlice';
import { EDisplays } from './displayTypes';

describe('DisplayReducer redux state tests', () => {
  afterEach(() => store.dispatch(setDisplay(EDisplays.BASIC_DETAILS)));

  describe('Reducer', () => {
    it('calling setDisplay should set the display state', async () => {
      // Arrange
      // Act
      store.dispatch(setDisplay(EDisplays.INCOME));
      const state = store.getState();
      // Assert
      expect(state.displayReducer.display).toEqual(EDisplays.INCOME);
    });
  });

  describe('Selectors', () => {
    it('calling getDisplay should return the display state', async () => {
      // Arrange
      const state = store.getState();
      // Act
      const display = selectDisplay(state);
      // Assert
      expect(display).toEqual(EDisplays.BASIC_DETAILS);
    });
  });

  describe('Slice', () => {
    it('should have the correct name', () => {
      // Arrange
      // Act
      // Assert
      expect(displaySlice.name).toEqual('display');
    });
  });
});
