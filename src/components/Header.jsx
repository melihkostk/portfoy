import logo from "../assets/logo.svg"
import turkey from "../assets/turkey.svg"
import english from "../assets/en.svg"
import russia from "../assets/ru.svg"
import downArrow from "../assets/down-arrow.png"
import whiteDownArrow from "../assets/white-down-arrow.png"
import { Link } from "react-router-dom"
import person from "../assets/person.png"
import arrowRight from "../assets/arrow-right.png"
import plus from "../assets/plus.png"
import React from "react"

export function Header() {
    const [languageShown, setLanguageShown] = React.useState(false);
    const [registerShown, setRegisterShown] = React.useState(false);
    const [applicationShown , setApplicationShown] = React.useState(false);

    return (
        <div className="py-7.5 w-full max-w-350">
            <div className="flex items-center justify-between">
                <div className="w-55 min-w-55">
                    <Link to={"/"}>
                        <img className="max-w-full" src={logo} alt="" />
                    </Link>
                </div>
                <div>
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
                </div>
                <div className="flex items-center justify-between gap-2.5">
                    <div onMouseLeave={() => setLanguageShown(false)} onMouseEnter={() => setLanguageShown(true)} className="rounded-[5px] relative hover:bg-[#B7B9BF] hover:text-white text-[#202529] transition-colors duration-300 ease-in-out">
                        <div className="cursor-pointer flex items-center justify-start gap-2.5 h-12.5 px-5">
                            <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                            <p className="font-semibold">Türkçe</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                        {languageShown && <ul className="bg-white z-50 shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-[10px] p-5 w-40 min-w-full absolute">
                            <li className="text-[#212529] flex items-center gap-2.5 pb-2 border-b border-b-[#E5E5EA] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                                <p className="font-semibold text-sm">Türkçe</p>
                            </li>
                            <li className=" text-[#212529] flex items-center gap-2.5 py-2 border-b border-b-[#E5E5EA] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={english} alt="" />
                                <p className="font-semibold text-sm">English</p>
                            </li>
                            <li className=" text-[#212529] flex items-center gap-2.5 pt-2 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={russia} alt="" />
                                <p className="font-semibold text-sm">Русский</p>
                            </li>
                        </ul>}
                    </div>
                    <div className="relative">
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
                    </div>
                    <div className="relative">
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
                    </div>
                </div>
            </div>
        </div>
    )
}