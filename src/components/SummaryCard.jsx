export function SummaryCard({id , no , creator , status , title , type , location , price , views , favorites , proposals , score , created_at , updated_at}){
     return (
        <tr>
            <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{id}</td>
            <td className="py-3 px-2">{no}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{creator}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{status}</td>
            <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{title}</td>
            <td className="py-3 px-2 whitespace-nowrap">{type}</td>
            <td className="py-3 px-2 whitespace-nowrap">{location}</td>
            <td className="py-3 px-2 whitespace-nowrap">{price}</td>
            <td className="py-3 px-2 whitespace-nowrap">{views}</td>
            <td className="py-3 px-2 whitespace-nowrap">{favorites}</td>
            <td className="py-3 px-2 whitespace-nowrap">{proposals}</td>
            <td className="py-3 px-2 whitespace-nowrap">{score}</td>
            <td className="py-3 px-2 whitespace-nowrap">{created_at}</td>
            <td className="py-3 px-2 whitespace-nowrap">{updated_at}</td>

        </tr>
    )
}