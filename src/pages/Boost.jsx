import { Header } from "../components/Header"
import defaultProperty from "../assets/default-property.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { getDetails } from "../services/propertyDetails"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { useAppContext } from "../context/AppContext"

export function Boost() {

    const { translation, translationLoaded } = useAppContext();

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false)
    const [details, setDetails] = useState([])

    useEffect(() => {
        getDetails(id).then(setDetails).catch((error) => console.log(error)).finally(() => setLoaded(true))
    }, [id])

    const [day, setDay] = useState(7);

    return (
        <div className='flex flex-col items-center font-sf'>
            {(!loaded || !translationLoaded) && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link to={"/properties"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.properties}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out" to={`/properties/${id}`}>{details?.title}</Link>
                    <p>{">"}</p>
                    <Link className="text-[#9a9898] text-sm font-semibold">{translation?.data?.business?.boost_property}</Link>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between items-center gap-12.5 max-[1100px]:flex-col">
                    <div className="w-1/2 max-[1100px]:w-full">
                        <h1 className="text-[35px] max-w-[80%] font-semibold mb-7.5 max-[1100px]:max-w-full">{translation?.data?.business?.boost_page?.title}</h1>
                        <p className="text-[#808080] font-medium">{translation?.data?.business?.boost_page?.description}</p>
                    </div>
                    <div className="w-1/2 p-7.5 max-[1100px]:w-full max-[1100px]:p-0">
                        {details.status === "draft" && <div className="bg-[#f9d7da] text-[#842029] border border-[#f5c2c7] p-4 mb-4 rounded-lg">
                            {translation?.data?.business?.only_can_published_property_boost}
                        </div>}
                        <div className="p-7.5 bg-[#f8f8f8] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                            <div>
                                <h2 className="text-[25px] font-semibold mb-2">{translation?.data?.business?.boost_page?.form_title}</h2>
                                <p className="text-sm text-[#212529] mb-4">
                                    {translation?.data?.business?.boost_page?.form_description}
                                </p>
                            </div>
                            <div className="bg-white flex items-center justify-between rounded-lg p-3.75">
                                <div className="w-50">
                                    <img className="w-full rounded-lg h-auto" src={defaultProperty} alt="" />
                                </div>
                                <div className="pl-7.5 w-[calc(100%-200px)]">
                                    <p className="text-lg font-semibold whitespace-pre-line text-ellipsis overflow-hidden">{details?.title}</p>
                                    <p className="text-sm opacity-70 mb-4 whitespace-break-spaces text-ellipsis overflow-hidden">{details.no}</p>
                                    <ul className="flex text-sm text-[#747474] gap-2.5 flex-wrap">
                                        <li className="flex items-center font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                            {details?.city?.title} / {details?.district?.title}
                                        </li>
                                        <li className="flex items-center font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-building preview-icon"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
                                            {details?.property_type === "ready" ? translation?.data?.business?.building_statusess?.ready : translation?.data?.business?.building_statusess?.under_construction}
                                        </li>
                                        <li className="flex items-center font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mr-1.25 lucide-calendar-days preview-icon"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/></svg>
                                            {details?.updated_at}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {details.status !== "draft" && <div className="flex flex-col">
                                <div className="text-center my-12.5">
                                    <span className="text-[25px] font-semibold">{translation?.data?.business?.boost_page?.time} {day} {translation?.data?.business?.boost_page?.days.replace(":day", "")}</span>
                                    <input value={day} onChange={(e) => setDay(e.target.value)} className="block mt-4 w-full h-3.75 bg-[#efefef]" type="range" min={7} max={60} name="days" />
                                </div>
                                <div>
                                    <button className="w-full bg-[#27c5d2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out text-white rounded-lg font-semibold text-sm h-12.5 px-5">{translation?.data?.business?.boost_page?.payment_button?.replace(
                                        ":amount",
                                        `₺${(day * 10).toFixed(2).replace(".", ",")}`
                                    )}</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}