import App from '@/App';
import { renderRedux, screen } from '@/utils/testsUtils';

describe('App.tsx', () => {
  it('renders without errors', () => {
    renderRedux(<App />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
