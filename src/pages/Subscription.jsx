import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { SubscriptionCard } from "../components/SubscriptionCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Subscription() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader />
            <div className="w-full max-w-[90%] mt-12.5">
                <div>
                    <button className="bg-[#eee] py-2.5 rounded-lg px-7.5 mb-7.5 font-semibold hover:bg-[]">
                        Kullanım Özeti Tablosu
                    </button>
                </div>
                <div>
                    <SubscriptionCard />
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}