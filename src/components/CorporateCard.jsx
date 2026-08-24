export function CorporateCard({
    title,
    p1, p2, p3, p4, p5, p6,
    img,
    location
}) {
    const image = (
        <div className="flex-1 flex items-center justify-center sticky top-4">
            <img className="max-w-[70%]" src={img} alt={title} />
        </div>
    );

    const content = (
        <div className="flex-1">
            <h2 className="text-[30px] mb-5 text-black font-bold">{title}</h2>
            <p className="mb-4 text-[#6b6b6b] font-medium">{p1}</p>
            <p className="mb-4 text-[#6b6b6b] font-medium">{p2}</p>
            <p className="mb-4 text-[#6b6b6b] font-medium">{p3}</p>
            <p className="mb-4 text-[#6b6b6b] font-medium">{p4}</p>
            <p className="mb-4 text-[#6b6b6b] font-medium">{p5}</p>
            <p className="text-[#6b6b6b] font-medium">{p6}</p>
        </div>
    );

    return (
        <div className="flex items-start justify-between gap-12.5">
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
    );
}