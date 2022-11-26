import { render, screen } from '@/utils/tests';

import { BasicDetails } from './BasicDetails';

describe('BasicDetails', () => {
  beforeEach(() => {
    render(<BasicDetails />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('basicDetails')).toBeInTheDocument();
  });
});
