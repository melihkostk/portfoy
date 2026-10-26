import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { useEffect, useState } from "react"
import { getTranslation } from "../services/translation";

export function NotFound({locale}) {

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        getTranslation(locale).then(setTranslation);
    }, [locale])

    return (
        <div className="flex items-center justify-center h-screen font-sf">
            <div className="w-full max-w-[90%] flex flex-col items-center">
                <div className="max-w-50 mb-7.5">
                    <img className="w-full" src={logo} alt="" />
                </div>
                <h1 className="text-[85px] text-[#27c5d2] font-semibold">404</h1>
                <p className="text-[25px] text-[#212529] font-semibold mb-2 text-center">{translation?.data?.business?.not_found_page_title}</p>
                <p className="text-base text-[#777777] text-center my-7.5 max-w-146">
                    {translation?.data?.business?.not_found_page_description}
                </p>
                <Link className="bg-[#27c5d2] text-white rounded-lg text-sm font-semibold py-2 px-5" to={"/"}>{translation?.data?.business?.home}</Link>
            </div>
        </div>
    )
}