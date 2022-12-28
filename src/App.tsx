import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Vroom from './pages/Vroom';

function App(): JSX.Element {
  return (
    <div data-testid='home'>
      <Router>
        <Routes>
          {/* <Vroom /> Unknown Journey */}
          <Route path='/iframe/' element={<Vroom />} />
          {/* <Vroom /> Known Journey */}
          <Route path='/iframe/:id' element={<Vroom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
