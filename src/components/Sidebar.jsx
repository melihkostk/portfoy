import pp from "../assets/pp.svg"
import { Link } from "react-router-dom"
import React from "react"
import { useAppContext } from "../context/AppContext"

export function Sidebar({page , type , info , user}) {
    const { translation } = useAppContext();
    const [subMenu, setSubMenu] = React.useState(false)
    return (
        <div>
            <div className="mb-7.5 flex flex-col items-center justify-center p-7.5 border border-[#eee] rounded-lg w-full">
                <div>
                    <img className="w-15 h-15 rounded-full object-cover" src={pp} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[25px] mt-3.75 mb-0.75 font-semibold">Pigasoft</h1>
                    <p className="mb-4 text-[#212529]">
                        {info?.name}
                    </p>
                    <ul className="mb-10">
                        <li className="text-[#7e7e7e] bg-[#eee] text-xs py-1.25 px-2.5 rounded-lg font-semibold">{user?.data?.roles?.[0]?.title}</li>
                    </ul>
                    <p className="text-[#696969] text-sm">
                        {translation?.data?.business?.user_created_at_with_date.replace(":date" , "")} {info?.created_at}
                    </p>
                </div>
            </div>
            <div className="p-7.5 bg-white rounded-lg shadow-[0_0_30px_rgb(228_228_228)]">
                <ul className="font-medium">
                    <li className={`${page==="account" ? "bg-[#27c5d2] text-white" : "bg-white" } py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out`}>
                        <Link to={"/account"} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            {translation?.data?.business?.my_account_info}
                        </Link>
                    </li>
                    <li className={`${page==="properties" ? "bg-[#27c5d2] text-white" : "bg-white" } py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out`}>
                        <Link to={"/auth/properties"} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            {translation?.data?.business?.my_properties}
                        </Link>
                    </li>
                    <li className={`${page==="proposals" ? "bg-[#27c5d2] text-white" : "bg-white" } py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out`}>
                        <Link to={"/proposals"} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            {translation?.data?.business?.proposals_to_customers}
                        </Link>
                    </li>
                    <li className="my-0.5 rounded-lg cursor-pointer">
                        <div className="w-full">
                            <div
                                onClick={() => setSubMenu(prev => !prev)}
                                className="flex items-center py-2 px-2.5 w-full rounded-lg hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                {translation?.data?.business?.my_offers}
                            </div>

                            {subMenu && (
                                <div className="pl-5 w-full">
                                    <ul>
                                        <li className={`${type === "received" ? "bg-[#27c5d2] text-white" : "bg-white text-[#5f5f5f]"} rounded-lg hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out`}>
                                            <Link to="/offers/received" className="flex items-center py-2 px-2.5 text-sm hover:text-white transition-colors duration-300 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                                {translation?.data?.business?.offers_as_received}
                                            </Link>
                                        </li>

                                        <li className={`${type === "send" ? "bg-[#27c5d2] text-white" : "bg-white text-[#5f5f5f]"} rounded-lg hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out`}>
                                            <Link to="/offers/send" className="flex items-center py-2 px-2.5 text-sm hover:text-white transition-colors duration-300 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                                                {translation?.data?.business?.offers_as_sent}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className={`${page==="wishlist" ? "bg-[#27c5d2] text-white" : "bg-white" } py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out`}>
                        <Link to={"/wishlist"} className="flex items-center" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                           {translation?.data?.business?.my_wishlist}
                        </Link>
                    </li>
                    <li className={`${page==="quickFilters" ? "bg-[#27c5d2] text-white" : "bg-white" } py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out`}>
                        <Link to={"/quick-filters"} className="flex items-center" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            {translation?.data?.business?.quick_filters}
                        </Link>
                    </li>
                    <li className={`${page==="notifications" ? "bg-[#27c5d2] text-white" : "bg-white" } py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out`}>
                        <Link to={"/notifications"} className="flex items-center" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-2.5 lucide-chevron-right preview-icon"><path d="m9 18 6-6-6-6"/></svg>
                            {translation?.data?.business?.my_notifications}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}