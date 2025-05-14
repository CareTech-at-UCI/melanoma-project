import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar} from './components/navbar/navbar';
import { Footer} from './components/footer/footer';
import { Scan } from './pages/Scan';
import { Educational } from './pages/Educational';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/educational" element={<Educational />} />
            <Route path="/scan" element={<Scan />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
