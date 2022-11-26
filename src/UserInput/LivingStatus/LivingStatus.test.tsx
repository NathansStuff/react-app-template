import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/testsUtils';
import { screen } from '@testing-library/react';

import { LivingStatus } from './LivingStatus';
import { mockLivingStatusProps } from './LivingStatus.mocks';

describe('LivingStatus', () => {
  beforeEach(() => {
    renderRedux(<LivingStatus {...mockLivingStatusProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('livingStatus')).toBeInTheDocument();
  });

  it('the handleChange function sets the gender state', async () => {
    // Arrange
    // Act
    const button = screen.getAllByText('Renter')[0];
    expect(button).toHaveClass(uncheckedClass); // initial state
    clickElement(button);
    // Assert
    expect(button).toHaveClass(checkedClass); // state after click
  });
});
