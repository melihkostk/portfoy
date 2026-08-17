import logo from "../assets/logo.svg"
import turkey from "../assets/turkey.svg"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className="py-7.5 w-full max-w-350">
            <div className="flex items-center justify-between"> 
                <div className="w-55 min-w-55">
                    <img className="max-w-full" src={logo} alt="" />
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/">Anasayfa</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/discover">Port-foy Nedir?</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" to="/pricing">Fiyatlandırma</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" href="">Haberler</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" href="">Kurumsal</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" href="">İletişim</Link>
                        </li>
                        <li>
                            <Link className="text-black hover:text-[#27C5D2] transition-colors duration-300 ease-in-out font-medium" href="">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between gap-2.5">
                    <div className="text-[#202529] hover:text-white cursor-pointer flex items-center justify-start gap-2.5 h-12.5 bg-white px-5 hover:bg-[#B7B9BF] transition-colors duration-300 ease-in-out rounded-[5px]">
                        <img className="w-5 h-5 object-fill rounded-[5px]" src={turkey} alt="" />
                        <p>Türkçe</p>
                    </div>
                    <div>
                        <button className="bg-[#27C5D2] px-5 h-12.5 rounded-[5px] text-white font-semibold hover:bg-[#048B99] transition-colors duration-300 ease-in-out">Giriş Yap</button>
                    </div>
                    <div>
                        <button className="bg-[#048B99] px-5 h-12.5 rounded-[5px] text-white font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out">Firma başvurusu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}