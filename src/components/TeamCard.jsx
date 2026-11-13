import grayPhone from "../assets/gray-phone.png"
import wp from "../assets/wp.png"
import grayMail from "../assets/gray-mail.png"
import { useState } from "react"
import removePerson from "../assets/person-off.png"
import edit from "../assets/edit.png"
import list from "../assets/list.png"
import { useAppContext } from "../context/AppContext"

export function TeamCard({ name, whatsapp ,roleKey , setPermissionName , setPermissionRole , handleGetPermissions , setEditPermissionShown, role, email, avatar, phone, code, page, id, is_active, handleToggleStatus, onEditClick }) {
    const { translation } = useAppContext();

    const [optionsShown, setOptionsShown] = useState(false);

    return (
        <div className="flex flex-col relative items-center justify-start m-3.75 border border-[#dedede] max-[992px]:my-3.75 max-[992px]:mx-0 max-[992px]:w-full rounded-lg pt-8.75 p-3.75 w-[calc(25%-30px)]">
            {page !== "companiesDetail" && <div onClick={() => setOptionsShown(prev => !prev)} className="absolute w-4 h-4 top-6 right-4 cursor-pointer text-[#818181] hover:text-[#27c5d2] transition-colors duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical preview-icon"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </div>}
            {!is_active && page === "companyTeam" && <div className="absolute bg-[#ffca64] top-6 left-5 text-[#212529] uppercase text-xs rounded-lg py-1.25 px-2 font-semibold">
                {translation?.data?.business?.statusess?.passive}
            </div>}
            {optionsShown && <div className="absolute bg-white rounded-lg border top-[12%] right-0 border-[#f8f8f8] py-2 shadow-[0_0_30px_rgba(0,0,0,0.1)] z-50">
                <div className="py-1 px-4 text-[#747474] cursor-pointer hover:text-black transition-colors duration-300 ease-in-out">
                    <div className="flex" onClick={() => handleToggleStatus(id)}>
                        <img className="w-5 h-5 mr-2" src={removePerson} alt="" />
                        <p className="text-sm font-medium">{is_active ? translation?.data?.business?.passive_personal : translation?.data?.business?.reactive_personal}</p>
                    </div>
                </div>
                {<div className={`py-1 px-4 text-[#747474] ${role === translation?.data?.business?.roles?.chairmen ? "" : "cursor-pointer hover:text-black transition-colors duration-300 ease-in-out"}`}>
                    <button disabled={roleKey === "chairmen"} onClick={() => { onEditClick(); setOptionsShown(false) }} className={`${roleKey === "chairmen" ? "opacity-50" : "cursor-pointer"} text-sm flex`}>
                        <img className="w-5 h-5 mr-2" src={edit} alt="" />
                        <p className="text-sm font-medium">{translation?.data?.business?.edit}</p>
                    </button>
                </div>}
                <div onClick={() => { setEditPermissionShown(true); setOptionsShown(false); handleGetPermissions(id); setPermissionName(name); setPermissionRole(role) }} className="py-1 flex px-4 text-[#747474] cursor-pointer hover:text-black transition-colors duration-300 ease-in-out">
                    <img className="w-5 h-5 mr-2" src={list} alt="" />
                    <p className="text-sm font-medium">{translation?.data?.business?.edit_personal_permissions}</p>
                </div>
            </div>}
            <div className="text-center">
                <img className="w-20 h-20 rounded-full mb-5" src={avatar} alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-xl text-[#212529] font-medium mb-5">{name}</h2>
                <ul className="text-sm text-[#7e7e7e] mb-7.5 font-medium">
                    <li>{role}</li>
                </ul>
                {page !== "companiesDetail" && <div className="flex flex-col items-center">
                    <p className="uppercase text-[13px] text-[#bbbbbb] font-semibold">{translation?.data?.business?.contact_info}</p>
                    {phone && <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={grayPhone} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href={`tel:${phone}`}>
                            {code} {phone}
                        </a>
                    </div>}
                    {phone && <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={wp} alt="" />
                        <a target="_blank" className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href={whatsapp}>
                            {translation?.data?.business?.write_on_whatsapp}
                        </a>
                    </div>}
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={grayMail} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href={`mailto:${email}`}>
                            {email}
                        </a>
                    </div>
                </div>}
            </div>
        </div >
    )
}