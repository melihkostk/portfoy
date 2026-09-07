import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { LocationCard } from "../components/LocationCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import { useState } from "react"
import { getLocation } from "../services/myCompanyApi"
import { ClipLoader } from "react-spinners"
import close from "../assets/blue-close.png"
import { getAllCities, getAllCountries, getAllDistricts, getAllStreets } from "../services/filterApi"

export function Location({ loged }) {

    const [location, setLocation] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [locationMenu, setLocationMenu] = useState(false)

    useEffect(() => {
        getLocation().then(setLocation).finally(() => setLoaded(true))
    }, [])

    const [countries, setCountries] = useState([])
    const [countryId, setCountryId] = useState("");

    const [cities, setCities] = useState([])
    const [cityId, setCityId] = useState("");

    const [district, setDistrict] = useState([]);
    const [districtId, setDistrictId] = useState("");

    const [street, setStreet] = useState([]);
    const [streetId, setStreetId] = useState("");


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
        <div className='flex flex-col items-center font-sf'>
            {locationMenu && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="location" />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex justify-between items-center max-[992px]:flex-col max-[992px]:items-start">
                    <h2 className="text-[#212529] text-[32px]">Konum & İletişim</h2>
                    <div onClick={() => setLocationMenu(true)} className="text-[#4b4b4b] bg-[#f1f1f1] text-sm py-2 px-5 font-semibold rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out cursor-pointer">Adres Oluştur</div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-12.5">
                {location.map(item => (
                    <LocationCard
                        key={item.id}
                        address={item.address}
                        country={item.country.title}
                        city={item.city.title}
                        district={item.district.title}
                    />
                ))}
            </div>
            {locationMenu && <div className="fixed top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[35%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Adres Oluştur</h2>
                    <img onClick={() => setLocationMenu(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <form className="w-full" action="">
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="country">Ülke Seçin</label>
                            <select onChange={(e) => setCountryId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="country" id="country">
                                {countries.data.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="city">İl Seçin</label>
                            <select onChange={(e) => setCityId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="city" id="city">
                                {cities?.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="district">İlçe Seçin</label>
                            <select onChange={(e) => setDistrictId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="district" id="district">
                                {district?.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="street">Mahalle</label>
                            <select className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="street" id="street">
                                {street?.map(item => (
                                    <option key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="adres">Adres</label>
                            <input className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" placeholder="Adres" name="adres" id="adres" required />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-sm text-white cursor-pointer bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Kaydet</button>
                        </div>
                    </form>
                </div>

            </div>}
            <div className='w-full mt-40 mb-30'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer loged={loged} />
            </div>
        </div>
    )
}