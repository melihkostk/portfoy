export function OfferCard() {
    return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">villa 19.06.25</td>
            <td className="py-3 px-2">
                ₺550.000
            </td>
            <td className="py-3 px-2 text-[#6c757d] text-sm"></td>
            <td className="py-3 px-2">
                ₺50.000
            </td>
            <td className="py-3 px-2">
                <span className="bg-[#27C5D2] text-xs text-white font-semibold py-1.25 px-2 rounded-md">Beklemede</span>
            </td>
            <td className="py-3 px-2">
                07 Temmuz 2025
            </td>
            <td>
                <button className="bg-[#27C5D2] text-xs text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Görüntüle</button>
            </td>
        </tr>
    )
}