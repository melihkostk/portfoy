import { Header } from "../components/Header"
import heart from "../assets/heart.png"
import folder from "../assets/folder.png"
import defaultImg from "../assets/default-property.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getDetails } from "../services/propertyDetails"
import { useParams } from "react-router-dom"
import location from "../assets/gray-location.png"
import building from "../assets/building.png"
import calendar from "../assets/calendar.png"
import { FeatureCard } from "../components/featureCard"
import { ClipLoader } from "react-spinners"
import close from "../assets/blue-close.png"
import { toggleWishlist } from "../services/propertiesApi"

export function PropertiesDetail({ loged }) {

    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getDetails(id).then(setDetails).finally(() => setLoaded(true))
    }, [])

    const [offerShown, setOfferShown] = useState(false)

    const [toogleMessage , setToogleMessage] = useState("");
    const [toogleMessageShown , setToogleMessageShown] = useState(false)

    function handleToogle(id){
        toggleWishlist(id).then((data => {
            if(data.status === "error"){
                return
            }
            getDetails(id).then(setDetails).finally(() => setLoaded(true))
            setToogleMessage(data.message)
            setToogleMessageShown(true)
        }))
    }

    const [detailType , setDetailType] = useState("map");

    return (
        <div className='flex flex-col items-center font-sf'>
            {offerShown && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
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
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Firmalar</span></p>
                </div>
            </div>
            {toogleMessageShown && <div className="fixed right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{toogleMessage}</p>
            </div>}
            {offerShown && <div className="fixed top-1/2 max-h-150 overflow-y-auto scrollbar-thin scrollbar-thumb-[#27c5d2] left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[50%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-between w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Fiyat Teklifi Oluşturun</h2>
                    <img onClick={() => setOfferShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="flex w-full">
                    <div className="w-1/2 pl-3.75 pt-3.75 pb-3.75">
                        <img className="object-cover" src={details?.cover} alt="cover" />
                    </div>
                    <div className="w-1/2 p-12.5">
                        <h1 className="text-[#212529] text-[25px] mb-2">{details?.title}</h1>
                        <p className="text-sm text-[#6c757d]">{details?.no}</p>
                        <div className="my-7.5">
                            <p className="text-sm text-[#212529] opacity-70">Satış Fiyatı</p>
                            <p className="text-lg text-[#212529] font-semibold mb-4">{details?.prices?.primary?.formatted}</p>
                            {details?.badges?.[0]?.title && (
                                <div className="uppercase text-xs bg-[#FFCA64] w-fit py-1.25 px-2 rounded-lg font-semibold">{details.badges[0].title}</div>
                            )}
                        </div>
                        <div>
                            <form>
                                <div>
                                    <label htmlFor="price">Teklif ettiğiniz fiyat (TRY)</label>
                                    <input required className="w-full border border-[#d9d9d9] rounded-lg py-1.5 px-3" type="text" placeholder="" name="price" id="price" />
                                </div>
                                <div>
                                    <label htmlFor="note">Notunuz</label>
                                    <textarea required className="w-full border border-[#d9d9d9] rounded-lg py-1.5 px-3" type="text" placeholder="" name="note" id="note" />
                                </div>
                                <div>
                                    <button className="bg-[#27c5d2] text-white rounded-sm h-12.5 px-5 font-semibold cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="w-full max-w-[90%]">
                <div className="flex items-start">
                    <div className="w-1/2 p-3.75 border border-[#eee] rounded-lg">
                        <div className="flex">
                            <div className="w-40 h-112.5 overflow-y-auto flex flex-col pr-3.75 gap-3.75">
                                <div className="text-center">
                                    <p className="text-[#a0a0a0] text-xs uppercase font-semibold">Kapak Fotoğrafı</p>
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="text-center">
                                    <p className="text-[#a0a0a0] text-xs uppercase font-semibold">Site Çevresi Fotoğrafları</p>
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                            </div>
                            <div className="w-[calc(100%-160px)] pl-5">
                                <img className="w-full h-full object-cover rounded-lg" src={details.cover} alt="" />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-12.5">
                        <p className="text-sm text-[#888888] mb-2.5">{details.no}</p>
                        <h1 className="text-[25px] text-[#212529] mb-3.75 font-semibold">{details.title}</h1>
                        <ul className="flex flex-wrap gap-5">
                            <li className="flex items-center">
                                <img className="w-5 h-5 mr-1.25" src={location} alt="" />
                                <p className="text-[#c2c2c2] text-sm">{details?.city?.title} / {details?.district?.title} / {details?.street?.title}</p>
                            </li>
                            <li className="flex items-center">
                                <img className="w-5 h-5 mr-1.25" src={building} alt="" />
                                {details?.property_type === "ready" ? <p className="text-[#c2c2c2] text-sm">Hazır</p> : <p className="text-[#c2c2c2] text-sm"></p>}
                            </li>
                            <li className="flex items-center">
                                <img className="w-5 h-5 mr-1.25" src={calendar} alt="" />
                                <p className="text-[#c2c2c2] text-sm">{details.updated_at}</p>
                            </li>
                        </ul>
                        <div className="flex items-center gap-5 bg-[#f2f2f2] p-3.75 w-fit rounded-lg my-7.5">
                            <div className="w-13.75 h-13.75 shadow-[0_0_30px_rgb(234_234_234/10%)]">
                                <img className="w-full h-full rounded-full bg-white" src={details?.company?.logo} alt="" />
                            </div>
                            <div>
                                <p className="mb-1.25 font-bold">{details?.company?.title}</p>
                                <p className="text-xs font-semibold">Firma 1 yıl önce katıldı</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="uppercase text-[#5f5f5f] text-xs font-semibold">Satış Fiyatı</p>
                            <p className="text-[#FFCA64] text-[25px] font-semibold mb-4">{details?.prices?.primary?.formatted}</p>
                            {details?.badges?.[0]?.title && (
                                <div className="uppercase text-xs bg-[#FFCA64] w-fit py-1.25 px-2 rounded-lg font-semibold">{details.badges[0].title}</div>
                            )}
                        </div>
                        <div className="flex gap-2.5 flex-wrap">
                            <button onClick={() => handleToogle(id)} className={` ${details.in_wishlist ? "bg-[#27c5d2]" : "bg-[#f1f1f1]"} w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out`}>
                                <img className="w-5 h-5" src={heart} alt="" />
                            </button>
                            <button onClick={() => setOfferShown(true)} className="uppercase text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 text-sm rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                Fiyat Teklifi Oluştur
                            </button>
                            <button className="bg-[#f1f1f1] w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                <img className="w-5 h-5" src={folder} alt="" />
                            </button>
                        </div>
                        <div className="mt-10">
                            <a className="text-[#767676] text-sm font-semibold cursor-pointer hover:text-black transition-colors duration-300 ease-in-out" href="#detail">İlanın detaylı özelliklerini inceleyin</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="detail" className="w-full max-w-[90%] mt-12.5">
                <div className="flex">
                    <div className="w-[30%]">
                        <div className="mb-7.5">
                            <h2 className="p-5 mb-4 text-xl text-[#212529] font-semibold">{details?.features?.[0]?.title}</h2>
                            {details?.features?.[0]?.features?.map((item) => (
                                <FeatureCard key={item.id} title={item.title} value={item.value} id={item.id} />
                            ))}
                        </div>
                        <div className="mb-7.5">
                            <h2 className="p-5 mb-4 text-xl text-[#212529] font-semibold">{details?.features?.[1]?.title}</h2>
                            {details?.features?.[1]?.features?.map((item) => (
                                <FeatureCard key={item.id} title={item.title} value={item.value} id={item.id} />
                            ))}
                        </div>
                        <div className="mb-7.5">
                            <h2 className="p-5 mb-4 text-xl text-[#212529] font-semibold">{details?.features?.[2]?.title}</h2>
                            {details?.features?.[2]?.features?.map((item) => (
                                <FeatureCard key={item.id} title={item.title} value={item.value} id={item.id} />
                            ))}
                        </div>
                    </div>
                    <div className="w-[70%] pl-12.5 sticky top-0 h-[calc(100vh-100px)]">
                        <div className="mb-5">
                            <button onClick={() => setDetailType("map")} className={`${detailType === "map" ? "bg-[#27C5D2] text-white hover:bg-[#026872]" : "bg-[#eee] text-black hover:bg-[#c3c3c3]"} mr-1.25 py-3.75 px-7.5 cursor-pointer font-semibold rounded-lg transition-colors duration-300 ease-in-out`}>Harita Konumu</button>
                            <button onClick={() => setDetailType("video")} className={`${detailType === "video" ? "bg-[#27C5D2] text-white hover:bg-[#026872]" : "bg-[#eee] text-black hover:bg-[#c3c3c3]"} py-3.75 px-7.5 cursor-pointer font-semibold rounded-lg transition-colors duration-300 ease-in-out`}>Videolar ({details?.videos?.length > 0 ? details.videos.length : "0"})</button>
                        </div>
                        {detailType === "map" && <div className="h-full">
                            <iframe
                                src={`https://www.google.com/maps?q=${details?.map?.latitude},${details?.map?.longitude}&z=15&output=embed`}
                                className="w-full h-full border-0 rounded-lg"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Google Maps"
                            />
                        </div>}
                        {detailType === "video" && <div className="h-full">
                            {details?.videos?.map(item => (
                                <a href={item}>{item}</a>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30'>
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