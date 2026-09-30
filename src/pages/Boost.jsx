import { Header } from "../components/Header"
import defaultProperty from "../assets/default-property.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { getDetails } from "../services/propertyDetails"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import location from "../assets/gray-location.png"
import building from "../assets/building.png"
import calendar from "../assets/calendar.png"

export function Boost({ loged }) {

    const {id} = useParams();
    
    const [loaded , setLoaded] = useState(false)
    const [details , setDetails] = useState([])

    useEffect(() => {
        getDetails(id).then(setDetails).finally(() => setLoaded(true))
    }, [id])

    return (
        <div className='flex flex-col items-center font-sf'>
            {!loaded && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İlanlar {">"}</span><span className="text-[#9a9898]">Öne Çıkar</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between items-center gap-12.5 max-[1100px]:flex-col">
                    <div className="w-1/2 max-[1100px]:w-full">
                        <h1 className="text-[35px] max-w-[80%] font-semibold mb-7.5 max-[1100px]:max-w-full">İlanınız daha fazla Port-foy kullanıcısının dikkatini çeksin ister misiniz?</h1>
                        <p className="text-[#808080]">İlanı öne çıkarma başvuru yapın ve daha çok dikkatleri ilanınıza toplayın.</p>
                    </div>
                    <div className="w-1/2 p-7.5 max-[1100px]:w-full max-[1100px]:p-0">
                        {details.status === "draft" && <div className="bg-[#f9d7da] text-[#842029] border border-[#f5c2c7] p-4 mb-4 rounded-lg">
                            Sadece yayında olan ilanlarınızı öne çıkarabilirsiniz.
                        </div>}
                        <div className="p-7.5 bg-[#f8f8f8] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                            <div>
                                <h2 className="text-[25px] font-semibold mb-2">İlanı Öne Çıkarma Başvurusu</h2>
                                <p className="text-sm text-[#212529] mb-4">
                                    Başvurunuzu yapmadan önce lütfen ilanınızın, tüm detayları ile birlikte
                                    doğru bir şekilde girildiğinden emin olun. İlanınızı tek seferde 60 güne
                                    kadar öne çıkarabilirsiniz.
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
                                        <li className="flex">
                                            <img className="w-5 h-5 mr-1.25" src={location} alt="" />
                                            {details?.city?.title} / {details?.district?.title}
                                        </li>
                                        <li className="flex">
                                            <img className="w-5 h-5 mr-1.25" src={building} alt="" />
                                            {details?.property_type === "ready" ? "Hazır" : "Proje"}
                                        </li>
                                        <li className="flex">
                                            <img className="w-5 h-5 mr-1.25" src={calendar} alt="" />
                                            {details?.updated_at}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {!details.status === "draft" && <div className="flex flex-col">
                                <div className="text-center my-12.5">
                                    <span className="text-[25px] font-semibold">Süre: 7 Gün</span>
                                    <input className="block mt-4 w-full h-3.75 bg-[#efefef]" type="range" min={7} max={60} name="days" />
                                </div>
                                <div>
                                    <button className="w-full bg-[#27c5d2] cursor-pointer hover:bg-[#048B99] transition-colors duration-300 ease-in-out text-white rounded-lg font-semibold text-sm h-12.5 px-5">TRY ₺70,00 Öde</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-10'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer loged={loged} />
            </div>
        </div>
    )
}