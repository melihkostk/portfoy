export function ProposalCard() {
    return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">11052274242249846424</td>
            <td className="py-3 px-2">hhhhyy</td>
            <td className="py-3 px-2 text-[#6c757d] text-sm">Henüz değerlendirilmedi</td>
            <td className="py-3 px-2">
                <span className="bg-[#27C5D2] text-xs text-white font-semibold py-1.25 px-2 rounded-md">Beklemede</span>
            </td>
            <td className="py-3 px-2">19 Ocak 2026</td>
            <td className="text-end py-3 px-2">
                <button className="bg-[#27C5D2] text-xs text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Görüntüle</button>
            </td>
        </tr>
    )
}