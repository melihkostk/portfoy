import discover from "../assets/discover.jpg"

export function DiscoverCard({ title, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 , location }) {

    const image = (
        <div className="flex-1 max-[992px]:hidden">
            <img className="w-full rounded-2xl" src={discover} alt="" />
        </div>
    )
    const content = (
        <div className="flex-1">
            <h3 className="text-[26px] text-[#212529] mb-5 font-semibold">{title}</h3>
            <div>
                <p className="text-[#838383] text-base font-medium mb-4">{p1}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p2}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p3}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p4}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p5}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p6}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p7}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p8}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p9}</p>
                <p className="text-[#838383] text-base font-medium mb-4">{p10}</p>
                <p className="text-[#838383] text-base font-medium">{p11}</p>
            </div>
        </div>
    )
    return (
        <div className="flex gap-20 items-center mb-35">
            {location === "left" ? (
                <>
                    {image}
                    {content}
                </>
            ) : (
                <>
                    {content}
                    {image}
                </>
            )}
        </div>
    )
}