export function SummaryCard({id , no , creator , index , status , title , type , location , price , views , favorites , proposals , score , created_at , updated_at , showId , showNo , showCreator , showStatus , showTitle , showType , showLocation , showPrice , showViews , showFavorites , showProposals , showScore , showCreatedAt , showUpdatedAt}){
     return (
        <tr className={`${index % 2 === 1 ? "bg-[#f8f8f8]" : "" }`}>
            {showId && <td className="py-3 px-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[30ch] truncate">{id}</td>}
            {showNo && <td className="py-3 px-2">{no}</td>}
            {showCreator && <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{creator}</td>}
            {showStatus && <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{status}</td>}
            {showTitle && <td className="py-3 px-2 text-[#212529] text-base whitespace-nowrap">{title}</td>}
            {showType && <td className="py-3 px-2 whitespace-nowrap">{type}</td>}
            {showLocation && <td className="py-3 px-2 whitespace-nowrap">{location}</td>}
            {showPrice && <td className="py-3 px-2 whitespace-nowrap">{price}</td>}
            {showViews && <td className="py-3 px-2 whitespace-nowrap">{views}</td>}
            {showFavorites && <td className="py-3 px-2 whitespace-nowrap">{favorites}</td>}
            {showProposals && <td className="py-3 px-2 whitespace-nowrap">{proposals}</td>}
            {showScore && <td className="py-3 px-2 whitespace-nowrap">{score}</td>}
            {showCreatedAt && <td className="py-3 px-2 whitespace-nowrap">{created_at}</td>}
            {showUpdatedAt && <td className="py-3 px-2 whitespace-nowrap">{updated_at}</td>}

        </tr>
    )
}