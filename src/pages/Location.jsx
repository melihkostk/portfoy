import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { LocationCard } from "../components/LocationCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import { useState } from "react"
import { getLocation } from "../services/myCompanyApi"

export function Location({ loged }) {

    const [location, setLocation] = useState([])

    useEffect(() => {
        getLocation().then(setLocation)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="location" />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex justify-between items-center max-[992px]:flex-col max-[992px]:items-start">
                    <h2 className="text-[#212529] text-[32px]">Konum & İletişim</h2>
                    <a className="text-[#4b4b4b] bg-[#f1f1f1] text-sm py-2 px-5 font-semibold rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out cursor-pointer" href="">Adres Oluştur</a>
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-12.5">
                {location.map(item => (
                    <LocationCard
                        key={item.id}
                        address={item.address}
                        country={item.country.title}
                        city={item.city.title}
                        district={item.district.title}
                    />
                ))}
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