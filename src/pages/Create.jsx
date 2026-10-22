import { CreateButton } from "../components/CreateButton"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { createProperty, getAllPropertiesType } from "../services/propertiesApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getAllCities, getAllCountries, getAllCurrencies, getAllDistricts, getAllStreets } from "../services/filterApi"
import { useNavigate } from "react-router-dom"
import whiteClose from "../assets/close.png"
import { getTranslation } from "../services/translation"

export function Create({ loged , locale, setLocale }) {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    const [propertyType, setPropertyType] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllPropertiesType().then(setPropertyType).finally(() => setLoaded(true))
    }, [])

    const [selectedType, setSelectedType] = useState("");

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getAllCountries().then(setCountries);
    }, [])

    const [selectedCountry, setSelectedCountry] = useState("");

    const [cities, setCities] = useState([]);

    useEffect(() => {
        getAllCities(selectedCountry).then(setCities);
    }, [selectedCountry])

    const [selectedCity, setSelectedCity] = useState("");

    const [district, setDistrict] = useState([]);

    useEffect(() => {
        getAllDistricts(selectedCity).then(setDistrict)
    }, [selectedCity])

    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [streets, setStreets] = useState([]);

    useEffect(() => {
        getAllStreets(selectedDistrict).then(setStreets)
    }, [selectedDistrict])

    const [selectedStreet, setSelectedStreet] = useState("");

    const [address, setAddress] = useState("");

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getAllCurrencies().then(setCurrencies);
    }, [])

    const [selectedCurrencie, setSelectedCurrencie] = useState(1);

    const [pricingType, setPricingType] = useState("PASS")

    const [passPrice, setPassPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");

    const [commutionSellPrice, setCommutionSellPrice] = useState("");
    const [buyerCommutionRate, setBuyerCommutionRate] = useState("");
    const [sellerCommutionRate, setSellerCommutionRate] = useState("");

    const [errorMessageShown, setErrorMessageShown] = useState(false)

    function handleAdd(e) {
        e.preventDefault()
        setLoaded(false)
        createProperty(selectedType, title, 1, selectedCountry, selectedCity, selectedDistrict, selectedStreet, selectedCurrencie, sellPrice, passPrice, pricingType).then(data => {
            if (data.status === "success") {
                navigate(`/properties/${data?.data?.property?.id}/edit`)
            }
            else {
                setErrorMessageShown(true)
            }
        }).finally(() => setLoaded(true))
    }

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            {errorMessageShown && <div className="fixed max-w-1/2 flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-linear-to-r from-[rgb(201,61,61)] to-[rgb(151,5,5)] p-3 text-white">
                <p>Lütfen tüm alanları doğru bir şekilde doldurun.</p>
                <img onClick={() => setErrorMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {!loaded && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.properties}</span> {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.create_property}</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%] flex items-center justify-center">
                <form onSubmit={handleAdd} className="w-[50%] max-[992px]:w-full">
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">{translation?.data?.business?.basic_info}</p>
                        <input required value={title} onChange={(e) => setTitle(e.target.value)} className="p-3.75 rounded-lg border border-[#ededed] w-full" type="text" placeholder={translation?.data?.business?.property_title} />
                        <div className="flex overflow-x-auto justify-between scrollbar-none mt-7.5">
                            {propertyType.map(item => (
                                <CreateButton
                                    key={item.id}
                                    title={item.title}
                                    id={item.id}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">{translation?.data?.business?.location_info}</p>
                        <div>
                            <div className="flex justify-start flex-wrap items-start max-[992px]:flex-col">
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">{translation?.data?.business?.choose?.country}</label>
                                    <select required value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="p-2.5 border border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.country}</option>
                                        {countries?.data?.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">{translation?.data?.business?.choose?.city}</label>
                                    <select required value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="p-2.5 border border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.city}</option>
                                        {cities.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">{translation?.data?.business?.choose?.district}</label>
                                    <select required value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="p-2.5 border border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.district}</option>
                                        {district.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">{translation?.data?.business?.choose?.street}</label>
                                    <select required value={selectedStreet} onChange={(e) => setSelectedStreet(e.target.value)} className="p-2.5 border border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.street}</option>
                                        {streets.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="px-2.5 max-[992px]:w-full max-[992px]:px-0">
                                <label className="text-sm text-[#212529] opacity-50" htmlFor="">{translation?.data?.business?.address}</label>
                                <input required value={address} onChange={(e) => setAddress(e.target.value)} className="p-2.5 rounded-lg border border-[#e8e8e8] block w-full" type="text" placeholder={translation?.data?.business?.address} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">{translation?.data?.business?.pricing_info}</p>
                        <div>
                            <div className="flex flex-col items-center">
                                <p className="mb-1.25 text-sm text-[#212529] text-center opacity-50">{translation?.data?.business?.choose_pricing_type_info_text}</p>
                                <div>
                                    <button onClick={() => setPricingType("PASS")} className={`${pricingType === "PASS" ? "bg-[#e2e2e2] rounded-lg" : "bg-[#f8f8f8]"} text-center text-sm font-semibold py-2.5 px-7.5 mb-7.5 hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out cursor-pointer`}>{translation?.data?.business?.pricing_type?.pass}</button>
                                    {(selectedType === 27 || selectedType === 21) && <button onClick={() => setPricingType("COMISSION")} className={`${pricingType === "COMISSION" ? "bg-[#e2e2e2] rounded-lg" : "bg-[#f8f8f8]"} text-center text-sm font-semibold py-2.5 px-7.5 cursor-pointer mb-7.5 hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out`}>{translation?.data?.business?.pricing_type?.commission}</button>}
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="mb-1.25 text-sm text-[#212529] opacity-50 text-center">
                                    {translation?.data?.business?.choose_currency_info_text}
                                </p>
                                <div className="flex items-center mb-7.5">
                                    {currencies.map(item => (
                                        <button key={item.id} onClick={() => setSelectedCurrencie(item.id)} className={`text-sm text-[#212529] cursor-pointer font-semibold py-2.5 px-7.5 hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out ${item.id === selectedCurrencie ? "bg-[#e2e2e2] rounded-lg" : "bg-[#f8f8f8]"}`}>{item.code}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-12.5">
                            {pricingType === "PASS" && <div>
                                <div className="mb-5">
                                    <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">{translation?.data?.business?.pass_price}</label>
                                    <input required value={passPrice} onChange={(e) => setPassPrice(e.target.value)} className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.pass_price} />
                                </div>
                                <div className="mb-5">
                                    <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">{translation?.data?.business?.sell_price}</label>
                                    <input required value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.sell_price} />
                                </div>
                            </div>}
                            {pricingType === "COMISSION" && <div>
                                <div>
                                    <div className="mb-5">
                                        <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">{translation?.data?.business?.sell_price}</label>
                                        <input required value={commutionSellPrice} onChange={(e) => setCommutionSellPrice(e.target.value)} className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="text" placeholder={translation?.data?.business?.sell_price} />
                                    </div>
                                    <div className="flex gap-3.75">
                                        <div className="mb-5 flex-1">
                                            <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">{translation?.data?.business?.buyer_commission_rate}</label>
                                            <input required value={buyerCommutionRate} onChange={(e) => setBuyerCommutionRate(e.target.value)} className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.buyer_commission_rate} />
                                        </div>
                                        <div className="mb-5 flex-1">
                                            <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">{translation?.data?.business?.seller_commission_rate}</label>
                                            <input required value={sellerCommutionRate} onChange={(e) => setSellerCommutionRate(e.target.value)} className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.seller_commission_rate} />
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="h-12.5 bg-[#27C5D2] px-5 cursor-pointer rounded-[5px] text-white whitespace-nowrap hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.create_property}</button>
                    </div>
                </form>
            </div>
            <div className='w-full mt-30 mb-30'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks translation={translation} />
                </div>
            </div>
            <div className='w-full'>
                <Footer translation={translation} loged={loged} />
            </div>
        </div>
    )
}