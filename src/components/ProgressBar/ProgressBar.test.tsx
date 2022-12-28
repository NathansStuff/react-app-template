import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';
import { mockProgressBarProps } from './ProgressBar.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<ProgressBar {...mockProgressBarProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('ProgressBar')).toBeInTheDocument();
  });

  // it('displays the passed value', () => {
  //   expect(screen.getByRole('heading')).toHaveTextContent(
  //     mockProgressBarProps.sampleTextProp
  //   );
  // });
});
