import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { TeamCard } from "../components/TeamCard"
import { UserInvite } from "../components/UserInvite"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getTeam, getAllInvitations, removeInvite, getAllRoles, getAllLanguages } from "../services/myCompanyApi"
import { ClipLoader } from "react-spinners"
import mark from "../assets/mark.png"
import close from "../assets/blue-close.png"

export function Team({ loged }) {

    const [team, setTeam] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const [error, setError] = useState("")
    const [errorPopUp, setErrorPopUp] = useState(false)
    const [successPopUp, setSuccessPopUp] = useState(false)

    const [addShown, setAddShown] = useState(false);

    useEffect(() => {
        getTeam().then(setTeam).finally(() => setLoaded(true))
    }, []);

    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        getAllInvitations().then(setInvitations)
    }, [])

    const [roles , setRoles] = useState([]);

    useEffect(() => {
        getAllRoles().then(setRoles)
    }, [])

    const [languages , setLanguages] = useState([]);

    useEffect(() => {
        getAllLanguages().then(setLanguages);
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
            {(errorPopUp || addShown) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
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
            {addShown && <div className="fixed top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[35%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Davetiye Oluştur</h2>
                    <img onClick={() => setAddShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <form className="w-full" action="">
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="language">Dil</label>
                            <select className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" name="language" id="language">
                                {languages.map(item => (
                                    <option key={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="name">Personel Adı ve Soyadı</label>
                            <input className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" name="name" id="name" placeholder="Personel Adı ve Soyadı" />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="name">E-posta</label>
                            <input className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="email" name="mail" id="mail" placeholder="E-Posta" />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="">Telefon</label>
                            <input className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="tel" name="mail" id="mail" placeholder="Telefon" />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="role">Rol</label>
                            <select className="border py-1.5 px-3 rounded-lg border-[#d9d9d9] cursor-pointer" name="role" id="role">
                                {roles.map(item => (
                                    <option key={item.key}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p className="text-[#6c757d]">Davet ettiğiniz kişiye e-posta ile bildirim gönderilecek.</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-sm text-white bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold" type="submit">Kaydet</button>
                        </div>
                    </form>
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
                    <div onClick={() => setAddShown(true)} className="bg-[#f1f1f1] text-[#4b4b4b] text-sm rounded-lg py-2 px-5 font-semibold cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
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