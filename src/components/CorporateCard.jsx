export function CorporateCard({title , p1 , p2 , p3 , p4 , p5 , p6 , img}){
    return(
        <div className="flex items-start justify-between gap-12.5">
            <div className="flex-1 flex items-center justify-center sticky top-4">
                <img className="max-w-[70%]" src={img} alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-[30px] mb-5 text-black font-bold">{title}</h2>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">{p1}</p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">{p2}</p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">{p3}</p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">{p4}</p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">{p5}</p>
                <p className="text-[#6b6b6b] font-medium text-base">{p6}</p>
            </div>
        </div>
    )
}