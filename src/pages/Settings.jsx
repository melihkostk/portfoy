import { useEffect, useState } from "react"
import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SettingsCard } from "../components/SettingsCard"
import { getCompanyInfo, getPreference, getTeam, updatePassPriceVisibility, updatePersonalContactVisibility, updatePriceOfferNotify } from "../services/myCompanyApi"
import close from "../assets/blue-close.png"
import { PersonelCard } from "../components/PersonalCard"
import { ClipLoader } from "react-spinners"
import whiteClose from "../assets/close.png"
import { useAppContext } from "../context/AppContext"

export function Settings() {

    const { translation, translationLoaded } = useAppContext();

    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        getCompanyInfo().then(setCompanyInfo)
    }, [])

    const [personalSelectPopUp, setPersonalSelectPopUp] = useState(false);

    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeam().then(setTeam);
    }, [])

    const [preference, setPreference] = useState([]);
    const [infoStatus, setInfoStatus] = useState(null);
    const [passStatus , setPassStatus] = useState(null);
    const [selected , setSelected] = useState([]);
    const [personalVisibilities, setPersonalVisibilities] = useState([]);


    useEffect(() => {
        getPreference().then((data) => {
            setPreference(data);
            setInfoStatus(data?.data?.personal_contacts_visibilities?.status)
            setPassStatus(data?.data?.pass_price_visibility)
            setSelected(data?.data?.price_offer_users)
            setPersonalVisibilities(data?.data?.personal_contacts_visibilities?.personals || [])
        })
    }, [])

    const [loaded, setLoaded] = useState(true);

    const [successMessage, setSuccessMessage] = useState("");
    const [successMessageShown, setSuccessMessageShown] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessageShown, setErrorMessageShown] = useState(false);

    function handlePassVisibility() {
        setLoaded(false)
        updatePassPriceVisibility(passStatus).then(data => {
            if (data.status === "success") {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
            }
            else {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
        }).finally(() => setLoaded(true))
    }
    function handleInfoVisibility() {
        setLoaded(false)
        updatePersonalContactVisibility(infoStatus, infoStatus === 2 ? personalVisibilities : undefined).then(data => {
            if (data.status === "success") {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
            }
            else {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
        }).finally(() => setLoaded(true))
    }

    function handleSavePriceOfferUsers() {
        setLoaded(false)
        const personals = {};
        team?.personals?.forEach(item => {
            personals[item.id] = selected?.includes(item.id) ? 1 : 0;
        });

        updatePriceOfferNotify(personals).then(data => {
            if (data.status === "success") {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                setPersonalSelectPopUp(false)
                getPreference().then(setPreference)
            }
            else {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
        }).finally(() => setLoaded(true))
    }

    const [infoPopUp, setInfoPopUp] = useState(false);

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
            {(personalSelectPopUp || infoPopUp) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.my_portfolio} {">"}</span><span className="text-[#9a9898]"> {translation?.data?.business?.manage_company}</span></p>
                </div>
            </div>
            {successMessageShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{successMessage}</p>
                <img onClick={() => setSuccessMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {errorMessageShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(155,0,0),rgb(220,38,38))] p-3 text-white">
                <p>{errorMessage}</p>
                <img onClick={() => setErrorMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {personalSelectPopUp && <div className="fixed top-1/2 left-1/2 flex flex-col items-center justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-cente w-full justify-between p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">{translation?.data?.business?.company_settings?.price_offers.title}</h2>
                    <img onClick={() => setPersonalSelectPopUp(false)} className="cursor-pointer w-6 h-6" src={close} alt="" />
                </div>
                <div className="p-4">
                    <div className="flex flex-wrap justify-between">
                        {team?.personals.map(item => (
                            <PersonelCard
                                id={item.id}
                                key={item.id}
                                avatar={item.avatar}
                                name={item.name}
                                role={item.roles[0].title}
                                preference={preference}
                                page="select"
                                selected={selected}
                                setSelected={setSelected}
                            />
                        ))}
                    </div>
                    <div className="mt-2">
                        <button onClick={() => {handleSavePriceOfferUsers(); setInfoPopUp(false)}} className="bg-[#27c5d2] cursor-pointer font-semibold text-sm w-full text-white rounded-lg py-2 px-5 hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.save}</button>
                    </div>
                </div>
            </div>}
            {infoPopUp && <div className="fixed top-1/2 left-1/2 flex flex-col items-center justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-cente w-full justify-between p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">{translation?.data?.business?.company_settings?.personal_visibility.title}</h2>
                    <img onClick={() => setInfoPopUp(false)} className="cursor-pointer w-6 h-6" src={close} alt="" />
                </div>
                <div className="p-4 w-full">
                    <div className="flex flex-col">
                        {team?.personals.map(item => (
                            <PersonelCard
                                id={item.id}
                                key={item.id}
                                avatar={item.avatar}
                                name={item.name}
                                role={item.roles[0].title}
                                preference={preference}
                                page="info"
                                statuses={personalVisibilities}
                                setStatuses={setPersonalVisibilities}
                            />
                        ))}
                    </div>
                    <div className="mt-2">
                        <button onClick={() => { handleInfoVisibility(); setInfoPopUp(false); }} className="bg-[#27c5d2] cursor-pointer font-semibold text-sm w-full text-white rounded-lg py-2 px-5 hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.save}</button>
                    </div>
                </div>
            </div>}
            <CompanyHeader
                page="settings"
                name={companyInfo?.name}
                code={companyInfo?.code}
                created_at={companyInfo?.created_at}
                type={companyInfo?.type}
                logo={companyInfo?.logo}
            />
            <div className="w-full max-w-[90%] mt-12.5">
                <div>
                    <h2 className="text-[32px] font-semibold mb-10">{translation?.data?.business?.manage_company}</h2>
                    <div>
                        <SettingsCard
                            title={translation?.data?.business?.company_settings?.price_offers?.title}
                            description={translation?.data?.business?.company_settings?.price_offers?.description}
                            setPersonalSelectPopUp={setPersonalSelectPopUp}
                            preference={preference}
                            team={team}
                        />
                        <SettingsCard
                            id="info"
                            title={translation?.data?.business?.company_settings?.personal_visibility?.title}
                            description={translation?.data?.business?.company_settings?.personal_visibility?.description}
                            onChange={setInfoStatus}
                            infoStatus={infoStatus}
                            setInfoPopUp={setInfoPopUp}
                        />
                        <SettingsCard
                            id="pass"
                            title={translation?.data?.business?.company_settings?.pass_price_visibility?.title}
                            description={translation?.data?.business?.company_settings?.pass_price_visibility?.description}
                            onChange={setPassStatus}
                            infoStatus={passStatus}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        handlePassVisibility();
                        handleInfoVisibility();
                    }}
                        className="bg-[#27C5D2] hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer text-white font-semibold text-sm py-2 px-5 rounded-lg">{translation?.data?.business?.save}</button>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}