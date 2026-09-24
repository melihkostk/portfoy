import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { OfferCard } from "../components/OfferCard"
import { getReceivedOffers, getSendedOffers } from "../services/profileApi"
import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { Pagination } from "../components/Pagination"
import close from "../assets/blue-close.png"

export function Offers({ loged }) {

    const { type } = useParams();

    const [page, setPage] = useState(1)

    const [receivedOffers, setReceivedOffers] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        getReceivedOffers(page).then(setReceivedOffers).finally(() => setLoaded(true))
    }, [page])

    const [sendedOffers, setSendedOffers] = useState([]);

    useEffect(() => {
        setLoaded(false)
        getSendedOffers(page).then(setSendedOffers).finally(() => setLoaded(true))
    }, [page])

    const [offerMenuShown, setOfferMenuShown] = useState(false)
    const [offerInfo, setOfferInfo] = useState([]);

    return (
        <div className='flex flex-col items-center font-sf'>
            {offerMenuShown && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
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
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım {">"}</span><span className="text-[#9a9898]"> Fiyat Tekliflerim</span></p>
                </div>
            </div>
            {offerMenuShown && <div className="fixed overflow-y-scroll scrollbar-none top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 w-[25%] h-auto bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Fiyat Teklifini Görüntüle</h2>
                    <img onClick={() => setOfferMenuShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="p-4 w-full">
                    {!loaded ? (
                        <div className="flex items-center justify-center py-10 w-full">
                            <ClipLoader size={50} color="#27c5d2" aria-label="Loading Spinner" />
                        </div>
                    ) : (
                        <>
                            <div className="flex bg-[#f9f9f9] p-3.75 rounded-lg w-full mb-7.5 gap-7.5 justify-start">
                                <div className="w-20 h-20">
                                    <img className="w-full h-full" src={offerInfo?.data?.company?.logo} alt="company-logo" />
                                </div>
                                <div>
                                    <div className="text-lg text-[#212529] font-semibold">{offerInfo?.data?.company?.name}</div>
                                    <div className="text-sm text-[#212529] mb-2.5 opacity-80">{offerInfo?.data?.company?.type}</div>
                                    <div className="text-[13px] font-semibold text-[#212529] opacity-50">{offerInfo?.data?.company?.personal}</div>
                                </div>
                            </div>
                            {offerInfo?.data?.notes !== null && <div className="p-3.75 rounded-lg mb-5 border border-[#ececec]">
                                <p className="mb-4 text-[#212529] font-semibold">Müşteri Notu</p>
                                <p className="mb-4 text-[#212529] font-meidum">{offerInfo?.data?.notes}</p>
                            </div>}
                            <div>
                                <div className="flex">
                                    {offerInfo?.data?.pricing_type === "PASS" && <div className="flex-1 max-w-full text-center">
                                        <p className="text-sm text-[#212529] opacity-70 font-semibold">Pass Fiyatı</p>
                                        <p className="text-[22px] text-[#212529]">{offerInfo?.data?.prices?.secondary?.formatted}</p>
                                    </div>}
                                    <div className="flex-1 max-w-full text-center">
                                        <p className="text-sm text-[#212529] opacity-70 font-semibold">Satış Fiyatı</p>
                                        <p className="text-[22px] text-[#212529]">{offerInfo?.data?.prices?.primary?.formatted}</p>
                                    </div>
                                </div>
                                <div className="my-7.5">
                                    <div className="flex-1 max-w-full text-center">
                                        <p className="text-sm text-[#212529] opacity-70 font-semibold">Teklif Edilen Tutar</p>
                                        <p className="text-[22px] text-[#212529]">{offerInfo?.data?.offered_price?.formatted}</p>
                                    </div>
                                </div>
                            </div>
                            {offerInfo?.data?.status?.key === "waiting" && <div className="p-3.75 bg-[#f9f9f9] rounded-lg">
                                <h2 className="text-xl text-[#212529] mb-5 font-semibold">Teklife Yanıt Verin</h2>
                                <div className="mb-5 flex justify-start gap-2.5">
                                    <button className="text-sm bg-[#e7e7e7] p-2.5 flex-1 rounded-lg cursor-pointer">Kabul Et</button>
                                    <button className="text-sm bg-[#e7e7e7] p-2.5 flex-1 rounded-lg cursor-pointer">Reddet</button>
                                </div>
                                <div className="mb-2">
                                    <label className="text-[#212529]" htmlFor="note">Notunuz</label>
                                    <textarea className="bg-white px-3 py-1.5 block w-full border border-[#d9d9d9] rounded-lg min-h-[calc(1.5em+0.75rem+2px)]" type="text" id="note" name="note" />
                                </div>
                                <button className="w-full text-white text-sm font-semibold cursor-pointer hover:bg-[#157347] transition-colors duration-300 ease-in-out bg-[#198754] py-2 px-5 rounded-lg">Kaydet</button>
                            </div>}
                        </>
                    )}
                </div>
            </div>}
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse max-[992px]:gap-5">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar type={type} />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <h2 className="text-[32px] text-[#212529] font-medium mb-2">{type === "received" ? "Aldığım teklifler" : "Gönderdiğim teklifler"}</h2>
                        {type === "received" && <div className="p-4 mb-4 bg-[#fff3cd] rounded-lg">
                            <p className="text-[#664d03]">Bu sayfada sadece sizin oluşturduğunuz ilanların tekliflerini görüntüleyebilirsiniz.</p>
                        </div>}
                        <div className="overflow-auto scrollbar-thumb-[#27C5D2]">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">İlan</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Geçerli Fiyat</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Pass / Komisyon</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap ">Teklif Edilen Tutar</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Durum</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap rounded-r-lg">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {type === "received" &&
                                        receivedOffers?.data?.map((item, index) => (
                                            <OfferCard
                                                key={item.id}
                                                id={item.id}
                                                title={item.property.title}
                                                price={item.property.primary.formatted}
                                                offered_price={item.offered_price.formatted}
                                                status={item.status.title}
                                                created_at={item.created_at}
                                                type="received"
                                                index={index}
                                                setOfferMenuShown={setOfferMenuShown}
                                                offerInfo={offerInfo}
                                                setOfferInfo={setOfferInfo}
                                                loaded={loaded}
                                                setLoaded={setLoaded}
                                            />
                                        ))
                                    }
                                    {type === "send" &&
                                        sendedOffers?.data?.map((item, index) => (
                                            <OfferCard
                                                key={item.id}
                                                id={item.id}
                                                title={item.property.title}
                                                price={item.property.primary.formatted}
                                                offered_price={item.offered_price.formatted}
                                                status={item.status.title}
                                                created_at={item.created_at}
                                                type="send"
                                                index={index}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between mt-5 w-full max-[992px]:flex-col max-[992px]:items-center">
                            <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                                {type === "received" ? receivedOffers?.pagination?.pagination_text : sendedOffers?.pagination?.pagination_text}
                            </p>
                            <Pagination
                                pagination={type === "received" ? receivedOffers?.pagination : sendedOffers?.pagination}
                                onPageChange={setPage}
                            />
                        </div>
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