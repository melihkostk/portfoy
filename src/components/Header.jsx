import logo from "../assets/logo.svg"
import turkey from "../assets/turkey.svg"
import english from "../assets/en.svg"
import russia from "../assets/ru.svg"
import downArrow from "../assets/down-arrow.png"
import { Link } from "react-router-dom"
import React from "react"

export function Header() {
    const [languageShown , setLanguageShown] = React.useState(false);

    return (
        <div className="py-7.5 w-full max-w-350">
            <div className="flex items-center justify-between">
                <div className="w-55 min-w-55">
                    <img className="max-w-full" src={logo} alt="" />
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
                    <div onMouseLeave={() => setLanguageShown(false)} onMouseEnter={() => setLanguageShown(true)} className="relative">
                        <div className="text-[#202529] hover:text-white cursor-pointer flex items-center justify-start gap-2.5 h-12.5 bg-white px-5 hover:bg-[#B7B9BF] transition-colors duration-300 ease-in-out rounded-[5px]">
                            <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                            <p>Türkçe</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                        {languageShown && <ul className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-[10px] p-5 w-40 min-w-full absolute">
                            <li className="flex items-center gap-2.5 pb-2 border-b border-b-[#E5E5EA] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                                <p className="font-semibold text-sm">Türkçe</p>
                            </li>
                            <li className="flex items-center gap-2.5 py-2 border-b border-b-[#E5E5EA] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={english} alt="" />
                                <p className="font-semibold text-sm">English</p>
                            </li>
                            <li className="flex items-center gap-2.5 pt-2 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={russia} alt="" />
                                <p className="font-semibold text-sm">Русский</p>
                            </li>
                        </ul>}
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] cursor-pointer px-5 h-12.5 rounded-[5px] text-white font-semibold hover:bg-[#048B99] transition-colors duration-300 ease-in-out">Giriş Yap</button>
                    </div>
                    <div>
                        <button className="bg-[#048B99] cursor-pointer px-5 h-12.5 rounded-[5px] text-white font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out">Firma başvurusu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}