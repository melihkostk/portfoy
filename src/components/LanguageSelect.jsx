import turkey from "../assets/turkey.svg"
import english from "../assets/en.svg"
import russia from "../assets/ru.svg"
import downArrow from "../assets/down-arrow.png"
import React from "react"

export function LanguageSelect() {

    const [languageShown, setLanguageShown] = React.useState(false);
    return (
        <div onMouseLeave={() => setLanguageShown(false)} onMouseEnter={() => setLanguageShown(true)} className="rounded-[5px] relative hover:bg-[#B7B9BF] hover:text-white text-[#202529] transition-colors duration-300 ease-in-out">
            <div className="cursor-pointer flex items-center justify-start gap-2.5 h-12.5 px-5">
                <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                <p className="font-semibold max-[1400px]:hidden">Türkçe</p>
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
    )
}