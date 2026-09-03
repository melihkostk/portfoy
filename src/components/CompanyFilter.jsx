export function CompanyFilter({ type , setSelectedType , countries , selectedCountry , selectedCity , selectedType , selectedDistrict , setSelectedCountry , cities , setSelectedCity , district , setSelectedDistrict , streets , setSelectedStreet , filterCompany}) {
    return (
        <div className="flex justify-between mt-7.5 max-[992px]:flex-col max-[992px]:items-start items-end bg-[#f8f8f8] p-7.5 rounded-lg gap-5">
            <div className="flex flex-col grow max-[992px]:w-full">
                <label htmlFor="">Firma Tipi</label>
                <select onChange={(e) => setSelectedType(e.target.value)} className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" name="" id="">
                    <option disabled value="">
                        Tümü
                    </option>
                    {type?.map(item => (
                        <option key={item.id} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grow max-[992px]:w-full">
                <div className="flex max-[992px]:flex-col">
                    <div className="flex flex-col flex-1 max-[992px]:w-full">
                        <label htmlFor="">Ülke Seçin</label>
                        <select onChange={(e) => setSelectedCountry(e.target.value)} className="bg-white py-2 w-full px-3 border border-[#D9D9D9] max-[992px]:rounded-lg rounded-l-lg" name="" id="">
                            <option disabled value="">
                                Tümü
                            </option>
                            {countries?.data?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">İl Seçin</label>
                        <select onChange={(e) => setSelectedCity(e.target.value)} className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9]" name="" id="">
                            <option disabled value="">
                                Tümü
                            </option>
                            {cities?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">İlçe Seçin</label>
                        <select onChange={(e) => setSelectedDistrict(e.target.value)} className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9]" name="" id="">
                            <option disabled value="">
                                Tümü
                            </option>
                            {district?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                            
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">Mahalle</label>
                        <select onChange={(e) => setSelectedStreet(e.target.value)} className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9] rounded-r-lg" name="" id="">
                            <option value="">
                                Tümü
                            </option>
                            {streets?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="grow max-[992px]:w-full">
                <label htmlFor="">Firmalarda arayın</label>
                <input className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" type="text" placeholder="Firmalarda arayın" />
            </div>
            <div className="grow max-[992px]:w-full">
                <button onClick={() => filterCompany(selectedType , selectedCountry , selectedCity , selectedDistrict)} className="w-full bg-[#27C5D2] max-[992px]:w-full text-white text-sm py-2 px-5 cursor-pointer whitespace-nowrap rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
            </div>
        </div>
    )
}