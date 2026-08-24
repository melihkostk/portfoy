export function PortfoyText({title , description}) {
    return (
        <div className="p-3.75 w-[30%] m-3.75 rounded-lg hover:bg-white transition-colors duration-300 ease-in-out hover:shadow-2xl shadow-[rgba(0,0,0,0.1)] cursor-pointer">
            <p className="mb-2 text-[18px] text-black font-semibold">{title}</p>
            <p className="text-sm opacity-50 font-medium line-clamp-3">{description}</p>
        </div>
    )
}