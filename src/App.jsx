import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/main_pages/HomePage';
import GuidesPage from './pages/main_pages/GuidesPage';
import TrainingsPage from './pages/main_pages/TrainingsPage';
import CommunityPage from './pages/main_pages/CommunityPage';
import LoansPage from './pages/main_pages/LoansPage';
import Navbar from './components/user_pages/Navbar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/guides' element={<GuidesPage />} />
        <Route path='/trainings' element={<TrainingsPage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/loans' element={<LoansPage />} />
      </Routes>
    </Router>
  );
}

export default App
