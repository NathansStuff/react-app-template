import { store } from '@/context/store';

import {
  login,
  logout,
  selectFirstName,
  selectIsLoggedIn,
  selectUser,
  userSlice,
} from './UserSlice';

describe('User redux state tests', () => {
  afterEach(() => store.dispatch(logout()));

  describe('the userSlice', () => {
    it('should have the correct name', () => {
      expect(userSlice.name).toEqual('user');
    });
  });

  describe('the initial state', () => {
    it('should be logged out by default', () => {
      // Arrange
      // Act
      // Assert
      const state = store.getState();
      expect(state.userReducer.isLoggedIn).toBe(false);
    });

    it('should have no first name by default', () => {
      // Arrange
      // Act
      // Assert
      const state = store.getState();
      expect(state.userReducer.firstName).toBeUndefined();
    });
  });

  describe('the login action', () => {
    it('should set the user to logged in', () => {
      // Arrange
      // Act
      store.dispatch(login('John'));
      // Assert
      const state = store.getState();
      expect(state.userReducer.isLoggedIn).toBe(true);
    });

    it('should set the user first name', () => {
      // Arrange
      // Act
      store.dispatch(login('John'));
      // Assert
      const state = store.getState();
      expect(state.userReducer.firstName).toBe('John');
    });
  });

  describe('the logout action', () => {
    it('should set the user to logged out', () => {
      // Arrange
      // Act
      store.dispatch(logout());
      // Assert
      const state = store.getState();
      expect(state.userReducer.isLoggedIn).toBe(false);
    });

    it('should remove the user first name', () => {
      // Arrange
      // Act
      store.dispatch(login('John'));
      store.dispatch(logout());
      // Assert
      const state = store.getState();
      expect(state.userReducer.firstName).toBeUndefined();
    });
  });

  describe('the select user action', () => {
    it('should return the user state', () => {
      // Arrange
      // Act
      // Assert
      const state = store.getState();
      const user = selectUser(state);
      expect(user).toEqual({
        isLoggedIn: false,
        firstName: undefined,
      });
    });
  });

  describe('the selectFirstName action', () => {
    it('should return the user first name when undefined', () => {
      // Arrange
      // Act
      // Assert
      const state = store.getState();
      const firstName = selectFirstName(state);
      expect(firstName).toBeUndefined();
    });

    it('should return the user first name when string', () => {
      // Arrange
      // Act
      store.dispatch(login('John'));
      // Assert
      const state = store.getState();
      const firstName = selectFirstName(state);
      expect(firstName).toBe('John');
    });
  });

  describe('the selectIsLoggedIn action', () => {
    it('should return the user logged in state when false', () => {
      // Arrange
      // Act
      // Assert
      const state = store.getState();
      const isLoggedIn = selectIsLoggedIn(state);
      expect(isLoggedIn).toBe(false);
    });

    it('should return the user logged in state when true', () => {
      // Arrange
      // Act
      store.dispatch(login('John'));
      // Assert
      const state = store.getState();
      const isLoggedIn = selectIsLoggedIn(state);
      expect(isLoggedIn).toBe(true);
    });
  });
});
