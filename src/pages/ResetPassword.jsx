import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { LanguageSelect } from "../components/LanguageSelect"
import logo from "../assets/logo.svg"
import { useEffect, useState } from "react"
import { getTranslation } from "../services/translation"
import mail from "../assets/mail.png"

export function ResetPassword({locale , setLocale}){

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        getTranslation(locale).then(setTranslation);
    }, [locale])

    return(
        <div className="flex font-sf flex-col justify-center items-center min-h-screen bg-linear-to-b from-[#f7f6fb] from-20% to-white to-20%">
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
                        <h1 className="text-lg text-[#686868] uppercase font-semibold mb-2.5">{translation?.data?.business?.forget_password}</h1>
                        <p className="text-base text-[#a6a6a6]">{translation?.data?.business?.forget_password_description}</p>
                    </div>
                    <form action="">
                        <div className="flex flex-col relative">
                            <img className="absolute w-5 h-5 top-11 left-4" src={mail} alt="" />
                            <label className="mb-1.25 text-base text-[#868686] font-semibold">{translation?.data?.validation?.attributes?.email}</label>
                            <input className="w-full px-5 pl-12 pr-12 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" type="email" placeholder={translation?.data?.validation?.attributes?.email} />
                        </div>
                        <div className="mt-5 mb-2">
                            <button className="bg-[#27c5d2] text-white rounded-lg text-center w-full py-2 px-5 font-semibold cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.reset_password_email?.web?.reset_my_password}</button>
                        </div>
                        <div className="my-10 flex flex-col items-center font-semibold">
                            <p className="text-sm text-[#868686]">Şifrenizi hatırlıyor musunuz?</p>
                            <Link to={"/login"} className="text-sm hover:text-[#27c5d2] transition-colors duration-300 ease-in-out cursor-pointer">Giriş Yapın</Link>
                        </div>
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