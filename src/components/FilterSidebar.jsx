import { Link } from "react-router-dom"

export function FilterSidebar(){
    return(
        <div className="w-full">
            <div className="mb-5 w-full">
                <div className="bg-[#f8f8f8] text-[#7d7d7d] min-w-full text-center py-2.5 rounded-lg hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out" href="">
                    <Link>Yeni İlan Oluştur</Link>
                </div>
            </div>
            <form action="">
                <div className="flex justify-between items-center mb-3.75">
                    <p className="uppercase text-[#b4b4b4] text-sm">İlanları Filtrele</p>
                    <a className="text-[#b4b4b4] text-sm underline hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">Temizle</a>
                </div>
                <div>
                    <ul className="my-7.5">
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="checkbox" />
                                <label className="text-[13px] text-[#212529] font-semibold">Apartman</label>
                            </div>
                            <div>
                                <span className="text-[#212529] text-sm font-semibold">128</span>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="mb-5">
                    <label className="text-sm text-[#878787] mb-2" htmlFor="">Personel Seçimi</label>
                    <select className="block w-full border border-[#d9d9d9] rounded-lg py-1.5 pl-3 pr-9">
                        <option value="">Tümü</option>
                        <option value="">Melih</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label className="text-sm text-[#878787] mb-2" htmlFor="">Satış Fiyatı</label>
                    <div className="flex gap-1">
                        <input type="text" placeholder="En az" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" />
                        <input type="text" placeholder="En fazla" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" />
                    </div>
                    <div className="mt-2">
                        <select className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full">
                            <option value="" selected>(TRY) Türk Lirası</option>
                            <option value="">(USD) Amerikan Doları</option>
                            <option value="">(EUR) Euro</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <label className="text-sm text-[#878787] mb-2" htmlFor="">Konum</label>
                    <div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">Ülke Seçin</label>
                            <select className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" name="" id="">
                                <option value="">Ülke Seçin</option>
                                <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                <option value="">Türkiye</option>
                                <option value="">Birleşik Arap Emirlikleri</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">İl Seçin</label>
                            <select className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" name="" id="">
                                <option value="">İl Seçin</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">İlçe Seçin</label>
                            <select className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" name="" id="">
                                <option value="">İlçe Seçin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label className="text-sm text-[#878787] mb-2" htmlFor="">İlan Durumu</label>
                    <div>
                        <div className="flex items-center gap-2.5">
                            <input type="checkbox" />
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">Tümü</label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input type="checkbox" />
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">Sadece Yayında Olanlar</label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input type="checkbox" />
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">Sadece Yayında Olmayanlar</label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input type="checkbox" />
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">Sadece Satılan İlanlar</label>
                        </div>
                    </div>
                </div>
                <button className="uppercase w-full rounded-lg bg-[#f1f1f1] text-[#4b4b4b] text-sm py-2 px-5 sticky bottom-7.5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>

            </form>

        </div>
    )
}