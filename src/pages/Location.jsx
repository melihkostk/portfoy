import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { LocationCard } from "../components/LocationCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Location() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader />
            <div className="w-full max-w-350 mt-12.5">
                <div className="flex justify-between items-center">
                    <h2 className="text-[#212529] text-[32px]">Konum & İletişim</h2>
                    <a className="text-[#4b4b4b] bg-[#f1f1f1] text-sm py-2 px-5 font-semibold rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out cursor-pointer" href="">Adres Oluştur</a>
                </div>
            </div>
            <div className="w-full max-w-350 mt-12.5">
                <LocationCard />
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </div>
            <div className='w-full mt-40 mb-30'>
                <div className='w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}