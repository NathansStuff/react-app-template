import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { login } from '@/context/user';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  describe('initial render', () => {
    it('renders without errors', () => {
      // Arrange
      // Act
      // Assert
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('renders the logo', () => {
      // Arrange
      // Act
      // Assert
      expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('renders the log in button', () => {
      // Arrange
      // Act
      // Assert
      expect(screen.getByText('Log In')).toBeInTheDocument();
    });
  });

  describe('the log in and log out buttons', () => {
    it('should change to log out when the user is logged in', async () => {
      // Arrange
      // Act
      await store.dispatch(login('John'));
      // Assert
      expect(screen.getByText('Log Out')).toBeInTheDocument();
    });
  });
});
