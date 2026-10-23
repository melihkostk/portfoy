import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { getTranslation } from "../services/translation";
import { ClipLoader } from "react-spinners"

export function News({ loged , news , locale, setLocale}) {

    const [translation , setTranslation] = useState([]);

    const [loaded, setLoaded] = useState(false);

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
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.articles}</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex flex-wrap -mx-5">
                    {news.map(item => (
                        <NewsCard translation={translation} key={item.id} title={item.title} cover={item.cover} body={item.body} created={item.created_at} id={item.id} />
                    ))}
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
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