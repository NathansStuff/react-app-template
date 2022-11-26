import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/tests';
import { screen } from '@testing-library/react';

import { HaveKids } from './HaveKids';
import { mockHaveKidsProps } from './HaveKids.mocks';

describe('LivingStatus', () => {
  beforeEach(() => {
    renderRedux(<HaveKids {...mockHaveKidsProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('haveKids')).toBeInTheDocument();
  });

  it('the handleChange function sets the gender state', async () => {
    // Arrange
    // Act
    const button = screen.getAllByText('Yes')[0];
    expect(button).toHaveClass(uncheckedClass); // initial state
    clickElement(button);
    // Assert
    expect(button).toHaveClass(checkedClass); // state after click
  });
});
