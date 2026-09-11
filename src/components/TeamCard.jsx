import verticalMenu from "../assets/menu-vertical.png"
import grayPhone from "../assets/gray-phone.png"
import wp from "../assets/wp.png"
import grayMail from "../assets/gray-mail.png"
import { useState } from "react"

export function TeamCard({ name, role, email , avatar, phone, code, page , id , is_active , handleToggleStatus , onEditClick}) {

    const [optionsShown , setOptionsShown] = useState(false);

    return (
        <div className="flex flex-col relative items-center justify-start m-3.75 border border-[#dedede] max-[992px]:my-3.75 max-[992px]:mx-0 max-[992px]:w-full rounded-lg pt-8.75 p-3.75 w-[22%]">
            {page !== "companiesDetail" && <div onClick={() => setOptionsShown(prev => !prev)} className="absolute w-4 h-4 top-6 right-4 cursor-pointer">
                <img src={verticalMenu} alt="" />
            </div>}
            {!is_active && page==="companyTeam" && <div className="absolute bg-[#ffca64] top-6 left-5 text-[#212529] uppercase text-xs rounded-lg py-1.25 px-2 font-semibold">
                Pasif
            </div>}
            {optionsShown && <div className="absolute bg-white rounded-lg border top-12 -right-20 border-[#f8f8f8] py-2 shadow-[0_0_30px_rgba(0,0,0,0.1)] z-50">
                <div className="py-1 px-4 text-[#747474] cursor-pointer hover:text-black transition-colors duration-300 ease-in-out">
                    <p onClick={() => handleToggleStatus(id)} className="text-sm">{is_active ? "Bu kişinin hesabını pasife al" : "Bu kişinin hesabını aktif et"}</p>
                </div>
                {<div className={`py-1 px-4 text-[#747474] ${role === "Genel Müdür" ? "" : "cursor-pointer hover:text-black transition-colors duration-300 ease-in-out" }`}>
                    <button disabled={role === "Genel Müdür"} onClick={() => {onEditClick(); setOptionsShown(false)}} className={`${role === "Genel Müdür" ? "opacity-50" : "cursor-pointer" } text-sm`}>Düzenle</button>
                </div>}
                <div className="py-1 px-4 text-[#747474] cursor-pointer hover:text-black transition-colors duration-300 ease-in-out">
                    <p className="text-sm">Yetkileri düzenleyin</p>
                </div>
            </div>}
            <div className="text-center">
                <img className="w-20 h-20 rounded-full mb-5" src={avatar} alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-xl text-[#212529] font-medium mb-5">{name}</h2>
                <ul className="text-sm text-[#7e7e7e] mb-7.5">
                    <li>{role}</li>
                </ul>
                {page !== "companiesDetail" && <div className="flex flex-col items-center">
                    <p className="uppercase text-[13px] text-[#bbbbbb] font-semibold">İletişim Bilgileri</p>
                    {phone && <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={grayPhone} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href="tel:(543) 431 56 38">
                            {code} {phone}
                        </a>
                    </div>}
                    {phone && <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={wp} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href="https://wa.me/905434315638">
                            Whatsapp'dan mesaj gönder
                        </a>
                    </div>}
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={grayMail} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href="mailto:bborukk@gmail.com">
                            {email}
                        </a>
                    </div>
                </div>}
            </div>
        </div >
    )
}