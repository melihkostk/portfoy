import bgImage from "../assets/company-bg.png"
import { Link } from "react-router-dom"
import { getCompanyInfo } from "../services/myCompanyApi"
import { useEffect, useState } from "react"

export function CompanyHeader({page}) {

    const [companyInfo , setCompanyInfo] = useState([])

    useEffect(() => {
        getCompanyInfo().then(setCompanyInfo);
    },[])

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="w-full bg-cover bg-center pt-7.5 flex justify-center">
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between items-start mb-20">
                    <div className="flex items-center gap-3.75">
                        <div className="w-20 h-20">
                            <img className="w-full h-full object-contain rounded-full" src={companyInfo.logo} alt="" />
                        </div>
                        <div className="max-w-full">
                            <p className="text-white text-xl mb-2">{companyInfo.name}</p>
                            <ul className="flex text-white gap-5 text-sm max-[1005px]:hidden">
                                <li>
                                    {companyInfo.created_at}
                                </li>
                                <li>
                                    {companyInfo.type}
                                </li>
                                <li>
                                    {companyInfo.code}
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
                <div className="flex justify-between">
                    <ul className="flex gap-2.5 items-end max-w-full overflow-auto">
                        <li className={`${page === "company" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company"}>Portföy</Link>
                        </li>
                        <li className={`${page === "team" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/team"}>Ekip</Link>
                        </li>
                        <li className={`${page === "location" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/contacts"}>Konum & İletişim</Link>
                        </li>
                        <li className={`${page === "customers" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/customers"}>Müşteriler</Link>
                        </li>
                        <li className={`${page === "proposals" ? "bg-white" : "bg-[#ffffffb3]"} whitespace-nowrap font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer`}>
                            <Link to={"/company/proposals"}>Teklifler</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-2.5 -mt-12 max-[1005px]:hidden">
                        <Link to={"/company/subscription"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">Aboneliği Yönet</Link>
                        <Link to={"/company/summary"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">Firma özeti</Link>
                        <Link to={"/company/edit"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">Firma profilini düzenle</Link>
                        <Link to={"/company/settings"} className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out">Firma tercihleri</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}