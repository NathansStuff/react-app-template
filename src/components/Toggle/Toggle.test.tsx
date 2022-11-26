import { act, fireEvent, render, screen } from '@testing-library/react';

import { activeClass, inactiveClass, Toggle } from './Toggle';
import { mockToggleProps } from './Toggle.mocks';

describe('Toggle component', () => {
  const onChange = jest.fn();

  function renderBaseToggle(): void {
    render(<Toggle {...mockToggleProps} />);
  }

  function renderSpyToggle(): void {
    render(<Toggle onChange={onChange} initiallyChecked={true} />);
  }

  function clickTheToggle(): void {
    act(() => {
      fireEvent.click(screen.getByTestId('toggle'));
    });
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    renderBaseToggle();
    expect(screen.getByTestId('toggle')).toBeInTheDocument();
  });

  it('renders with the correct initial default state', () => {
    renderBaseToggle();
    expect(screen.getByTestId('toggle')).toHaveClass(activeClass);
  });

  it('renders without passing an argument for initiallyChecked', () => {
    render(<Toggle onChange={mockToggleProps.onChange} />);
    expect(screen.getByTestId('toggle')).toBeInTheDocument();
  });

  it('renders with the correct state when clicked', () => {
    renderBaseToggle();
    clickTheToggle();
    expect(screen.getByTestId('toggle')).toHaveClass(inactiveClass);
  });

  it('calls the onChange function when clicked', () => {
    renderSpyToggle();
    clickTheToggle();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls the onChange function with the correct value when clicked', () => {
    renderSpyToggle();
    clickTheToggle();
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
