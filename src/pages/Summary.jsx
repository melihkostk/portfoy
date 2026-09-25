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

    const [id , setID] = useState(true);
    const [number , setNumber] = useState(true);
    const [user , setUser] = useState(true)
    const [status , setStatus] = useState(true)
    const [title , setTitle] = useState(true)
    const [cate , setCate] = useState(true)
    const [location , setLocation] = useState(true)
    const [price , setPrice] = useState(true)
    const [view , setView] = useState(true)
    const [fav , setFav] = useState(true)
    const [offer , setOffer] = useState(true)
    const [score , setScore] = useState(true)
    const [created , setCreated] = useState(true)
    const [updated , setUpdated] = useState(true)

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
                                <input checked={id} onChange={(e) => setID(e.target.checked)} id="id" name="id" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${id ? "text-[#27c5d2]" : ""}`} htmlFor="id">#</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={number} onChange={(e) => setNumber(e.target.checked)} id="number" name="number" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${number ? "text-[#27c5d2]" : ""}`} htmlFor="number">İlan Numarası</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={user} onChange={(e) => setUser(e.target.checked)} id="user" name="user" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${user ? "text-[#27c5d2]" : ""}`} htmlFor="user">Oluşturan Kullanıcı</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={status} onChange={(e) => setStatus(e.target.checked)} id="status" name="status" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${status ? "text-[#27c5d2]" : ""}`} htmlFor="status">Durum</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={title} onChange={(e) => setTitle(e.target.checked)} id="title" name="title" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${title ? "text-[#27c5d2]" : ""}`} htmlFor="title">Başlık</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={cate} onChange={(e) => setCate(e.target.checked)} id="category" name="category" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${cate ? "text-[#27c5d2]" : ""}`} htmlFor="category">Kategori</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={location} onChange={(e) => setLocation(e.target.checked)} id="location" name="location" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${location ? "text-[#27c5d2]" : ""}`} htmlFor="location">Konum</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={price} onChange={(e) => setPrice(e.target.checked)} id="price" name="price" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${price ? "text-[#27c5d2]" : ""}`} htmlFor="price">Satış Fiyatı</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={view} onChange={(e) => setView(e.target.checked)} id="view" name="view" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${view ? "text-[#27c5d2]" : ""}`} htmlFor="view">Görüntülenme</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={fav} onChange={(e) => setFav(e.target.checked)} id="fav" name="fav" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${fav ? "text-[#27c5d2]" : ""}`} htmlFor="fav">Favori</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={offer} onChange={(e) => setOffer(e.target.checked)} id="offer" name="offer" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${offer ? "text-[#27c5d2]" : ""}`} htmlFor="offer">Teklifler</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 mt-1 flex items-center gap-2.5">
                                <input checked={score} onChange={(e) => setScore(e.target.checked)} id="score" name="score" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${score ? "text-[#27c5d2]" : ""}`} htmlFor="score">Değerlendirme</label>
                            </div>
                            <div className="border-b border-b-[#f8f8f8] px-2.5 py-1.25 flex mt-1 items-center gap-2.5">
                                <input checked={created} onChange={(e) => setCreated(e.target.checked)} id="created_at" name="created_at" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${created ? "text-[#27c5d2]" : ""}`} htmlFor="created_at">Oluşturma Tarihi</label>
                            </div>
                            <div className="px-2.5 py-1.25 flex items-center gap-2.5 mt-1">
                                <input checked={updated} onChange={(e) => setUpdated(e.target.checked)} id="updated_at" name="updated_at" type="checkbox" />
                                <label className={`text-sm cursor-pointer flex-1 font-semibold select-none ${updated ? "text-[#27c5d2]" : ""}`} htmlFor="updated_at">Güncellenme Tarihi</label>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="overflow-auto scrollbar-thumb-[#27C5D2]">
                    <table className="w-full">
                        <thead>
                            <tr>
                                {id && <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">#</th>}
                                {number && <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">İlan Numarası</th>}
                                {user && <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturan Kullanıcı</th>}
                                {status && <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Durum</th>}
                                {title && <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Başlık</th>}
                                {cate && <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Kategori</th>}
                                {location && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Konum</th>}
                                {price && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Satış Fiyatı</th>}
                                {view && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Görüntülenme</th>}
                                {fav && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Favori</th>}
                                {offer && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Teklifler</th>}
                                {score && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Değerlendirme</th>}
                                {created && <th className="text-start bg-[#ececec] py-4 px-2.5  whitespace-nowrap">Oluşturma Tarihi</th>}
                                {updated && <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-r-lg whitespace-nowrap">Güncellenme Tarihi</th>}
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
                                    showId={id}
                                    showNo={number}
                                    showCreator={user}
                                    showStatus={status}
                                    showTitle={title}
                                    showType={cate}
                                    showLocation={location}
                                    showPrice={price}
                                    showViews={view}
                                    showFavorites={fav}
                                    showProposals={offer}
                                    showScore={score}
                                    showCreatedAt={created}
                                    showUpdatedAt={updated}
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