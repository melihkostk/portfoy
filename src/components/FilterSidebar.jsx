import { Link } from "react-router-dom"

export function FilterSidebar({ type , team , currencie , selectedTeam , setSelectedTeam , handleFilter ,selectedCurrencie , setSelectedCurrencie , countries , selectedCountry , setSelectedCountry , cities , selectedCity , setSelectedCity , districts , selectedDistrict , setSelectedDistrict , minSell ,  setMinSell , maxSell , setMaxSell , status , setStatus , selectedType , setSelectedType}) {

    function toggleType(id) {
        setSelectedType(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    return (
        <div className="w-full">
            <div className="mb-5 w-full">
                <div className="bg-[#f8f8f8] text-[#7d7d7d] min-w-full text-center py-2.5 rounded-lg hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
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
                        {type.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-1.25">
                                <div className="flex items-center gap-2">
                                    <input id={`type-${item.id}`} name="type" type="checkbox" checked={selectedType.includes(item.id)} onChange={() => toggleType(item.id)} />
                                    <label className={`text-[13px] ${selectedType.includes(item.id) ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold`} htmlFor={`type-${item.id}`}>{item.title}</label>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="mb-5">
                    <p className="text-sm text-[#878787] mb-2" htmlFor="">Personel Seçimi</p>
                    <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)} className="block w-full border border-[#d9d9d9] rounded-lg py-1.5 pl-3 pr-9">
                        <option value={""}>Tümü</option>
                        {team?.personals?.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <p className="text-sm text-[#878787] mb-2" htmlFor="">Satış Fiyatı</p>
                    <div className="flex gap-1">
                        <input value={minSell} onChange={(e) => setMinSell(e.target.value)} type="number" placeholder="En az" min={0} className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" />
                        <input value={maxSell} onChange={(e) => setMaxSell(e.target.value)} type="number" placeholder="En fazla" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" />
                    </div>
                    <div className="mt-2">
                        <select value={selectedCurrencie} onChange={(e) => setSelectedCurrencie(e.target.value)} className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full">
                            {currencie.map(item => (
                                <option value={item.id} key={item.id}>({item.code}) {item.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-sm text-[#878787] mb-2" htmlFor="">Konum</p>
                    <div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">Ülke Seçin</label>
                            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" name="" id="">
                                <option value="">Ülke Seçin</option>
                                {countries?.data?.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">İl Seçin</label>
                            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" name="" id="">
                                <option value="">İl Seçin</option>
                                {cities.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="">İlçe Seçin</label>
                            <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" name="" id="">
                                <option value="">İlçe Seçin</option>
                                {districts.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-sm text-[#878787] mb-2" htmlFor="">İlan Durumu</p>
                    <div>
                        <div className="flex items-center gap-2.5">
                            <input id="status-all" name="status" type="checkbox" checked={status === ""} onChange={() => setStatus("")} />
                            <label className={`text-[13px] ${status === "" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold`} htmlFor="status-all">Tümü</label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input id="status-published" name="status" type="checkbox" checked={status === "published"} onChange={() => setStatus("published")} />
                            <label className={`text-[13px] ${status === "published" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold`} htmlFor="status-published">Sadece Yayında Olanlar</label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input id="status-unpublished" name="status" type="checkbox" checked={status === "unpublished"} onChange={() => setStatus("unpublished")} />
                            <label className={`text-[13px] ${status === "unpublished" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold`} htmlFor="status-unpublished">Sadece Yayında Olmayanlar</label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input id="status-sold" name="status" type="checkbox" checked={status === "sold"} onChange={() => setStatus("sold")} />
                            <label className={`text-[13px] ${status === "sold" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold`} htmlFor="status-sold">Sadece Satılan İlanlar</label>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => handleFilter(selectedCountry , selectedCity , selectedDistrict , selectedTeam , minSell , maxSell , selectedCurrencie , status , selectedType)} className="uppercase w-full rounded-lg bg-[#f1f1f1] text-[#4b4b4b] text-sm py-2 px-5 sticky bottom-7.5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>

            </form>

        </div>
    )
}