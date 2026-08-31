export function UserInvite({code , name , role , created_at , expiry_at}) {
    return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{code}</td>
            <td className="py-3 px-2">{name}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{role}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">
                {created_at}
            </td>
            <td className="py-3 px-2 text-[#dc3545] text-base whitespace-nowrap">
                {expiry_at}
            </td>
            <td className="text-end py-3 px-2 whitespace-nowrap">
                <button className="bg-[#F1F1F1] text-xs text-[#4b4b4b] font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Düzenle</button>
                <button className="bg-[#dc3545] text-xs ml-1 text-white font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#bb2d3b] transition-colors duration-300 ease-in-out">Kaldır</button>
            </td>
        </tr>
    )
}