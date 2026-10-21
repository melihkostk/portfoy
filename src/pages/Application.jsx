import logo from "../assets/logo.svg"
import video from "../assets/video-cover.png"
import play from "../assets/play.png"
import person from "../assets/gray-person.png"
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import location from "../assets/location.png"
import menu from "../assets/menu.png"
import pdf from "../assets/pdf.png"
import file from "../assets/file.png"
import downArrow from "../assets/down-arrow.png"
import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { LanguageSelect } from "../components/LanguageSelect"
import { useEffect, useState } from "react"
import { getTranslation } from "../services/translation"

export function Application({ locale }) {

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        getTranslation(locale).then(setTranslation)
    }, [locale])

    return (
        <div className="w-full flex flex-col items-center justify-center font-sf">
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col">
                    <div className="flex-1 pr-12.5">
                        <div>
                            <LanguageSelect />
                        </div>
                        <div className="mt-7.5 mb-25 w-55">
                            <Link to={"/"}>
                                <img className="max-w-full" src={logo} alt="" />
                            </Link>
                        </div>
                        <div>
                            <div className="relative max-w-110 mb-7.5 shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:opacity-50 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-[opacity,box-shadow] duration-300 ease-in-out">
                                <a href="https://demo.pigasoft.com/portfoy/public/storage/videos/1-video-firma-basvurusu.mp4" data-fancybox>
                                    <img className="w-full object-cover" src={video} alt="" />
                                </a>
                                <img className="border-6 border-[#27C5D2] rounded-full p-3 shadow-[0_0_60px_#27C5D2] bg-transparent backdrop-blur-sm absolute top-[40%] left-[42%] z-40" src={play} alt="" />
                            </div>
                            <h1 className="mb-5 text-[25px] font-semibold">{translation?.data?.business?.registration_page_section_title}</h1>
                            <p className="text-[#666666] font-medium mb-4">
                                {translation?.data?.business.registration_page_section_description}
                            </p>
                            <ul className="list-disc mb-4 pl-8">
                                <li className="text-[#666666]">
                                    {translation?.data?.business?.registration_page_section_list_item_1}
                                </li>
                                <li className="text-[#666666]">
                                    {translation?.data?.business?.registration_page_section_list_item_2}
                                </li>
                                <li className="text-[#666666]">
                                    {translation?.data?.business?.registration_page_section_list_item_3}
                                </li>
                                <li className="text-[#666666]">
                                    {translation?.data?.business?.registration_page_section_list_item_4}
                                </li>
                            </ul>
                            <div className="flex gap-2 flex-wrap">
                                <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/"} href="">
                                    {translation?.data?.business?.return_portfoy}
                                </Link>
                                <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/check"} href="">
                                    {translation?.data?.business?.application_check}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-12.5 max-[992px]:w-full max-[992px]:p-0 max-[992px]:mt-12.5">
                        <div className="mb-15">
                            <h2 className="text-[#686868] mb-2 text-[18px] uppercase font-medium">{translation?.data?.business?.company_application_form}</h2>
                            <p className="text-sm text-[#a6a6a6] font-medium">{translation?.data?.business?.please_fill_fields}</p>
                        </div>
                        <div>
                            <form action="">
                                <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">{translation?.data?.business?.personal_info}</h3>
                                <div className="mb-12.5 flex flex-col flex-wrap gap-3.75">
                                    <div className="flex flex-col mx-2.5">
                                        <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.fullname}</label>
                                        <div className="relative flex items-center ">
                                            <img className="w-7 h-7 absolute bottom-2 left-2" src={person} alt="" />
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.fullname} required />
                                        </div>
                                    </div>
                                    <div className="flex max-[992px]:flex-col max-[992px]:gap-3.75">
                                        <div className="flex flex-col mx-2.5 flex-1 ">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.your_phone}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-6 h-6 absolute bottom-2 left-2" src={phone} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.your_phone} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mx-2.5 flex-1">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.your_email}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-5 h-5 absolute bottom-2 left-2" src={mail} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.your_email} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">{translation?.data?.business?.location_info}</h3>
                                    <div className="flex flex-col gap-3.75">
                                        <div className="flex justify-between border border-[#EDEDED] rounded-lg">
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <p>Ülke Seçin</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <p>İl Seçin</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <p>İlçe Seçin</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <p>Mahalle</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.full_address}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-6 h-6 absolute bottom-2 left-2" src={location} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.full_address} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">{translation?.data?.business?.company_info}</h3>
                                    <div className="flex flex-wrap gap-3.75 items-start max-[992px]:flex-col">
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.company_title}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-7 h-7 absolute bottom-2 left-2" src={person} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.company_title} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.activity_area}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-4 h-4 absolute top-3.5 left-2" src={menu} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.activity_area} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.tax_plate_file}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={pdf} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.choose?.file} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.tax_number}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={file} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.tax_number} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.licence_file}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={pdf} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.choose?.file} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">{translation?.data?.business?.licence_number}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={file} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder={translation?.data?.business?.licence_number} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">{translation?.data?.business?.legal_responsibilities}</h3>
                                    <div className="flex items-center gap-1.25">
                                        <input className="cursor-pointer w-5 h-5" type="checkbox" required />
                                        <label className="text-sm text-[#868686] font-medium" htmlFor="">
                                            {translation?.data?.business?.registration_page_legal_responsibilities_label?.replace(/<[^>]+>/g, "")}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-[#27C5D2] text-white font-medium w-1/2 py-3 rounded-lg max-[992px]:w-full hover:bg-[#026872] hover:shadow-[0_0_30px_#27C5D2] transition-[background-color,box-shadow] duration-300 ease-in-out cursor-pointer">{translation?.data?.business?.submit}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb] mt-30 mb-15">
                <AppLinks />
            </div>
        </div>
    )
}