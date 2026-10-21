import logo from "../assets/logo.svg"
import linkedIn from "../assets/linkedIn.png"
import x from "../assets/x.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import { Link } from "react-router-dom"

export function Footer({loged , translation}) {

    return (
        <div className="w-full">
            {!loged && <div className='w-full mx-auto max-w-[90%] flex justify-between items-start gap-7.5 max-[992px]:flex-col max-[992px]:w-[90%]'>
                <div className="w-[40%] max-[992px]:w-full pr-7.5">
                    <img className="w-[40%] mb-5" src={logo} alt="" />
                    <p className="text-sm text-[#b9c0c1] font-medium mb-4">
                        {translation?.data?.business?.footer_text}
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
                <div className="flex max-[992px]:w-full">
                    <div className="flex-1">
                        <p className="text-[24px] text-[#27c5d2] mb-4">{translation?.data?.business?.corporate}</p>
                        <ul className="text-[#b9b0b1] text-lg">
                            <li className="mb-3.75">
                                <Link to={"/corporate"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.corporate}</Link>
                            </li>
                            <li className="mb-3.75">
                                <Link to={"/corporate"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.mission}</Link>
                            </li>
                            <li className="mb-3.75">
                                <Link to={"/corporate"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.vision}</Link>
                            </li>
                            <li className="mb-3.75">
                                <Link to={"/discover"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.discover}</Link>
                            </li>
                            <li>
                                <Link to={"/contacts"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.contacts}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="text-[24px] text-[#27c5d2] mb-4">{translation?.data?.business?.discover}</p>
                        <ul className="text-[#b9b0b1] text-lg ">
                            <li className="mb-3.75">
                                <Link to={"/discover"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.what_is_portfoy}</Link>
                            </li>
                            <li className="mb-3.75">
                                <Link to={"/discover"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.app_features_and_advantages_section_title}</Link>
                            </li>
                            <li className="mb-3.75">
                                <Link to={"/pricing"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.pricing}</Link>
                            </li>
                            <li>
                                <Link to={"/faqs"} className="hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.faqs_section_header}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[20%] max-[992px]:w-full">
                    <p className="text-[24px] text-[#27c5d2] mb-4">{translation?.data?.business?.contracts}</p>
                    <ul className="text-[#b9b0b1] text-lg font-normal">
                        <li>
                            <Link to={"/consent"} className="hover:text-black transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/pages/3">Rıza Metni</Link>
                        </li>
                    </ul>
                </div>
            </div>}
            <div className="w-full bg-[#27C5D2] flex justify-center py-3.75 mt-20">
                <div className="w-full max-w-[90%] flex justify-between px-3 max-[992px]:flex-col max-[992px]:gap-3.75 items-center">
                    {loged && <p className="text-white font-medium text-center">
                        {translation?.data?.business?.customer_support_line}
                        <a className="font-bold" href="https://demo.pigasoft.com/portfoy/public/tr/tel: 0 850 851 44 94"> 0 850 851 44 94</a>
                    </p>}
                    <p className="text-white text-base font-medium text-center">
                        {translation?.data?.business?.footer_copyright}
                    </p>
                    <p className="text-white text-base font-normal text-center">
                        {translation?.data?.business?.footer_developed_by?.replace(/<[^>]*>/g, '')}
                    </p>
                </div>
            </div>
        </div>
    )
}