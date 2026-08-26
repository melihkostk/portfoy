import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { TeamCard } from "../components/TeamCard"
import { UserInvite } from "../components/UserInvite"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Team() {
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
                <h2 className="text-[#212529] text-[32px] mb-5">Ekip</h2>
                <div className="flex flex-wrap justify-between items-start max-[992px]:flex-col">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-6 overflow-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg">Davetiye Kodu</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5">İsim ve Soyisim</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5">Rol</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5">Oluşturma Tarihi</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5">Sona Erme Süresi</th>
                            <th className="text-end bg-[#ececec] py-4 px-2.5 rounded-r-lg">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserInvite />
                        <UserInvite />
                        <UserInvite />
                        <UserInvite />
                        <UserInvite />
                        <UserInvite />
                        <UserInvite />
                    </tbody>
                </table>
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