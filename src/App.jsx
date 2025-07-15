import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/opening_pages/LandingPage';
import FeasibilityPage from './pages/feasibility_page/FeasibilityPage';
import Onboarding from './pages/opening_pages/Onboarding';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feasibility" element={<FeasibilityPage/>}></Route>
        <Route path="/feasibility" element={<Onboarding/>}></Route>
      </Routes>
    </Router>
  );
}

export default App




