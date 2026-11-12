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
import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { LanguageSelect } from "../components/LanguageSelect"
import { ClipLoader } from "react-spinners"
import { useAppContext } from "../context/AppContext"
import { useEffect, useState } from "react"
import check from "../assets/white-check.png"
import close from "../assets/blue-close.png"
import { getCompanyTypes } from "../services/companiesApi"
import { getAllCities, getAllCountries, getAllDistricts, getAllStreets } from "../services/filterApi"

export function Application() {

    const { translation, translationLoaded, locale } = useAppContext();

    const [read, setRead] = useState(false);

    const [areaShown, setAreaShown] = useState(false);

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getCompanyTypes(locale).then(setTypes).catch((error) => console.log(error))
    }, [locale])

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        getAllCountries().then(setCountries).catch((error) => console.log(error));
    }, [])

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        if (!selectedCountry) return;
        getAllCities(selectedCountry).then(setCities).catch((error) => console.log(error))
    }, [selectedCountry])

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");

    useEffect(() => {
        if (!selectedCity) return;
        getAllDistricts(selectedCity).then(setDistricts).catch((error) => console.log(error))
    }, [selectedCity])

    const [streets, setStreets] = useState([]);

    useEffect(() => {
        if (!selectedDistrict) return;
        getAllStreets(selectedDistrict).then(setStreets).catch((error) => console.log(error))
    }, [selectedDistrict])

    return (
        <div className="w-full flex flex-col items-center justify-center font-sf">
            {areaShown && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!translationLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            {areaShown && <div className="fixed top-1/2 left-1/2 flex flex-col items-center justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[25%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">{translation?.data?.business?.activity_areas}</h2>
                    <img onClick={() => setAreaShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="p-4 w-full">
                    {types.map((item, index) => (
                        <div className={`${index !== types.length - 1 ? "mb-2.5" : ""} text-xl text-[#4a4a4a] cursor-pointer font-semibold p-3.75 border border-[#eee] rounded-lg`} key={item.id}>
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>}
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col">
                    <div className="flex-1 pr-12.5">
                        <div>
                            <LanguageSelect />
                        </div>
                        <div className="mt-7.5 mb-25 w-55">
                            <Link aria-label="home" to={"/"}>
                                <img className="max-w-full" src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div>
                            <div className="relative max-w-110 mb-7.5 shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:opacity-50 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-[opacity,box-shadow] duration-300 ease-in-out">
                                <a aria-label="play" href="https://demo.pigasoft.com/portfoy/public/storage/videos/1-video-firma-basvurusu.mp4" data-fancybox>
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
                                <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-bold">{translation?.data?.business?.personal_info}</h3>
                                <div className="mb-12.5 flex flex-col flex-wrap gap-3.75">
                                    <div className="flex flex-col mx-2.5">
                                        <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="name">{translation?.data?.business?.fullname}</label>
                                        <div className="relative flex items-center ">
                                            <img className="w-7 h-7 absolute bottom-2 left-2" src={person} alt="" />
                                            <input id="name" name="name" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.fullname} required />
                                        </div>
                                    </div>
                                    <div className="flex max-[992px]:flex-col max-[992px]:gap-3.75">
                                        <div className="flex flex-col mx-2.5 flex-1 ">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="phone">{translation?.data?.business?.your_phone}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-6 h-6 absolute bottom-2 left-2" src={phone} alt="" />
                                                <input id="phone" name="phone" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.your_phone} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mx-2.5 flex-1">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="mail">{translation?.data?.business?.your_email}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-5 h-5 absolute bottom-2.5 left-2" src={mail} alt="" />
                                                <input id="mail" name="mail" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.your_email} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-bold">{translation?.data?.business?.location_info}</h3>
                                    <div className="flex flex-col gap-3.75">
                                        <div className="flex justify-between border border-[#EDEDED] rounded-lg">
                                            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="py-1.5 max-w-full min-w-0 w-0 flex-1 h-10 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <option value="">{translation?.data?.business?.choose?.country}</option>
                                                {countries?.data?.map(item => (
                                                    <option value={item.id} key={item.id}>{item.title}</option>
                                                ))}
                                            </select>
                                            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="py-1.5 max-w-full min-w-0 w-0 flex-1 h-10 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <option value="">{translation?.data?.business?.choose?.city}</option>
                                                {cities?.map(item => (
                                                    <option value={item.id} key={item.id}>{item.title}</option>
                                                ))}
                                            </select>
                                            <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="py-1.5 max-w-full min-w-0 w-0 flex-1 h-10 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <option value="">{translation?.data?.business?.choose?.district}</option>
                                                {districts?.map(item => (
                                                    <option value={item.id} key={item.id}>{item.title}</option>
                                                ))}
                                            </select>
                                            <select className="py-1.5 flex-1 max-w-full min-w-0 w-0 h-10 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <option value="">{translation?.data?.business?.choose?.street}</option>
                                                {streets?.map(item => (
                                                    <option value={item.id} key={item.id}>{item.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="adress">{translation?.data?.business?.full_address}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-6 h-6 absolute bottom-2 left-2" src={location} alt="" />
                                                <input id="adress" name="adress" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.full_address} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-bold">{translation?.data?.business?.company_info}</h3>
                                    <div className="flex flex-wrap gap-3.75 items-start max-[992px]:flex-col">
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="company-name">{translation?.data?.business?.company_title}</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-7 h-7 absolute bottom-2 left-2" src={person} alt="" />
                                                <input id="company-name" name="company-name" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.company_title} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <div className="flex items-center mb-2 gap-1">
                                                <label className="text-sm text-[#868686] font-medium" htmlFor="area">{translation?.data?.business?.activity_area}</label>
                                                <div onClick={() => setAreaShown(true)} className="w-3.5 h-3.5 rounded-full cursor-pointer text-sm flex items-center text-white justify-center bg-[#868686] hover:bg-[#27c5d2] transition-colors duration-300 ease-in-out">
                                                    ?
                                                </div>
                                            </div>
                                            <div className="relative flex items-center ">
                                                <img className="w-4 h-4 absolute top-3.5 left-2" src={menu} alt="" />
                                                <input id="area" name="area" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.activity_area} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="tax">{translation?.data?.business?.tax_plate_file}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={pdf} alt="" />
                                                <input id="tax" name="tax" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.choose?.file} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="number">{translation?.data?.business?.tax_number}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={file} alt="" />
                                                <input id="number" name="number" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.tax_number} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="licence">{translation?.data?.business?.licence_file}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={pdf} alt="" />
                                                <input id="licence" name="licence" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.choose?.file} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5 max-[992px]:w-full">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="licence-number">{translation?.data?.business?.licence_number}</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={file} alt="" />
                                                <input id="licence-number" name="licence-number" className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium focus:outline-none" type="text" placeholder={translation?.data?.business?.licence_number} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-bold">{translation?.data?.business?.legal_responsibilities}</h3>
                                    <div className="flex items-center gap-1.25">
                                        <input checked={read} onChange={(e) => setRead(e.target.checked)} id="read" name="readt" className="hidden" type="checkbox" required />
                                        <label className="text-sm flex items-center gap-2.5 text-[#868686] cursor-pointer font-medium select-none" htmlFor="read">
                                            <div className={`w-5 h-5 flex items-center justify-center rounded-sm border border-[#d9d9d9] ${read ? "bg-[#27c5d2]" : ""}`}>
                                                <img className="w-3 h-3" src={check} alt="" />
                                            </div>
                                            {translation?.data?.business?.registration_page_legal_responsibilities_label?.replace(/<[^>]+>/g, "")}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button aria-label="send" className="bg-[#27C5D2] text-white font-medium w-1/2 py-3 rounded-lg max-[992px]:w-full hover:bg-[#026872] hover:shadow-[0_0_30px_#27C5D2] transition-[background-color,box-shadow] duration-300 ease-in-out cursor-pointer">{translation?.data?.business?.submit}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
        </div>
    )
}