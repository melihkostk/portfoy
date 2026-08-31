import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { TeamCard } from "../components/TeamCard"
import { UserInvite } from "../components/UserInvite"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getTeam, getAllInvitations } from "../services/myCompanyApi"

export function Team({ loged }) {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeam().then(setTeam)
    }, []);

    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        getAllInvitations().then(setInvitations)
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
                <h2 className="text-[#212529] text-[32px] mb-5">Ekip</h2>
                <div className="flex flex-wrap justify-between items-stretch max-[992px]:flex-col">
                    {team.personals?.map(item => (
                        <TeamCard
                            key={item.id}
                            name={item.name}
                            role={item.roles[0].title}
                            email={item.contacts.email}
                            phone={item.contacts.phone.number}
                            code={item.contacts.phone.code} />
                    ))}
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-6 overflow-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">Davetiye Kodu</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">İsim ve Soyisim</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Rol</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                            <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Sona Erme Süresi</th>
                            <th className="text-end bg-[#ececec] py-4 px-2.5 rounded-r-lg whitespace-nowrap">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invitations?.invitations?.map(item => (
                            <UserInvite
                                key={item.id}
                                id={item.id}
                                code={item.code}
                                name={item.name}
                                role={item.role.title}
                                created_at={item.created_at}
                                expiry_at={item.expiry_at}
                            />
                        ))}
                    </tbody>
                </table>
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