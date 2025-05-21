import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Brochures from './pages/Brochures';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Events from './pages/Events';
import History from './pages/History';

function App() {
  return (
    <Router>
     <header>
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/brochures">Brochures</Link>
        <Link to="/community">Community</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
        <Link to="/history">History</Link>
      </nav>
      </header>
      

     <main> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brochures" element={<Brochures />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/history" element={<History />} />
      </Routes>
     </main> 
    </Router>
  );
}

export default App;

