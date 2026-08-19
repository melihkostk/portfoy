import downArrow from "../assets/down-arrow.png"

export function Filter() {
    return (
        <div className="flex flex-col">
            <ul className='flex'>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 text-black cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Tümü</button>
                </li>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Apartman</button>
                </li>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Proje Apartmanlar</button>
                </li>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Villa</button>
                </li>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Proje Villa</button>
                </li>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Arsa</button>
                </li>
                <li>
                    <button className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out'>Tarla</button>
                </li>
            </ul>
            <div className="flex gap-2.5 p-3.75">
                <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                    <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Kategoriler</label>
                    <div className="flex justify-between cursor-pointer">
                        <p className="font-medium">Tümü</p>
                        <img className="w-4 h-4" src={downArrow} alt="" />
                    </div>
                </div>
                <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                    <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Satış fiyatı</label>
                    <div className="flex justify-between cursor-pointer">
                        <p>-</p>
                        <img className="w-4 h-4" src={downArrow} alt="" />
                    </div>
                </div>
                <div className="flex-1 pr-2.5">
                    <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Konum</label>
                    <div className="flex justify-between cursor-pointer">
                        <p>Tümü</p>
                        <img className="w-4 h-4" src={downArrow} alt="" />
                    </div>
                </div>
                <div>
                    <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm">Seçenekleri Uygula</button>
                </div>
            </div>
        </div>
    )
}