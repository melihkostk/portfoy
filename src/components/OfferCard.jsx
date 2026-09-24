import { Link } from "react-router-dom";
import { showOffer } from "../services/profileApi";

export function OfferCard({ title, price, offered_price, status, created_at, setLoaded , id, type , index , setOfferMenuShown , offerInfo , setOfferInfo }) {

    const handleShowOffer = () => {
        setOfferMenuShown(true)
        setLoaded(false)
        showOffer(id).then(setOfferInfo).finally(() => setLoaded(true))
    }

    return (
        <tr className={`${index % 2 === 1 ? "bg-[#f8f8f8]" : ""}`}>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">
                {title}
            </td>
            <td className="py-3 px-2">
                {price}
            </td>
            <td className="py-3 px-2 text-[#6c757d] text-sm"></td>
            <td className="py-3 px-2">
                {offered_price}
            </td>
            <td className="py-3 px-2">
                <span className={`${status === "Beklemede" ? "bg-[#27C5D2]" : ""} ${status === "Reddedildi" ? "bg-[#ed0000]" : ""} ${status === "Onaylandı" ? "bg-[#00cc83]" : ""} text-xs text-white font-semibold py-1.25 px-2 rounded-md`}>
                    {status}
                </span>
            </td>
            <td className="py-3 px-2">
                {created_at}
            </td>
            <td>
                {type === "send" && <Link to={`/offers/${id}/detail`} className="bg-[#27C5D2] text-xs text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">
                    Görüntüle
                </Link>}
                {type === "received" && <button onClick={handleShowOffer} className="bg-[#27C5D2] text-xs text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">
                    Görüntüle
                </button>}
            </td>
        </tr>
    )
}