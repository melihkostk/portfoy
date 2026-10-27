import logo from "../assets/logo.svg"
import { AppLinks } from "../components/AppLinks"
import { Link, useNavigate  } from "react-router-dom"
import { LanguageSelect } from "../components/LanguageSelect"
import { useEffect, useState } from "react"
import { loginRequest } from "../services/authApi"
import { getTranslation } from "../services/translation"
import { ClipLoader } from "react-spinners"
import lock from "../assets/lock.png"
import mail from "../assets/mail.png"
import eye from "../assets/gray-eye.png"

export function Login({ setLoged , locale , setLocale }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate ();

    function login(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        loginRequest(email, password, locale)
            .then((data) => {
                if (data.status !== "error") {
                    localStorage.setItem("user", JSON.stringify(data))
                    setLoged(true)
                    navigate("/")
                } else {
                    setError(data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const [translation , setTranslation] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    const [inputType , setInputType] = useState("password");

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b font-sf from-[#f7f6fb] from-35% to-white to-35%">
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="w-[30%] h-full max-[992px]:w-full max-[992px]:max-w-[95%]">
                <div className="flex items-center justify-between mb-7.5 py-5">
                    <div className="w-55">
                        <Link to={"/"}>
                            <img className="max-w-full align-middle" src={logo} alt="" />
                        </Link>
                    </div>
                    <LanguageSelect setLocale={setLocale} locale={locale} />
                </div>
                <div className="w-full bg-white shadow-[0_0_30px_rgb(247_247_247)] p-7.5 rounded-lg">
                    <div className="mt-6.25 mb-7.5">
                        <h1 className="text-lg text-[#686868] uppercase font-semibold mb-2.5">{translation?.data?.business?.login}</h1>
                        <p className="text-base text-[#a6a6a6]">{translation?.data?.business?.login_description}</p> 
                    </div>
                    <form onSubmit={login}>
                        <div className="my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="username">{translation?.data?.business?.email}</label>
                             <div className="relative">
                                <img className="absolute w-5 h-5 top-4.5 left-4" src={mail} alt="" />
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 pl-12 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="email" id="username" type="email" placeholder={translation?.data?.business?.email} required />
                            </div>
                        </div>
                        <div className="my-2.5">
                            <div className="flex items-center justify-between">
                                <label className="text-[#868686] mb-1.25 font-medium" htmlFor="username">{translation?.data?.business?.password}</label>
                                <Link to={"/reset-password"} className="text-[#b1b1b1] text-sm font-medium hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">{translation?.data?.business?.forget_password}</Link>
                            </div>
                            <div className="relative">
                                <img className="absolute w-5 h-5 top-4 left-4" src={lock} alt="" />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-5 pl-12 pr-12 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="password" id="password" type={inputType} placeholder={translation?.data?.business?.password} required />
                                {inputType === "password" && <img onClick={() => setInputType("text")} className="absolute cursor-pointer w-5.5 h-5.5 top-4 right-4" src={eye} alt="" />}
                                {inputType === "text" && <img onClick={() => setInputType("password")} className="absolute cursor-pointer w-5 h-5 top-4 right-4" src={lock} alt="" />}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <label className="text-[#868686] ml-1.25 font-medium">{translation?.data?.business?.remember_me}</label>
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm font-medium mt-2.5">{error}</p>
                        )}
                        <button type="submit" disabled={loading} className="bg-[#27C5D2] hover:bg-[#026872] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out cursor-pointer text-white font-medium uppercase w-full py-2 px-5 text-sm rounded-lg mt-5 mb-2">{translation?.data?.business?.login}</button>
                        <p className="text-center my-10 text-sm text-[#868686] font-medium">
                            <Link className="block text-[#525252] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" to={"/register"}>{translation?.data?.business?.register_description?.replace(/<[^>]*>/g, "")}</Link>
                        </p>
                    </form>
                    <p className="text-center text-[#868686] text-xs font-medium">{translation?.data?.business?.copyright}</p>
                </div>
            </div>
            <div className="w-full mx-auto max-w-[80%] flex flex-col items-center justify-center bg-[#f7f6fb] mt-30 mb-15">
                <AppLinks translation={translation} />
            </div>
        </div>
    )
}