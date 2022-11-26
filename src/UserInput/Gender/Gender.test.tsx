import { checkedClass, uncheckedClass } from '@/components/RadioGroup';
import { clickElement, renderRedux } from '@/utils/tests';
import { screen } from '@testing-library/react';

import { Gender } from './Gender';
import { mockGenderProps } from './Gender.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    renderRedux(<Gender {...mockGenderProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('gender')).toBeInTheDocument();
  });

  it('the handleChange function sets the gender state', async () => {
    // Arrange
    // Act
    const maleButton = screen.getAllByText('Male')[0];
    expect(maleButton).toHaveClass(uncheckedClass); // initial state
    clickElement(maleButton);
    // Assert
    expect(maleButton).toHaveClass(checkedClass); // state after click
  });
});
