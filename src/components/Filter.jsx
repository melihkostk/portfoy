import downArrow from "../assets/down-arrow.png"
import React, { useEffect } from "react"
import { getAllCities, getAllCountries, getAllDistricts, getAllStreets } from "../services/filterApi"

export function Filter() {

    const [type, setType] = React.useState("All")
    const [priceFilter, setPriceFilter] = React.useState(false)
    const [cateFilter, setCateFilter] = React.useState(false)
    const [locationFilter, setLocationFilter] = React.useState(false);

    const [countries, setCountries] = React.useState([])
    const [countryId, setCountryId] = React.useState("");

    const [cities, setCities] = React.useState([])
    const [cityId, setCityId] = React.useState("");

    const [district, setDistrict] = React.useState([]);
    const [districtId, setDistrictId] = React.useState("");

    const [street, setStreet] = React.useState([]);
    const [streetId, setStreetId] = React.useState("");

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



    return (
        <div className="flex flex-col">
            <ul className='flex mt-10 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#27C5D2]'>
                <li>
                    <button onClick={() => setType("All")} className='px-7.5 py-2.5 text-sm opacity-70 text-black cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Tümü</button>
                </li>
                <li>
                    <button onClick={() => setType("Apartment")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Apartman</button>
                </li>
                <li>
                    <button onClick={() => setType("Project")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Proje Apartmanlar</button>
                </li>
                <li>
                    <button onClick={() => setType("Villa")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Villa</button>
                </li>
                <li>
                    <button onClick={() => setType("Project Villa")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Proje Villa</button>
                </li>
                <li>
                    <button onClick={() => setType("Land")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Arsa</button>
                </li>
                <li>
                    <button onClick={() => setType("Field")} className='px-7.5 py-2.5 text-sm opacity-70 cursor-pointer whitespace-nowrap hover:opacity-100 transition-opacity duration-300 ease-in-out focus:opacity-100'>Tarla</button>
                </li>
            </ul>
            {type === "All" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Kategoriler</label>
                        <div className="relative">
                            <button onClick={() => setCateFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                <p className="font-semibold text-[13px]">Tümü</p>
                                <img className="w-4 h-4" src={downArrow} alt="" />
                            </button>
                            {cateFilter && <ul className="absolute w-full max-h-75 overflow-y-auto bg-white">
                                <li className="w-full py-1">
                                    <div className="m-2.5 max-w-full">
                                        <input className="text-sm w-full py-1.25 px-2.5 placeholder:text-[#838383] bg-[#f8f8f8]" type="text" placeholder="Kategorilerde arayın" />
                                    </div>
                                </li>
                                <li className="w-full py-1">
                                    <input type="checkbox" />
                                    <label className="text-[#747474] text-sm">Apartman</label>
                                </li>
                                <li className="w-full py-1">
                                    <input type="checkbox" />
                                    <label className="text-[#747474] text-sm">Projeler</label>
                                </li>
                                <div className="pl-7.5">
                                    <li className="pt-2 pb-1">
                                        <input type="checkbox" />
                                        <label className="text-[#747474] text-sm">Proje Apartman</label>
                                    </li>
                                    <li className="pt-2 pb-1">
                                        <input type="checkbox" />
                                        <label className="text-[#747474] text-sm">Proje Villa</label>
                                    </li>
                                </div>
                                <li className="w-full py-1">
                                    <input type="checkbox" />
                                    <label className="text-[#747474] text-sm">Villa</label>
                                </li>
                                <li className="w-full py-1">
                                    <input type="checkbox" />
                                    <label className="text-[#747474] text-sm">Arsa</label>
                                </li>
                                <li className="w-full py-1">
                                    <input type="checkbox" />
                                    <label className="text-[#747474] text-sm">Tarla</label>
                                </li>
                            </ul>}
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                                                <option value="">TRY</option>
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
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Konum</label>
                        <div className="relative">
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
                                <p className="text-[13px] font-semibold">Tümü</p>
                                <img className="w-4 h-4" src={downArrow} alt="" />
                            </button>
                            {locationFilter && <ul className="absolute w-full bg-white">
                                <li className="py-1 px-4">
                                    <div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-[#747474]" htmlFor="">Ülke Seçin</label>
                                            <select value={countryId} placeholder="Ülke Seçin" onChange={(e) => setCountryId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
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
                                            <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
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
                                            <select value={districtId} onChange={(e) => setDistrictId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
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
                                            <select value={streetId} onChange={(e) => setStreetId(e.target.value)} className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded" name="" id="">
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
                </div>)}
            {type === "Apartment" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="relative">
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Cephe</label>
                        <div className="flex justify-between cursor-pointer w-full">
                            <select className="font-semibold text-[13px] w-full cursor-pointer">
                                <option disabled selected value="">Cephe</option>
                                <option value="">Güney</option>
                                <option value="">Kuzey</option>
                                <option value="">Doğu</option>
                                <option value="">Batı</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Isıtma sistemi</label>
                        <div className="flex justify-between cursor-pointer w-full">
                            <select className="font-semibold text-[13px] w-full cursor-pointer">
                                <option disabled selected value="">Isıtma Sistemi</option>
                                <option value="">Klima</option>
                                <option value="">Merkezi Sistem</option>
                                <option value="">Gaz</option>
                                <option value="">Yerden Isıtma</option>
                                <option value="">Soba</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Project" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="relative">
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
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
                </div>
            )}
            {type === "Villa" && (
                <div className="flex max-[992px]:flex-col gap-2.5 p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">konum</label>
                        <div className="relative">
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                        <button className="flex justify-between cursor-pointer w-full">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </button>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">bina yaşı</label>
                        <button className="flex justify-between cursor-pointer flex-1">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </button>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Project Villa" && (
                <div className="flex gap-2.5 max-[992px]:flex-col p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                </div>
            )}
            {type === "Land" && (
                <div className="flex gap-2.5 max-[992px]:flex-col p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Arsa Tapu Türü</label>
                        <div className="flex justify-between cursor-pointer w-full">
                            <select className="text-[13px] font-semibold w-full" name="" id="">
                                <option selected disabled value="">Arsa Tapu Türü</option>
                                <option value="">Arazi Tapusu</option>
                                <option value="">Paylaşılan Tapu</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                        <button className="flex justify-between cursor-pointer w-full">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </button>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
            {type === "Field" && (
                <div className="flex gap-2.5 max-[992px]:flex-col p-3.75">
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">satış fiyatı</label>
                        <div className="relative">
                            <button onClick={() => setPriceFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                            <button onClick={() => setLocationFilter(prev => !prev)} className="flex justify-between cursor-pointer w-full">
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
                    <div className="flex-1 pr-2.5 border-r border-r-[#eeeeee] max-[992px]:border-r-0">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">MetreKare</label>
                        <button className="flex justify-between cursor-pointer w-full">
                            <input className="text-sm flex-1" type="number" placeholder="min" />
                            <input className="text-sm flex-1" type="number" placeholder="max" />
                        </button>
                    </div>
                    <div className="flex-1 pr-2.5">
                        <label className="uppercase text-[13px] text-[#767676] font-semibold" htmlFor="">Tarla Tapu Türü</label>
                        <select className="text-[13px] font-semibold w-full" name="" id="">
                            <option selected disabled value="">Tarla Tapu Türü</option>
                            <option value="">Müstakil Tapu</option>
                            <option value="">Paylaşımlı Tapu</option>
                        </select>
                    </div>
                    <div className="max-[992px]:w-full">
                        <button className="bg-[#27C5D2] max-[992px]:w-full max-[992px]:rounded-lg text-white h-full py-2 px-5 rounded-r-lg font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                    </div>
                </div>
            )}
        </div>
    )
}