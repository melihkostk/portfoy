import logo from "../assets/logo.svg"
import whiteDownArrow from "../assets/white-down-arrow.png"
import { Link } from "react-router-dom"
import person from "../assets/person.png"
import arrowRight from "../assets/arrow-right.png"
import plus from "../assets/plus.png"
import React from "react"
import notification from "../assets/notification.png"
import folder from "../assets/folder.png"
import shop from "../assets/shop.png"
import { LanguageSelect } from "./LanguageSelect"
import { Notification } from "./Notification"
import whiteMenu from "../assets/white-menu.png"
import { MainSidebar } from "./MainSidebar"
import { CreateOfferModel } from "./CreateOfferModal"

export function Header() {
    const [registerShown, setRegisterShown] = React.useState(false);
    const [applicationShown, setApplicationShown] = React.useState(false);
    const [loged] = React.useState(true)
    const [notShown, setNotShown] = React.useState(false)
    const [accountShown, setAccountShown] = React.useState(false)
    const [sidebarShown , setSidebarShown] = React.useState(false)
    const [offerModelShown , setOfferModalShown] = React.useState(true)

    return (
        <div className="py-7.5 w-full max-w-[90%]">
            {sidebarShown && <MainSidebar setSidebarShown={setSidebarShown} loged={loged} />}
            {offerModelShown && <CreateOfferModel setOfferModalShown={setOfferModalShown} />}
            <div className="flex items-center justify-between">
                <div className="w-55 max-[992px]:w-30">
                    <Link to={"/"}>
                        <img className="w-full max-w-full" src={logo} alt="" />
                    </Link>
                </div>
                {!loged && <div className="max-[1100px]:hidden">
                    <ul className="flex gap-5 pl-5">
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/">Anasayfa</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/discover">Port-foy Nedir?</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/pricing">Fiyatlandırma</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/articles">Haberler</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/corporate">Kurumsal</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" to="/contacts">İletişim</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-semibold" href="">Blog</Link>
                        </li>
                    </ul>
                </div>}
                {loged && <div className="max-[1100px]:hidden">
                    <ul className="flex gap-5">
                        <li>
                            <Link to={"/properties"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">İlanlar</Link>
                        </li>
                        <li>
                            <Link to={"/companies"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">Firmalar</Link>
                        </li>
                        <li>
                            <Link to={"/properties/create"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">Yeni İlan Oluştur</Link>
                        </li>
                        <li>
                            <Link to={"/contacts"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">İletişim</Link>
                        </li>
                    </ul>
                </div>}
                {loged && <div className="px-7.5 max-[1100px]:hidden">
                    <input className="bg-[#c4c4c426] h-12.5 px-2 rounded-[5px] text-sm" type="text" placeholder="İlanlarda Ara" />
                </div>}
                <div className="flex items-center justify-between gap-2.5">
                    <LanguageSelect />
                    {!loged && <div className="relative">
                        <div className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] text-white font-semibold flex items-center">
                            <div className="flex rounded-l-[5px] border-r px-5 max-[992px]:px-2.5 border-r-[#ffffff38] items-center h-full hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                                <Link to={"/login"} className="flex items-center">
                                    <img className="w-7 h-7" src={person} alt="" />
                                    <p className="whitespace-nowrap max-[1400px]:hidden">Giriş Yap</p>
                                </Link>
                            </div>
                            <div onClick={() => setRegisterShown(prev => !prev)} className="h-full max-[992px]:hidden rounded-r-[5px] flex px-1.5 items-center justify-center hover:bg-[#048B99] hover:shadow-[0_0_30px_#048B99] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <img className="w-4.5 h-4.5" src={whiteDownArrow} alt="" />
                            </div>
                        </div>
                        {registerShown && <div className="absolute w-full bg-[#27C5D2] text-sm font-semibold cursor-pointer max-w-full text-white py-2 px-2.5 mt-0.5 rounded-[5px] flex items-center gap-1 hover:pl-4 transition-all duration-300 ease-in-out">
                            <img className="w-2.5 h-2.5" src={arrowRight} alt="" />
                            <Link to={"/register"} className="w-full" href="">Kayıt Ol</Link>
                        </div>}
                    </div>}
                    {!loged && 
                        <div onClick={() => setSidebarShown(true)} className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] hidden text-white font-semibold max-[992px]:w-12.5 max-[992px]:px-2.5 max-[992px]:flex items-center justify-center">
                            <img className="w-4 h-4" src={whiteMenu} alt="" />
                        </div>
                    }
                    {!loged && <div className="relative">
                        <div className="bg-[#048B99] cursor-pointer flex items-center h-12.5 max-[992px]:hidden rounded-[5px] text-white font-semibold">
                            <div className="flex items-center px-5 h-full rounded-l-[5px] border-r border-r-[#ffffff38] gap-1 hover:bg-[#026872] transition-colors duration-300 ease-in-out">
                                <Link to={"/application"} className="flex items-center">
                                    <img className="w-5 h-5" src={plus} alt="" />
                                    <p className="whitespace-nowrap max-[1400px]:hidden">Firma Başvurusu</p>
                                </Link>
                            </div>
                            <div onClick={() => setApplicationShown(prev => !prev)} className="flex h-full rounded-r-[5px] px-1.5 items-center justify-center hover:bg-[#026872] hover:shadow-[0_0_30px_#026872] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <img className="w-4.5 h-4.5" src={whiteDownArrow} alt="" />
                            </div>
                        </div>
                        {applicationShown && <div className="absolute w-full bg-[#048B99] text-sm font-semibold cursor-pointer max-w-full text-white py-2 px-2.5 mt-0.5 rounded-[5px] flex items-center gap-1 hover:pl-4 transition-all duration-300 ease-in-out">
                            <img className="w-2.5 h-2.5" src={arrowRight} alt="" />
                            <Link to={"/check"}>Başvuru Sorgulama</Link>
                        </div>}
                    </div>}
                    {loged && <div className="relative">
                        <button onClick={() => setNotShown(prev => !prev)} className="w-12.5 h-12.5 bg-[#f8f8f8] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <img className="w-6 h-6" src={notification} alt="" />
                        </button>
                        <div className="absolute -top-1 -right-1 text-[10px] text-[#858585] bg-[#FFCA64] rounded-full w-5 h-5 flex items-center justify-center font-extrabold">
                            123
                        </div>
                        {notShown && <div className="absolute z-50 w-75 rounded-lg bg-white right-0 shadow-[0_0_30px_rgba(0,0,0,0.1)] py-3.75">
                            <div className="bg-[#27C5D2] p-7.5 rounded-t-lg">
                                <p className="text-white text-sm mb-5">
                                    Okunmamış 129 Bildirim
                                </p>
                                <button className="bg-white text-xs rounded-lg py-2.5 px-5 font-medium cursor-pointer whitespace-nowrap hover:bg-[#ffca64]">
                                    Tümünü Okundu Olarak İşaretle
                                </button>
                            </div>
                            <div className="max-h-[50vh] overflow-auto bg-white mb-5 p-3.75">
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                            </div>
                            <div className="text-center w-full px-3.75">
                                <button className="bg-[#eee] w-full text-[#727272] text-sm font-medium py-2.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white hover:shadow-[0_0_30px_#27C5D2] transition[colors,shadow] duration-300 ease-in-out">
                                    <Link to={"/notifications"}>Tüm Bildirimleri Gör</Link>
                                </button>
                            </div>
                        </div>}
                    </div>}
                    {loged && <button onClick={() => setOfferModalShown(prev => !prev)} className="w-12.5 max-[1100px]:hidden h-12.5 flex items-center justify-center rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                        <img className="w-5 h-5" src={folder} alt="" />
                    </button>}
                    {loged && <Link to={"/company"} className="h-12.5 px-5 max-[1100px]:hidden text-white flex gap-2.5 items-center justify-center rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                        <img className="object-cover w-5 h-5" src={shop} alt="" />
                        <span className="max-[1400px]:hidden">Portföyüm</span>
                    </Link>}
                    {loged && <div className="relative">
                        <div className="flex">
                            <div className="h-12.5 border-r border-r-[#ffffff38]">
                                <div className="flex items-center h-full px-5 max-[1100px]:px-2.5 rounded-l-[5px] max-[1100px]:rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                                    <img className="object-cover w-7 h-7" src={person} alt="" />
                                    <Link to={"/profile"} className="text-white max-[1400px]:hidden">Hesabım</Link>
                                </div>
                            </div>
                            <div onClick={() => setAccountShown(prev => !prev)} className="flex max-[1100px]:hidden items-center justify-center bg-[#27C5D2] rounded-r-[5px] w-7.5 cursor-pointer hover:bg-[#026872] hover:shadow-[0_0_30px_#026872] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <img className=" w-4 h-4" src={whiteDownArrow} alt="" />
                            </div>
                        </div>
                        {accountShown && <div className="bg-[#27C5D2] absolute w-full top-full mt-0.5 rounded-[5px] px-2.5">
                            <div className="mt-2.5 pb-1.25 border-b border-b-[#FFFFFF80]">
                                <p className="text-white text-sm font-semibold">Pigasoft</p>
                                <p className="text-white text-xs font-medium">Sistem Admin</p>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex items-center py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <img className="w-3 h-3 mr-1.25" src={arrowRight} alt="" />
                                        <Link to={"/wishlist"} className="text-white text-sm">Favorilerim</Link>
                                    </li>
                                    <li className="flex items-center py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <img className="w-3 h-3 mr-1.25" src={arrowRight} alt="" />
                                        <Link to={"/offers"} className="text-white text-sm truncate">
                                            Müşteriye gönderilen teklifler
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <img className="w-3 h-3 mr-1.25" src={arrowRight} alt="" />
                                        <Link to={"/support"} className="text-white text-sm">
                                            Yardım & Destek
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <img className="w-3 h-3 mr-1.25" src={arrowRight} alt="" />
                                        <Link className="text-white text-sm">Yönetim Paneli</Link>
                                    </li>
                                    <li className="flex items-center py-2 whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis hover:pl-2 transition-normal duration-300 ease-in-out">
                                        <img className="w-3 h-3 mr-1.25" src={arrowRight} alt="" />
                                        <span className="text-white text-sm">
                                            Çıkış Yap
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    </div>}
                    {loged && 
                        <div onClick={() => setSidebarShown(true)} className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] hidden text-white font-semibold max-[992px]:w-12.5 max-[992px]:px-2.5 max-[992px]:flex items-center justify-center">
                            <img className="w-4 h-4" src={whiteMenu} alt="" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}