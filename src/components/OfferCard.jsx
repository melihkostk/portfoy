import { Link } from "react-router-dom";

export function OfferCard({title , price , offered_price , status , created_at , id}) {
    return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{title}</td>
            <td className="py-3 px-2">
                {price}
            </td>
            <td className="py-3 px-2 text-[#6c757d] text-sm"></td>
            <td className="py-3 px-2">
                {offered_price}
            </td>
            <td className="py-3 px-2">
                <span className="bg-[#27C5D2] text-xs text-white font-semibold py-1.25 px-2 rounded-md">{status}</span>
            </td>
            <td className="py-3 px-2">
                {created_at}
            </td>
            <td>
                <Link to={`/offers/${id}/detail`} className="bg-[#27C5D2] text-xs text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Görüntüle</Link>
            </td>
        </tr>
    )
}