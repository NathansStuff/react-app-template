import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/testsUtils';
import { screen } from '@testing-library/react';

import { VisaNumber } from './VisaNumber';
import { mockVisaNumberProps } from './VisaNumber.mocks';

describe('VisaNumber', () => {
  beforeEach(() => {
    renderRedux(<VisaNumber {...mockVisaNumberProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('VisaNumber')).toBeInTheDocument();
  });

  it('the handleChange function sets the residency status', async () => {
    // Arrange
    // Act
    const button = screen.getAllByText('Visa')[0];
    expect(button).toHaveClass(uncheckedClass); // initial state
    clickElement(button);
    // Assert
    expect(button).toHaveClass(checkedClass); // state after click
  });
});
