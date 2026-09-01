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

export function Summary({ loged }) {

    const [counts, setCounts] = useState([]);

    useEffect(() => {
        getCount().then(setCounts)
    }, [])

    const [summaryProperties, setSummaryProperties] = useState([]);

    useEffect(() => {
        getSummaryProperties().then(setSummaryProperties)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="customers" />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex items-center">
                    <div>
                        <ScoreCard />
                    </div>
                    <div className="flex pl-2.5 w-full flex-wrap">
                        {counts.map(item => (
                            <CountCard key={item.title} title={item.title} value={item.value} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full py-7.5 my-7.5 bg-[#F7F6FB] flex items-center justify-center">
                <div className="w-full max-w-[90%]">
                    <div className="flex justify-between">
                        <DoughnutChart />
                        <BarChart />
                        <LineChart />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="mb-7.5">
                    <h2 className="text-[25px] text-[#212529]">İlanlar</h2>
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
                            {summaryProperties.map(item => (
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