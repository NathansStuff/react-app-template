import { renderRedux, screen } from '@/utils/testsUtils';

import { Expense } from './Expense';

describe('Expense', () => {
  beforeEach(() => {
    renderRedux(<Expense />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('Expense')).toBeInTheDocument();
  });
});
