import pp from "../assets/pp.svg"
import arrow from "../assets/black-arrow-right.png"

export function Sidebar() {
    return (
        <div>
            <div className="mb-7.5 flex flex-col items-center justify-center p-7.5 border border-[#eee] rounded-lg w-full">
                <div>
                    <img className="w-15 h-15 rounded-full object-cover" src={pp} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[25px] mt-3.75 mb-0.75 font-semibold">Pigasoft</h1>
                    <p className="mb-4 text-[#212529]">
                        Burak Pigasoft
                    </p>
                    <ul className="mb-10">
                        <li className="text-[#7e7e7e] bg-[#eee] text-xs py-1.25 px-2.5 rounded-lg font-semibold">Sistem Yöneticisi</li>
                    </ul>
                    <p className="text-[#696969] text-sm font-semibold">
                        Üyelik tarihi: 29 Şubat 2024
                    </p>
                </div>
            </div>
            <div className="p-7.5 bg-white rounded-lg shadow-[0_0_30px_rgb(228_228_228)]">
                <ul>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            Hesap Bilgilerim
                        </a>
                    </li>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            İlanlarım
                        </a>

                    </li>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            Müşteriye Gönderilen Teklifler
                        </a>
                    </li>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            Fiyat Tekliflerim
                        </a>
                    </li>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            Favorilerim
                        </a>
                    </li>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            Hızlı Filtreler
                        </a>
                    </li>
                    <li className="py-2 px-2.5 my-0.5 rounded-lg cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                        <a className="flex items-center" href="">
                            <img className="mr-2.5 w-3 h-3" src={arrow} alt="" />
                            Bildirimlerim
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}