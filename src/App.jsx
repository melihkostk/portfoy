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
import { Properties } from "./pages/Properties";
import { Create } from "./pages/Create";
import { Profile } from "./pages/Profile"
import { Account } from "./pages/Account";
import { Proposals } from "./pages/Proposals"
import { Notifications } from "./pages/Notifications";
import { QuickFilters } from "./pages/QuickFilters";
import { Wishlist } from "./pages/Wishlist"
import { Offers } from "./pages/Offers";

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
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/quick-filters" element={<QuickFilters />} /> 
        <Route path="/wishlist" element={<Wishlist />} /> 
        <Route path="/offers" element={<Offers />} /> 
      </Routes>
    </BrowserRouter>

  )
}

export default App
