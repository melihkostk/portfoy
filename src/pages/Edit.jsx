import { useEffect, useState } from "react"
import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { getCompanyProfile, updateCompanyProfile } from "../services/myCompanyApi"
import { ClipLoader } from "react-spinners"
import whiteClose from "../assets/close.png"
import { useAppContext } from "../context/AppContext"
import { Link } from "react-router-dom"

export function Edit() {

    const { translation, translationLoaded } = useAppContext();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [centralNumber, setCentralNumber] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [taxOffice, setTaxOffice] = useState("");
    const [tradeName, setTradeName] = useState("");
    const [code, setCode] = useState()
    const [licenceFile, setLicenceFile] = useState(null)
    const [taxPlate, setTaxPlate] = useState(null)

    const [profile, setProfile] = useState([])

    const [loaded, setLoaded] = useState(false)

    const [error, setError] = useState("");
    const [errorShown, setErrorShown] = useState(false);

    const [success, setSuccess] = useState("");
    const [successShown, setSuccessShown] = useState(false);

    useEffect(() => {
        getCompanyProfile().then((data) => {
            setProfile(data)
            setName(data?.data?.name)
            setType(data?.data?.type)
            setTaxNumber(data?.data.profile?.tax_number)
            setCentralNumber(data?.data?.profile?.licance_number)
            setEmail(data?.data?.profile?.email)
            setPhone(data?.data?.profile?.phone?.number)
            setCode(data?.data?.profile?.phone?.code)
            setTradeName(data?.data?.profile?.billing?.trade_name)
            setTaxOffice(data?.data?.profile?.billing?.tax_office)
            setAddress(data?.data?.profile?.billing?.address)
        }).finally(() => setLoaded(true))
    }, [])

    function handleUpdate() {
        setLoaded(false)
        updateCompanyProfile(name, taxNumber, centralNumber, email, phone, code, licenceFile, taxPlate, tradeName, taxOffice, address).then(data => {
            if (data.status === "success") {
                setSuccess(data.message);
                setSuccessShown(true)
                getCompanyProfile().then((data) => {
                    setProfile(data)
                })
            }
            else {
                setError(data.message);
                setErrorShown(true);
            }
        }).finally(() => setLoaded(true))
    }

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
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link to={"/company"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.my_portfolio}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-[#9a9898] text-sm font-semibold">{translation?.data?.business?.company_edit}</Link>
                </div>
            </div>
            <CompanyHeader
                page="edit"
                name={profile?.data?.name}
                code={profile?.data?.code}
                created_at={profile?.data?.created_at}
                type={profile?.data?.type}
                logo={profile?.data?.logo}
                email={profile?.data?.profile.email}
                phoneNumber={profile?.data?.profile?.phone.number}
                phoneCode={profile?.data?.profile?.phone.code}
                setLoaded={setLoaded}
                loaded={loaded}
            />
            {errorShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(155,0,0),rgb(220,38,38))] p-3 text-white">
                <p>{error}</p>
                <img onClick={() => setErrorShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {successShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{success}</p>
                <img onClick={() => setSuccessShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            <div className="w-full max-w-[90%] mt-12.5">
                <div>
                    <div className="p-12.5 max-[992px]:p-7.5 bg-[#fbfbfb] rounded-lg">
                        <h2 className="text-[32px] text-[#212529] font-semibold">{translation?.data?.business?.company_info}</h2>
                        <div className="flex flex-wrap justify-between max-[992px]:flex-col">
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0 ">
                                <label className="text-[#212529]" htmlFor="name">{translation?.data?.business?.company_name}</label>
                                <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg bg-white focus:outline-none" type="text" placeholder={translation?.data?.business?.company_name} />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="type">{translation?.data?.business?.company_type}</label>
                                <input id="type" name="type" disabled value={type} onChange={(e) => setType(e.target.value)} className="px-3 bg-[#eee] py-1.5 border border-[#D9D9D9] rounded-lg focus:outline-none" type="text" placeholder={translation?.data?.business?.company_type} />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="tax-plate">{translation?.data?.business?.tax_plate}</label>
                                <input id="tax-plate" name="tax-plate" onChange={(e) => setTaxPlate(e.target.files[0])} className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg bg-white" type="file" placeholder={translation?.data?.business?.tax_plate} />
                                <a className="text-sm text-[#7f7f7f] mt-1.25 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">{translation?.data?.business?.view_file}</a>
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="taxNumber">{translation?.data?.business?.tax_number}</label>
                                <input id="taxNumber" name="taxNumber" value={taxNumber} onChange={(e) => setTaxNumber(e.target.value)} className="px-3 py-1.5 border bg-white border-[#D9D9D9] rounded-lg focus:outline-none" type="number" placeholder={translation?.data?.business?.tax_number} />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="licenceFile">{translation?.data?.business?.licence_file}</label>
                                <input id="licenceFile" name="licenceFile" onChange={(e) => setLicenceFile(e.target.files[0])} className="px-3 py-1.5 border border-[#D9D9D9] bg-white rounded-lg" type="file" placeholder={translation?.data?.business?.licence_file} />
                                <a className="text-sm text-[#7f7f7f] mt-1.25 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">{translation?.data?.business?.view_file}</a>
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="centralNumber">{translation?.data?.business?.licence_number}</label>
                                <input id="centralNumber" name="centralNumber" value={centralNumber} onChange={(e) => setCentralNumber(e.target.value)} className="px-3 py-1.5 border bg-white border-[#D9D9D9] rounded-lg focus:outline-none" type="number" placeholder={translation?.data?.business?.licence_number} />
                            </div>
                        </div>
                    </div>
                    <div className="p-12.5 max-[992px]:p-7.5">
                        <h2 className="text-[32px] text-[#212529] font-semibold">{translation?.data?.business?.contact_info}</h2>
                        <div className="flex flex-wrap justify-between max-[992px]:flex-col">
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="email">{translation?.data?.business?.email}</label>
                                <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 bg-white py-1.5 border border-[#D9D9D9] rounded-lg focus:outline-none" type="text" placeholder={translation?.data?.business?.email} />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="phone">{translation?.data?.business?.phone}</label>
                                <div className="flex gap-3.75">
                                    <select id="phone" name="phone" value={code} onChange={(e) => setCode(e.target.value)} className="py-1.5 bg-white pl-3 pr-9 border border-[#d9d9d9] rounded-lg" name="" id="">
                                        <option value="357">(357)</option>
                                        <option value="90">(90)</option>
                                        <option value="971">(971)</option>
                                        <option value="01">(01)</option>
                                    </select>
                                    <input id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="px-3 bg-white py-1.5 w-full border border-[#D9D9D9] rounded-lg focus:outline-none" type="text" placeholder={translation?.data?.business?.phone} />
                                </div>
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="website">{translation?.data?.business?.website}</label>
                                <input id="website" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="px-3 bg-white py-1.5 border border-[#D9D9D9] rounded-lg focus:outline-none" type="email" placeholder={translation?.data?.business?.website} />
                            </div>
                        </div>
                    </div>
                    <div className="p-12.5 max-[992px]:p-7.5 bg-[#fbfbfb]">
                        <h2 className="text-[32px] text-[#212529] font-semibold">{translation?.data?.business?.billing_info}</h2>
                        <div className="flex max-[992px]:flex-col">
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="tradeName">{translation?.data?.business?.trade_name}</label>
                                <input id="tradeName" name="tradeName" value={tradeName} onChange={(e) => setTradeName(e.target.value)} className="px-3 bg-white py-1.5 border border-[#D9D9D9] rounded-lg focus:outline-none" type="text" placeholder={translation?.data?.business?.trade_name} />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="taxOffice">{translation?.data?.business?.tax_office}</label>
                                <input id="taxOffice" name="taxOffice" value={taxOffice} onChange={(e) => setTaxOffice(e.target.value)} className="px-3 bg-white py-1.5 border border-[#D9D9D9] rounded-lg focus:outline-none" type="text" placeholder={translation?.data?.business?.tax_office} />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="address">{translation?.data?.business?.company_address}</label>
                                <input id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="px-3 bg-white py-1.5 border border-[#D9D9D9] rounded-lg focus:outline-none" type="text" placeholder={translation?.data?.business?.company_address} />
                            </div>
                        </div>
                    </div>
                    <button aria-label="update" onClick={handleUpdate} className="bg-[#198754] hover:bg-[#157347] transition-colors duration-300 ease-in-out cursor-pointer mt-7.5 text-white rounded-lg py-2 px-5 ml-12.5">{translation?.data?.business?.save}</button>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}