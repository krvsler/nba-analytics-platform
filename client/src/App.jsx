import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Players from './pages/Players';
import Teams from './pages/Teams';
import Compare from './pages/Compare';


function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/players" element={<Players />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>
      </BrowserRouter>
  );
}

export default App;