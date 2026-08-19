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
import { Check } from "./pages/Check";
import { Application } from "./pages/Application";
import { Faqs } from "./pages/Faqs";
import { Consent } from "./pages/Consent";
import { Companies } from "./pages/Companies";

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
        <Route path="/application" element={<Application />} />
        <Route path="/check" element={<Check />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
