import { CompanyCard } from "../components/CompanyCard"
import { CompanyFilter } from "../components/CompanyFilter"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { filterCompany, getCompanyTypes } from "../services/companiesApi"
import { getAllCities, getAllCountries, getAllDistricts, getAllStreets } from "../services/filterApi"
import { ClipLoader } from "react-spinners"
import { Pagination } from "../components/Pagination"
import { getTranslation } from "../services/translation"

export function Companies({ loged, locale, setLocale }) {

    const [companies, setCompanies] = useState([]);

    const [loaded, setLoaded] = useState(false)

    const [page, setPage] = useState(1)

    const [appliedFilters, setAppliedFilters] = useState({ type: "", country: "", city: "", district: "", q: "" })

    useEffect(() => {
        setLoaded(false)
        filterCompany(appliedFilters.type, appliedFilters.country, appliedFilters.city, appliedFilters.district, appliedFilters.q, page)
            .then(setCompanies)
            .finally(() => setLoaded(true))
    }, [appliedFilters, page])

    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        getCompanyTypes(locale).then(setType)
    }, [locale])

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

    const [district, setDistrict] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("")

    useEffect(() => {
        if (!selectedCity) {
            setDistrict([]);
            return
        }
        getAllDistricts(selectedCity).then(setDistrict)

    }, [selectedCity])

    const [streets, setStreets] = useState([]);
    const [selectedStreet, setSelectedStreet] = useState("")

    useEffect(() => {
        if (!selectedDistrict) {
            setStreets([])
            return
        }
        getAllStreets(selectedDistrict).then(setStreets)
    }, [selectedDistrict])

    const handleFilterCompany = (type, country, city, district, q) => {
        setPage(1)
        setAppliedFilters({ type, country, city, district, q })
    }

    const [q, setQ] = useState("")

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    return (
        <div className='flex flex-col items-center font-sf'>
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.companies}</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div>
                    <div>
                        <h2 className="text-[32px] mb-2 font-medium">{translation?.data?.business?.companies_page_section_title}</h2>
                        <p className="text-sm text-[#9A9A9A]">
                            {translation?.data?.business?.companies_page_section_description}
                        </p>
                    </div>
                    <CompanyFilter
                        type={type}
                        page="companies"
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
                        q={q}
                        setQ={setQ}
                        translation={translation}
                    />
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex justify-start flex-wrap my-5 -mx-3.75 max-[992px]:m-0">
                    {companies?.data?.length > 0 ? companies.data.map(item => (
                        <CompanyCard
                            key={item?.id}
                            id={item?.id}
                            name={item?.name}
                            type={item?.type}
                            location={item?.locations}
                            logo={item?.logo}
                            badges={item.badges}
                            translation={translation}
                        />
                    ))
                        : (
                            <div className="text-[#636464] w-full bg-[#fafafa] h-fit p-3.75 m-3.75 rounded-lg">{translation?.data?.business?.no_records_for_properties}</div>
                        )
                    }
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-center">
                    <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                        {companies?.pagination?.pagination_text}
                    </p>
                    <Pagination
                        pagination={companies?.pagination}
                        onPageChange={setPage}
                    />
                </div>
            </div>
            <div className='w-full mt-40 mb-30'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks translation={translation} />
                </div>
            </div>
            <div className='w-full'>
                <Footer loged={loged} translation={translation} />
            </div>
        </div>
    )
}