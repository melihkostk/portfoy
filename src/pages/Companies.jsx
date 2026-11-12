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
import { useAppContext } from "../context/AppContext"
import { Link } from "react-router-dom"

export function Companies() {

    const { locale, translation, translationLoaded } = useAppContext();

    const [companies, setCompanies] = useState([]);

    const [loaded, setLoaded] = useState(false)

    const [page, setPage] = useState(1)

    const [appliedFilters, setAppliedFilters] = useState({ type: "", country: "", city: "", district: "", q: "" })

    useEffect(() => {
        setLoaded(false)
        filterCompany(appliedFilters.type, appliedFilters.country, appliedFilters.city, appliedFilters.district, appliedFilters.q, page)
            .then(setCompanies)
            .catch((error) => console.log(error))
            .finally(() => setLoaded(true))
    }, [appliedFilters, page])

    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        getCompanyTypes(locale).then(setType).catch((error) => console.log(error))
    }, [locale])

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("")

    useEffect(() => {
        getAllCountries().then(setCountries).catch((error) => console.log(error))
    }, [])

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        if (!selectedCountry) {
            return;
        }
        getAllCities(selectedCountry).then(setCities).catch((error) => console.log(error))
    }, [selectedCountry])

    const [district, setDistrict] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("")

    useEffect(() => {
        if (!selectedCity) {
            return
        }
        getAllDistricts(selectedCity).then(setDistrict).catch((error) => console.log(error))

    }, [selectedCity])

    const [streets, setStreets] = useState([]);
    const [selectedStreet, setSelectedStreet] = useState("")

    useEffect(() => {
        if (!selectedDistrict) {
            return
        }
        getAllStreets(selectedDistrict).then(setStreets).catch((error) => console.log(error))
    }, [selectedDistrict])

    const handleFilterCompany = (type, country, city, district, q) => {
        setPage(1)
        setAppliedFilters({ type, country, city, district, q })
    }

    const [q, setQ] = useState("")

    return (
        <div className='flex flex-col items-center font-sf'>
            {(!loaded || !translationLoaded) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-[#9a9898] text-sm font-semibold">{translation?.data?.business?.companies}</Link>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div>
                    <div className="w-1/2 max-[992px]:w-full">
                        <h2 className="text-[32px] mb-2 font-semibold">{translation?.data?.business?.companies_page_section_title}</h2>
                        <p className="text-sm text-[#9A9A9A] font-medium">
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
                        />
                    ))
                        : (
                            <div className="text-[#636464] w-full bg-[#fafafa] h-fit p-3.75 m-3.75 rounded-lg">{translation?.data?.business?.no_records_for_properties}</div>
                        )
                    }
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-start">
                    <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4 max-[992px]:text-center">
                        {companies?.pagination?.pagination_text}
                    </p>
                    <Pagination
                        pagination={companies?.pagination}
                        onPageChange={setPage}
                    />
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}