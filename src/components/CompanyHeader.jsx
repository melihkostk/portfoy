import bgImage from "../assets/company-bg.png"
import { Link } from "react-router-dom"
import star from "../assets/white-star.png"
import menu from "../assets/white-menu.png"
import settingsIcon from "../assets/settings.png"
import pen from "../assets/pen.png"
import box from "../assets/box.png"
import graph from "../assets/graph.png"

export function CompanyHeader({ page, id, name, created_at, type, badges, logo, code }) {

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="w-full bg-cover bg-center pt-7.5 flex justify-center">
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between items-start mb-20">
                    <div className="flex items-center gap-3.75">
                        <div className="w-20 h-20">
                            <img className="w-full h-full object-contain rounded-full" src={logo} alt="" />
                        </div>
                        <div className="max-w-full">
                            <p className="text-white text-xl mb-2">{name}</p>
                            <ul className="flex text-white gap-5 text-sm max-[1005px]:hidden">
                                <li className="flex items-start gap-1">
                                    <img className="w-4 h-4" src={star} alt="" />
                                    {created_at}
                                </li>
                                <li className="flex items-center gap-1">
                                    <img className="w-3 h-3" src={menu} alt="" />
                                    {type}
                                </li>
                                <li>
                                    {page === "companyDetail" ? badges : code}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center text-white text-sm gap-5 max-[1005px]:hidden">
                            <li className="opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                90 (553) 300 68 25
                            </li>
                            <li className="opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                loos.katya@yandex.ru
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {page !== "companyDetail" && <div className="flex items-center gap-2.5 -mt-12 min-[1233px]:hidden mb-7.5">
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
                            <Link to={"/company"}>Portföy</Link>
                        </li>}
                        {page === "companyDetail" &&
                            <li className={`${page === "company" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                                <Link to={`/companies/${id}`}>Portföy</Link>
                            </li>}
                        {page !== "companyDetail" && <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/team"}>Ekip</Link>
                        </li>}
                        {page === "companyDetail" && <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={`/companies/${id}/team`}>Ekip</Link>
                        </li>}
                        {page !== "companyDetail" && <li className={`${page === "location" ? "bg-white" : "bg-[#ffffffb3]"} hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/contacts"}>Konum & İletişim</Link>
                        </li>}
                        {page === "companyDetail" && <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={`/companies/${id}/contacts`}>Konum & İletişim</Link>
                        </li>}
                        {page !== "companyDetail" && (
                            <>
                                <li className={`${page === "customers" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                                    <Link to={"/company/customers"}>Müşteriler</Link>
                                </li>
                                <li className={`${page === "proposals" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap hover:bg-white transition-colors duration-300 ease-in-out font-medium rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                                    <Link to={"/company/proposals"}>Teklifler</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {page !== "companyDetail" && <div className="flex items-center gap-2.5 -mt-12 max-[1233px]:hidden">
                        <Link to={"/company/subscription"} className="py-2 px-4 bg-white opacity-70 text-black font-medium uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-4 h-4" src={box} alt="" />
                            Aboneliği Yönet
                        </Link>
                        <Link to={"/company/summary"} className="py-2 px-4 bg-white opacity-70 text-black font-medium uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-4 h-4" src={graph} alt="" />
                            Firma özeti
                        </Link>
                        <Link to={"/company/edit"} className="py-2 px-4 bg-white opacity-70 text-black font-medium uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-5 h-5" src={pen} alt="" />
                            Firma profilini düzenle
                        </Link>
                        <Link to={"/company/settings"} className="py-2 px-4 bg-white opacity-70 text-black font-medium uppercase flex items-center gap-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">
                            <img className="w-4 h-4" src={settingsIcon} alt="" />
                            Firma tercihleri
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}