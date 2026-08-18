import "./App.css";
import { Discover } from "./pages/Discover";
import { Home } from './pages/Home';
import { News } from './pages/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pricing } from "./pages/Pricing";
import { Corporate } from "./pages/Corporate"
import { Contacts } from "./pages/Contacts";
import { Login } from "./pages/Login";
import { SignIn } from "./pages/SignIn";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/articles" element={<News />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
