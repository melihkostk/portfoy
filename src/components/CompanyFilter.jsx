export function CompanyFilter({ type, setSelectedType, setSelectedPropertyType, selectedPropertyType, propertyType , page, countries, selectedCountry, selectedCity, q, setQ, selectedType, selectedDistrict, setSelectedCountry, cities, setSelectedCity, district, setSelectedDistrict, streets, setSelectedStreet, filterCompany }) {
    return (
        <div className={`flex justify-between ${page === "wishlist" ? "mt-0 p-3.75" : "mt-7.5 p-7.5"} max-[992px]:flex-col max-[992px]:items-start items-end bg-[#f8f8f8] rounded-lg gap-5`}>
            <div className="flex flex-col grow max-[992px]:w-full">
                <label className={`${page === "wishlist" ? "text-sm text-[#212529] opacity-70" : ""}`} htmlFor="type">{page === "companies" ? "Firma Tipi" : "Kategori"}</label>
                {page === "companies" && <select onChange={(e) => setSelectedType(e.target.value)} className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" name="type" id="type">
                    <option value="">
                        Tümü
                    </option>
                    {type?.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>}
                {page === "wishlist" && <select onChange={(e) => setSelectedPropertyType(e.target.value)} className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" name="type" id="type">
                    <option value="">
                        Tümü
                    </option>
                    {propertyType?.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>}
            </div>
            <div className="grow max-[992px]:w-full">
                <div className="flex max-[992px]:flex-col">
                    <div className="flex flex-col flex-1 max-[992px]:w-full">
                        <label className={`${page === "wishlist" ? "text-sm text-[#212529] opacity-70" : ""}`} htmlFor="country">Ülke Seçin</label>
                        <select onChange={(e) => setSelectedCountry(e.target.value)} className="bg-white py-2 w-full px-3 border border-[#D9D9D9] max-[992px]:rounded-lg rounded-l-lg" name="country" id="country">
                            <option value="">
                                Ülke Seçin
                            </option>
                            {countries?.data?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className={`${page === "wishlist" ? "text-sm text-[#212529] opacity-70" : ""}`} htmlFor="city">İl Seçin</label>
                        <select onChange={(e) => setSelectedCity(e.target.value)} className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9]" name="city" id="city">
                            <option value="">
                                İl Seçin
                            </option>
                            {cities?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className={`${page === "wishlist" ? "text-sm text-[#212529] opacity-70" : ""}`} htmlFor="district">İlçe Seçin</label>
                        <select onChange={(e) => setSelectedDistrict(e.target.value)} className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9]" name="district" id="district">
                            <option value="">
                                İlçe Seçin
                            </option>
                            {district?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}

                        </select>
                    </div>
                    {page !== "wishlist" && <div className="flex flex-col flex-1">
                        <label className={`${page === "wishlist" ? "text-sm text-[#212529] opacity-70" : ""}`} htmlFor="street">Mahalle</label>
                        <select onChange={(e) => setSelectedStreet(e.target.value)} className="bg-white py-2 px-3 border w-full max-[992px]:rounded-lg border-[#D9D9D9] rounded-r-lg" name="street" id="street">
                            <option value="">
                                Mahalle
                            </option>
                            {streets?.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>}
                </div>
            </div>
            {page !== "wishlist" && <div className="grow max-[992px]:w-full">
                <label htmlFor="q">Firmalarda arayın</label>
                <input value={q} onChange={(e) => setQ(e.target.value)} className="bg-white py-2 px-3 border w-full border-[#D9D9D9] rounded-lg" type="text" placeholder="Firmalarda arayın" name="q" id="q" />
            </div>}
            <div className="grow max-[992px]:w-full">
                <button onClick={() => filterCompany(page === "wishlist" ? selectedPropertyType : selectedType, selectedCountry, selectedCity, selectedDistrict, q)} className="w-full bg-[#27C5D2] max-[992px]:w-full text-white text-sm py-2 px-5 cursor-pointer whitespace-nowrap rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
            </div>
        </div>
    )
}