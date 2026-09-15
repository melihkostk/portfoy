import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import bgImage from "../assets/default-property.jpg";
import { Link, useParams } from "react-router-dom";
import { showOffer } from "../services/profileApi";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function OfferDetail({ loged }) {

    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        showOffer(id).then(setDetails).finally(() => setLoaded(true))
    }, [id])

    return (
        <div className='flex flex-col items-center font-sf'>
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-7.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse max-[992px]:gap-5">
                    <div className="w-[28%] max-[992px]:w-full">
                        <Sidebar />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <h2 className="mb-5 text-[#212529] text-[25px]">Fiyat Teklifi Detayı</h2>
                        <div className="bg-cover bg-center p-7.5 rounded-lg" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${bgImage})` }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-white">{details?.data?.property?.no}</p>
                                    <p className="text-[25px] text-white font-semibold">{details?.data?.property?.title}</p>
                                    <p className="text-base text-white mb-4">{details?.data?.property?.type?.title}</p>
                                    <div>
                                        <p className="text-xs text-white font-semibold">Notunuz</p>
                                        <p className="text-sm text-white font-semibold">{details?.data?.notes}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`/properties/${details?.data?.property?.id}`} className="py-2.5 px-5 bg-white text-black text-sm rounded-lg hover:text-white hover:bg-[#27c5d2] transition-colors duration-300 ease-in-out">İlana Git</Link>
                                </div>
                            </div>
                            <div className="flex justify-between mt-25">
                                <div className="flex gap-5 items-center">
                                    <div className="w-17.5 h-17.5 rounded-full bg-white">
                                        <img className="w-full h-full rounded-full" src={details?.data?.property?.company?.logo} alt="" />
                                    </div>
                                    <div>
                                        <p className="text-xl text-white font-semibold">{details?.data?.property?.company?.title}</p>
                                        <p className="text-sm text-white">{details?.data?.company?.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-7.5">
                                    <div>
                                        <p className="text-sm text-white">Geçerli Fiyat</p>
                                        <p className="text-base text-white">{details?.data?.prices?.primary?.formatted}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-white">Teklif edilen tutar</p>
                                        <p className="text-base text-white">{details?.data?.offered_price?.formatted}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {details?.data?.status?.key === "waiting" && <div className="mt-4 text-[#664d03] text-lg font-semibold rounded-lg bg-[#fff3cd] p-4">
                            {details?.data?.status?.message}
                        </div>}
                        {details?.data?.status?.key === "reject" && <div className="mt-4 text-[#842029] rounded-lg bg-[#f8d7da] p-4 border border-[#f5c2c7]">
                            <p className="font-semibold text-lg mb-1.25">{details?.data?.status?.message}</p>
                            <p className="text-base">Bu ilan için tekrar fiyat teklifi oluşturabilirsiniz</p>
                        </div>}
                        {details?.data?.status?.key === "confirm" && <div className="mt-4 rounded-lg bg-[#0f5132] p-4 border border-[#badbcc]">
                            <p className="font-semibold text-lg mb-1.25 text-[#0f5132]">{details?.data?.status?.title}</p>
                            <p className="text-[#0f5132] text-base">{details?.data?.status?.message}</p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
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