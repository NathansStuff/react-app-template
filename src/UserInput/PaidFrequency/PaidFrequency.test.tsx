import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/testsUtils';
import { screen } from '@testing-library/react';

import { PaidFrequency } from './PaidFrequency';
import { mockPaidFrequencyProps } from './PaidFrequency.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    renderRedux(<PaidFrequency {...mockPaidFrequencyProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('gender')).toBeInTheDocument();
  });

  it('the handleChange function sets the gender state', async () => {
    // Arrange
    // Act
    const button = screen.getAllByText('Male')[0];
    expect(button).toHaveClass(uncheckedClass); // initial state
    clickElement(button);
    // Assert
    expect(button).toHaveClass(checkedClass); // state after click
  });
});
