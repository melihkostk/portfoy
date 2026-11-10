import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { ClipLoader } from "react-spinners"
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../services/articlesApi";

export function News() {

    const { translation, translationLoaded , locale } = useAppContext();

    const [news, setNews] = useState([])
    
      useEffect(() => {
        getArticles(locale).then(setNews)
      }, [locale])

    return (
        <div className='flex flex-col items-center font-sf'>
            {!translationLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363]">{">"}</p>
                    <Link className="text-[#9a9898] text-sm font-semibold">{translation?.data?.business?.articles}</Link>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex flex-wrap -mx-5">
                    {news.map(item => (
                        <NewsCard key={item.id} title={item.title} cover={item.cover} body={item.body} created={item.created_at} id={item.id} />
                    ))}
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}