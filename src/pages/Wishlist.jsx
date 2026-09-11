import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Footer } from "../components/Footer"
import { AppLinks } from "../components/AppLinks"
import { CompanyFilter } from "../components/CompanyFilter"
import { PropertiesCard } from "../components/PropertiesCard"
import { getWishlist } from "../services/profileApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getSortingOptions, toggleWishlist } from "../services/propertiesApi"
import close from "../assets/close.png"

export function Wishlist({ loged }) {

    const [wishlist, setWishlist] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const [sort , setSort] = useState([]);

    useEffect(() => {
        getSortingOptions().then(setSort)
    }, [])

    const [selectedSort , setSelectedSort] = useState("");

    useEffect(() => {
        setLoaded(false)
        getWishlist(selectedSort).then(setWishlist).finally(() => setLoaded(true))
    }, [selectedSort])

    const [toogleMessageShown, setToogleMessageShown] = useState(false)
    const [toogleMessage, setToogleMessage] = useState("")

    function handleToggleWishlist(id) {
        toggleWishlist(id).then(data => {
            if (data.status === "error") {
                return
            }
            setLoaded(false)
            getWishlist().then(setWishlist).finally(() => { setLoaded(true); setToogleMessage(data.message); setToogleMessageShown(true) })
        })
    }

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
            {toogleMessageShown && <div className="fixed right-4 rounded-lg font-semibold z-50 flex items-center gap-2 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{toogleMessage}</p>
                <img onClick={() => setToogleMessageShown(false)} className="w-4 h-4 cursor-pointer" src={close} alt="" />
            </div>}
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar page="wishlist" />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <div className="flex justify-between items-center mb-5 flex-wrap">
                            <h2 className="text-[32px] text-[#212529] font-medium mb-2">Favorilerim</h2>
                            <select value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)} className="border border-[#D9D9D9] rounded-lg py-1.5 px-3 text-[#212529]" name="" id="">
                                {sort?.map(item => (
                                    <option className="hover:bg-[#27c5d2]" key={item.key} value={item.key}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <CompanyFilter page="wishlist" />
                        </div>
                        <div className="flex flex-wrap justify-between -mx-3.75">
                            {wishlist.length > 0 &&
                                wishlist.map(item => (
                                    <PropertiesCard
                                        key={item.id}
                                        page="wishlist"
                                        id={item.id}
                                        title={item.title}
                                        cover={item.cover}
                                        price={item.price.formatted}
                                        company={item.company.title}
                                        type={item.type.title}
                                        city={item.city.title}
                                        district={item.district.title}
                                        handleToggleWishlist={handleToggleWishlist}
                                    />
                                ))
                            }
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