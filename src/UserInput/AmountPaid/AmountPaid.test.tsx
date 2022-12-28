import { initialBorrowerState } from '@/context/borrower';
import { inputTextOnElement, renderRedux } from '@/utils/testsUtils';
import { screen } from '@testing-library/react';

import { AmountPaid } from './AmountPaid';
import { mockAmountPaidProps } from './AmountPaid.mocks';

describe('BaseTemplate', () => {
  function renderBase(): void {
    renderRedux(<AmountPaid {...mockAmountPaidProps} />);
  }

  it('renders without errors', () => {
    // Arrange
    renderBase();
    // Act
    // Assert
    expect(screen.getByTestId('AmountPaid')).toBeInTheDocument();
  });

  describe('the handleChange function', () => {
    it('sets the number of children state', async () => {
      // Arrange
      renderBase();
      // Act
      const input = screen.getByTestId('inputField');
      inputTextOnElement(input, '2');
      // Assert
      expect(input).toHaveValue('2');
    });

    it('works when there is a maximum value', async () => {
      // Arrange
      renderBase();
      // Act
      const input = screen.getByTestId('inputField');
      inputTextOnElement(input, '9');
      inputTextOnElement(input, '9');
      // Assert
      expect(input).toHaveValue('9');
    });

    it('works with a NaN value', async () => {
      // Arrange
      renderBase();
      // Act
      const input = screen.getByTestId('inputField');
      inputTextOnElement(input, '9');
      inputTextOnElement(input, 'Delete');
      // Assert
      expect(input).toHaveValue('0');
    });

    it('doesnt call setState when the value is too high', async () => {
      // Arrange
      renderBase();
      // Act
      const input = screen.getByTestId('inputField');
      inputTextOnElement(input, '94');
      // Assert
      expect(screen.getByTestId('inputField')).toHaveValue('9');
    });

    // TODO: This test never fails and I don't know how to make it actually test that the function returns early
    it('returns when equal to the existing number of children', async () => {
      // Arrange
      renderRedux(<AmountPaid {...mockAmountPaidProps} />, {
        preloadedState: {
          borrowerReducer: {
            ...initialBorrowerState,
            numberOfChildren: 2,
          },
        },
      });
      // Act
      const input = screen.getByTestId('inputField');
      inputTextOnElement(input, '2');
      // Assert
      expect(screen.getByTestId('inputField')).toHaveValue('2');
    });
  });
});
