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

export function Header() {
    const [registerShown, setRegisterShown] = React.useState(false);
    const [applicationShown, setApplicationShown] = React.useState(false);
    const [loged] = React.useState(true)

    return (
        <div className="py-7.5 w-full max-w-350">
            <div className="flex items-center justify-between">
                <div className="w-55 min-w-55">
                    <Link to={"/"}>
                        <img className="max-w-full" src={logo} alt="" />
                    </Link>
                </div>
                {!loged && <div>
                    <ul className="flex gap-5">
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/">Anasayfa</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/discover">Port-foy Nedir?</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/pricing">Fiyatlandırma</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/articles">Haberler</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/corporate">Kurumsal</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/contacts">İletişim</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" href="">Blog</Link>
                        </li>
                    </ul>
                </div>}
                {loged && <div>
                    <ul className="flex gap-5">
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">İlanlar</Link>
                        </li>
                        <li>
                            <Link to={"/companies"} className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">Firmalar</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">Yeni İlan Oluştur</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium">İletişim</Link>
                        </li>
                    </ul>
                </div>}
                {loged && <div className="px-7.5">
                    <input className="bg-[#c4c4c426] h-12.5 px-2 rounded-[5px] text-sm" type="text" placeholder="İlanlarda Ara" />
                </div>}
                <div className="flex items-center justify-between gap-2.5">
                    <LanguageSelect />
                    {!loged && <div className="relative">
                        <div className="bg-[#27C5D2] cursor-pointer h-12.5 rounded-[5px] text-white font-semibold flex items-center">
                            <div className="flex rounded-l-[5px] border-r px-5 border-r-[#ffffff38] items-center h-full hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                                <img className="w-7 h-7" src={person} alt="" />
                                <Link to={"/login"}>Giriş Yap</Link>
                            </div>
                            <div onClick={() => setRegisterShown(prev => !prev)} className="h-full rounded-r-[5px] flex px-1.5 items-center justify-center hover:bg-[#048B99] hover:shadow-[0_0_30px_#048B99] transition-[background-color,box-shadow] duration-300 ease-in-out">
                                <img className="w-4.5 h-4.5" src={whiteDownArrow} alt="" />
                            </div>
                        </div>
                        {registerShown && <div className="absolute w-full bg-[#27C5D2] text-sm font-semibold cursor-pointer max-w-full text-white py-2 px-2.5 mt-0.5 rounded-[5px] flex items-center gap-1 hover:pl-4 transition-all duration-300 ease-in-out">
                            <img className="w-2.5 h-2.5" src={arrowRight} alt="" />
                            <Link to={"/register"} className="w-full" href="">Kayıt Ol</Link>
                        </div>}
                    </div>}
                    {!loged && <div className="relative">
                        <div className="bg-[#048B99] cursor-pointer flex items-center h-12.5 rounded-[5px] text-white font-semibold">
                            <div className="flex items-center px-5 h-full rounded-l-[5px] border-r border-r-[#ffffff38] gap-1 hover:bg-[#026872] transition-colors duration-300 ease-in-out">
                                <img className="w-5 h-5" src={plus} alt="" />
                                <Link to={"/application"}>Firma Başvurusu</Link>
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
                    {loged && <div>
                        <button className="w-12.5 h-12.5 bg-[#f8f8f8] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <img className="w-6 h-6" src={notification} alt="" />
                        </button>
                    </div>}
                    {loged && <button className="w-12.5 h-12.5 flex items-center justify-center rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                        <img className="w-5 h-5" src={folder} alt="" />
                    </button>}
                    {loged && <Link className="h-12.5 px-5 text-white flex gap-2.5 items-center justify-center rounded-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                        <img className="object-cover w-5 h-5" src={shop} alt="" />
                        <span>Portföyüm</span>
                    </Link>}
                    {loged && <div className="flex">
                        <div className="h-12.5 border-r border-r-[#ffffff38]">
                            <Link className="flex items-center h-full px-5 rounded-l-[5px] bg-[#27C5D2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out">
                            <img className="object-cover w-7 h-7" src={person} alt="" />
                                <span className="text-white">Hesabım</span>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center bg-[#27C5D2] rounded-r-[5px] w-7.5 cursor-pointer hover:bg-[#026872] hover:shadow-[0_0_30px_#026872] transition-[background-color,box-shadow] duration-300 ease-in-out">
                            <img className=" w-4 h-4" src={whiteDownArrow} alt="" />
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}