import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { FilterCard } from "../components/FilterCard"
import { deleteQuickFilters, getQuickFilters } from "../services/quickFiltersApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"

export function QuickFilters({ loged }) {

    const [quickFilters, setQuickFilters] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getQuickFilters().then(setQuickFilters).finally(() => setLoaded(true))
    }, [])

    function handleDelete(id) {
        deleteQuickFilters(id).then(data => {
            if(data.status === "error"){
                return
            }
            setLoaded(false)
            getQuickFilters().then(setQuickFilters).finally(() => setLoaded(true))
        })
    }

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
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar page="quickFilters" />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <h2 className="text-[32px] text-[#212529] font-medium mb-2">Hızlı Filtreler</h2>
                        <div className="overflow-auto scrollbar-thumb-[#27C5D2]">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">Başlık</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Bildirim</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                                        <th className="text-end bg-[#ececec] py-4 px-2.5 rounded-r-lg whitespace-nowrap">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quickFilters?.map(item => (
                                        <FilterCard
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            created_at={item.created_at}
                                            notify={item.notify}
                                            handleDelete={handleDelete}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
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