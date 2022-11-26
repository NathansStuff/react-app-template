import { renderRedux, screen } from '@/utils/tests';

import { Header } from './Header';

describe('Header component', () => {
  function renderBaseComponent(): void {
    renderRedux(<Header />);
  }

  describe('initial render', () => {
    it('renders without errors', () => {
      // Arrange
      renderBaseComponent();
      // Act
      // Assert
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('renders the logo', () => {
      // Arrange
      renderBaseComponent();
      // Act
      // Assert
      expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('renders the log in button', () => {
      // Arrange
      renderBaseComponent();
      // Act
      // Assert
      expect(screen.getByText('Log In')).toBeInTheDocument();
    });
  });

  describe('the log in and log out buttons', () => {
    it('should change to log out when the user is logged in', async () => {
      // Arrange
      renderRedux(<Header />, {
        preloadedState: { userReducer: { isLoggedIn: true } },
      });
      // Act
      // Assert
      expect(screen.getByText('Log Out')).toBeInTheDocument();
    });
  });
});
