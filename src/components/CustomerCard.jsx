import pencil from "../assets/pencil.png"

export function CustomerCard(){
    return(
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">Adı Adı</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">adı@gmail.com</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">
                90 44445555333
            </td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">
                Türkçe
            </td>
            <td>

            </td>
           <td>
                28 Ocak 2026
           </td>
           <td className="flex items-center gap-1 py-3 px-2">
                <button className="bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    <img className="w-5 h-5 min-w-5 min-h-5" src={pencil} alt="" />
                </button>
                <div className="bg-[#f1f1f1] py-2 px-5 rounded-lg whitespace-nowrap text-sm text-[#4b4b4b] font-semibold cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    Hiç teklif yok
                </div>
           </td>
        </tr>
    )
}