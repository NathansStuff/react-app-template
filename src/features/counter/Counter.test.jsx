import { fireEvent, reducer, screen } from '@/utils/tests';

import Counter from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    reducer(<Counter />);
  });

  it('renders without errors', () => {
    const component = screen.getByTestId('counter');
    expect(component).toBeInTheDocument();
  });

  it('Test increment click event', () => {
    // Arrange
    expect(screen.getByTestId('counter-value').textContent).toBe('0');
    // Act
    fireEvent.click(screen.getByTestId('counter-increment'));
    // Assert
    expect(screen.getByTestId('counter-value').textContent).toBe('1');
  });

  it('Test decrease click event', () => {
    // Arrange
    expect(screen.getByTestId('counter-value').textContent).toBe('0');
    // Act
    fireEvent.click(screen.getByTestId('counter-decrement'));
    // Assert
    expect(screen.getByTestId('counter-value').textContent).toBe('-1');
  });
});
