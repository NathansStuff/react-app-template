import { render, screen } from '@testing-library/react';

import { Page } from './Page';
import { mockPageProps } from './Page.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<Page {...mockPageProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('page')).toBeInTheDocument();
  });

  it('displays the passed children', () => {
    expect(screen.getByTestId('mockChildren')).toBeInTheDocument();
  });
});
