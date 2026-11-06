import noti from "../assets/notification.png"
import clock from "../assets/clock.png"
import { Link } from "react-router-dom"

export function Notification({ content, time, is_read, handleMarkAsRead, id, type, details }) {
    return (
        <Link to={
            type === "property_edit"
                ? `/properties/${details?.property_id}/edit`
                : type === "offer_details"
                    ? `/offers/${details?.offer_id}/detail`
                    : "#"
        } onClick={() => handleMarkAsRead(id)} className="flex pb-2.5 my-2.5 border-b border-b-[#eee] cursor-pointer">
            <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
                <img className="w-7 h-7" src={noti} alt="" />
            </div>
            <div className="pl-2.5 w-full">
                <p className={` ${is_read === 1 ? "text-[#a6a6a6]" : "text-black"} text-sm mb-1.25 font-medium hover:text-[#27C5D2] transition-colors duration-300 ease-in-out`}>
                    {content}
                </p>
                <div className="flex items-end opacity-50 gap-1">
                    <img className="w-4 h-4" src={clock} alt="" />
                    <p className="text-xs text-black font-medium">
                        {time}
                    </p>
                </div>
            </div>
        </Link>
    )
}