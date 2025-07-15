import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/opening_pages/LandingPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App




