import logo from "../assets/logo.svg"
import linkedIn from "../assets/linkedIn.png"
import x from "../assets/x.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <div className="w-full">
            <div className='w-full mx-auto max-w-350 flex items-start gap-7.5'>
                <div className="w-[40%] pr-7.5">
                    <img className="w-[40%] mb-5" src={logo} alt="" />
                    <p className="text-sm text-[#b9c0c1] font-medium mb-4">
                        Port-foy.com olarak, gayrimenkul sektöründe faaliyet gösteren profesyonellerin
                        işlerini kolaylaştırmak ve geniş kitlelere ulaşmalarını sağlamak amacıyla yenilikçi çözümler sunuyoruz.
                    </p>
                    <ul className="flex">
                        <a className="bg-[#bfb9bf] mr-2.5 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(39,197,210,0.5)]" href="https://www.linkedin.com/company/port-foy-com">
                            <img className="w-5 h-5" src={linkedIn} alt="" />
                        </a>
                        <a className="bg-[#bfb9bf] mr-2.5 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(39,197,210,0.5)]" href="https://x.com/PortFoycom">
                            <img className="w-5 h-5" src={x} alt="" />
                        </a>
                        <a className="bg-[#bfb9bf] mr-2.5 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(39,197,210,0.5)]" href="https://www.facebook.com/people/Port-Foycom/61566855802447/">
                            <img className="w-5 h-5" src={facebook} alt="" />
                        </a>
                        <a className="bg-[#bfb9bf] mr-2.5 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#27C5D2] transition-colors duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(39,197,210,0.5)]" href="https://www.instagram.com/portfoycom/">
                            <img className="w-5 h-5" src={instagram} alt="" />
                        </a>
                    </ul>
                    <div className="flex flex-col mt-5">
                        <a className="mb-2.5 text-base opacity-50 text-black hover:opacity-100 transition-opacity duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tel: 0 850 851 44 94">
                            0 850 851 44 94
                        </a>
                        <a className="mb-2.5 text-base opacity-50 text-black hover:opacity-100 transition-opacity duration-300 ease-in-out" href="mailto:support@port-foy.com">
                            support@port-foy.com
                        </a>
                    </div>
                </div>
                <div className="w-[20%]">
                    <p className="text-[24px] text-[#27c5d2] mb-4">Kurumsal</p>
                    <ul className="text-[#b9b0b1] text-lg">
                        <li className="mb-3.75">
                            <Link to={"/corporate"} className="hover:text-black transition-colors duration-300 ease-in-out">Kurumsal</Link>
                        </li>
                        <li className="mb-3.75">
                            <Link to={"/corporate"} className="hover:text-black transition-colors duration-300 ease-in-out">Misyon</Link>
                        </li>
                        <li className="mb-3.75">
                            <Link to={"/corporate"} className="hover:text-black transition-colors duration-300 ease-in-out">Vizyon</Link>
                        </li>
                        <li className="mb-3.75">
                            <Link to={"/discover"} className="hover:text-black transition-colors duration-300 ease-in-out">Keşfet</Link>
                        </li>
                        <li>
                            <Link to={"/contacts"} className="hover:text-black transition-colors duration-300 ease-in-out">İletişim</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-[20%]">
                    <p className="text-[24px] text-[#27c5d2] mb-4">Keşfet</p>
                    <ul className="text-[#b9b0b1] text-lg ">
                        <li className="mb-3.75">
                            <Link to={"/discover"} className="hover:text-black transition-colors duration-300 ease-in-out">Port-Foy Nedir?</Link>
                        </li>
                        <li className="mb-3.75">
                            <Link to={"/discover"} className="hover:text-black transition-colors duration-300 ease-in-out">Özellikler ve Avantajlar</Link>
                        </li>
                        <li className="mb-3.75">
                            <Link to={"/pricing"} className="hover:text-black transition-colors duration-300 ease-in-out">Fiyatlandırma</Link>
                        </li>
                        <li>
                            <a className="hover:text-black transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/faqs">Sıkça Sorulan Sorular</a>
                        </li>
                    </ul>
                </div>
                <div className="w-[20%]">
                    <p className="text-[24px] text-[#27c5d2] mb-4">Sözleşmeler</p>
                    <ul className="text-[#b9b0b1] text-lg font-normal">
                        <li>
                            <a className="hover:text-black transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/pages/3">Rıza Metni</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full bg-[#27C5D2] flex justify-center py-3.75 mt-20">
                <div className="w-full max-w-350 flex justify-between px-3">
                    <p className="text-white text-base font-semibold">
                        Copyright @ Port-Foy 2024. Her hakkı saklıdır.
                    </p>
                    <p className="text-white text-base font-normal">
                        <a className="text-white font-bold cursor-pointer" href="">Pigasoft</a> 
                        {" "}ve{" "}
                        <a className="text-white font-bold cursor-pointer" href="">Order Teknoloji</a>
                        {" "}tarafından geliştirilmiştir.
                    </p>
                </div>
            </div>
        </div>
    )
}