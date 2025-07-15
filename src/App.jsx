import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeasibilityPage from './pages/feasibility_page/FeasibilityPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeasibilityPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
