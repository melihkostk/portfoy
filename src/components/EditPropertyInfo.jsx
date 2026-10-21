export function EditPropertyInfo({
    detail,
    title,
    setTitle,
    currency,
    setCurrency,
    passPrice,
    setPassPrice,
    sellPrice,
    setSellPrice,
    country,
    setCountry,
    city,
    setCity,
    district,
    setDistrict,
    street,
    setStreet,
    latitude,
    longitude,
    features,
    handleFeatureChange,
    handleUpdateProperty,
    status,
    translation
}) {
    return (
        <div className="w-full max-w-[90%]">
            <div className="w-full mb-7.5">
                <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                    <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                        <h5 className="text-[#676767] text-lg py-1.25">{translation?.data?.business?.basic_info}</h5>
                    </div>
                    <div className="p-4">
                        <div className="px-3 mb-2">
                            <label className="text-[#6c757d]" htmlFor="title">{translation?.data?.business?.title}</label>
                            <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                        </div>
                        <div className="flex max-[992px]:flex-col">
                            {!detail.hasPriceRange && <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="pass">{translation?.data?.business?.pass_price} <span className="text-sm">({currency})</span></label>
                                <input id="pass" name="pass" value={passPrice} onChange={(e) => setPassPrice(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                            </div>}
                            {!detail.hasPriceRange && <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="sell">{translation?.data?.business?.sell_price} <span className="text-sm">({currency})</span></label>
                                <input id="sell" name="sell" className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                            </div>}
                            {detail.hasPriceRange && <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="min">{translation?.data?.business?.min_price} <span className="text-sm">({currency})</span></label>
                                <input id="min" name="min" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                            </div>}
                            {detail.hasPriceRange && <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="max">{translation?.data?.business?.max_price} <span className="text-sm">({currency})</span></label>
                                <input id="max" name="max" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                            </div>}
                            {detail.hasPriceRange && <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="price-option">{translation?.data?.business?.property_type_prices} ( 1 {translation?.data?.business?.property_type_prices_count.replace(":count" , "")} )</label>
                                <input id="price-option" name="price-option" className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                            </div>}
                            <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="currency">{translation?.data?.business?.currency}</label>
                                <input id="currency" name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                        </div>
                        <div className="flex max-[992px]:flex-col">
                            <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="country">{translation?.data?.business?.choose?.country}</label>
                                <input id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="city">{translation?.data?.business?.choose?.city}</label>
                                <input id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="district">{translation?.data?.business?.choose?.district}</label>
                                <input id="district" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="street">{translation?.data?.business?.choose?.street}</label>
                                <input id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-7.5">
                <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                    <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                        <h5 className="text-[#676767] text-lg py-1.25">{translation?.data?.business?.property_map_info}</h5>
                    </div>
                    <div className="p-4">
                        <div className={`flex flex-col items-center justify-center ${latitude && longitude ? "h-100" : "h-50"}`}>
                            {!(latitude && longitude) && <div className="flex flex-col items-center">
                                <p className="text-[#6c757d] mb-4">{translation?.data?.business?.no_map_coordinates_warning}</p>
                                <button className="text-sm font-semibold text-white py-2 px-5 rounded-lg cursor-pointer bg-[#27c5d2] hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.create_map_coordinates}</button>
                            </div>}
                            {(latitude && longitude) && <div className="w-full h-full">
                                <iframe
                                    src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                                    className="w-full block h-full border-0 rounded-lg"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="Google Maps"
                                />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-7.5">
                {features?.map((item, groupIndex) => (
                    <div key={groupIndex} className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">{item.title}</h5>
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap justify-start max-[992px]:flex-col">
                                {item.features?.map(feature => (
                                    <div key={feature.id} className="w-[25%] px-3 mb-2 flex flex-col max-[992px]:w-full">
                                        <div className="flex justify-between items-center">
                                            <label className="text-[#6c757d]" htmlFor={feature.id}>{feature?.title}</label>
                                            {feature.input_type === "file" && <a className="text-xs text-[#026872] font-semibold" target="_blank" href={feature?.value[0]?.path}>Dosyaları Görüntüle (1 Dosya)</a>}
                                        </div>
                                        {feature.input_type !== "select"
                                            ? <input id={feature.id} name={feature.id} key={feature.id} value={feature.input_type === "text" || feature.input_type === "number" ? feature?.value : ""} onChange={(e) => handleFeatureChange(groupIndex, feature.id, e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type={feature.input_type} />
                                            : <select id={feature.id} name={feature.id} key={feature.id} value={feature.value} onChange={(e) => handleFeatureChange(groupIndex, feature.id, e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]">
                                                <option>{feature.title}</option>
                                                {feature.options.map(option => (
                                                    <option key={option.id}>{option.title}</option>
                                                ))}
                                            </select>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full mb-7.5">
                <div className="flex gap-1">
                    <button onClick={handleUpdateProperty} className="text-sm bg-[#27c5d2] text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.update}</button>
                    {status === "draft" && <button className="text-sm bg-[#F1F1F1] text-[#4B4B4B] rounded-lg py-2 px-5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">{translation?.data?.business?.update_and_publish}</button>}
                </div>
            </div>
        </div>
    )
}
