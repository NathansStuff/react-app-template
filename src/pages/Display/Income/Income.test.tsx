import { renderRedux, screen } from '@/utils/testsUtils';

import { Income } from './Income';

describe('Income', () => {
  beforeEach(() => {
    renderRedux(<Income />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('Income')).toBeInTheDocument();
  });
});
