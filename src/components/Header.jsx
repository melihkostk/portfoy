import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import{ useState , useEffect } from "react"
import { LanguageSelect } from "./LanguageSelect"
import { Notification } from "./Notification"
import { MainSidebar } from "./MainSidebar"
import { CreateOfferModel } from "./CreateOfferModal"
import { getAllNotifications, markAsRead } from "../services/notificationsApi"
import { logOut } from "../services/authApi"
import { useAppContext } from "../context/AppContext"
import { getAllCustomers } from "../services/myCompanyApi"
import check from "../assets/white-check.png"

export function Header({ details }) {
    const { loged, translation } = useAppContext();

    const [registerShown, setRegisterShown] = useState(false);
    const [applicationShown, setApplicationShown] = useState(false);
    const [notShown, setNotShown] = useState(false)
    const [accountShown, setAccountShown] = useState(false)
    const [sidebarShown, setSidebarShown] = useState(false)
    const [offerModelShown, setOfferModalShown] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [showUnreadOnly, setShowUnreadOnly] = useState(false)
    const [step, setStep] = useState(1)
    const [selectedCustomer, setSelectedCustomer] =useState("")
    const [selectedCurrencie, setSelectedCurrencie] = useState("")
    const [customerNote, setCustomerNote] = useState("")
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        if(loged){
            getAllNotifications().then(setNotifications)
        }
    }, [loged])

    function handleLogOut() {
        logOut().then((data => {
            if (data.status === "success") {
                localStorage.removeItem("user")
                window.location.href = '/login';
            }
            else {
                return;
            }
        }
        ))
    }

    function handleClick() {
        setShowUnreadOnly(prev => !prev)
    }

    const visibleNotifications = showUnreadOnly
        ? notifications?.data?.notifications?.filter(item => item.is_read === 0)
        : notifications?.data?.notifications

    function handleMarkAsRead(id) {
        markAsRead(id);
    }

    const [customers, setCustomer] = useState([])

    useEffect(() => {
        if(loged){
            getAllCustomers().then(setCustomer)
        }
    }, [loged])

    return (
        <div className="py-7.5 w-full max-w-[90%]">
            {sidebarShown && <MainSidebar handleLogOut={handleLogOut} setSidebarShown={setSidebarShown} />}
            {offerModelShown && <CreateOfferModel
                setOfferModalShown={setOfferModalShown}
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
                selectedCurrencie={selectedCurrencie}
                setSelectedCurrencie={setSelectedCurrencie}
                customerNote={customerNote}
                setCustomerNote={setCustomerNote}
                details={details}
                step={step}
                setStep={setStep}
            />}
            <div className="flex items-center justify-between">
                <div className="w-55 max-[992px]:w-30">
                    <Link aria-label="home" to={"/"}>
                        <img className="w-full max-w-full" src={logo} alt="" />
                    </Link>
                </div>
                {!loged && <div className="max-[1100px]:hidden grow pl-6.25">
                    <ul className="flex gap-5 pl-5">
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/">{translation?.data?.business?.home}</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/discover">{translation?.data?.business?.what_is_portfoy}</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/pricing">{translation?.data?.business?.pricing}</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/articles">{translation?.data?.business?.articles}</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/corporate">{translation?.data?.business?.corporate}</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/contacts">{translation?.data?.business?.contacts}</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/blog">{translation?.data?.business?.blog}</Link>
                        </li>
                    </ul>
                </div>}
                {loged && <div className="max-[1100px]:hidden px-6.25">
                    <ul className="flex gap-5 pl-5">
                        <li>
                            <Link to={"/properties"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold">{translation?.data?.business?.properties}</Link>
                        </li>
                        <li>
                            <Link to={"/companies"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold">{translation?.data?.business?.companies}</Link>
                        </li>
                        <li>
                            <Link to={"/properties/create"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold">+ {translation?.data?.business?.create_property}</Link>
                        </li>
                        <li>
                            <Link to={"/contacts"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold">{translation?.data?.business?.contacts}</Link>
                        </li>
                    </ul>
                </div>}
                {loged && <form action="/properties" method="GET" className="px-7.5 flex items-center relative max-[1100px]:hidden grow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B7B9BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search preview-icon absolute left-10 w-5 h-5"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                    <input name="q" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="bg-[#c4c4c426] focus:outline-none w-[calc(100%-50px)] text-base font-medium pl-10 h-12.5 px-2 rounded-[5px]" type="text" placeholder={translation?.data?.business?.search_in_properties} />
                </form>}
                <div className="flex items-center justify-between gap-2.5">
                    <LanguageSelect />
                    {!loged && <div className="relative">
                        <div className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] text-white font-semibold flex items-center">
                            <div className="flex rounded-l-[5px] border-r px-5 max-[992px]:px-2.5 border-r-[#ffffff38] items-center h-full hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                                <Link to={"/login"} className="flex items-center gap-2.5 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round preview-icon"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                                    <p className="whitespace-nowrap max-[1400px]:hidden">{translation?.data?.business?.login}</p>
                                </Link>
                            </div>
                            <div onClick={() => setRegisterShown(prev => !prev)} className="h-full max-[992px]:hidden rounded-r-[5px] flex px-1.5 items-center justify-center hover:bg-[#048B99] hover:shadow-[0_0_30px_#048B99] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                        </div>
                        {registerShown && <div className="absolute w-full bg-[#27C5D2] text-sm font-semibold cursor-pointer max-w-full text-white py-2 px-2.5 mt-0.5 rounded-[5px] flex items-center gap-1 hover:pl-4 transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            <Link to={"/register"} className="w-full" href="">{translation?.data?.business?.register}</Link>
                        </div>}
                    </div>}
                    {!loged &&
                        <div onClick={() => setSidebarShown(true)} className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] hidden text-white font-semibold max-[992px]:w-12.5 max-[992px]:px-2.5 max-[992px]:flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu preview-icon"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                        </div>
                    }
                    {!loged && <div className="relative">
                        <div className="bg-[#048B99] cursor-pointer flex items-center h-12.5 max-[992px]:hidden rounded-[5px] text-white font-semibold">
                            <div className="flex items-center px-5 h-full rounded-l-[5px] border-r border-r-[#ffffff38] gap-1 hover:bg-[#026872] transition-colors duration-300 ease-in-out">
                                <Link to={"/application"} className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus preview-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    <p className="whitespace-nowrap max-[1400px]:hidden">{translation?.data?.business?.company_application}</p>
                                </Link>
                            </div>
                            <div onClick={() => setApplicationShown(prev => !prev)} className="flex h-full rounded-r-[5px] px-1.5 items-center justify-center hover:bg-[#026872] hover:shadow-[0_0_30px_#026872] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                        </div>
                        {applicationShown && <div className="absolute w-full bg-[#048B99] text-sm font-semibold cursor-pointer max-w-full text-white py-2 px-2.5 mt-0.5 rounded-[5px] flex items-center gap-1 hover:pl-4 transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            <Link to={"/check"}>{translation?.data?.business?.application_check}</Link>
                        </div>}
                    </div>}
                    {loged && <div className="relative">
                        <button aria-label="notification" onClick={() => setNotShown(prev => !prev)} className="w-12.5 h-12.5 bg-[#f8f8f8] text-[#858585] hover:text-white transition-colors duration-300 ease-in-out rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#27C5D2]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell preview-icon"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                        </button>
                        <div className="absolute -top-1 -right-1 text-[10px] text-[#858585] bg-[#FFCA64] rounded-full w-5 h-5 flex items-center justify-center font-extrabold">
                            {notifications?.data?.unread_notifications_count}
                        </div>
                        {notShown && <div className="absolute z-50 w-87.5 rounded-lg bg-white right-0 shadow-[0_0_30px_rgba(0,0,0,0.1)] pb-3.75">
                            <div className="bg-[#27C5D2] p-7.5 rounded-t-lg">
                                <p className="text-white text-sm mb-5 font-medium">
                                    Okunmamış {notifications?.data?.unread_notifications_count} Bildirim
                                </p>
                                <button className="bg-white text-xs rounded-lg py-2.5 px-5 font-medium cursor-pointer whitespace-nowrap hover:bg-[#ffca64] transition-colors duration-300 ease-in-out">
                                    Tümünü Okundu Olarak İşaretle
                                </button>
                            </div>
                            <div className="p-3.75 max-h-[50vh] overflow-auto bg-white mb-5">
                                {notifications?.data?.notifications?.filter(item => item.is_read === 0)?.length > 0 ? <div className={`${showUnreadOnly ? "bg-[#dddddd]" : "bg-[#eeeeee]"} p-2.5 rounded-lg flex items-center gap-2 mb-5`}>
                                    <input checked={showUnreadOnly} onChange={handleClick} className="w-5 h-5 hidden" type="checkbox" id="unread" name="unread" />
                                    <label className="flex items-center gap-2.5 text-sm text-[#212529] cursor-pointer select-none font-medium" htmlFor="unread">
                                        <div className={`w-5 h-5 flex items-center justify-center rounded-sm ${showUnreadOnly ? "bg-[#27c5d2]" : "bg-[#d1d1d1]" }`}>
                                            {showUnreadOnly && <img className="w-3 h-3" src={check} alt="" />}
                                        </div>
                                        Sadece okunmamışları göster
                                    </label>
                                </div> : <div className="flex items-center justify-center py-7.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide opacity-50 lucide-bell-off preview-icon"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"/><path d="m2 2 20 20"/><path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/></svg>
                                </div>}
                                <div>
                                    {visibleNotifications?.map(item => (
                                        <Notification
                                            handleMarkAsRead={handleMarkAsRead}
                                            key={item.id}
                                            id={item.id}
                                            content={item.content}
                                            time={item.time_diff}
                                            is_read={item.is_read}
                                            type={item.type}
                                            details={item.details}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="text-center w-full px-3.75">
                                <button className="bg-[#eee] w-full text-[#727272] text-sm font-medium py-2.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white hover:shadow-[0_0_30px_#27C5D2] transition[colors,shadow] duration-300 ease-in-out">
                                    <Link to={"/notifications"}>Tüm Bildirimleri Gör</Link>
                                </button>
                            </div>
                        </div>}
                    </div>}
                    {loged && <button aria-label="offer" onClick={() => setOfferModalShown(prev => !prev)} className={`w-12.5 max-[1100px]:hidden ${selectedCustomer ? "w-30 gap-2" : ""} h-12.5 flex text-white items-center justify-center rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-plus preview-icon"><path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                        {selectedCustomer && <p className="text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{customers?.data?.customers?.find(item => item.id == selectedCustomer)?.name}</p>}
                    </button>}
                    {loged && <Link to={"/company"} className="h-12.5 px-5 max-[1100px]:hidden whitespace-nowrap  text-white flex gap-2.5 items-center justify-center rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store preview-icon"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>
                        <span className="max-[1400px]:hidden font-medium">{translation?.data?.business?.my_portfolio}</span>
                    </Link>}
                    {loged && <div className="relative">
                        <div className="flex">
                            <div className="h-12.5 border-r border-r-[#ffffff38]">
                                <Link to={"/profile"} className="flex items-center justify-center text-white gap-2.5 whitespace-nowrap h-full px-5 max-[1100px]:px-2.5 rounded-l-[5px] max-[1100px]:rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round preview-icon"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                                    <p className="text-white font-medium max-[1400px]:hidden">{translation?.data?.business?.my_account}</p>
                                </Link>
                            </div>
                            <div onClick={() => setAccountShown(prev => !prev)} className="flex text-white max-[1100px]:hidden items-center justify-center bg-[#27C5D2] rounded-r-[5px] w-7.5 cursor-pointer hover:bg-[#026872] hover:shadow-[0_0_30px_#026872] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                        </div>
                        {accountShown && <div className="bg-[#27C5D2] absolute w-full top-full mt-0.5 rounded-[5px] px-2.5 z-50">
                            <div className="mt-2.5 pb-1.25 border-b border-b-[#FFFFFF80]">
                                <p className="text-white text-sm font-semibold">Pigasoft</p>
                                <p className="text-white text-xs font-medium">Sistem Admin</p>
                            </div>
                            <div>
                                <ul className="select-none">
                                    <li className="flex items-center font-medium py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis text-white hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                        <Link to={"/wishlist"} className="text-white text-sm">{translation?.data?.business?.my_wishlist}</Link>
                                    </li>
                                    <li className="flex items-center font-medium py-2 text-white whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 shrink-0 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                        <Link to={"/offers/send"} className="text-white text-sm truncate">
                                            {translation?.data?.business?.my_proposals}
                                        </Link>
                                    </li>
                                    <li className="flex items-center font-medium py-2 text-white whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                        <Link to={"/support"} className="text-white text-sm">
                                            {translation?.data?.business?.support}
                                        </Link>
                                    </li>
                                    <li className="flex items-center font-medium py-2 text-white whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                        <Link className="text-white text-sm">{translation?.data?.business?.dashboard}</Link>
                                    </li>
                                    <li onClick={handleLogOut} className="flex items-center text-white font-medium py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                        <span className="text-white text-sm">
                                            {translation?.data?.business?.logout}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    </div>}
                    {loged &&
                        <div onClick={() => setSidebarShown(true)} className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] hidden text-white font-semibold max-[992px]:w-12.5 max-[992px]:px-2.5 max-[992px]:flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu preview-icon"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}