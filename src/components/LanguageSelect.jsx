import turkey from "../assets/turkey.svg"
import english from "../assets/en.svg"
import russia from "../assets/ru.svg"
import downArrow from "../assets/down-arrow.png"
import { useEffect, useState } from "react"
import { getAllLanguages } from "../services/filterApi"

export function LanguageSelect() {

    const [languageShown, setLanguageShown] = useState(false);

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        getAllLanguages().then(setLanguages)
    }, [])

    return (
        <div onMouseLeave={() => setLanguageShown(false)} onMouseEnter={() => setLanguageShown(true)} className="rounded-[5px] relative hover:bg-[#B7B9BF] hover:text-white text-[#202529] transition-colors duration-300 ease-in-out">
            <div className="cursor-pointer flex items-center justify-start gap-2.5 h-12.5 px-5">
                <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                <p className="font-semibold max-[1400px]:hidden">Türkçe</p>
                <img className="w-4 h-4" src={downArrow} alt="" />
            </div>
            {languageShown && <ul className="bg-white z-50 shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-[10px] p-5 w-40 min-w-full absolute">
                {languages?.map(item => (
                    <li className=" text-[#212529] flex items-center gap-2.5 pt-2 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                        <img className="w-5 h-5 object-fill rounded-[5px]" src={item?.flag?.url} alt="" />
                        <p className="font-semibold text-sm">{item?.native}</p>
                    </li>
                ))}
            </ul>}
        </div>
    )
}