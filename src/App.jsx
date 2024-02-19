import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App
