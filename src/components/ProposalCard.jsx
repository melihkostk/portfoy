export function ProposalCard({code , name , status , score , created_at}) {
    return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{code}</td>
            <td className="py-3 px-2">{name}</td>
            <td className="py-3 px-2 text-[#6c757d] text-sm whitespace-nowrap">{score === 0 ? "Henüz Değerlendirme Yok" : score}</td>
            <td className="py-3 px-2">
                <span className={`${status === "Beklemede" ? "bg-[#27C5D2]" : ""} ${status === "Süresi Doldu" ? "bg-[#ED0000]" : ""} ${status === "Tamamlandı" ? "bg-[#00CC83]" : ""}  text-xs text-white font-semibold py-1.25 px-2 rounded-md`}>{status}</span>
            </td>
            <td className="py-3 px-2 whitespace-nowrap">{created_at}</td>
            <td className="text-end py-3 px-2">
                <button className="bg-[#27C5D2] text-xs text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Görüntüle</button>
            </td>
        </tr>
    )
}