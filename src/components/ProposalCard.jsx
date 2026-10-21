import { Link } from "react-router-dom"
import eye from "../assets/eye.png"

export function ProposalCard({code , name , status , statusKey , score , created_at , index , id , page , translation}) {
    return (
        <tr className={`${index % 2 === 1 ? "bg-[#f8f8f8]" : ""}`}>
            {page !== "external" && <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{code}</td>}
            <td className="py-3 px-2">{name}</td>
            <td className="py-3 px-2 text-[#6c757d] text-sm whitespace-nowrap">{score == 0 ? translation?.data?.business?.not_yet_review : score}</td>
            <td className="py-3 px-2">
                <span className={`${statusKey === "waiting" ? "bg-[#27C5D2]" : ""} ${statusKey === "expired" ? "bg-[#ED0000]" : ""} ${statusKey === "completed" ? "bg-[#00CC83]" : ""}  text-xs text-white font-semibold py-1.25 px-2 rounded-md`}>{status}</span>
            </td>
            <td className="py-3 px-2 whitespace-nowrap">{created_at}</td>
            {page !== "external" && <td className="text-end py-3 px-2 flex justify-end">
                <Link to={`/proposals/${id}/details`} className="bg-[#27C5D2] w-full max-w-fit text-xs flex items-center justify-center gap-1.25 text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">
                    <img className="w-4 h-4" src={eye} alt="" />
                    {translation?.data?.business?.view}
                </Link>
            </td>}
        </tr>
    )
}