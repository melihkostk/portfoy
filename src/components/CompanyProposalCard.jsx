export function CompanyProposalCard({name , code , personal , created_at , score , status , count}){
     return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{code} ({count} İlan)</td>
            <td className="py-3 px-2">{name}</td>
            <td className="py-3 px-2 text-sm whitespace-nowrap">{personal}</td>
            <td className="py-3 px-2">{created_at}</td>
            <td>{score}</td>
            <td>
                <span className={`text-white text-xs text-center py-2 font-semibold px-2 rounded-lg ${status === "Süresi Doldu" ? "bg-[#ed0000]" : "bg-[#00cc83]"}`}>
                    {status}
                </span>
            </td>
            <td className="text-end py-3 px-2">
                <button className="bg-[#f1f1f1] text-xs text-[#4b4b4b] font-semibold py-2 px-5 rounded-sm cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Detaylı İncele</button>
            </td>
        </tr>
    )
}