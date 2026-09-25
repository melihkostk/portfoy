import { useEffect, useState } from "react";
import { CompanyHeader } from "../components/CompanyHeader"
import { CountCard } from "../components/CountCard"
import { Header } from "../components/Header"
import { ScoreCard } from "../components/ScoreCard"
import { getCount, getSummaryProperties } from "../services/summaryApi";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { BarChart } from "../components/BarChart";
import { DoughnutChart } from "../components/DoughnutChart";
import { LineChart } from "../components/LineChart";
import { SummaryCard } from "../components/SummaryCard";
import { ClipLoader } from "react-spinners";

export function Summary({ loged }) {

    const [counts, setCounts] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getCount().then(setCounts).finally(() => setLoaded(true))
    }, [])

    const [summaryProperties, setSummaryProperties] = useState([]);

    useEffect(() => {
        getSummaryProperties().then(setSummaryProperties)
    }, [])

    const [viewOptions, setViewOptions] = useState(false)

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
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm {">"}</span><span className="text-[#9a9898]"> Firma Özeti</span></p>
                </div>
            </div>
            <CompanyHeader
                page="summary"
                name={counts?.data?.name}
                code={counts?.data?.code}
                created_at={counts?.data?.created_at}
                type={counts?.data?.type}
                logo={counts?.data?.logo}
            />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex items-center max-[992px]:flex-col">
                    <div className="max-[992px]:w-full">
                        <ScoreCard />
                    </div>
                    <div className="flex pl-2.5 max-[992px]:pl-0 w-full max-[992px]:justify-between flex-wrap">
                        {counts?.data?.summary?.counts?.map(item => (
                            <CountCard key={item.title} title={item.title} value={item.value} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full py-7.5 my-7.5 bg-[#F7F6FB] flex items-center justify-center">
                <div className="w-full max-w-[90%]">
                    <div className="flex justify-between max-[992px]:flex-col">
                        <DoughnutChart types={counts?.data?.summary?.graphs?.types} />
                        <BarChart review={counts?.data?.summary?.graphs?.review} />
                        <LineChart visits={counts?.data?.summary?.graphs?.visits} />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="mb-7.5 flex items-center justify-between flex-wrap">
                    <h2 className="text-[25px] text-[#212529]">İlanlar</h2>
                    <div className="relative">
                        <div className="bg-[#f1f1f1] cursor-pointer select-none hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out text-sm text-[#4b4b4b] rounded-lg py-2 px-5 font-semibold" onClick={() => setViewOptions(prev => !prev)}>
                            Görüntüleme Seçenekleri
                        </div>
                        {viewOptions && <div className="bg-white absolute rounded-b-lg w-full shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="id" name="id" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="id">#</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="number" name="number" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="number">İlan Numarası</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="user" name="user" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="">Oluşturan Kullanıcı</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="status" name="status" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="status">Durum</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="title" name="title" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="title">Başlık</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="category" name="category" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="category">Kategori</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="location" name="location" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="location">Konum</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="price" name="price" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="price">Satış Fiyatı</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="view" name="view" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="view">Görüntülenme</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="fav" name="fav" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="fav">Favori</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="offer" name="offer" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="offer">Teklifler</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="score" name="score" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="score">Değerlendirme</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="created_at" name="created_at" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="created_at">Oluşturma Tarihi</label>
                            </div>
                            <div className="px-2.5 py-1.25 flex items-center gap-2.5">
                                <input id="updated_at" name="updated_at" type="checkbox" />
                                <label className="text-sm cursor-pointer flex-1 font-semibold select-none" htmlFor="updated_at">Güncellenme Tarihi</label>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="overflow-auto scrollbar-thumb-[#27C5D2]">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">#</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">İlan Numarası</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturan Kullanıcı</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Durum</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Başlık</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Kategori</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Konum</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Satış Fiyatı</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Görüntülenme</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Favori</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Teklifler</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Değerlendirme</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Oluşturma Tarihi</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-r-lg whitespace-nowrap">Güncellenme Tarihi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {summaryProperties.map((item , index) => (
                                <SummaryCard
                                    key={item.id}
                                    id={item.id}
                                    no={item.no}
                                    status={item.status.title}
                                    title={item.title}
                                    creator={item.creator}
                                    type={item.type}
                                    location={item.location}
                                    price={item.price}
                                    views={item.views}
                                    favorites={item.favorites}
                                    proposals={item.proposals}
                                    score={item.score.avg}
                                    created_at={item.created_at}
                                    updated_at={item.updated_at}
                                    index={index}
                                />
                            ))}
                        </tbody>
                    </table>
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