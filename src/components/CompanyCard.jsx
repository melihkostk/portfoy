export function CompanyCard({name , type , location , logo}) {
    return (
        <div className="p-7.5 m-3.75 w-[22.5%] max-[992px]:mx-0 max-[992px]:my-3.75 max-[992px]:w-full shrink-0 bg-[#f8f8f8] rounded-lg flex flex-col items-center">
            <div className="w-20 h-20 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                <img src={logo} className="w-full h-full object-cover rounded-full" alt="" />
            </div>
            <div className="text-center">
                <p className="font-semibold mt-2 mb-0.75">
                    {name}
                </p>
                <p className="text-sm my-3.75 text-[#686868]">
                    {type}
                </p>
            </div>
            <div className="text-center bg-[#e8e8e8] py-1.5 px-2 rounded-sm">
                <p className="text-xs font-medium">{location}</p>
            </div>
            <a className="text-center mt-7.5 text-[#626262] text-sm font-medium bg-[#e8e8e8] hover:text-white hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out w-full py-2.5 rounded-lg uppercase" href="">Profili Görüntüle</a>
        </div>
    )
}