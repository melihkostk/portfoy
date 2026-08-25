import bgImage from "../assets/company-bg.png"
import pg from "../assets/pg.jpg"
import { Link } from "react-router-dom"

export function CompanyHeader() {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="w-full bg-cover bg-center pt-7.5 flex justify-center">
            <div className="w-full max-w-350">
                <div className="flex justify-between items-start mb-20">
                    <div className="flex items-center gap-3.75">
                        <div className="w-20 h-20">
                            <img className="w-full h-full object-contain rounded-full" src={pg} alt="" />
                        </div>
                        <div>
                            <p className="text-white text-xl">Burak Pigasoft</p>
                            <ul className="flex text-white gap-5 text-sm">
                                <li>
                                    11 Eylül 2024
                                </li>
                                <li>
                                    Pazarlama Firması
                                </li>
                                <li>
                                    CA-20240911165635721
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center text-white text-sm gap-5">
                            <li className="opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                Website
                            </li>
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
                    <ul className="flex items-center gap-2.5">
                        <li className="bg-white font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer">
                            <Link to={"/company"}>Portföy</Link>
                        </li>
                        <li className="bg-[#ffffffb3] font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
                            <Link to={"/company/team"}>Ekip</Link>
                        </li>
                        <li className="bg-[#ffffffb3] font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
                            Konum & İletişim
                        </li>
                        <li className="bg-[#ffffffb3] font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
                            Müşteriler
                        </li>
                        <li className="bg-[#ffffffb3] font-semibold rounded-t-lg text-black pt-3 pb-2.5 px-5 cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
                            Teklifler
                        </li>
                    </ul>
                    <div className="flex items-center gap-2.5 -mt-12">
                        <a className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out" href="">Aboneliği Yönet</a>
                        <a className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out" href="">Firma özeti</a>
                        <a className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out" href="">Firma profilini düzenle</a>
                        <a className="py-2 px-4 bg-white opacity-70 text-black font-semibold uppercase text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_#FFFFFF80] hover:opacity-100 transition-[box-shadow,opacity] duration-300 ease-in-out" href="">Firma tercihleri</a>
                    </div>
                </div>
            </div>
        </div>
    )
}