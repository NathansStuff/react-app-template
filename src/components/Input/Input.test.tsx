import { act, fireEvent, render, screen } from '@testing-library/react';

import { errorClass, Input } from './Input';
import { mockErrorInputProps, mockInputProps } from './Input.mocks';

describe('BaseTemplate', () => {
  const onChange = jest.fn();
  const newValue = 'new value';

  function renderBaseComponent(): void {
    render(<Input {...mockInputProps} />);
  }

  function renderSpyComponent(): void {
    render(
      <Input
        onChange={onChange}
        heading={mockInputProps.heading}
        placeholder={mockInputProps.placeholder}
        showErrors={mockInputProps.showErrors}
        id={mockInputProps.id}
      />
    );
  }

  function inputTextOnElement(
    element: Element | Node | Document | Window
  ): void {
    act(() => {
      fireEvent.change(element, { target: { value: newValue } });
    });
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    renderBaseComponent();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('displays the passed value', () => {
    renderBaseComponent();
    expect(screen.getByTestId('input')).toHaveTextContent(
      mockInputProps.heading
    );
  });

  it('calls the onChange function when value changes', () => {
    renderSpyComponent();
    const inputField = screen.getByTestId('inputField');
    inputTextOnElement(inputField);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls the onChange function with the correct value when value changes', () => {
    renderSpyComponent();
    const inputField = screen.getByTestId('inputField');
    inputTextOnElement(inputField);
    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it('shows error class when showErrors is true and no value is entered', () => {
    render(<Input {...mockErrorInputProps} />);
    const inputField = screen.getByTestId('inputField');
    expect(inputField).toHaveClass(errorClass);
  });
});
