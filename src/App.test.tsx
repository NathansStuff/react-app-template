import App from '@/App';
import { renderRedux, screen } from '@/utils/tests';

describe('App.tsx', () => {
  it('renders without errors', () => {
    renderRedux(<App />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
