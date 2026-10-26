import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { LanguageSelect } from "../components/LanguageSelect"
import React, { useEffect, useState } from "react"
import { getTranslation } from "../services/translation"
import person from "../assets/name-placeholder.png"
import mail from "../assets/mail.png"
import lock from "../assets/lock.png"
import phoneIcon from "../assets/phone-placeholder.png"
import columns from "../assets/columns.png"
import eye from "../assets/gray-eye.png"
import { ClipLoader } from "react-spinners"
import { register } from "../services/authApi"
import whiteClose from "../assets/close.png"

export function SignIn({ locale, setLocale }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [code, setCode] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [translation, setTranslation] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true));
    }, [locale])

    const [inputType, setInputType] = useState("password")

    const [successMessageShown, setSuccessMessageShown] = useState(false)
    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessageShown, setErrorMessageShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    function handleRegister(e) {
        e.preventDefault()
        setLoaded(false)
        register(email, password, name, code).then(data => {
            if (data.status === "error") {
                setErrorMessageShown(true)
                setErrorMessage(data.message)
            }
            else {
                setSuccessMessageShown(true)
                setSuccessMessage(data.message)
            }
        }).finally(() => setLoaded(true))
    }

    return (
        <div className="flex font-sf flex-col justify-center items-center min-h-screen bg-linear-to-b from-[#f7f6fb] from-20% to-white to-20%">
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            {successMessageShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{successMessage}</p>
                <img onClick={() => setSuccessMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            <div className="pb-12.5 w-[40%] max-[992px]:w-full max-[992px]:max-w-[95%]">
                <div className="flex items-center justify-between mb-7.5 pt-12.5">
                    <div className="w-55">
                        <Link to={"/"}>
                            <img className="max-w-full align-middle" src={logo} alt="" />
                        </Link>
                    </div>
                    <LanguageSelect setLocale={setLocale} locale={locale} />
                </div>
                <div className="w-full bg-white shadow-[0_0_30px_rgb(247_247_247)] p-7.5 rounded-lg">
                    <div className="mt-6.25 mb-7.5">
                        <h1 className="text-lg text-[#686868] uppercase font-semibold mb-2.5">{translation?.data?.business?.register}</h1>
                        <p className="text-base text-[#a6a6a6]">{translation?.data?.business?.register_page_description}</p>
                    </div>
                    {errorMessageShown && <div className="bg-[#f8d7da] mt-2 mb-4 p-4 text-[#842029] border border-[#f5c2c7] rounded-lg">
                        <p>{errorMessage}</p>
                    </div>}
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col my-2.5 relative">
                            <img className="w-5 h-5 absolute top-11 left-4" src={person} alt="" />
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="name">{translation?.data?.business?.fullname}</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full pl-12 px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="name" id="name" type="text" placeholder={translation?.data?.business?.fullname} required />
                        </div>
                        <div className="flex flex-col my-2.5 relative">
                            <img className="w-5 h-5 absolute top-11 left-4" src={mail} alt="" />
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="email">{translation?.data?.validation?.attributes?.email}</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-12 px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="email" id="email" type="email" placeholder={translation?.data?.validation?.attributes?.email} required />
                        </div>
                        <div className="flex flex-col my-2.5 relative">
                            <img className="w-5 h-5 absolute top-11 left-4" src={phoneIcon} alt="" />
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="phone">{translation?.data?.business?.phone}</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full pl-12 px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="phone" id="phone" type="email" placeholder={translation?.data?.business?.phone} phone-mask />
                        </div>
                        <div className="flex flex-col my-2.5 relative">
                            <img className="w-5 h-5 absolute top-11 left-4" src={lock} alt="" />
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="password">{translation?.data?.business?.password}</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-12 px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="password" id="password" type={inputType} placeholder={translation?.data?.business?.password} required phone-mask />
                            {inputType === "password" && <img onClick={() => setInputType("text")} className="w-5 h-5 absolute top-11 right-4 cursor-pointer" src={eye} alt="" />}
                            {inputType === "text" && <img onClick={() => setInputType("password")} className="w-5 h-5 absolute top-11 right-4 cursor-pointer" src={lock} alt="" />}
                        </div>
                        <div className="flex flex-col my-2.5 relative">
                            <img className="w-5 h-5 absolute top-11 left-4" src={columns} alt="" />
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="code">{translation?.data?.business?.invitation_code}</label>
                            <input value={code} onChange={(e) => setCode(e.target.value)} className="w-full pl-12 px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="code" id="code" type="text" placeholder={translation?.data?.business?.invitation_code} required phone-mask />
                        </div>
                        <button type="submit" className="bg-[#27C5D2] hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer text-white font-medium uppercase w-full py-2 px-5 text-sm rounded-lg mt-5 mb-2">{translation?.data?.business?.register}</button>
                        <p className="text-center my-10 text-sm text-[#868686] font-medium">
                            {translation?.data?.business?.have_already_login?.split("<a")[0]}
                            <Link className="block text-[#525252] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" to="/login">{translation?.data?.business?.have_already_login?.match(/<a[^>]*>(.*?)<\/a>/)?.[1]}</Link>
                        </p>
                    </form>
                    <p className="text-center text-xs text-[#868686] font-medium">{translation?.data?.business?.copyright}</p>
                </div>
            </div>
            <div className="w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb] mt-30 mb-15">
                <AppLinks translation={translation} />
            </div>
        </div>
    )
}