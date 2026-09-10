import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { FilterSidebar } from "../components/FilterSidebar"
import { PropertiesCard } from "../components/PropertiesCard"
import { Footer } from "../components/Footer"
import { AppLinks } from "../components/AppLinks"
import { getCompanyProperties, getTeam } from "../services/myCompanyApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getAllPropertiesType } from "../services/propertiesApi"
import { getAllCities, getAllCountries, getAllCurrencies, getAllDistricts } from "../services/filterApi"

export function Company({ loged }) {

    const [companyProperties, setCompanyProperties] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getCompanyProperties().then(setCompanyProperties).finally(() => setLoaded(true))
    }, [])

    const [type, setType] = useState([]);

    useEffect(() => {
        getAllPropertiesType().then(setType)
    }, [])

    const [team, setTeam] = useState([]);
    const [selectedTeam , setSelectedTeam] = useState("")

    useEffect(() => {
        getTeam().then(setTeam)
    }, [])

    const [currencie, setCurrencie] = useState([]);
    const [selectedCurrencie , setSelectedCurrencie] = useState("")

    useEffect(() => {
        getAllCurrencies().then(setCurrencie)
    }, [])

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("")

    useEffect(() => {
        getAllCountries().then(setCountries)
    }, [])

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        getAllCities(selectedCountry).then(setCities)
    }, [selectedCountry])

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("")

    useEffect(() => {
        getAllDistricts(selectedCity).then(setDistricts)
    }, [selectedCity])

    function handleFilter(selectedCountry, selectedCity, selectedDistrict , selectedTeam , minSell , maxSell , selectedCurrencie) {
        setLoaded(false)
        getCompanyProperties(selectedCountry, selectedCity, selectedDistrict , selectedTeam , minSell , maxSell , selectedCurrencie).then(setCompanyProperties).finally(() => setLoaded(true))
    }

    const [minSell , setMinSell] = useState("");
    const [maxSell , setMaxSell] = useState("");

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="company" />
            <div className="max-w-[90%] w-full pt-12.5">
                <div className="flex max-[992px]:flex-col">
                    <div className="w-[23%] max-[992px]:w-full">
                        <FilterSidebar
                            type={type}
                            team={team}
                            selectedTeam={selectedTeam}
                            setSelectedTeam={setSelectedTeam}
                            currencie={currencie}
                            countries={countries}
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                            cities={cities}
                            selectedCity={selectedCity}
                            setSelectedCity={setSelectedCity}
                            districts={districts}
                            selectedDistrict={selectedDistrict}
                            setSelectedDistrict={setSelectedDistrict}
                            handleFilter={handleFilter}
                            minSell={minSell}
                            setMinSell={setMinSell}
                            maxSell={maxSell}
                            setMaxSell={setMaxSell}
                            selectedCurrencie={selectedCurrencie}
                            setSelectedCurrencie={setSelectedCurrencie}

                        />
                    </div>
                    <div className="w-[77%] max-[992px]:w-full max-[992px]:pl-0 pl-7.5 flex flex-wrap">
                        {companyProperties.length > 0 ? (
                            companyProperties.map((item) => (
                                <PropertiesCard
                                    page="company"
                                    key={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                    price={item.price.formatted}
                                    company={item.company.title}
                                    type={item.type.title}
                                    city={item.city.title}
                                    district={item.district.title}
                                    created_by={item.creator}
                                />
                            ))
                        ) : (
                            <div className="text-[#636464] bg-[#fafafa] h-fit p-3.75 m-3.75 rounded-lg">Hiç ilan bulunamadı. Seçtiğiniz filtre kriterlerini kontrol edin.</div>
                        )}
                    </div>
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