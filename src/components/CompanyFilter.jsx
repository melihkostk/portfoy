export function CompanyFilter() {
    return (
        <div className="flex justify-between max-[992px]:mt-7.5 max-[992px]:flex-col max-[992px]:items-start items-end bg-[#f8f8f8] p-7.5 rounded-lg gap-5">
            <div className="flex flex-col grow max-[992px]:w-full">
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
            <div className="grow max-[992px]:w-full">
                <div className="flex max-[992px]:flex-col">
                    <div className="flex flex-col flex-1 max-[992px]:w-full">
                        <label htmlFor="">Ülke Seçin</label>
                        <select className="bg-white py-2 w-full px-3 border border-[#D9D9D9] max-[992px]:rounded-lg rounded-l-lg" name="" id="">
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
                        <select className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9]" name="" id="">
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
                        <select className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9]" name="" id="">
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
                        <select className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9] rounded-r-lg" name="" id="">
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
            <div className="grow max-[992px]:w-full">
                <label htmlFor="">Firmalarda arayın</label>
                <input className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" type="text" placeholder="Firmalarda arayın"/>
            </div>
            <div className="grow max-[992px]:w-full">
                <button className="w-full bg-[#27C5D2] max-[992px]:w-full text-white text-sm py-2 px-5 cursor-pointer whitespace-nowrap rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
            </div>
        </div>
    )
}