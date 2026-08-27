import logo from "../assets/logo.svg"
import { AppLinks } from "../components/AppLinks"
import { Link, useNavigate  } from "react-router-dom"
import { LanguageSelect } from "../components/LanguageSelect"
import { useState } from "react"


export function Login({ setLoged }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [locale] = useState("tr")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate ();

    const user = {
        email: email,
        password: password,
        locale: locale
    }

    function login(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        fetch("https://demo.pigasoft.com/portfoy/public/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
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

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b font-sf from-[#f7f6fb] from-35% to-white to-35%">
            <div className="w-[40%] max-[992px]:w-full max-[992px]:max-w-[95%]">
                <div className="flex items-center justify-between mb-7.5 py-5">
                    <div className="w-55">
                        <Link to={"/"}>
                            <img className="max-w-full align-middle" src={logo} alt="" />
                        </Link>
                    </div>
                    <LanguageSelect />
                </div>
                <div className="w-full bg-white shadow-[0_0_30px_rgb(247_247_247)] p-7.5 rounded-lg">
                    <div className="mt-6.25 mb-7.5">
                        <h1 className="text-lg text-[#686868] uppercase font-semibold mb-2.5">Giriş Yap</h1>
                        <p className="text-base text-[#a6a6a6]">Devam etmek için lütfen giriş yapın</p>
                    </div>
                    <form onSubmit={login}>
                        <div className="my-2.5">
                            <label className="text-[#868686] mb-1.25 font-medium" htmlFor="username">E-Posta</label>
                            <div>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="email" id="username" type="email" placeholder="E-Posta" required />
                            </div>
                        </div>
                        <div className="my-2.5">
                            <div className="flex items-center justify-between">
                                <label className="text-[#868686] mb-1.25 font-medium" htmlFor="username">Şifre</label>
                                <a className="text-[#b1b1b1] text-sm font-medium hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">Şifremi Unuttum</a>
                            </div>
                            <div>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-5 py-3.75 shadow-[0_0_30px_rgb(242_242_242)] font-medium" name="password" id="password" type="password" placeholder="Şifre" required />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <label className="text-[#868686] ml-1.25 font-medium">Beni Hatırla</label>
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm font-medium mt-2.5">{error}</p>
                        )}
                        <button type="submit" disabled={loading} className="bg-[#27C5D2] hover:bg-[#026872] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out cursor-pointer text-white font-medium uppercase w-full py-2 px-5 text-sm rounded-lg mt-5 mb-2">{loading ? "Giriş Yapılıyor..." : "Giriş Yap"}</button>
                        <p className="text-center my-10 text-sm text-[#868686] font-medium">
                            Hesabınız yok mu? Davetiye kodunuzla
                            <Link to={"/register"} className="block text-[#525252] hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">şimdi hesap oluşturun.</Link>
                        </p>
                    </form>
                    <p className="text-center text-[#868686] text-xs font-medium">Tüm hakları saklıdır. © Port-Foy - 2024</p>
                </div>
            </div>
            <div className="w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb] mt-30 mb-15">
                <AppLinks />
            </div>
        </div>
    )
}