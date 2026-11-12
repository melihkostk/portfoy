import { LanguageSelect } from "../components/LanguageSelect";
import { Link } from "react-router-dom";
import { AppLinks } from "../components/AppLinks";
import logo from "../assets/logo.svg"
import t from "../assets/t.png"
import { ClipLoader } from "react-spinners"
import { useAppContext } from "../context/AppContext";

export function Check() {

    const { translation, translationLoaded } = useAppContext();

    return (
        <div className="w-full flex flex-col items-center justify-center font-sf">
            {!translationLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="w-full h-screen max-[992px]:h-auto">
                <div className="flex items-center justify-center h-full max-[992px]:flex-col">
                    <div className="w-full flex-1 h-full flex flex-col justify-center bg-[#f7f6fb]">
                        <div className="w-[90%] ml-[10%] max-[992px]:w-[90%] max-[992px]:ml-auto max-[992px]:mr-auto">
                            <div>
                                <LanguageSelect />
                            </div>
                            <div className="w-55 mt-7.5 mb-25">
                                <Link aria-label="home" to={"/"}>
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
                    </div>
                    <div className="flex-1 max-w-[90%] p-12.5 max-[992px]:w-full max-[992px]:p-0 mt-12.5 h-full flex flex-col justify-center">
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
                                    <input type="text" name="application" id="application" className="border border-[#EDEDED] rounded-lg w-full h-10 pl-10 font-medium focus:outline-none" placeholder={translation?.data?.business?.application_code_or_your_email} required />
                                </div>
                            </div>
                            <div>
                                <button aria-label="submit" type="submit" className="bg-[#27C5D2] max-[992px]:w-full text-white font-medium w-1/2 py-3 rounded-lg hover:bg-[#026872] hover:shadow-[0_0_30px_#27C5D2] transition-[background-color,box-shadow] duration-300 ease-in-out cursor-pointer">{translation?.data?.business?.application_check}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
        </div>
    )
}