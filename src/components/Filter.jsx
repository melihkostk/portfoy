import downArrow from "../assets/down-arrow.png"
import React from "react"

export function Filter() {

    const [type, setType] = React.useState("All")

    return (
        <div className="flex flex-col">
            <ul className='flex mt-10 max-w-full overflow-scroll scrollbar-hidden'>
                <li>
                    <button onClick={() => setType("All")} className='px-7.5 py-2.5 text-sm opacity-70 text-black cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Tümü</button>
                </li>
                <li>
                    <button onClick={() => setType("Apartment")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Apartman</button>
                </li>
                <li>
                    <button onClick={() => setType("Project")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Proje Apartmanlar</button>
                </li>
                <li>
                    <button onClick={() => setType("Villa")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Villa</button>
                </li>
                <li>
                    <button onClick={() => setType("Project Villa")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Proje Villa</button>
                </li>
                <li>
                    <button onClick={() => setType("Land")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Arsa</button>
                </li>
                <li>
                    <button onClick={() => setType("Field")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Tarla</button>
                </li>
            </ul>
            {type === "All" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Kategoriler</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="text-[13px] font-semibold">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="text-[13px] font-semibold">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full w-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>)}
            {type === "Apartment" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Oda Sayısı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Oda Sayısı</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Cephe</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Cephe</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Isıtma sistemi</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Isıtma Sistemi</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Project" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Oda Sayısı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Oda Sayısı</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">inşaat bitiş tarihi</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Oda Sayısı</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Villa" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Oda Sayısı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Oda Sayısı</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                        <div className="flex justify-between cursor-pointer">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">bina yaşı</label>
                        <div className="flex justify-between cursor-pointer flex-1">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Project Villa" && (
                <div className="flex gap-2.5 max-[992px]:flex-col p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Land" && (
                <div className="flex gap-2.5 max-[992px]:flex-col p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Arsa Tapu Türü</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Arsa Tapu Türü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                        <div className="flex justify-between cursor-pointer">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Field" && (
                <div className="flex gap-2.5 max-[992px]:flex-col p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">-</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Tümü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Arsa Tapu Türü</label>
                        <div className="flex justify-between cursor-pointer">
                            <p className="font-semibold text-[13px]">Arsa Tapu Türü</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee]">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                        <div className="flex justify-between cursor-pointer">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
        </div>
    )
}