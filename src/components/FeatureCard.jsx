export function FeatureCard({title , value , index}){
    const displayValue =
        value && typeof value === "object"
            ? (value.name ?? JSON.stringify(value))
            : value;

    return(
        <div className={`flex flex-wrap justify-between w-full py-2.5 px-6.25 my-0.75 ${index % 2 === 0 ? "bg-[#f8f8f8]" : "bg-white"}`}>
            <p className="text-[#6a6a6a] whitespace-nowrap font-medium">{title}</p>
            <p className="text-[#6a6a6a] whitespace-nowrap font-medium overflow-hidden truncate">{displayValue}</p>
        </div>
    )
}