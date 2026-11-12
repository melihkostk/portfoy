import { CreateButton } from "../components/CreateButton"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { createProperty, getAllPropertiesType } from "../services/propertiesApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getAllCities, getAllCountries, getAllCurrencies, getAllDistricts, getAllStreets } from "../services/filterApi"
import { Link, useNavigate } from "react-router-dom"
import whiteClose from "../assets/close.png"
import { useAppContext } from "../context/AppContext"

export function Create() {

    const { translation, translationLoaded } = useAppContext();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    const [propertyType, setPropertyType] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllPropertiesType().then(setPropertyType).catch((error) => console.log(error)).finally(() => setLoaded(true))
    }, [])

    const [selectedType, setSelectedType] = useState("");

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getAllCountries().then(setCountries).catch((error) => console.log(error));
    }, [])

    const [selectedCountry, setSelectedCountry] = useState("");

    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (!selectedCountry) return;
        getAllCities(selectedCountry).then(setCities).catch((error) => console.log(error));
    }, [selectedCountry])

    const [selectedCity, setSelectedCity] = useState("");

    const [district, setDistrict] = useState([]);

    useEffect(() => {
        if (!selectedCity) return;
        getAllDistricts(selectedCity).then(setDistrict).catch((error) => console.log(error))
    }, [selectedCity])

    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [streets, setStreets] = useState([]);

    useEffect(() => {
        if (!selectedDistrict) return;
        getAllStreets(selectedDistrict).then(setStreets).catch((error) => console.log(error))
    }, [selectedDistrict])

    const [selectedStreet, setSelectedStreet] = useState("");

    const [address, setAddress] = useState("");

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getAllCurrencies().then(setCurrencies).catch((error) => console.log(error));
    }, [])

    const [selectedCurrencie, setSelectedCurrencie] = useState(1);

    const [pricingType, setPricingType] = useState("PASS")

    const [passPrice, setPassPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");

    const [commutionSellPrice, setCommutionSellPrice] = useState("");
    const [buyerCommutionRate, setBuyerCommutionRate] = useState("");
    const [sellerCommutionRate, setSellerCommutionRate] = useState("");

    const [errorMessageShown, setErrorMessageShown] = useState(false)

    const [underConstruction, setUnderConstruction] = useState("");

    function handleAdd(e) {
        e.preventDefault()
        setLoaded(false)
        createProperty(selectedType, title, underConstruction, selectedCountry, selectedCity, selectedDistrict, selectedStreet, selectedCurrencie, sellPrice, passPrice, pricingType).then(data => {
            if (data.status === "success") {
                navigate(`/properties/${data?.data?.property?.id}/edit`)
            }
            else {
                setErrorMessageShown(true)
            }
        }).catch((error) => console.log(error)).finally(() => setLoaded(true))
    }

    const [selectedProject, setSelectedProject] = useState("");

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            {errorMessageShown && <div className="fixed max-w-1/2 flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-linear-to-r from-[rgb(201,61,61)] to-[rgb(151,5,5)] p-3 text-white">
                <p>{translation?.data?.business?.please_fill_fields}</p>
                <img onClick={() => setErrorMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {(!loaded || !translationLoaded) && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link to={"/properties"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.properties}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-[#9a9898] text-sm font-semibold">{translation?.data?.business?.create_property}</Link>
                </div>
            </div>
            <div className="w-full max-w-[90%] flex items-center justify-center">
                <form onSubmit={handleAdd} className="w-[50%] max-[992px]:w-full">
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-bold">{translation?.data?.business?.basic_info}</p>
                        <input required value={title} onChange={(e) => setTitle(e.target.value)} className="p-3.75 focus:outline-none font-medium rounded-lg border border-[#ededed] w-full" type="text" placeholder={translation?.data?.business?.property_title} />
                        <div className="flex overflow-x-auto justify-between scrollbar-none mt-7.5">
                            {propertyType.map(item => (
                                <CreateButton
                                    key={item.id}
                                    title={item.title}
                                    id={item.id}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                    setUnderConstruction={setUnderConstruction}
                                />
                            ))}
                        </div>
                        {selectedType === 29 && <div className="mt-5">
                            <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)} className="w-full bg-[#f8f8f8] p-2.5 rounded-lg focus-visible:outline-none text-[#818181] font-medium" name="" id="">
                                <option value="">{translation?.data?.business?.choose?.any}</option>
                                {propertyType?.find(item => item.id === 29)?.childrens?.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>}
                    </div>
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-bold">{translation?.data?.business?.location_info}</p>
                        <div>
                            <div className="flex justify-start flex-wrap items-start max-[992px]:flex-col">
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm font-medium text-[#212529] opacity-50" htmlFor="country">{translation?.data?.business?.choose?.country}</label>
                                    <select id="country" name="country" required value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="p-2.5 border font-medium border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.country}</option>
                                        {countries?.data?.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm font-medium text-[#212529] opacity-50" htmlFor="city">{translation?.data?.business?.choose?.city}</label>
                                    <select id="city" name="city" required value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="p-2.5 border font-medium border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.city}</option>
                                        {cities.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm font-medium text-[#212529] opacity-50" htmlFor="district">{translation?.data?.business?.choose?.district}</label>
                                    <select id="district" name="district" required value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="p-2.5 font-medium border border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.district}</option>
                                        {district.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-w-full max-[992px]:w-full">
                                    <label className="text-sm font-medium text-[#212529] opacity-50" htmlFor="street">{translation?.data?.business?.choose?.street}</label>
                                    <select id="street" name="street" required value={selectedStreet} onChange={(e) => setSelectedStreet(e.target.value)} className="p-2.5 font-medium border border-[#e8e8e8] rounded-lg w-full">
                                        <option value="">{translation?.data?.business?.choose?.street}</option>
                                        {streets.map(item => (
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="px-2.5 max-[992px]:w-full max-[992px]:px-0">
                                <label className="text-sm font-medium text-[#212529] opacity-50" htmlFor="address">{translation?.data?.business?.address}</label>
                                <input id="address" name="address" required value={address} onChange={(e) => setAddress(e.target.value)} className="p-2.5 rounded-lg focus:outline-none font-medium border border-[#e8e8e8] block w-full" type="text" placeholder={translation?.data?.business?.address} />
                            </div>
                        </div>
                    </div>
                    {(selectedProject && selectedType == 29) && <div className="p-3.75 rounded-lg border border-[#ddd] mb-12.5">
                        <div className="bg-[#dddddd] text-[#5c5c5c] text-sm font-semibold text-center py-2.5 px-3.75 rounded-lg mb-5">
                            <p className="uppercase">Proje bilgileri</p>
                        </div>
                        <div className="flex gap-2.5">
                            <div className="flex-1">
                                <label className="text-sm text-[#212529] opacity-50 font-medium" htmlFor="">Metrekare (m²)</label>
                                <div className="flex gap-2.5">
                                    <input className="py-1.5 px-3 rounded-lg flex-1 font-medium border border-[#d9d9d9]" type="text" placeholder="min" />
                                    <input className="py-1.5 px-3 rounded-lg flex-1 font-medium border border-[#d9d9d9]" type="text" placeholder="max" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="text-sm text-[#212529] opacity-50 font-medium" htmlFor="">Oda Sayısı</label>
                                <select className="py-1.5 px-3 rounded-lg flex-1 border border-[#d9d9d9]" name="" id="">
                                    <option value="">Oda Sayısı</option>
                                    {propertyType?.find(item => item.id === 29)?.childrens?.find(child => child.id === Number(selectedProject))?.presetFeatures?.find(item => item.id === 1)?.options?.map(item => (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>}
                    <div className="flex flex-col items-center">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-bold">{translation?.data?.business?.pricing_info}</p>
                        <div>
                            {selectedType != 29 && <div className="flex flex-col items-center">
                                <p className="mb-1.25 text-sm font-medium text-[#212529] text-center opacity-50">{translation?.data?.business?.choose_pricing_type_info_text}</p>
                                <div>
                                    <button onClick={() => setPricingType("PASS")} className={`${pricingType === "PASS" ? "bg-[#e2e2e2] rounded-lg" : "bg-[#f8f8f8]"} text-center text-sm font-semibold py-2.5 px-7.5 mb-7.5 hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out cursor-pointer`}>{translation?.data?.business?.pricing_type?.pass}</button>
                                    {(selectedType === 27 || selectedType === 21) && <button onClick={() => setPricingType("COMISSION")} className={`${pricingType === "COMISSION" ? "bg-[#e2e2e2] rounded-lg" : "bg-[#f8f8f8]"} text-center text-sm font-semibold py-2.5 px-7.5 cursor-pointer mb-7.5 hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out`}>{translation?.data?.business?.pricing_type?.commission}</button>}
                                </div>
                            </div>}
                            <div className="flex flex-col items-center">
                                <p className="mb-1.25 text-sm text-[#212529] font-medium opacity-50 text-center">
                                    {translation?.data?.business?.choose_currency_info_text}
                                </p>
                                <div className="flex items-center mb-7.5">
                                    {currencies.map(item => (
                                        <button key={item.id} onClick={() => setSelectedCurrencie(item.id)} className={`text-sm text-[#212529] cursor-pointer rounded-lg font-semibold py-2.5 px-7.5 hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out ${item.id === selectedCurrencie ? "bg-[#e2e2e2]" : "bg-[#f8f8f8]"}`}>{item.code}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {!selectedProject && <div className="w-full mb-12.5">
                            {pricingType === "PASS" && <div>
                                <div className="mb-5">
                                    <label className="text-sm font-medium text-[#212529] opacity-50 mb-2" htmlFor="pass">{translation?.data?.business?.pass_price}</label>
                                    <input id="pass" name="pass" required value={passPrice} onChange={(e) => setPassPrice(e.target.value)} className="block focus:outline-none font-medium rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.pass_price} />
                                </div>
                                <div className="mb-5">
                                    <label className="text-sm font-medium text-[#212529] opacity-50 mb-2" htmlFor="sell">{translation?.data?.business?.sell_price}</label>
                                    <input id="sell" name="sell" required value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="block focus:outline-none font-medium rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.sell_price} />
                                </div>
                            </div>}
                            {pricingType === "COMISSION" && <div>
                                <div>
                                    <div className="mb-5">
                                        <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="commution">{translation?.data?.business?.sell_price}</label>
                                        <input id="commution" name="commution" required value={commutionSellPrice} onChange={(e) => setCommutionSellPrice(e.target.value)} className="block focus:outline-none rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="text" placeholder={translation?.data?.business?.sell_price} />
                                    </div>
                                    <div className="flex gap-3.75">
                                        <div className="mb-5 flex-1">
                                            <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="buyer">{translation?.data?.business?.buyer_commission_rate}</label>
                                            <input id="buyer" name="buyer" required value={buyerCommutionRate} onChange={(e) => setBuyerCommutionRate(e.target.value)} className="block focus:outline-none rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.buyer_commission_rate} />
                                        </div>
                                        <div className="mb-5 flex-1">
                                            <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="seller">{translation?.data?.business?.seller_commission_rate}</label>
                                            <input id="seller" name="seller" required value={sellerCommutionRate} onChange={(e) => setSellerCommutionRate(e.target.value)} className="block focus:outline-none rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="number" placeholder={translation?.data?.business?.seller_commission_rate} />
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>}
                        {(selectedProject && selectedType == 29) && <div className="p-3.75 border border-[#e8e8e8] mb-12.5 w-full rounded-lg">
                            <div className="text-center mb-5">
                                <p className="uppercase text-sm text-[#212529] opacity-60 font-bold">Fiyat seçeneklerini ekleyin</p>
                            </div>
                            <div className="p-4 mb-4 rounded-lg bg-[#fff3cd] border border-[#ffecb5] text-center text-[#664d03] font-medium">
                                Daire fiyatlarını girerken, aynı fiyat aralığındaki daireleri tek bir giriş altında tanımlayabilirsiniz.
                            </div>
                            <div className="flex mb-5">
                                <div className="bg-[#e2e2e2] text-[#737373] text-xs font-bold w-12.5 rounded-l-lg flex items-center justify-center">{currencies.find(item => item.id == selectedCurrencie).code}</div>
                                <input className="w-full py-1.5 px-3 rounded-r-lg border font-medium border-[#d9d9d9]" type="number" placeholder="Fiyat Seçeneği" />
                            </div>
                            <div className="mt-2 flex justify-center">
                                <button className="bg-[#f1f1f1] py-2 px-5 rounded-lg text-[#4b4b4b] font-bold text-sm cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Yeni Fiyat Ekle</button>
                            </div>
                        </div>}
                    </div>
                    <div className="flex justify-center">
                        <button aria-label="submit" type="submit" className="h-12.5 bg-[#27C5D2] px-5 font-semibold cursor-pointer rounded-[5px] text-white whitespace-nowrap hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.create_property}</button>
                    </div>
                </form>
            </div>
            <div className='w-full mt-30 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}