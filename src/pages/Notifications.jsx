import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Notification } from "../components/Notification"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { getAllNotifications } from "../services/notificationsApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Pagination } from "../components/Pagination"
import { getCompanyInfo } from "../services/myCompanyApi"
import { getTranslation } from "../services/translation"

export function Notifications({ loged , locale, setLocale }) {

    const [page, setPage] = useState(1)

    const [notifications, setNotifications] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false)
        getAllNotifications(page).then(setNotifications).finally(() => setLoaded(true))
    }, [page])

    const [info, setInfo] = useState([]);

    useEffect(() => {
        getCompanyInfo().then(setInfo).finally(() => setLoaded(true))
    }, [])

    const [user, setUser] = useState([]);

    useEffect(() => {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const parsedUser = JSON.parse(userInfo);
            setUser(parsedUser);
        }
    }, [])

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    return (
        <div className='flex flex-col items-center font-sf'>
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.my_account}</span> {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.my_notifications}</span> </p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse max-[992px]:gap-5">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar translation={translation} page="notifications" user={user} info={info} />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <h2 className="text-[32px] text-[#212529] mb-2">{translation?.data?.business?.notifications}</h2>
                        <div>
                            {notifications?.data?.notifications.map(item => (
                                <Notification key={item.id} id={item.id} content={item.content} time={item.time_diff} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-center">
                    <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                        {notifications?.pagination?.pagination_text}
                    </p>
                    <Pagination
                        pagination={notifications?.pagination}
                        onPageChange={setPage}
                    />
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks translation={translation} />
                </div>
            </div>
            <div className='w-full'>
                <Footer translation={translation} loged={loged} />
            </div>
        </div>
    )
}