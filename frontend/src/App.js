import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Educational } from './pages/Educational';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educational" element={<Educational />} />
      </Routes>
    </Router>
  );
}

export default App;
