import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeasibilityPage from './pages/feasibility_page/FeasibilityPage';
import Onboarding from './pages/opening_pages/Onboarding';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<FeasibilityPage/>}></Route>
        <Route path="/feasibility" element={<Onboarding/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
