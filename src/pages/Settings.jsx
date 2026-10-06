import { useEffect, useState } from "react"
import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SettingsCard } from "../components/SettingsCard"
import { getCompanyInfo, getPreference, getTeam } from "../services/myCompanyApi"
import close from "../assets/blue-close.png"
import { PersonelCard } from "../components/PersonalCard"

export function Settings({ loged }) {

    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        getCompanyInfo().then(setCompanyInfo)
    }, [])

    const [personalSelectPopUp, setPersonalSelectPopUp] = useState(false);

    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeam().then(setTeam);
    }, [])

    const [preference, setPreference] = useState([]);

    useEffect(() => {
        getPreference().then(setPreference)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            {personalSelectPopUp && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm {">"}</span><span className="text-[#9a9898]"> Firma Tercihleri</span></p>
                </div>
            </div>
            {personalSelectPopUp && <div className="fixed top-1/2 left-1/2 flex flex-col items-center justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-cente w-full justify-between p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Fiyat Teklifleri için Personel Seçimi</h2>
                    <img onClick={() => setPersonalSelectPopUp(false)} className="cursor-pointer w-6 h-6" src={close} alt="" />
                </div>
                <div className="p-4">
                    <div className="flex flex-wrap justify-between">
                        {team?.personals.map(item => (
                            <PersonelCard
                                id={item.id}
                                key={item.id}
                                avatar={item.avatar}
                                name={item.name}
                                role={item.roles[0].title}
                                preference={preference}
                            />
                        ))}
                    </div>
                    <div className="mt-2">
                        <button className="bg-[#27c5d2] cursor-pointer font-semibold text-sm w-full text-white rounded-lg py-2 px-5 hover:bg-[#026872] transition-colors duration-300 ease-in-out">Kaydet</button>
                    </div>
                </div>
            </div>}
            <CompanyHeader
                page="settings"
                name={companyInfo?.name}
                code={companyInfo?.code}
                created_at={companyInfo?.created_at}
                type={companyInfo?.type}
                logo={companyInfo?.logo}
            />
            <div className="w-full max-w-[90%] mt-12.5">
                <div>
                    <p className="text-[32px] mb-10">Firma Tercihleri</p>
                    <div>
                        <SettingsCard
                            title="Fiyat Teklifleri için Personel Seçimi"
                            description="İlana yapılan fiyat teklifleri için hangi kullanıcılara bildirim gideceğini seçin"
                            setPersonalSelectPopUp={setPersonalSelectPopUp}
                            preference={preference}
                            team={team}
                        />
                        <SettingsCard
                            title="Personel Bilgilerinin Görünürlüğü"
                            description="Ekibinizdeki personellerin bilgilerinin diğer Port-Foy kullanıcılarına görünürlüğünü seçin"
                        />
                        <SettingsCard
                            title="Pass Fiyatı Görünürlüğü"
                            description="İlanlarınızın Pass Fiyatının diğer kullanıcı tarafından görünürlüğünü belirleyin"
                        />
                        <SettingsCard
                            title="Komisyon Oranları Görünürlüğü"
                            description="İlanlarınızın komisyon oranları diğer kullanıcı tarafından görünürlüğünü belirleyin"
                        />
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