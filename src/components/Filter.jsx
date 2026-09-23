import downArrow from "../assets/down-arrow.png"
import { useEffect, useState } from "react"
import { getAllCities, getAllCountries, getAllDistricts, getAllStreets, getAllCurrencies, getAllFilterOptions } from "../services/filterApi"
import { getAllPropertiesType } from "../services/propertiesApi"

export function Filter({searchParams , typeId}) {

    const [priceFilter, setPriceFilter] = useState(false)
    const [cateFilter, setCateFilter] = useState(false)
    const [locationFilter, setLocationFilter] = useState(false);

    const [countries, setCountries] = useState([])
    const [countryId, setCountryId] = useState("");

    const [cities, setCities] = useState([])
    const [cityId, setCityId] = useState("");

    const [district, setDistrict] = useState([]);
    const [districtId, setDistrictId] = useState("");

    const [street, setStreet] = useState([]);
    const [streetId, setStreetId] = useState("");

    const [currencies, setCurrencies] = useState([]);
    const [currencieId, setCurrenciId] = useState("")

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const [roomCount, setRoomCount] = useState("");
    const [facadeId, setFacadeId] = useState("");
    const [heatingId, setHeatingId] = useState("");

    const [minArea, setMinArea] = useState("");
    const [maxArea, setMaxArea] = useState("");

    const [minBuildingAge, setMinBuildingAge] = useState("");
    const [maxBuildingAge, setMaxBuildingAge] = useState("");

    const [landTitleTypeId, setLandTitleTypeId] = useState("");
    const [fieldTitleTypeId, setFieldTitleTypeId] = useState("");

    useEffect(() => {
        getAllCountries().then(setCountries)
    }, [])

    useEffect(() => {
        if (!countryId) {
            setCities([]);
            return;
        }

        getAllCities(countryId).then(setCities);
    }, [countryId]);

    useEffect(() => {
        if (!cityId) {
            setDistrict([]);
            return;
        }
        getAllDistricts(cityId).then(setDistrict);
    }, [cityId])

    useEffect(() => {
        if (!districtId) {
            setStreet([]);
            return;
        }
        getAllStreets(districtId).then(setStreet)
    }, [districtId])

    useEffect(() => {
        getAllCurrencies().then(setCurrencies);
    }, [])

    const [propertiesType, setPropertiesType] = useState([])

    useEffect(() => {
        getAllPropertiesType().then(setPropertiesType)
    }, [])

    const [type, setType] = useState(typeId ? Number(typeId) : "All")

    useEffect(() => {
        setType(typeId ? Number(typeId) : "All")
    }, [typeId])

    const [filterOptions, setFilterOptions] = useState([]);

    useEffect(() => {
        getAllFilterOptions(type).then(setFilterOptions)
    }, [type])

    const findFilterParam = (title) =>
        filterOptions?.data?.flatMap(group => group.params || [])?.find(param => param.title === title);

    return (
        <div>
            <div className="flex flex-col gap-2">
                <ul className='flex mt-10 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#27C5D2] gap-2.5'>
                    <li>
                        <button onClick={() => setType("All")} className={`px-7.5 py-2.5 text-sm text-black cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100 ${searchParams && type === "All" ? "bg-[#27c5d2] opacity-100" : "opacity-70"}`}>Tümü</button>
                    </li>
                    {propertiesType?.map(item => (
                        <li key={item.id}>
                            <button onClick={() => setType(item.id)} className={`px-7.5 py-2.5 text-sm cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100 ${searchParams && type === item.id ? "bg-[#27c5d2] opacity-100 text-white rounded-lg" : searchParams?.toString() ? "bg-[#f8f8f8] rounded-lg opacity-100" : "opacity-70"}`}>{item.title}</button>
                        </li>
                    ))}
                </ul>
                {type === "All" && (
                    <form action={"/properties"} method="GET" className={`flex ${searchParams?.toString() ? "bg-[#f8f8f8]" : ""} max-[992px]:flex-col gap-2.5 p-3.75`}>
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 max-w-w-[calc(100%/3)] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Kategoriler</label>
                            <div className="relative">
                                <button type="button" onClick={() => setCateFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="font-semibold text-[13px]">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {cateFilter && <ul className="absolute w-full max-h-75 overflow-y-auto bg-white border z-50 border-[#eee] rounded-lg p-2">
                                    <li className="w-full py-1">
                                        <div className="m-2.5 max-w-full">
                                            <input className="text-sm rounded-lg w-full py-1.25 px-2.5 placeholder:text-[#838383] bg-[#f8f8f8]" type="text" placeholder="Kategorilerde arayın" />
                                        </div>
                                    </li>
                                    {propertiesType?.map(item => (
                                        <li className="w-full py-1" key={item.id}>
                                            <input name={item.id} id={item.id} className="cursor-pointer select-none w-5 h-5" type="checkbox" />
                                            <label htmlFor={item.id} className="text-[#747474] text-sm ml-2 cursor-pointer select-none hover:text-black transition-colors duration-300 ease-in-out">{item.title}</label>
                                        </li>
                                    ))}
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 w-[calc(100%/3)] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input name="min_sell_price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input name="max_sell_price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select name="currency_id" value={currencieId} onChange={(e) => setCurrenciId(e.target.value)} className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" id="">
                                                    {currencies.map(item => (
                                                        <option key={item.id} value={item.id}>{item.code}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 w-[calc(100%/3)] pr-2.5">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select value={countryId} placeholder="Ülke Seçin" onChange={(e) => setCountryId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="country_id" id="">
                                                    <option value="" disabled>
                                                        Ülke Seçin
                                                    </option>
                                                    {countries.data.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="city_id" id="">
                                                    <option value="" disabled>
                                                        İl Seçin
                                                    </option>
                                                    {cities.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select value={districtId} onChange={(e) => setDistrictId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="district_id" id="">
                                                    <option value="" disabled>
                                                        İlçe Seçin
                                                    </option>
                                                    {district.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select value={streetId} onChange={(e) => setStreetId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="street_id" id="">
                                                    <option value="" disabled>
                                                        Mahalle
                                                    </option>
                                                    {street.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full w-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>)}
                {type === 27 && (
                    <form action={"/properties"} method="GET" className={`flex max-[992px]:flex-col ${searchParams?.toString() ? "bg-[#f8f8f8]" : ""}  gap-2.5 p-3.75`}>
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input name="min_price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input name="max_price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select name="currency_id" value={currencieId} onChange={(e) => setCurrenciId(e.target.value)} className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" id="">
                                                    {currencies.map(item => (
                                                        <option key={item.id} value={item.id}>{item.code}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select value={countryId} placeholder="Ülke Seçin" onChange={(e) => setCountryId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="country_id" id="">
                                                    <option value="" disabled>
                                                        Ülke Seçin
                                                    </option>
                                                    {countries.data.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="city_id" id="">
                                                    <option value="" disabled>
                                                        İl Seçin
                                                    </option>
                                                    {cities.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select value={districtId} onChange={(e) => setDistrictId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="district_id" id="">
                                                    <option value="" disabled>
                                                        İlçe Seçin
                                                    </option>
                                                    {district.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select value={streetId} onChange={(e) => setStreetId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="street_id" id="">
                                                    <option value="" disabled>
                                                        Mahalle
                                                    </option>
                                                    {street.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Oda Sayısı</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <select name={findFilterParam("Oda Sayısı")?.id ? `details[${findFilterParam("Oda Sayısı").id}]` : undefined} value={roomCount} onChange={(e) => setRoomCount(e.target.value)} className="font-semibold text-[13px] w-full cursor-pointer">
                                    <option value="">Tümü</option>
                                    {findFilterParam("Oda Sayısı")?.options?.map(item => (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Cephe</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <select name={findFilterParam("Cephe")?.id ? `details[${findFilterParam("Cephe").id}]` : undefined} value={facadeId} onChange={(e) => setFacadeId(e.target.value)} className="font-semibold text-[13px] w-full cursor-pointer">
                                    <option value="">Tümü</option>
                                    {findFilterParam("Cephe")?.options?.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Isıtma sistemi</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <select name={findFilterParam("Isıtma Sistemi")?.id ? `details[${findFilterParam("Isıtma Sistemi").id}]` : undefined} value={heatingId} onChange={(e) => setHeatingId(e.target.value)} className="font-semibold text-[13px] w-full cursor-pointer">
                                    <option value="">Tümü</option>
                                    {findFilterParam("Isıtma Sistemi")?.options?.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>
                )}
                {type === "Project" && (
                    <form action={"/properties"} method="GET" className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" name="" id="">
                                                    <option selected value="">TRY</option>
                                                    <option value="">USD</option>
                                                    <option value="">EUR</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Oda Sayısı</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <select className="font-semibold text-[13px] w-full cursor-pointer">
                                    <option disabled selected value="">Oda Sayısı</option>
                                    <option value="">1+0</option>
                                    <option value="">1+0 Bahçeli Daire</option>
                                    <option value="">1+1</option>
                                    <option value="">1+1 Dublex</option>
                                    <option value="">1+1 Bahçeli Dublex</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 pr-2.5 max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">inşaat bitiş tarihi</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <input type="date" name="" id="" />
                                <input type="date" />
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>
                )}
                {type === 21 && (
                    <form action={"/properties"} method="GET" className={`flex max-[992px]:flex-col ${searchParams?.toString() ? "bg-[#f8f8f8]" : ""} gap-2.5 p-3.75`}>
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input name="min_price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input name="max_price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select name="currency_id" value={currencieId} onChange={(e) => setCurrenciId(e.target.value)} className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" id="">
                                                    {currencies.map(item => (
                                                        <option key={item.id} value={item.id}>{item.code}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select value={countryId} placeholder="Ülke Seçin" onChange={(e) => setCountryId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="country_id" id="">
                                                    <option value="" disabled>
                                                        Ülke Seçin
                                                    </option>
                                                    {countries.data.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="city_id" id="">
                                                    <option value="" disabled>
                                                        İl Seçin
                                                    </option>
                                                    {cities.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select value={districtId} onChange={(e) => setDistrictId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="district_id" id="">
                                                    <option value="" disabled>
                                                        İlçe Seçin
                                                    </option>
                                                    {district.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select value={streetId} onChange={(e) => setStreetId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="street_id" id="">
                                                    <option value="" disabled>
                                                        Mahalle
                                                    </option>
                                                    {street.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Oda Sayısı</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <select name={findFilterParam("Oda Sayısı")?.id ? `details[${findFilterParam("Oda Sayısı").id}]` : undefined} value={roomCount} onChange={(e) => setRoomCount(e.target.value)} className="font-semibold text-[13px] w-full cursor-pointer">
                                    <option value="">Oda Sayısı</option>
                                    {findFilterParam("Oda Sayısı")?.options?.map(item => (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                            <button type="button" className="flex justify-between cursor-pointer w-full">
                                <input name="min_area" value={minArea} onChange={(e) => setMinArea(e.target.value)} className="text-sm flex-1" type="number" placeholder="min" />
                                <input name="max_area" value={maxArea} onChange={(e) => setMaxArea(e.target.value)} className="text-sm flex-1" type="number" placeholder="max" />
                            </button>
                        </div>
                        <div className="flex-1 max-w-[20%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">bina yaşı</label>
                            <button type="button" className="flex justify-between cursor-pointer flex-1">
                                <input name="min_building_age" min={0} value={minBuildingAge} onChange={(e) => setMinBuildingAge(e.target.value)} className="text-sm flex-1" type="number" placeholder="min" />
                                <input name="max_building_age" value={maxBuildingAge} onChange={(e) => setMaxBuildingAge(e.target.value)} className="text-sm flex-1" type="number" placeholder="max" />
                            </button>
                        </div>
                        <div>
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>
                )}
                {type === "Project Villa" && (
                    <form action={"/properties"} method="GET" className={`flex gap-2.5 ${searchParams?.toString() ? "bg-[#f8f8f8]" : ""} max-[992px]:flex-col p-3.75`}>
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" name="" id="">
                                                    <option selected value="">TRY</option>
                                                    <option value="">USD</option>
                                                    <option value="">EUR</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 pr-2.5">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
                                                    <option selected value="">Ülke Seçin</option>
                                                    <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                                    <option value="">Türkiye</option>
                                                    <option value="">Birleşik Arap Emirlikleri</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>
                )}
                {type === 9 && (
                    <form action={"/properties"} method="GET" className={`flex gap-2.5 ${searchParams?.toString() ? "bg-[#f8f8f8]" : ""} max-[992px]:flex-col p-3.75`}>
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 max-w-[25%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input name="min_price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input name="max_price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select name="currency_id" value={currencieId} onChange={(e) => setCurrenciId(e.target.value)} className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" id="">
                                                    {currencies.map(item => (
                                                        <option key={item.id} value={item.id}>{item.code}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[25%] pr-2.5">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select value={countryId} placeholder="Ülke Seçin" onChange={(e) => setCountryId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="country_id" id="">
                                                    <option value="" disabled>
                                                        Ülke Seçin
                                                    </option>
                                                    {countries.data.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="city_id" id="">
                                                    <option value="" disabled>
                                                        İl Seçin
                                                    </option>
                                                    {cities.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select value={districtId} onChange={(e) => setDistrictId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="district_id" id="">
                                                    <option value="" disabled>
                                                        İlçe Seçin
                                                    </option>
                                                    {district.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select value={streetId} onChange={(e) => setStreetId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="street_id" id="">
                                                    <option value="" disabled>
                                                        Mahalle
                                                    </option>
                                                    {street.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[25%] pr-2.5">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Arsa Tapu Türü</label>
                            <div className="flex justify-between cursor-pointer w-full">
                                <select name={findFilterParam("Arsa Tapu Türü")?.id ? `details[${findFilterParam("Arsa Tapu Türü").id}]` : undefined} value={landTitleTypeId} onChange={(e) => setLandTitleTypeId(e.target.value)} className="text-[13px] font-semibold w-full" id="">
                                    <option value="">Arsa Tapu Türü</option>
                                    {findFilterParam("Arsa Tapu Türü")?.options?.map(item => (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 max-w-[25%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                            <button type="button" className="flex justify-between cursor-pointer w-full">
                                <input name="min_area" value={minArea} onChange={(e) => setMinArea(e.target.value)} className="text-sm flex-1" type="number" placeholder="min" />
                                <input name="max_area" value={maxArea} onChange={(e) => setMaxArea(e.target.value)} className="text-sm flex-1" type="number" placeholder="max" />
                            </button>
                        </div>
                        <div>
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>
                )}
                {type === 10 && (
                    <form action={"/properties"} method="GET" className={`flex gap-2.5 ${searchParams?.toString() ? "bg-[#f8f8f8]" : ""} max-[992px]:flex-col p-3.75`}>
                        <input type="hidden" name="type_id" value={type} />
                        <div className="flex-1 max-w-[25%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                            <div className="relative">
                                <button type="button" onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">-</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {priceFilter && <ul className="absolute w-full p-2.5 bg-white">
                                    <li>
                                        <div className="border border-[#D9D9D9] rounded-lg p-1 mb-2.5">
                                            <div className="bg-[#d9d9d9] text-[#474747] text-center py-1.5 px-2.5 rounded-lg">Satış Fiyatı</div>
                                        </div>
                                        <div>
                                            <div>
                                                <input name="min_price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En az" />
                                            </div>
                                            <div>
                                                <input name="max_price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 w-full rounded-lg" type="text" placeholder="En fazla" />
                                            </div>
                                            <div>
                                                <select name="currency_id" value={currencieId} onChange={(e) => setCurrenciId(e.target.value)} className="py-2 pl-3 pr-9 w-full border border-[#d9d9d9] rounded-lg" id="">
                                                    {currencies.map(item => (
                                                        <option key={item.id} value={item.id}>{item.code}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[25%] pr-2.5">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                            <div className="relative">
                                <button type="button" onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                    <p className="text-[13px] font-semibold">Tümü</p>
                                    <img className="w-4 h-4" src={downArrow} alt="" />
                                </button>
                                {locationFilter && <ul className="absolute w-full bg-white">
                                    <li className="py-1 px-4">
                                        <div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                                <select value={countryId} placeholder="Ülke Seçin" onChange={(e) => setCountryId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="country_id" id="">
                                                    <option value="" disabled>
                                                        Ülke Seçin
                                                    </option>
                                                    {countries.data.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İl Seçin</label>
                                                <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="city_id" id="">
                                                    <option value="" disabled>
                                                        İl Seçin
                                                    </option>
                                                    {cities.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">İlçe Seçin</label>
                                                <select value={districtId} onChange={(e) => setDistrictId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="district_id" id="">
                                                    <option value="" disabled>
                                                        İlçe Seçin
                                                    </option>
                                                    {district.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-sm text-[#747474]" htmlFor="">Mahalle</label>
                                                <select value={streetId} onChange={(e) => setStreetId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="street_id" id="">
                                                    <option value="" disabled>
                                                        Mahalle
                                                    </option>
                                                    {street.map(item => (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <div className="flex-1 max-w-[25%] pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                            <button type="button" className="flex justify-between cursor-pointer w-full">
                                <input name="min_area" value={minArea} onChange={(e) => setMinArea(e.target.value)} className="text-sm flex-1" type="number" placeholder="min" />
                                <input name="max_area" value={maxArea} onChange={(e) => setMaxArea(e.target.value)} className="text-sm flex-1" type="number" placeholder="max" />
                            </button>
                        </div>
                        <div className="flex-1 max-w-[25%] pr-2.5">
                            <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Tarla Tapu Türü</label>
                            <select name={findFilterParam("Tarla Tapu Türü")?.id ? `details[${findFilterParam("Tarla Tapu Türü").id}]` : undefined} value={fieldTitleTypeId} onChange={(e) => setFieldTitleTypeId(e.target.value)} className="text-[13px] font-semibold w-full" id="">
                                <option value="">Tarla Tapu Türü</option>
                                {findFilterParam("Tarla Tapu Türü")?.options?.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="max-[992px]:w-full">
                            <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}