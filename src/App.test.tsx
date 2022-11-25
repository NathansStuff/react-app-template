import App from '@/App';
import { reducer, screen } from '@/utils/tests';

describe('App.tsx', () => {
  it('renders without errors', () => {
    reducer(<App />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
