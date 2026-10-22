import { LanguageSelect } from "../components/LanguageSelect";
import { Link } from "react-router-dom";
import { AppLinks } from "../components/AppLinks";
import logo from "../assets/logo.svg"
import t from "../assets/t.png"
import { useEffect, useState } from "react";
import { getTranslation } from "../services/translation";
import { ClipLoader } from "react-spinners"

export function Check({ locale, setLocale }) {

    const [translation , setTranslation] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    return (
        <div className="w-full flex flex-col items-center justify-center font-sf">
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="w-full max-w-[90%]">
                <div className="flex items-center max-[992px]:flex-col">
                    <div className="pr-12.5 flex-1">
                        <div>
                            <LanguageSelect setLocale={setLocale} locale={locale} />
                        </div>
                        <div className="w-55 mt-7.5 mb-25">
                            <Link to={"/"}>
                                <img className="max-w-full" src={logo} alt="" />
                            </Link>
                        </div>
                        <div>
                            <h1 className="mb-5 text-[25px] text-black font-medium">{translation?.data?.business?.registration_page_section_title}</h1>
                            <p className="mb-4 text-[#666666] font-medium">
                               {translation?.data?.business?.registration_page_section_description}
                            </p>
                            <ul className="list-disc text-[#666666] pl-8 mb-4 font-medium">
                                <li>{translation?.data?.business?.registration_page_section_list_item_1}</li>
                                <li>{translation?.data?.business?.registration_page_section_list_item_2}</li>
                                <li>{translation?.data?.business?.registration_page_section_list_item_3}</li>
                                <li>{translation?.data?.business?.registration_page_section_list_item_4}</li>
                            </ul>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/"} href="">
                                {translation?.data?.business?.return_portfoy}
                            </Link>
                            <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/application"} href="">
                                {translation?.data?.business?.company_application}
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 p-12.5 max-[992px]:w-full max-[992px]:p-0 mt-12.5">
                        <div className="mb-15">
                            <h2 className="text-[#686868] text-lg font-medium uppercase">
                                {translation?.data?.business?.application_check}
                            </h2>
                            <p className="text-sm text-[#A6A6A6] font-medium">
                                {translation?.data?.business?.application_check_section_description}
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col mb-12.5 mx-2.5">
                                <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="application">{translation?.data?.business?.application_code_or_your_email}</label>
                                <div className="flex items-center relative">
                                    <img className="absolute w-4.5 h-4.5 left-3" src={t} alt="" />
                                    <input type="text" name="application" id="application" className="border border-[#EDEDED] rounded-lg w-full h-10 pl-10 font-medium" placeholder={translation?.data?.business?.application_code_or_your_email} required />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="bg-[#27C5D2] max-[992px]:w-full text-white font-medium w-1/2 py-3 rounded-lg hover:bg-[#026872] hover:shadow-[0_0_30px_#27C5D2] transition-[background-color,box-shadow] duration-300 ease-in-out cursor-pointer">{translation?.data?.business?.application_check}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb] mt-40 mb-15">
                <AppLinks translation={translation} />
            </div>
        </div>
    )
}