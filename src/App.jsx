import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/opening_pages/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
