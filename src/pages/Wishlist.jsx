import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Footer } from "../components/Footer"
import { AppLinks } from "../components/AppLinks"
import { CompanyFilter } from "../components/CompanyFilter"
import { PropertiesCard } from "../components/PropertiesCard"
import { getWishlist } from "../services/profileApi"
import { useState } from "react"

export function Wishlist({ loged }) {

    const [wishlist, setWishlist] = useState([]);

    useState(() => {
        getWishlist().then(setWishlist)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <div className="flex justify-between items-center mb-5 flex-wrap">
                            <h2 className="text-[32px] text-[#212529] font-medium mb-2">Favorilerim</h2>
                            <select className="border border-[#D9D9D9] rounded-lg py-1.5 px-3 text-[#212529]" name="" id="">
                                <option value="" selected>
                                    Varsayılan Sıralama
                                </option>
                                <option value="">
                                    Oluşturma Tarihine Göre (Eskiden Yeniye)
                                </option>
                                <option value="">
                                    Oluşturma Tarihine Göre (Yeniden Eskiye)
                                </option>
                                <option value="">
                                    Fiyatına Göre (Ucuzdan Pahalıya)
                                </option>
                                <option value="">
                                    Fiyatına Göre (Pahalıdan Ucuza)
                                </option>
                            </select>
                        </div>
                        <div>
                            <CompanyFilter />
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