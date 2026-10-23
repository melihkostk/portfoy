import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { FilterSidebar } from "../components/FilterSidebar"
import { PropertiesCard } from "../components/PropertiesCard"
import { Footer } from "../components/Footer"
import { AppLinks } from "../components/AppLinks"
import { getCompanyInfo, getCompanyProperties, getTeam } from "../services/myCompanyApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getAllPropertiesType } from "../services/propertiesApi"
import { getAllCities, getAllCountries, getAllCurrencies, getAllDistricts } from "../services/filterApi"
import { Pagination } from "../components/Pagination"
import whiteClose from "../assets/close.png"
import { CreateOfferModel } from "../components/CreateOfferModal"
import { createProposal, getDetails } from "../services/propertyDetails"
import { useNavigate } from "react-router-dom"
import { getTranslation } from "../services/translation"

export function Company({ loged, message, messageShown , setMessageShown, locale, setLocale }) {

    const navigate = useNavigate();

    const [companyProperties, setCompanyProperties] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [page, setPage] = useState(1)

    useEffect(() => {
        getCompanyProperties().then(setCompanyProperties).finally(() => setLoaded(true))
    }, [page])

    const [type, setType] = useState([]);

    useEffect(() => {
        getAllPropertiesType().then(setType)
    }, [])

    const [team, setTeam] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("")

    useEffect(() => {
        getTeam().then(setTeam)
    }, [])

    const [currencie, setCurrencie] = useState([]);
    const [selectedCurrencie, setSelectedCurrencie] = useState("")

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

    function handleFilter(selectedCountry, selectedCity, selectedDistrict, selectedTeam, minSell, maxSell, selectedCurrencie, status, selectedType) {
        setLoaded(false)
        getCompanyProperties(selectedCountry, selectedCity, selectedDistrict, selectedTeam, minSell, maxSell, selectedCurrencie, status, selectedType).then(setCompanyProperties).finally(() => setLoaded(true))
    }

    const [minSell, setMinSell] = useState("");
    const [maxSell, setMaxSell] = useState("");
    const [status, setStatus] = useState("");

    const [selectedType, setSelectedType] = useState([]);

    const [ınfo, setInfo] = useState([])

    useEffect(() => {
        getCompanyInfo().then(setInfo)
    }, [])

    const [offerModelShown, setOfferModalShown] = useState(false)
    const [offerDetails, setOfferDetails] = useState([])
    const [offerPropertyId, setOfferPropertyId] = useState(null)

    const [selectedCustomer, setSelectedCustomer] = useState("")
    const [offerCurrencie, setOfferCurrencie] = useState("")
    const [customerNote, setCustomerNote] = useState("")
    const [step, setStep] = useState(1)
    const [notify, setNotify] = useState(true)

    function handleOfferModal(id) {
        setLoaded(false)
        getDetails(id).then(data => {
            setOfferDetails(data)
            setOfferPropertyId(id)
            setStep(1)
            setOfferModalShown(true)
        }).finally(() => setLoaded(true))
    }

    function handleCreateProposal() {
        setLoaded(false)
        setOfferModalShown(false)
        const properties = { [offerPropertyId]: { price: Number(offerDetails?.prices?.primary?.number), title: offerDetails?.title } }
        createProposal(customerNote, notify, offerCurrencie, selectedCustomer, properties).then(() => {
            navigate("/company/proposals", { replace: true })
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
            {offerModelShown && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {offerModelShown && <CreateOfferModel
                setOfferModalShown={setOfferModalShown}
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
                selectedCurrencie={offerCurrencie}
                setSelectedCurrencie={setOfferCurrencie}
                details={offerDetails}
                customerNote={customerNote}
                setCustomerNote={setCustomerNote}
                step={step}
                setStep={setStep}
                property_id={offerPropertyId}
                handleCreateProposal={handleCreateProposal}
                notify={notify}
                setNotify={setNotify}
            />}
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
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.my_portfolio}</span></p>
                </div>
            </div>
            {messageShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-40 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{message}</p>
                <img onClick={() => setMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            <CompanyHeader
                page="company"
                name={ınfo?.name}
                code={ınfo?.code}
                created_at={ınfo?.created_at}
                type={ınfo?.type}
                logo={ınfo?.logo}
                translation={translation}
            />
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
                            status={status}
                            setStatus={setStatus}
                            selectedType={selectedType}
                            setSelectedType={setSelectedType}
                            translation={translation}
                        />
                    </div>
                    <div className="w-[77%] max-[992px]:w-full max-[992px]:pl-0 pl-7.5 flex flex-col">
                        <div className="flex flex-wrap justify-start">
                            {companyProperties?.data?.properties?.length > 0 ? companyProperties?.data?.properties?.map((item) => (
                                <PropertiesCard
                                    page="company"
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                    price={item.price.formatted}
                                    company={item.company.title}
                                    type={item.type.title}
                                    city={item.city.title}
                                    district={item.district.title}
                                    created_by={item.creator}
                                    status={item.status}
                                    handleOfferModal={handleOfferModal}
                                    translation={translation}
                                    propertyType={item.property_type}
                                />
                            )) : (
                                <div className="text-[#636464] bg-[#fafafa] rounded-lg p-3.75 m-3.75 w-full max-h-fit">{translation?.data?.business?.no_records_for_properties}</div>
                            )}
                        </div>
                        <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-center mt-5">
                            {companyProperties?.data?.properties?.length > 0 && <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                                {companyProperties?.pagination?.pagination_text}
                            </p>}
                            <Pagination
                                pagination={companyProperties?.pagination}
                                onPageChange={setPage}
                            />
                        </div>
                    </div>
                </div>
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