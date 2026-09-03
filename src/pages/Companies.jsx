import { CompanyCard } from "../components/CompanyCard"
import { CompanyFilter } from "../components/CompanyFilter"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { filterCompany, getAllCompanies, getCompanyTypes } from "../services/companiesApi"
import { getAllCities, getAllCountries, getAllDistricts, getAllStreets } from "../services/filterApi"

export function Companies({ loged }) {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getAllCompanies().then(setCompanies)
    }, [])

    const [type, setType] = useState([]);
    const [selectedType , setSelectedType] = useState("");

    useEffect(() => {
        getCompanyTypes().then(setType)
    }, [])

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("")

    useEffect(() => {
        getAllCountries().then(setCountries)
    }, [])

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        if (!selectedCountry) {
            setCities([]);
            return;
        }
        getAllCities(selectedCountry).then(setCities)
    }, [selectedCountry])

    const [district , setDistrict] = useState([]);
    const [selectedDistrict , setSelectedDistrict] = useState("")

    useEffect(() => {
        if(!selectedCity){
            setDistrict([]);
            return
        }
        getAllDistricts(selectedCity).then(setDistrict)

    }, [selectedCity])

    const [streets , setStreets] = useState([]);
    const [selectedStreet , setSelectedStreet] = useState("")

    useEffect(() => {
        if(!selectedDistrict){
            setStreets([])
            return
        }
        getAllStreets(selectedDistrict).then(setStreets)
    }, [selectedDistrict])

    const handleFilterCompany = (type, country, city, district) => {
        filterCompany(type, country, city, district).then(setCompanies)
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Firmalar</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div>
                    <div>
                        <h2 className="text-[32px] mb-2 font-medium">Üye firmalar</h2>
                        <p className="text-sm text-[#9A9A9A]">
                            Üye firmaların yetkililerin iletişim bilgilerini ve yetkili oldukları proje ve gayrimenkulleri buradan görebilirsiniz.
                        </p>
                    </div>
                    <CompanyFilter
                        type={type}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                        countries={countries}
                        selectedCountry={selectedCountry}
                        selectedCity={selectedCity}
                        selectedDistrict={selectedDistrict}
                        setSelectedCountry={setSelectedCountry}
                        cities={cities}
                        setSelectedCity={setSelectedCity}
                        district={district}
                        setSelectedDistrict={setSelectedDistrict}
                        streets={streets}
                        setSelectedStreet={setSelectedStreet}
                        filterCompany={handleFilterCompany}

                    />
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between flex-wrap my-5 -mx-3.75 max-[992px]:m-0">
                    {companies.map(item => (
                        <CompanyCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            location={item.locations}
                            logo={item.logo}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
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