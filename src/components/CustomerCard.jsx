import pencil from "../assets/pencil.png"

export function CustomerCard({name , email , phoneCode, phoneNumber, locale , created_at , note , proposals}){
    return(
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{name}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{email}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">
                {phoneCode} {phoneNumber}
            </td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">
                {locale}
            </td>
            <td>
                {note}
            </td>
           <td>
                {created_at}
           </td>
           <td className="flex items-center gap-1 py-3 px-2">
                <button className="bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    <img className="w-5 h-5 min-w-5 min-h-5" src={pencil} alt="" />
                </button>
                <div className="bg-[#f1f1f1] py-2 px-5 rounded-lg whitespace-nowrap text-sm text-[#4b4b4b] font-semibold cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    {proposals > 0 ?  `${proposals} Teklif` : "Hiç teklif yok"}
                </div>
           </td>
        </tr>
    )
}