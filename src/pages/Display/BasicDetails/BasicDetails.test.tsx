import { renderRedux, screen } from '@/utils/tests';

import { BasicDetails } from './BasicDetails';

describe('BasicDetails', () => {
  beforeEach(() => {
    renderRedux(<BasicDetails />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('basic')).toBeInTheDocument();
  });
});
