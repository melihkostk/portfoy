import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SettingsCard } from "../components/SettingsCard"

export function Settings({loged}) {
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
                    <p className="text-[32px] mb-10">Firma Tercihleri</p>
                    <div>
                        <SettingsCard />
                        <SettingsCard />
                        <SettingsCard />
                    </div>
                </div>
                <div>
                    <button className="bg-[#27C5D2] hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer text-white font-semibold text-sm py-2 px-5 rounded-lg">Kaydet</button>
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