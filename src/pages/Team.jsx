import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { TeamCard } from "../components/TeamCard"
import { UserInvite } from "../components/UserInvite"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { getTeam, getAllInvitations, removeInvite, getAllRoles, addInvite, toogleStatus, updateTeamMember, updateInvite } from "../services/myCompanyApi"
import { ClipLoader } from "react-spinners"
import mark from "../assets/mark.png"
import close from "../assets/blue-close.png"
import { SuccessPopUp } from "../components/SuccessPopup"

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

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        getAllRoles().then(setRoles)
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [role, setRole] = useState("")
    const [code, setCode] = useState("")

    function handleDelete(id) {
        removeInvite(id).then((data) => {
            if (data.status === "error") {
                setErrorPopUp(true)
                setError(data.message)
                return
            }
            getAllInvitations().then(setInvitations)
            setSuccessPopUp(true)
            setError("Davetiye kodu başarıyla silindi")
        })
    }

    function handleAdd(e) {
        e.preventDefault()
        addInvite(name, email, role, "tr", number, code).then((data) => {
            if (data.status === "error") {
                setAddShown(false)
                setErrorPopUp(true)
                setError(data.message)
            }
            getAllInvitations().then(setInvitations)
            setSuccessPopUp(true)
            setAddShown(false)
            setError("Davetiye kodu başarıyla oluşturuldu")
        })
    }

    function handleToggleStatus(id) {
        toogleStatus(id)
        getTeam().then(setTeam).finally(() => setLoaded(true))
    }

    const [inviteEditShown, setInviteEditShown] = useState(false)

    const [inviteEditId, setInviteEditId] = useState(null)
    const [inviteEditName, setInviteEditName] = useState("")
    const [inviteEditEmail, setInviteEditEmail] = useState("")
    const [inviteEditNumber, setInviteEditNumber] = useState("")
    const [inviteEditRole, setInviteEditRole] = useState("")
    const [inviteEditCode, setInviteEditCode] = useState("")

    function handleInviteEditClick(item) {
        setInviteEditId(item.id)
        setInviteEditName(item.name)
        setInviteEditEmail(item.email)
        setInviteEditNumber(item.phone?.number)
        setInviteEditCode(item.phone?.code)
        setInviteEditRole(item.role?.key)
        setInviteEditShown(true)
    }

    function handleUpdateInvite(e) {
        e.preventDefault()
        updateInvite(inviteEditId, inviteEditName, inviteEditEmail, inviteEditRole, "tr", inviteEditNumber, inviteEditCode).then((data) => {
            if (data.status === "error") {
                setInviteEditShown(false)
                setErrorPopUp(true)
                setError(data.message)
                return
            }
            getAllInvitations().then(setInvitations)
            setSuccessPopUp(true)
            setInviteEditShown(false)
            setError("Davetiye kodu başarıyla güncellendi")
        })
    }

    const [editShown, setEditShown] = useState(false)

    const [editId, setEditId] = useState(null)
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editNumber, setEditNumber] = useState("")
    const [editRole, setEditRole] = useState("")
    const [editCode, setEditCode] = useState("")

    function handleEditClick(item) {
        setEditId(item.id)
        setEditName(item.name)
        setEditEmail(item.contacts.email)
        setEditNumber(item.contacts.phone.number)
        setEditCode(item.contacts.phone.code)
        setEditRole(item.roles[0].key)
        setEditShown(true)
    }

    function handleEdit(e) {
        e.preventDefault()
        updateTeamMember(editId, editName, editEmail, editRole, "tr", editNumber, editCode).then((data) => {
            if (data.status === "error") {
                setEditShown(false)
                setErrorPopUp(true)
                setError(data.message)
                return
            }
            getTeam().then(setTeam).finally(() => setLoaded(true))
            setSuccessPopUp(true)
            setEditShown(false)
            setError("Personel bilgileri başarıyla güncellendi")
        })
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            {(errorPopUp || addShown || editShown || inviteEditShown) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
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
                    <form onSubmit={handleAdd} className="w-full">
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="name">Personel Adı ve Soyadı</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" name="name" id="name" placeholder="Personel Adı ve Soyadı" required />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="name">E-posta</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="email" name="mail" id="mail" placeholder="E-Posta" required />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="phone">Telefon</label>
                            <div className="flex gap-3.75">
                                <select className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" value={code} onChange={(e) => setCode(e.target.value)} name="" id="">
                                    <option value="90">(90)</option>
                                    <option value="357">(357)</option>
                                    <option value="971">(971)</option>
                                    <option value="357">(357)</option>
                                    <option value="01">(01)</option>
                                </select>
                                <input value={number} onChange={(e) => setNumber(e.target.value)} className="border py-1.5 px-3 rounded-lg w-full border-[#d9d9d9]" type="tel" name="phone" id="phone" placeholder="Telefon" required />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="role">Rol</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} required className="border py-1.5 px-3 rounded-lg border-[#d9d9d9] cursor-pointer" name="role" id="role">
                                {roles.map(item => (
                                    <option value={item.key} key={item.key}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p className="text-[#6c757d]">Davet ettiğiniz kişiye e-posta ile bildirim gönderilecek.</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-sm text-white cursor-pointer bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>}
            {editShown && <div className="fixed top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[35%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Personeli Düzenle</h2>
                    <img onClick={() => setEditShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <form onSubmit={handleEdit} className="w-full">
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editName">Personel Adı ve Soyadı</label>
                            <input value={editName} onChange={(e) => setEditName(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" name="name" id="editName" placeholder="Personel Adı ve Soyadı" required />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editMail">E-posta</label>
                            <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="email" name="mail" id="editMail" placeholder="E-Posta" required />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editPhone">Telefon</label>
                            <div className="flex gap-3.75">
                                <select className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" value={editCode} onChange={(e) => setEditCode(e.target.value)} name="" id="">
                                    <option value="90">(90)</option>
                                    <option value="357">(357)</option>
                                    <option value="971">(971)</option>
                                    <option value="357">(357)</option>
                                    <option value="01">(01)</option>
                                </select>
                                <input value={editNumber} onChange={(e) => setEditNumber(e.target.value)} className="border py-1.5 px-3 rounded-lg w-full border-[#d9d9d9]" type="tel" name="phone" id="editPhone" placeholder="Telefon" required />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="editRole">Rol</label>
                            <select value={editRole} onChange={(e) => setEditRole(e.target.value)} required className="border py-1.5 px-3 rounded-lg border-[#d9d9d9] cursor-pointer" name="role" id="editRole">
                                {roles.map(item => (
                                    <option value={item.key} key={item.key}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-sm text-white cursor-pointer bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>}
            {inviteEditShown && <div className="fixed top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2  w-[35%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Davetiyeyi Düzenle</h2>
                    <img onClick={() => setInviteEditShown(false)} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    <form onSubmit={handleUpdateInvite} className="w-full">
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="inviteEditName">Personel Adı ve Soyadı</label>
                            <input value={inviteEditName} onChange={(e) => setInviteEditName(e.target.value)} className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" type="text" name="name" id="inviteEditName" placeholder="Personel Adı ve Soyadı" required />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="inviteEditMail">E-posta</label>
                            <input value={inviteEditEmail} disabled className="border py-1.5 px-3 rounded-lg border-[#d9d9d9] bg-[#f1f1f1] cursor-not-allowed text-[#6c757d]" type="email" name="mail" id="inviteEditMail" placeholder="E-Posta" />
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="inviteEditPhone">Telefon</label>
                            <div className="flex gap-3.75">
                                <select className="border py-1.5 px-3 rounded-lg border-[#d9d9d9]" value={inviteEditCode} onChange={(e) => setInviteEditCode(e.target.value)} name="" id="">
                                    <option value="90">(90)</option>
                                    <option value="357">(357)</option>
                                    <option value="971">(971)</option>
                                    <option value="357">(357)</option>
                                    <option value="01">(01)</option>
                                </select>
                                <input value={inviteEditNumber} onChange={(e) => setInviteEditNumber(e.target.value)} className="border py-1.5 px-3 rounded-lg w-full border-[#d9d9d9]" type="tel" name="phone" id="inviteEditPhone" placeholder="Telefon" required />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label htmlFor="inviteEditRole">Rol</label>
                            <select value={inviteEditRole} onChange={(e) => setInviteEditRole(e.target.value)} required className="border py-1.5 px-3 rounded-lg border-[#d9d9d9] cursor-pointer" name="role" id="inviteEditRole">
                                {roles.map(item => (
                                    <option value={item.key} key={item.key}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="text-sm text-white cursor-pointer bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>}
            {successPopUp && <SuccessPopUp error={error} setSuccessPopUp={setSuccessPopUp} />}
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
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
                            id={item.id}
                            name={item.name}
                            role={item.roles[0].title}
                            email={item.contacts.email}
                            phone={item.contacts.phone.number}
                            code={item.contacts.phone.code}
                            is_active={item.is_active}
                            avatar={item.avatar}
                            handleToggleStatus={handleToggleStatus}
                            onEditClick={() => handleEditClick(item)}
                        />
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
                                onEditClick={() => handleInviteEditClick(item)}
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