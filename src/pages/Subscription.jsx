import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { SubscriptionCard } from "../components/SubscriptionCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getSubscriptions } from "../services/myCompanyApi"

export function Subscription({ loged }) {

    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        getSubscriptions().then(setSubscriptions)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
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
                    {subscriptions.map(item => (
                        <SubscriptionCard
                            key={item.package}
                            packageName={item.package}
                            finish_at={item.finish_at.text}
                            readable={item.finish_at.readable}
                            is_trial={item.is_trial}
                            is_active={item.is_active}
                        />
                    ))}
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