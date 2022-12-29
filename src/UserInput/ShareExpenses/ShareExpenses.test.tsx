import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/testsUtils';
import { screen } from '@testing-library/react';

import { ShareExpenses } from './ShareExpenses';
import { mockShareExpensesProps } from './ShareExpenses.mocks';

describe('ShareExpenses', () => {
  beforeEach(() => {
    renderRedux(<ShareExpenses {...mockShareExpensesProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('ShareExpenses')).toBeInTheDocument();
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
