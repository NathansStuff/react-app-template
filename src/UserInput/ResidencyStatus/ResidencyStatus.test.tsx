import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/tests';
import { screen } from '@testing-library/react';

import { ResidencyStatus } from './ResidencyStatus';
import { mockResidencyStatusProps } from './ResidencyStatus.mocks';

describe('ResidencyStatus', () => {
  beforeEach(() => {
    renderRedux(<ResidencyStatus {...mockResidencyStatusProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('residencyStatus')).toBeInTheDocument();
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
