export function CompanyFilter() {
    return (
        <div className="flex justify-between items-end bg-[#f8f8f8] p-7.5 rounded-lg gap-5">
            <div className="flex flex-col grow">
                <label htmlFor="">Firma Tipi</label>
                <select className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" name="" id="">
                    <option value="">
                        Tümü
                    </option>
                    <option value="">
                        Emlak Firması
                    </option>
                    <option value="">
                        İnşaat Firması
                    </option>
                    <option value="">
                        Emlak & İnşaat Firması
                    </option>
                    <option value="">
                        Pazarlama Firması
                    </option>
                </select>
            </div>
            <div className="grow">
                <div className="flex">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">Ülke Seçin</label>
                        <select className="bg-white py-2 w-full px-3 border border-[#D9D9D9] rounded-l-lg" name="" id="">
                            <option value="">
                                Tümü
                            </option>
                            <option value="">
                                Emlak Firması
                            </option>
                            <option value="">
                                İnşaat Firması
                            </option>
                            <option value="">
                                Emlak & İnşaat Firması
                            </option>
                            <option value="">
                                Pazarlama Firması
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">İl Seçin</label>
                        <select className="bg-white py-2 px-3 border w-full border-[#D9D9D9]" name="" id="">
                            <option value="">
                                Tümü
                            </option>
                            <option value="">
                                Emlak Firması
                            </option>
                            <option value="">
                                İnşaat Firması
                            </option>
                            <option value="">
                                Emlak & İnşaat Firması
                            </option>
                            <option value="">
                                Pazarlama Firması
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">İlçe Seçin</label>
                        <select className="bg-white py-2 px-3 border w-full border-[#D9D9D9]" name="" id="">
                            <option value="">
                                Tümü
                            </option>
                            <option value="">
                                Emlak Firması
                            </option>
                            <option value="">
                                İnşaat Firması
                            </option>
                            <option value="">
                                Emlak & İnşaat Firması
                            </option>
                            <option value="">
                                Pazarlama Firması
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">Mahalle</label>
                        <select className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-r-lg" name="" id="">
                            <option value="">
                                Tümü
                            </option>
                            <option value="">
                                Emlak Firması
                            </option>
                            <option value="">
                                İnşaat Firması
                            </option>
                            <option value="">
                                Emlak & İnşaat Firması
                            </option>
                            <option value="">
                                Pazarlama Firması
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grow">
                <label htmlFor="">Firmalarda arayın</label>
                <input className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" type="text" placeholder="Firmalarda arayın"/>
            </div>
            <div className="grow">
                <button className="w-full bg-[#27C5D2] text-white text-sm py-2 px-5 cursor-pointer whitespace-nowrap rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
            </div>
        </div>
    )
}