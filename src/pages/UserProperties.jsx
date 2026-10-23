import { Header } from "../components/Header"
import { PropertiesCard } from "../components/PropertiesCard"
import { Sidebar } from "../components/Sidebar"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { getUserProperties } from "../services/profileApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Pagination } from "../components/Pagination"
import { getCompanyInfo } from "../services/myCompanyApi"
import { getTranslation } from "../services/translation"

export function UserProperties({ loged , locale, setLocale }) {

    const [page, setPage] = useState(1)

    const [userProperties, setUserProperties] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        getUserProperties(page).then(setUserProperties).finally(() => setLoaded(true))
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
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.my_account} {">"}</span><span className="text-[#9a9898]"> {translation?.data?.business?.my_properties}</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse max-[992px]:gap-5">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar translation={translation} page="properties" info={info} user={user} />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <h2 className="text-[32px] text-[#212529] font-medium mb-2">{translation?.data?.business?.my_properties}</h2>
                        <div>
                            {userProperties?.data?.map(item => (
                                <PropertiesCard
                                    key={item.id}
                                    page="myProperties"
                                    id={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                    price={item.price.formatted}
                                    company={item.company.title}
                                    type={item.type.title}
                                    city={item.city.title}
                                    district={item.district.title}
                                    status={item.status}
                                    translation={translation}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-center">
                    <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                        {userProperties?.pagination?.pagination_text}
                    </p>
                    <Pagination
                        pagination={userProperties?.pagination}
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