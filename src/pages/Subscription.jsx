import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { SubscriptionCard } from "../components/SubscriptionCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getSubscriptions, getSubsUsage } from "../services/myCompanyApi"
import { ClipLoader } from "react-spinners"
import close from "../assets/blue-close.png"

export function Subscription({ loged }) {

    const [subscriptions, setSubscriptions] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getSubscriptions().then(setSubscriptions).finally(() => setLoaded(true))
    }, [])

    const [tableShown, setTableShown] = useState(false);

    const [subsUsage, setSubsUsage] = useState([]);

    useEffect(() => {
        getSubsUsage().then(setSubsUsage)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            {tableShown && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            {tableShown && <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-[55%] w-[32.5%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-center justify-between w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529]">Kullanım Özeti Tablosu</h2>
                    <img onClick={() => setTableShown(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <table className="w-full border border-[#eee]">
                        <thead>
                            <tr>
                                <th className="border border-[#eee] p-2.5 text-left">Özellik</th>
                                <th className="border border-[#eee] p-2.5 text-left">Kullanılan</th>
                                <th className="border border-[#eee] p-2.5 text-left">Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subsUsage.map((item) => (
                                <tr key={item?.key}>
                                    <td className="border border-[#eee] p-2.5">{item?.title}</td>
                                    <td className={`border border-[#eee] font-semibold p-2.5 ${item?.can_usage ? "text-[#212529]" : "text-[#ff4f4f]" }`}>{item?.used}</td>
                                    <td className="border border-[#eee] font-semibold p-2.5">{item?.limit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader />
            <div className="w-full max-w-[90%] mt-12.5">
                <div>
                    <button onClick={() => setTableShown(true)} className="bg-[#eee] py-2.5 rounded-lg px-7.5 mb-7.5 cursor-pointer font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
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