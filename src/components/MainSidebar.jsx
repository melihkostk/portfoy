import logo from "../assets/logo.svg"
import close from "../assets/close.png"
import { Link } from "react-router-dom"

export function MainSidebar({ setSidebarShown  , loged , translation}) {
    return (
        <div className="p-3.75 bg-white w-full flex items-start justify-start min-h-screen fixed overflow-y-auto top-0 bottom-0 left-0 right-0 z-50">
            <div className="w-full max-w-[95%]">
                <div className="flex justify-between items-center">
                    <div className="w-45">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                    <div onClick={() => setSidebarShown(false)} className="w-7.5 h-7.5 rounded-lg bg-[#27C5D2] flex items-center justify-center">
                        <img className="w-4 h-4" src={close} alt="" />
                    </div>
                </div>
                <div className="my-7.5">
                    <ul className="font-semibold">
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/"}>{translation?.data?.business?.home}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/discover"}>{translation?.data?.business?.discover}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/pricing"}>{translation?.data?.business?.pricing}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/articles"}>{translation?.data?.business?.articles}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/corporate"}>{translation?.data?.business?.corporate}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/contacts"}>{translation?.data?.business?.contacts}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link>{translation?.data?.business?.blog}</Link>
                        </li>
                    </ul>
                </div>
                <div className="my-7.5">
                    <ul className="font-semibold">
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/register"}>{translation?.data?.business?.register}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/application"}>{translation?.data?.business?.company_application}</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/check"}>{translation?.data?.business?.application_check}</Link>
                        </li>
                    </ul>
                </div>
                {loged && <div>
                    <input className="bg-[#f8f8f8] p-2.5 rounded-lg w-full mb-3.75" type="text" placeholder={translation?.data?.business?.search_in_properties} />
                    <Link to={"/company"} className="bg-[#27C5D2] px-2.5 rounded-lg w-full flex items-center justify-center mb-2.5 h-7.5 text-white text-xs font-semibold">
                        {translation?.data?.business?.my_portfolio}
                    </Link>
                </div>}
            </div>
        </div>
    )
}