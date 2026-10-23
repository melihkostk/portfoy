import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import pg from "../assets/pg.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"
import { getActiveSubscription, getCompanyInfo, getTeam } from "../services/myCompanyApi"
import { updateProfile, verfiyPassword } from "../services/profileApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getTranslation } from "../services/translation"
import { ChangePasswordPopUp } from "../components/ChangePasswordPopUp"
import { changePassword } from "../services/profileApi"
import { ErrorPopUp } from "../components/ErrorPopUp"
import { CheckEmailPopUp } from "../components/CheckEmailPopUp"
import { ConfirmPopUp } from "../components/ConfirmPopUp"
import whiteClose from "../assets/close.png"

export function Account({ loged, locale, setLocale }) {

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [phone, setPhone] = useState("");

    const [info, setInfo] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getCompanyInfo().then(setInfo).finally(() => setLoaded(true))
    }, [])

    const [user, setUser] = useState([]);

    useEffect(() => {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const parsedUser = JSON.parse(userInfo);
            setUser(parsedUser);
            setName(parsedUser?.data?.name || "")
            setCode(parsedUser?.data?.phone?.code || "")
            setPhone(parsedUser?.data?.phone?.number || "")
        }
    }, [])

    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeam().then(setTeam)
    }, [])

    const [sub, setSub] = useState([]);

    useEffect(() => {
        getActiveSubscription().then(setSub)
    }, [])

    const [successUpdate, setSuccessUpdate] = useState(false);
    const [successUpdateMessage, setSucessUpdateMessage] = useState("");

    const [errorUpdate, setErrorUpdate] = useState(false);
    const [errorUpdateMessage , setErrorUpdateMessage] = useState("");

    function handleUpdate(e) {
        e.preventDefault();
        setLoaded(false)
        updateProfile(name, code, phone, locale).then(data => {
            if (data.status === "error") {
                setErrorUpdate(true);
                setErrorUpdateMessage(data.message)
            }
            else {
                setSuccessUpdate(true);
                setSucessUpdateMessage(data.message)

            }
        }).finally(() => setLoaded(true));
    }

    const [translation, setTranslation] = useState([]);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    const [current, setCurrent] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [changePasswordShown, setChangePasswordShown] = useState(false);
    const [errorShown, setErrorShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [checkShown, setCheckShown] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    function handlePasswordChange(e) {
        e.preventDefault();
        setLoaded(false)
        changePassword(current, password, confirm).then(data => {
            if (data.status === "error") {
                setChangePasswordShown(false)
                setErrorShown(true)
                setErrorMessage(data.message)
            }
            else {
                setChangePasswordShown(false)
                setCheckShown(true)
                setSuccessMessage(data.message);
            }
        }).finally(() => setLoaded(true))
    }

    const [confirmShown, setConfirmShown] = useState(false);

    const [verifyCode, setVerifyCode] = useState("");

    function handleVerifyPassword(e) {
        e.preventDefault();
        setLoaded(false)
        verfiyPassword(verifyCode).then(data => {
            if (data.status === "error") {
                setErrorShown(true)
                setErrorMessage(data.message)
            }
            else {
                console.log(data)
            }
        }).finally(() => setLoaded(true))
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            {(changePasswordShown || errorShown || checkShown || confirmShown) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!loaded && (
                <div className="fixed inset-0 z-60 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            {changePasswordShown && <ChangePasswordPopUp translation={translation} setCurrent={setCurrent} setPassword={setPassword} setConfirm={setConfirm} handlePasswordChange={handlePasswordChange} setChangePassword={setChangePasswordShown} />}
            {errorShown && <ErrorPopUp translation={translation} setErrorShown={setErrorShown} errorMessage={errorMessage} />}
            {checkShown && <CheckEmailPopUp setConfirmShown={setConfirmShown} setCheckShown={setCheckShown} successMessage={successMessage} />}
            {confirmShown && <ConfirmPopUp handleVerifyPassword={handleVerifyPassword} translation={translation} setVerifyCode={setVerifyCode} verifyCode={verifyCode} setConfirmShown={setConfirmShown} />}
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.my_account} {">"}</span><span className="text-[#9a9898]"> {translation?.data?.business?.my_account_info}</span></p>
                </div>
            </div>
            {successUpdate && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-40 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{successUpdateMessage}</p>
                <img onClick={() => setSuccessUpdate(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {errorUpdate && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-40 top-4 bg-[linear-gradient(to_right,rgb(201,61,61),rgb(151,5,5))] p-3 text-white">
                <p>{errorUpdateMessage}</p>
                <img onClick={() => setErrorUpdate(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[28%] max-[992px]:w-full">
                        <Sidebar translation={translation} page="account" info={info} user={user} />
                    </div>
                    <div className="pl-7.5 w-[72%] max-[992px]:w-full max-[992px]:pl-0">
                        <h2 className="text-[#212529] text-[25px] mb-5 font-semibold">{translation?.data?.business?.my_company_info}</h2>
                        <div className="flex p-7.5 border border-[#eee] rounded-lg mb-10 max-[992px]:flex-col max-[992px]:gap-5">
                            <div className="flex w-1/2 max-[992px]:flex-col max-[992px]:w-full">
                                <div className="w-20 h-20 mr-5">
                                    <img className="max-w-full align-middle" src={pg} alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl text-[#212529] font-semibold mb-2.5">{info?.name}</h1>
                                    <ul className="text-sm text-[#909090]">
                                        <li>
                                            {translation?.data?.business?.created_at}
                                            {" " + info?.created_at}
                                        </li>
                                        <li>
                                            {translation?.data?.business?.creator + " "}
                                            Pigasoft
                                        </li>
                                        <li>
                                            {translation?.data?.business?.team}
                                            {" " + team?.personals?.length} Kişi
                                        </li>
                                    </ul>
                                    <div className="mt-7.5">
                                        <Link to={"/company"} className="text-xs text-[#909090] font-semibold hover:text-black transition-colors duration-300 ease-in-out" href="">
                                            {translation?.data?.business?.go_my_company_portfoy}
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center w-1/2 max-[992px]:w-full">
                                <div>
                                    <h3 className="text-xl text-[#212529] mb-2 font-medium">{translation?.data?.business?.subscription_info}</h3>
                                    <div>
                                        <div className="flex items-center max-[992px]:flex-col max-[992px]:items-start justify-between">
                                            <p className="text-[25px] max-[992px]:text-lg text-[#212529] font-semibold w-[70%] max-[992px]:w-full">
                                                {sub?.package?.title}
                                            </p>
                                            {sub?.subscription?.is_trial && <p className="w-[20%] bg-[#f8f8f8] py-1.25 px-2 rounded-lg text-sm text-center max-[992px]:max-w-fit max-[992px]:whitespace-nowrap">
                                                {translation?.data?.business?.trial_version}
                                            </p>}
                                        </div>
                                        <p className="text-sm text-[#a1a1a1]">
                                            {translation?.data?.business?.expired_at}
                                            {" " + sub?.subscription?.finish_at?.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-[25px] mb-5 font-semibold">{translation?.data?.business?.my_account_info}</h2>
                            <form onSubmit={handleUpdate}>
                                <div className="flex mb-2.5">
                                    <div className="pr-3 w-1/2">
                                        <label htmlFor="">{translation?.data?.business?.name}</label>
                                        <input onChange={(e) => setName(e.target.value)} className="block border border-[#D9D9D9] w-full rounded-lg py-1.5 px-3" type="text" value={name} />
                                    </div>
                                    <div className="pl-3 w-1/2">
                                        <label htmlFor="">{translation?.data?.validation?.attributes?.email}</label>
                                        <input disabled className="block border border-[#D9D9D9] bg-[#e9ecef] w-full rounded-lg py-1.5 px-3" type="mail" value={user?.data?.email} />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-1/2 pr-3 max-[992px]:w-full max-[992px]:mb-2.5 max-[992px]:pr-0">
                                        <label htmlFor="">{translation?.data?.business?.phone}</label>
                                        <div className="flex items-center gap-3.75">
                                            <div>
                                                <select onChange={(e) => setCode(e.target.value)} value={code} className="border border-[#D9D9D9] rounded-lg text-base py-1.5 px-3" name="" id="">
                                                    <option value="357">(357)</option>
                                                    <option value="90">(90)</option>
                                                    <option value="971">(971)</option>
                                                    <option value="01">(01)</option>
                                                </select>
                                            </div>
                                            <input onChange={(e) => setPhone(e.target.value)} className="block border border-[#D9D9D9] w-full rounded-lg py-1.5 px-3" type="text" placeholder="Telefon" value={phone}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <button className="text-white text-base font-semibold bg-[#27C5D2] px-5 rounded-[5px] h-12.5 whitespace-nowrap cursor-pointer hover:bg-[#026872] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out" type="submit">{translation?.data?.business?.update}</button>
                                </div>
                            </form>
                        </div>
                        <div className="max-[992px]:mb-10">
                            <h2 className="text-[25px] mb-5 font-semibold">{translation?.data?.business?.change_password}</h2>
                            <div className="mb-4 bg-[#fff3cd] text-[#664d03] p-4 rounded-lg border border-[#ffecb5]">
                                {translation?.data?.business?.not_yet_password_change}
                            </div>
                            <button onClick={() => setChangePasswordShown(true)} className="bg-[#27C5D2] hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer text-white text-sm py-2 px-5 font-semibold rounded-lg">{translation?.data?.business?.change_password}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-10 max-[992px]:mb-7.5 max-[992px]:mt-7.5'>
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