import logo from "../assets/logo.svg"
import close from "../assets/close.png"
import { Link } from "react-router-dom"
import whiteFolder from "../assets/folder.png"


export function MainSidebar({ setSidebarShown  , loged}) {
    return (
        <div className="p-3.75 bg-white w-full flex pt-30 items-center justify-center min-h-screen fixed overflow-y-auto top-0 bottom-0 left-0 right-0 z-50">
            <div className="w-full max-w-[95%]">
                <div className="flex justify-between items-center">
                    <div className="w-45">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                    <div onClick={() => setSidebarShown(false)} className="w-7.5 h-7.5 rounded-lg bg-[#27C5D2] flex items-center justify-center">
                        <img className="w-4 h-4" src={close} alt="" />
                    </div>
                </div>
                <div className="my-7.5">
                    <ul>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/"}>Anasayfa</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/discover"}>Port-Foy Nedir?</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/pricing"}>Fiyatlandırma</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/articles"}>Haberler</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/corporate"}>Kurumsal</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/contacts"}>İletişim</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="my-7.5">
                    <ul>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/register"}>Kayıt Ol</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/application"}>Firma Başvurusu</Link>
                        </li>
                        <li className="py-1.25 text-lg hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                            <Link to={"/check"}>Başvuru Sorgulama</Link>
                        </li>
                    </ul>
                </div>
                {loged && <div>
                    <input className="bg-[#f8f8f8] p-2.5 rounded-lg w-full mb-3.75" type="text" placeholder="İlanlarda Ara" />
                    <button className="bg-[#27C5D2] px-2.5 rounded-lg w-full flex items-center justify-center mb-2.5 h-7.5">
                        <img className="w-4 h-4" src={whiteFolder} alt="" />
                    </button>
                    <button className="bg-[#27C5D2] px-2.5 rounded-lg w-full flex items-center justify-center mb-2.5 h-7.5 text-white text-xs font-semibold">
                        Portföyüm
                    </button>
                </div>}
            </div>
        </div>
    )
}