import { render, screen } from '@testing-library/react';

import { BaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<BaseTemplate {...mockBaseTemplateProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('baseTemplate')).toBeInTheDocument();
  });

  it('displays the passed value', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(
      mockBaseTemplateProps.sampleTextProp
    );
  });
});
