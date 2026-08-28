import { Filter } from "../components/Filter"
import { Header } from "../components/Header"
import grid from "../assets/grid.png"
import flex from "../assets/flex.png"
import { PropertiesCard } from "../components/PropertiesCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Properties({loged}) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İlanlar</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%] py-20">
                <div>
                    <h1 className="text-[35px]">İlanları Filtrele</h1>
                    <Filter />
                </div>
            </div>
            <div className="w-full max-w-[90%] pt-20">
                <div className="flex items-center justify-between">
                    <h1 className="text-[25px] text-[#212529] font-medium">
                        İlanlar
                    </h1>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1.25">
                            <button className="w-9.5 h-9.5 rounded-lg bg-[#F8F8F8] flex items-center justify-center">
                                <img className="w-7 h-7" src={grid} alt="" />
                            </button>
                            <button className="w-9.5 h-9.5 rounded-lg border border-[#D9D9D9] flex items-center justify-center">
                                <img className="w-4 h-4" src={flex} alt="" />
                            </button>
                        </div>
                        <div>
                            <select className="border border-[#D9D9D9] h-9.5 w-full rounded-lg py-1.5 px-3 text-[#212529]" name="" id="">
                                <option value="">Varsayılan Sıralama</option>
                                <option value="">Oluşturma Tarihine Göre (Eskiden Yeniye)</option>
                                <option value="">Oluşturma Tarihine Göre (Yeniden Eskiye)</option>
                                <option value="">Fiyata Göre (Ucuzdan Pahalıya)</option>
                                <option value="">Fiyata Göre (Pahalıdan Ucuza)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap max-[992px]:flex-col items-center justify-center -mx-3.75 max-[992px]:m-0">
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                    <PropertiesCard page="properties" />
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-center justify-between flex-wrap">
                    <div>
                        <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                            157 kayıttan 1 - 12 arasındaki kayıtlar gösteriliyor
                        </p>
                    </div>
                    <nav className="overflow-auto w-full max-w-full">
                        <ul className="flex items-center gap-1.25 mb-4 scrollbar-thumb-[#27C5D2] overflow-auto max-w-full">
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>1</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>2</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>3</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>4</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>5</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>6</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>7</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>8</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>9</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>10</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>11</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>12</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>13</span>
                            </li>
                            <li className="w-10 h-10 bg-[#f8f8f8] shrink-0 text-[#7c7c7c] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out">
                                <span>14</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer loged={loged} />
            </div>
        </div>
    )
}