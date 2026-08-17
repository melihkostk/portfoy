import "./App.css";
import { Discover } from "./pages/Discover";
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
