import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { TeamCard } from "../components/TeamCard"
import { UserInvite } from "../components/UserInvite"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getTeam, getAllInvitations, removeInvite } from "../services/myCompanyApi"
import { ClipLoader } from "react-spinners"
import mark from "../assets/mark.png"
import close from "../assets/blue-close.png"

export function Team({ loged }) {

    const [team, setTeam] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState("")
    const [errorPopUp, setErrorPopUp] = useState(false)
    const [successPopUp , setSuccessPopUp] = useState(false)

    useEffect(() => {
        getTeam().then(setTeam).finally(() => setLoaded(true))
    }, []);

    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        getAllInvitations().then(setInvitations)
    }, [])

    function handleDelete(id) {
        removeInvite(id).then((data => {
            if (data.status === "error") {
                setErrorPopUp(true)
                setError(() => setError(data.message))
            }
            getAllInvitations().then(setInvitations)
            setSuccessPopUp(true)
        }))
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            {errorPopUp && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            {errorPopUp && <div className="fixed top-1/2 left-1/2 flex flex-col items-center justify-start p-3 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 bg-white border border-[#eee] rounded-lg z-50">
                <div onClick={() => setErrorPopUp(false)} className="self-end cursor-pointer">
                    <img src={close} alt="" />
                </div>
                <div className="border-4 border-[#f8bb86] w-fit rounded-full p-5 mt-10">
                    <img src={mark} alt="" />
                </div>
                <div className="text-xl text-[#545454] pt-4">
                    {error}
                </div>
            </div>}
            {successPopUp && <div className="fixed right-0 top-4 z-50 bg-gradient-to-r from-[#22c55e] to-white text-white py-2 px-5 rounded-l-xl">
                Kayıt Başarıyla Oluşturuldu    
            </div>}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">s
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="team" />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex items-center justify-between">
                    <h2 className="text-[#212529] text-[32px] mb-5">Ekip</h2>
                    <div className="bg-[#f1f1f1] text-[#4b4b4b] text-sm rounded-lg py-2 px-5 font-semibold cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                        Davetiye Oluştur
                    </div>
                </div>
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
                                handleDelete={handleDelete}
                                setErrorPopUp={setErrorPopUp}
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