import pencil from "../assets/pencil.png"
import bin from "../assets/bin.png"

export function FilterCard({title , created_at , notify}) {
    return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{title}</td>
            <td className="py-3 px-2">
                <span className={`${notify ? "bg-[#00cc83] text-white" : "bg-[#FFCA64] text-black"} text-xs py-1.25 px-2 font-semibold rounded-md`}>{notify ? "Aktif" : "Pasif"}</span>
            </td>
            <td className="py-3 px-2 whitespace-nowrap">{created_at}</td>
            <td className="py-3 px-2 flex items-center justify-end gap-2">
                <a className="text-xs whitespace-nowrap text-white font-semibold bg-[#27C5D2] py-2 px-5 rounded-sm hover:bg-[#026872] transition-colors duration-300 ease-in-out" href="">Seçenekleri Uygula</a>
                <a className="bg-[#f1f1f1] whitespace-nowrap py-2 px-5 rounded-sm hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out" href="">
                    <img className="w-4 h-4 min-h-4 min-w-4" src={pencil} alt="" />
                </a>
                <a className="bg-[#dc3545] whitespace-nowrap py-2 px-5 rounded-sm hover:bg-[#bb2d3b] transition-colors duration-300 ease-in-out" href="">
                    <img className="w-4 h-4 min-h-4 min-w-4" src={bin} alt="" />
                </a>
            </td>
        </tr>
    )
}