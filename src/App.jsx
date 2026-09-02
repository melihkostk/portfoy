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
import { UserProperties } from "./pages/UserProperties";
import { Support } from "./pages/Support";
import { Company } from "./pages/Company";
import { Team } from "./pages/Team"
import { Location } from "./pages/Location";
import { Customers } from "./pages/Customers";
import { Subscription } from "./pages/Subscription"
import { Settings } from "./pages/Settings";
import { Edit } from "./pages/Edit";
import { useState } from "react";
import { HomeLogin } from "./pages/HomeLogin";
import { useEffect } from "react";
import { getArticles } from "./services/articlesApi.js";
import { CompanyProposals } from "./pages/CompanyProposals.jsx";
import { Summary } from "./pages/Summary.jsx";
import { CompaniesDetail } from "./pages/CompaniesDetail.jsx";
import { CompaniesDetailTeam } from "./pages/CompaniesDetailTeam.jsx";
import { CompaniesDetailLocation } from "./pages/CompaniesDetailLocation.jsx";
import { PropertiesDetail } from "./pages/PropertiesDetail.jsx";

function App() {

  const [loged, setLoged] = useState(false)
  const [token, setToken] = useState("")

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoged(false);
        return;
      }

      setToken(user.data.token);
      setLoged(true);
    } catch {
      setLoged(false);
    }
  }, []);

  const [news, setNews] = useState([])

  useEffect(() => {
    getArticles().then(setNews)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loged ? <HomeLogin news={news} loged={loged} setLoged={setLoged} /> : <Home loged={loged} setLoged={setLoged} news={news} />} />
        <Route path="/discover" element={<Discover loged={loged} />} />
        <Route path="/pricing" element={<Pricing loged={loged} />} />
        <Route path="/articles" element={<News loged={loged} news={news} />} />
        <Route path="/corporate" element={<Corporate loged={loged} />} />
        <Route path="/contacts" element={<Contacts loged={loged} />} />
        <Route path="/contacts" element={<Contacts loged={loged} />} />
        <Route path="/login" element={<Login loged={loged} setLoged={setLoged} />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/application" element={<Application loged={loged} />} />
        <Route path="/check" element={<Check loged={loged} />} />
        <Route path="/faqs" element={<Faqs loged={loged} />} />
        <Route path="/consent" element={<Consent loged={loged} />} />
        <Route path="/companies" element={<Companies loged={loged} />} />
        <Route path="/properties" element={<Properties loged={loged} />} />
        <Route path="/properties/create" element={<Create loged={loged} />} />
        <Route path="/profile" element={<Profile loged={loged} />} />
        <Route path="/account" element={<Account loged={loged} />} />
        <Route path="/proposals" element={<Proposals loged={loged} />} />
        <Route path="/notifications" element={<Notifications loged={loged} />} />
        <Route path="/quick-filters" element={<QuickFilters loged={loged} />} />
        <Route path="/wishlist" element={<Wishlist loged={loged} />} />
        <Route path="/offers" element={<Offers loged={loged} />} />
        <Route path="/auth/properties" element={<UserProperties loged={loged} />} />
        <Route path="/support" element={<Support loged={loged} />} />
        <Route path="/company" element={<Company loged={loged} />} />
        <Route path="/company/team" element={<Team loged={loged} />} />
        <Route path="/company/contacts" element={<Location loged={loged} />} />
        <Route path="/company/customers" element={<Customers loged={loged} />} />
        <Route path="/company/subscription" element={<Subscription loged={loged} />} />
        <Route path="/company/settings" element={<Settings loged={loged} />} />
        <Route path="/company/edit" element={<Edit loged={loged} />} />
        <Route path="/company/proposals" element={<CompanyProposals loged={loged} />}></Route>
        <Route path="/company/summary" element={<Summary loged={loged} />}></Route>
        <Route path="/companies/:id" element={<CompaniesDetail loged={loged} />}></Route>
        <Route path="/companies/:id/team" element={<CompaniesDetailTeam loged={loged} />}></Route>
        <Route path="/companies/:id/contacts" element={<CompaniesDetailLocation loged={loged} />}></Route>
        <Route path="/properties/:id" element={<PropertiesDetail loged={loged} />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
