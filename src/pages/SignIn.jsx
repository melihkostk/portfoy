import logo from "../assets/logo.svg"
import turkey from "../assets/turkey.svg"
import english from "../assets/en.svg"
import russia from "../assets/ru.svg"
import downArrow from "../assets/down-arrow.png"
import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"

export function SignIn() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-[#f7f6fb] from-20% to-white to-20%">
            <div className="w-132.5 pb-12.5">
                <div className="flex items-center justify-between mb-7.5 pt-12.5">
                    <div className="w-55">
                        <img className="max-w-full align-middle" src={logo} alt="" />
                    </div>
                    <div className="rounded-[5px] relative hover:bg-[#B7B9BF] hover:text-white text-[#202529] transition-colors duration-300 ease-in-out">
                        <div className="cursor-pointer flex items-center justify-start gap-2.5 h-12.5 px-5">
                            <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                            <p className="font-semibold">Türkçe</p>
                            <img className="w-4 h-4" src={downArrow} alt="" />
                        </div>
                        <ul className="bg-white z-50 shadow-[0_0_30px_rgba(0,0,0,0.1)] hidden rounded-[10px] p-5 w-40 min-w-full absolute">
                            <li className="text-[#212529] flex items-center gap-2.5 pb-2 border-b border-b-[#E5E5EA] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                                <p className="font-semibold text-sm">Türkçe</p>
                            </li>
                            <li className=" text-[#212529] flex items-center gap-2.5 py-2 border-b border-b-[#E5E5EA] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={english} alt="" />
                                <p className="font-semibold text-sm">English</p>
                            </li>
                            <li className=" text-[#212529] flex items-center gap-2.5 pt-2 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out cursor-pointer">
                                <img className="w-5 h-5 object-fill rounded-[5px]" src={russia} alt="" />
                                <p className="font-semibold text-sm">Русский</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-white shadow-[0_0_30px_rgb(247_247_247)] p-7.5 rounded-lg">
                    <div className="mt-6.25 mb-7.5">
                        <h1 className="text-lg text-[#686868] uppercase font-semibold mb-2.5">Kayıt Ol</h1>
                        <p className="text-base text-[#a6a6a6]">Davetiye kodunuzla hesabınızı oluşturun</p>
                    </div>
                    <form action="">
                        <div className="flex flex-col my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="name">Adınız ve Soyadınız</label>
                            <input className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="name" id="name" type="text" placeholder="Adınız ve Soyadınız" required />
                        </div>
                        <div className="flex flex-col my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="email">E-Posta</label>
                            <input className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="email" id="email" type="email" placeholder="Adınız ve Soyadınız" required />
                        </div>
                        <div className="flex flex-col my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="phone">Telefon</label>
                            <input className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="phone" id="phone" type="email" placeholder="Adınız ve Soyadınız" required phone-mask />
                        </div>
                        <div className="flex flex-col my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="password">Şifre</label>
                            <input className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="password" id="password" type="email" placeholder="Adınız ve Soyadınız" required phone-mask />
                        </div>
                        <div className="flex flex-col my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="code">Davetiye Kodu</label>
                            <input className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="code" id="code" type="email" placeholder="Adınız ve Soyadınız" required phone-mask />
                        </div>
                        <button className="bg-[#27C5D2] hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer text-white font-medium uppercase w-full py-2 px-5 text-sm rounded-lg mt-5 mb-2">kayıt ol</button>
                        <p className="text-center my-10 text-sm text-[#868686] font-medium">
                            Zaten hesabınız var mı ?
                            <Link className="block text-[#525252] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" to="/login">Giriş Yapın</Link>
                        </p>
                    </form>
                    <p className="text-center text-xs text-[#868686] font-medium">Tüm hakları saklıdır. © Port-Foy - 2024</p>
                </div>
            </div>
            <div className="w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb] mt-30 mb-15">
                <AppLinks />
            </div>
        </div>
    )
}