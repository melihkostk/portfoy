import bgImage from "../assets/company-bg.png"
import { Link } from "react-router-dom"
import settingsIcon from "../assets/settings.png"
import pen from "../assets/pen.png"
import box from "../assets/box.png"
import graph from "../assets/graph.png"
import pp from "../assets/default-company.png"
import phone from "../assets/white-phone.png"
import mail from "../assets/white-mail.png"
import badge from "../assets/badge.png"
import { useAppContext } from "../context/AppContext"
import img from "../assets/img.png"
import { updateLogo } from "../services/myCompanyApi"

export function CompanyHeader({ page, id, name, created_at, type, badges, code, setLoaded , email , phoneCode , phoneNumber }) {
    const { translation } = useAppContext();

    function handleLogoUpdate(logo) {
        setLoaded(false)
        updateLogo(logo).then(data => {
            if (data.status === "error") {
                console.log("error")
            }
            else {
                console.log("success")
            }
        }).finally(() => setLoaded(true))
    }

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="w-full bg-cover bg-center pt-7.5 flex justify-center">
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between items-start h-[20vh]">
                    <div className="flex items-center gap-3.75">
                        <div className="w-20 h-20 bg-white rounded-full relative">
                            <img className="w-full h-full object-contain rounded-full" src={pp} alt="" />
                            {page !== "companyDetail" && <div className="absolute border border-[#f7f7f7] cursor-pointer flex items-center justify-center w-7.5 h-7.5 rounded-full bg-white bottom-0 left-[70%] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_#FFFFFF80] transition-shadow duration-300 ease-in-out">
                                <label className="flex items-center justify-center cursor-pointer" htmlFor="cover">
                                    <img className="w-5 h-5" src={img} alt="" />
                                </label>
                                <input onChange={(e) => {
                                    const logo = e.target.files?.[0]
                                    handleLogoUpdate(logo)
                                }} className="hidden" id="cover" name="cover" type="file" accept="image/*" />
                            </div>}
                        </div>
                        <div className="max-w-full">
                            <p className="text-white font-semibold text-xl mb-2">{name}</p>
                            <ul className="flex items-center text-white gap-5 text-sm max-[1005px]:hidden">
                                <li className="flex items-start gap-1 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star preview-icon"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                    {created_at}
                                </li>
                                <li className="flex items-center gap-1 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu preview-icon"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                                    {type}
                                </li>
                                <li className="font-semibold flex items-center">
                                    {badges && <img className="w-5 h-6 mr-2" src={badge} alt="" />}
                                    {page === "companyDetail" ? badges : code}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center text-white text-sm gap-5 max-[1005px]:hidden">
                            <li className="opacity-80 cursor-pointer flex items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <img className="w-5 h-5 mr-1" src={phone} alt="" />
                                <p>{phoneCode} {phoneNumber}</p>
                            </li>
                            <li className="opacity-80 cursor-pointer flex items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <img className="w-4 h-4 mr-2" src={mail} alt="" />
                                <p>{email}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-7.5">
                    {page !== "companyDetail" && <div className="flex items-center gap-2.5 -mt-12 min-[1233px]:hidden">
                        <Link to={"/company/subscription"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-4 h-4" src={box} alt="" />
                        </Link>
                        <Link to={"/company/summary"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-4 h-4" src={graph} alt="" />
                        </Link>
                        <Link to={"/company/edit"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-5 h-5" src={pen} alt="" />
                        </Link>
                        <Link to={"/company/settings"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-4 h-4" src={settingsIcon} alt="" />
                        </Link>
                    </div>}
                </div>
                <div className="flex justify-between">
                    <ul className="flex gap-2.5 items-end max-w-full max-[1233px]:overflow-auto whitespace-nowrap">
                        {page !== "companyDetail" && <li className={`${page === "company" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company"}>{translation?.data?.business?.portfolio}</Link>
                        </li>}
                        {page === "companyDetail" &&
                            <li className={`${page === "company" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                                <Link to={`/companies/${id}`}>{translation?.data?.business?.portfolio}</Link>
                            </li>}
                        {page !== "companyDetail" && <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/team"}>{translation?.data?.business?.company_team}</Link>
                        </li>}
                        {page === "companyDetail" && <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={`/companies/${id}/team`}>{translation?.data?.business?.company_team}</Link>
                        </li>}
                        {page !== "companyDetail" && <li className={`${page === "location" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/contacts"}>{translation?.data?.business?.company_contacts}</Link>
                        </li>}
                        {page === "companyDetail" && <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={`/companies/${id}/contacts`}>{translation?.data?.business?.company_contacts}</Link>
                        </li>}
                        {page !== "companyDetail" && (
                            <>
                                <li className={`${page === "customers" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                                    <Link to={"/company/customers"}>{translation?.data?.business?.customers}</Link>
                                </li>
                                <li className={`${page === "proposals" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                                    <Link to={"/company/proposals"}>{translation?.data?.business?.proposals}</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {page !== "companyDetail" && <div className="flex items-center gap-2.5 -mt-12 max-[1233px]:hidden">
                        <Link to={"/company/subscription"} className={`py-2 px-4 bg-white ${page === "subscription" ? "opacity-100" : "opacity-70"} text-black font-bold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out`}>
                            <img className="w-4 h-4" src={box} alt="" />
                            {translation?.data?.business?.manage_subscription}
                        </Link>
                        <Link to={"/company/summary"} className={`py-2 px-4 bg-white ${page === "summary" ? "opacity-100" : "opacity-70"} text-black font-bold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out`}>
                            <img className="w-4 h-4" src={graph} alt="" />
                            {translation?.data?.business?.company_summary}
                        </Link>
                        <Link to={"/company/edit"} className={`py-2 px-4 bg-white ${page === "edit" ? "opacity-100" : "opacity-70"} text-black font-bold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out`}>
                            <img className="w-5 h-5" src={pen} alt="" />
                            {translation?.data?.business?.company_edit}
                        </Link>
                        <Link to={"/company/settings"} className={`py-2 px-4 bg-white ${page === "settings" ? "opacity-100" : "opacity-70"} text-black font-bold uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out`}>
                            <img className="w-4 h-4" src={settingsIcon} alt="" />
                            {translation?.data?.business?.manage_company}
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}