import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { LocationCard } from "../components/LocationCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import { useState } from "react"
import { addLocation, deleteAddress, getLocation, updateLocation } from "../services/myCompanyApi"
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

    const [address, setAddress] = useState("")


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

    function handleAddLocation(e) {
        e.preventDefault()
        addLocation(countryId, cityId, districtId, streetId, address).then((data => {
            if (data.status === "error") {
                return
            }
            getLocation().then(setLocation)
            setLocationMenu(false)
        }))
    }

    function handleDeleteLocation(id) {
        deleteAddress(id).then(data => {
            if (data.status === "error") {
                return
            }
            getLocation().then(setLocation)
        })
    }

    const [updateMapShown, setUpdateMapShown] = useState(false)

    const [editShown, setEditShown] = useState(false)
    const [editId, setEditId] = useState(null)
    const [editCountryId, setEditCountryId] = useState("")
    const [editCityId, setEditCityId] = useState("")
    const [editDistrictId, setEditDistrictId] = useState("")
    const [editStreetId, setEditStreetId] = useState("")
    const [editAddress, setEditAddress] = useState("")

    const [editCities, setEditCities] = useState([])
    const [editDistrict, setEditDistrict] = useState([])
    const [editStreet, setEditStreet] = useState([])

    useEffect(() => {
        if (!editCountryId) {
            setEditCities([]);
            return;
        }
        getAllCities(editCountryId).then(setEditCities);
    }, [editCountryId]);

    useEffect(() => {
        if (!editCityId) {
            setEditDistrict([]);
            return;
        }
        getAllDistricts(editCityId).then(setEditDistrict);
    }, [editCityId])

    useEffect(() => {
        if (!editDistrictId) {
            setEditStreet([]);
            return;
        }
        getAllStreets(editDistrictId).then(setEditStreet);
    }, [editDistrictId])

    function handleEditClick(item) {
        setEditId(item.id)
        setEditCountryId(item.country.id)
        setEditCityId(item.city.id)
        setEditDistrictId(item.district.id)
        setEditStreetId(item.street.id)
        setEditAddress(item.address)
        setEditShown(true)
    }

    function handleEditLocation(e) {
        e.preventDefault()
        updateLocation(editId, editCountryId, editCityId, editDistrictId, editAddress, editStreetId).then((data) => {
            if (data.status === "error") {
                return
            }
            getLocation().then(setLocation)
            setEditShown(false)
        })
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            {(locationMenu || updateMapShown || editShown) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            {updateMapShown && <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-[90%] w-1/2 bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-center justify-between w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529]">Harita Konumunu Düzenle</h2>
                    <img onClick={() => setUpdateMapShown(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="w-full h-full p-4">
                    <input className="w-full py-1.5 px-3 border mb-2 border-[#D9D9D9] rounded-lg" type="text" id="location" name="location" />
                    <div className="w-full h-[80%]">
                        <iframe
                            src={`https://www.google.com/maps?q&z=15&output=embed`}
                            className="w-full h-full border-0 rounded-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Google Maps"
                        />
                    </div>
                    <div className="justify-self-end mt-4">
                        <button className="bg-[#27c5d2] text-white text-sm py-2 px-5 rounded-lg">Kaydet</button>
                    </div>
                </div>
            </div>}
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
                        id={item.id}
                        key={item.id}
                        address={item.address}
                        country={item.country.title}
                        city={item.city.title}
                        district={item.district.title}
                        handleDeleteLocation={handleDeleteLocation}
                        setUpdateMapShown={setUpdateMapShown}
                        onEditClick={() => handleEditClick(item)}
                    />
                ))}
            </div>
            {locationMenu && <div className="fixed top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[35%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Adres Oluştur</h2>
                    <img onClick={() => setLocationMenu(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <form onSubmit={handleAddLocation} className="w-full">
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
                            <select onChange={(e) => setStreetId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="street" id="street">
                                {street?.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="adres">Adres</label>
                            <input value={address} onChange={(e) => setAddress(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" placeholder="Adres" name="adres" id="adres" required />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-sm text-white cursor-pointer bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>}
            {editShown && <div className="fixed top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[35%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Adresi Düzenle</h2>
                    <img onClick={() => setEditShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <form onSubmit={handleEditLocation} className="w-full">
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editCountry">Ülke Seçin</label>
                            <select required value={editCountryId} onChange={(e) => setEditCountryId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="country" id="editCountry">
                                {countries.data.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label required htmlFor="editCity">İl Seçin</label>
                            <select value={editCityId} onChange={(e) => setEditCityId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="city" id="editCity">
                                {editCities?.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editDistrict">İlçe Seçin</label>
                            <select required value={editDistrictId} onChange={(e) => setEditDistrictId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="district" id="editDistrict">
                                {editDistrict?.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editStreet">Mahalle</label>
                            <select required value={editStreetId} onChange={(e) => setEditStreetId(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="street" id="editStreet">
                                {editStreet?.map(item => (
                                    <option value={item.id} key={item.title}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editAdres">Adres</label>
                            <input required value={editAddress} onChange={(e) => setEditAddress(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" placeholder="Adres" name="adres" id="editAdres" required />
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