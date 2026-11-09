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
import { AppProvider, useAppContext } from "./context/AppContext.jsx";
import { Blogs } from "./pages/Blogs.jsx";
import { BlogDetail } from "./pages/BlogDetail.jsx";

function AppRoutes() {
  const { loged, locale } = useAppContext();

  const [news, setNews] = useState([])

  useEffect(() => {
    getArticles(locale).then(setNews)
  }, [locale])

  const [message, setMessage] = useState("");
  const [messageShown, setMessageShown] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loged ? <HomeLogin news={news} /> : <Home news={news} />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/articles" element={<News news={news} />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/application" element={<Application />} />
        <Route path="/check" element={<Check />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/articles/:id" element={<NewsDetail news={news} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/blog/:name" element={<BlogDetail />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/companies" element={<Companies />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/quick-filters" element={<QuickFilters />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/offers/:type" element={<Offers />} />
          <Route path="/auth/properties" element={<UserProperties />} />
          <Route path="/support" element={<Support />} />
          <Route path="/company" element={<Company message={message} messageShown={messageShown} setMessageShown={setMessageShown} />} />
          <Route path="/company/team" element={<Team />} />
          <Route path="/company/contacts" element={<Location />} />
          <Route path="/company/customers" element={<Customers />} />
          <Route path="/company/subscription" element={<Subscription />} />
          <Route path="/company/settings" element={<Settings />} />
          <Route path="/company/edit" element={<Edit />} />
          <Route path="/company/proposals" element={<CompanyProposals />}></Route>
          <Route path="/company/summary" element={<Summary />}></Route>
          <Route path="/companies/:id" element={<CompaniesDetail />}></Route>
          <Route path="/companies/:id/team" element={<CompaniesDetailTeam />}></Route>
          <Route path="/companies/:id/contacts" element={<CompaniesDetailLocation />}></Route>
          <Route path="/properties/:id" element={<PropertiesDetail />}></Route>
          <Route path="/proposals/:id/details" element={<ProposalDetail />}></Route>
          <Route path="/offers/:id/detail" element={<OfferDetail />}></Route>
          <Route path="/properties/:id/edit" element={<EditProperty setMessage={setMessage} setMessageShown={setMessageShown} />}></Route>
          <Route path="/properties/:id/boost" element={<Boost />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
