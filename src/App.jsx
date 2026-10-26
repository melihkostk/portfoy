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
import { NewsDetail } from "./pages/NewsDetail.jsx";
import { ProposalDetail } from "./pages/ProposalDetail.jsx";
import { OfferDetail } from "./pages/OfferDetail.jsx";
import { EditProperty } from "./pages/EditProperty.jsx";
import { Boost } from "./pages/Boost.jsx"
import { NotFound } from "./pages/NotFound.jsx";
import { ProtectedRoutes } from "./components/ProtectedRoutes.jsx";
import { ResetPassword } from "./pages/ResetPassword.jsx";

function App() {

  const [loged, setLoged] = useState(false)
  const [token, setToken] = useState("")
  const [authChecked, setAuthChecked] = useState(false)

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
    } finally {
      setAuthChecked(true);
    }
  }, []);

  const [locale , setLocale] = useState("en");

  const [news, setNews] = useState([])

  useEffect(() => {
    getArticles(locale).then(setNews)
  }, [locale])

  const [message, setMessage] = useState("");
  const [messageShown, setMessageShown] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loged ? <HomeLogin locale={locale} setLocale={setLocale} news={news} loged={loged} setLoged={setLoged} /> : <Home loged={loged} locale={locale} setLocale={setLocale} setLoged={setLoged} news={news} />} />
        <Route path="/discover" element={<Discover locale={locale} setLocale={setLocale} loged={loged} />} />
        <Route path="/pricing" element={<Pricing loged={loged} locale={locale} setLocale={setLocale} />} />
        <Route path="/articles" element={<News locale={locale} setLocale={setLocale} loged={loged} news={news} />} />
        <Route path="/corporate" element={<Corporate locale={locale} setLocale={setLocale} loged={loged} />} />
        <Route path="/contacts" element={<Contacts loged={loged} locale={locale} setLocale={setLocale} />} />
        <Route path="/login" element={<Login loged={loged} setLoged={setLoged} locale={locale} setLocale={setLocale} />} />
        <Route path="/register" element={<SignIn locale={locale} setLocale={setLocale} />} />
        <Route path="/reset-password" element={<ResetPassword locale={locale} setLocale={setLocale} loged={loged} />} />
        <Route path="/application" element={<Application locale={locale} setLocale={setLocale} loged={loged} />} />
        <Route path="/check" element={<Check locale={locale} setLocale={setLocale} loged={loged} />} />
        <Route path="/faqs" element={<Faqs loged={loged} locale={locale} setLocale={setLocale} />} />
        <Route path="/consent" element={<Consent loged={loged} locale={locale} setLocale={setLocale} />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route element={<ProtectedRoutes loged={loged} authChecked={authChecked} />}>
          <Route path="/companies" element={<Companies locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/properties" element={<Properties locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/properties/create" element={<Create loged={loged} locale={locale} setLocale={setLocale} />} />
          <Route path="/profile" element={<Profile locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/account" element={<Account locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/proposals" element={<Proposals locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/notifications" element={<Notifications loged={loged} locale={locale} setLocale={setLocale} />} />
          <Route path="/quick-filters" element={<QuickFilters loged={loged} locale={locale} setLocale={setLocale} />} />
          <Route path="/wishlist" element={<Wishlist locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/offers/:type" element={<Offers locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/auth/properties" element={<UserProperties locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/support" element={<Support locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company" element={<Company locale={locale} setLocale={setLocale} loged={loged} message={message} messageShown={messageShown} setMessageShown={setMessageShown} />} />
          <Route path="/company/team" element={<Team locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company/contacts" element={<Location locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company/customers" element={<Customers locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company/subscription" element={<Subscription locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company/settings" element={<Settings locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company/edit" element={<Edit locale={locale} setLocale={setLocale} loged={loged} />} />
          <Route path="/company/proposals" element={<CompanyProposals locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/company/summary" element={<Summary locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/companies/:id" element={<CompaniesDetail locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/companies/:id/team" element={<CompaniesDetailTeam locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/companies/:id/contacts" element={<CompaniesDetailLocation locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/properties/:id" element={<PropertiesDetail locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/articles/:id" element={<NewsDetail locale={locale} setLocale={setLocale} loged={loged} news={news} />}></Route>
          <Route path="/proposals/:id/details" element={<ProposalDetail locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/offers/:id/detail" element={<OfferDetail locale={locale} setLocale={setLocale} loged={loged} />}></Route>
          <Route path="/properties/:id/edit" element={<EditProperty locale={locale} setLocale={setLocale} loged={loged} setMessage={setMessage} setMessageShown={setMessageShown} />}></Route>
          <Route path="/properties/:id/boost" element={<Boost locale={locale} setLocale={setLocale} loged={loged} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
