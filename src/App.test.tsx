import { render, screen } from '@testing-library/react';

import App from './App';

describe('App.tsx', () => {
  it('renders without errors', () => {
    render(<App />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
