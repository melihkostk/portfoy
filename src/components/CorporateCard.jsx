export function CorporateCard({
    title,
    p,
    img,
    location
}) {
    const image = (
        <div className="flex-1 flex items-center justify-center sticky top-4 max-[992px]:static">
            <img className="max-w-[70%]" src={img} alt={title} />
        </div>
    );

    const content = (
        <div className="flex-1">
            <h2 className="text-[30px] mb-5 text-black font-bold">{title}</h2>
            <div>
                {p?.map((item , index) => (
                    <p key={index} className="mb-4 text-[#6b6b6b] font-medium">{item}</p>
                ))}
            </div>
        </div>
    );

    return (
        <div className="flex items-start justify-between gap-12.5 max-[992px]:flex-col" id={title}>
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