import { clickElement } from '@/utils/testsUtils';
import { render, screen } from '@testing-library/react';

import {
  checkedClass,
  errorClass,
  RadioGroup,
  uncheckedClass,
} from './RadioGroup';
import { mockRadioGroupProps } from './RadioGroup.mocks';

describe('RadioGroup', () => {
  const onChange = jest.fn();

  function renderBaseComponent(): void {
    render(<RadioGroup {...mockRadioGroupProps} />);
  }

  function renderSpyComponent(): void {
    render(
      <RadioGroup
        onChange={onChange}
        options={mockRadioGroupProps.options}
        title={mockRadioGroupProps.title}
        showErrors={mockRadioGroupProps.showErrors}
        value={mockRadioGroupProps.value}
      />
    );
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    renderBaseComponent();
    expect(screen.getByTestId('radioGroup')).toBeInTheDocument();
  });

  it('displays the passed value', () => {
    renderBaseComponent();
    expect(screen.getAllByTestId('radioGroupOptionText')[0]).toHaveTextContent(
      mockRadioGroupProps.options[0].label
    );
  });

  it('calls the onChange function when clicked', () => {
    renderSpyComponent();
    clickElement(screen.getAllByTestId('radioGroupOptionText')[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls the onChange function with the correct value of the selected option when clicked', () => {
    renderSpyComponent();
    const index = 0;
    clickElement(screen.getAllByTestId('radioGroupOptionText')[index]);
    expect(onChange).toHaveBeenCalledWith(
      mockRadioGroupProps.options[index].value
    );
  });

  it('changes the selected option when clicked', () => {
    renderBaseComponent();
    clickElement(screen.getAllByTestId('radioGroupOptionText')[0]);
    expect(screen.getAllByTestId('radioGroupOptionText')[0]).toHaveClass(
      checkedClass
    );
  });

  it('sets no initial selected option when no value is passed', () => {
    renderBaseComponent();
    const option1 = screen.getAllByTestId('radioGroupOptionText')[0];
    const option2 = screen.getAllByTestId('radioGroupOptionText')[1];
    expect(option1).not.toHaveClass(checkedClass);
    expect(option2).not.toHaveClass(checkedClass);
    expect(option1).toHaveClass(uncheckedClass);
    expect(option2).toHaveClass(uncheckedClass);
  });

  it('sets the initial selected option when a value is passed', () => {
    render(
      <RadioGroup
        onChange={onChange}
        options={mockRadioGroupProps.options}
        title={mockRadioGroupProps.title}
        showErrors={mockRadioGroupProps.showErrors}
        value={true}
      />
    );
    expect(screen.getAllByTestId('radioGroupOptionText')[0]).toHaveClass(
      checkedClass
    );
  });

  it('shows error class when showErrors is true and no value is selected', () => {
    render(
      <RadioGroup
        onChange={onChange}
        options={mockRadioGroupProps.options}
        title={mockRadioGroupProps.title}
        showErrors={true}
        value={mockRadioGroupProps.value}
      />
    );
    expect(screen.getAllByTestId('radioGroupOptionCard')[0]).toHaveClass(
      errorClass
    );
  });
});
