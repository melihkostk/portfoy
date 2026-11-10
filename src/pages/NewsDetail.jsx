import { Link, useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { useEffect, useState } from "react";
import { getArticles, showArticle } from "../services/articlesApi";
import { NewsCard } from "../components/NewsCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { ClipLoader } from "react-spinners";
import news1 from "../assets/news1.jpeg"
import grayCalendar from "../assets/gray-calendar.png"
import { useAppContext } from "../context/AppContext";

export function NewsDetail() {

    const { translation, translationLoaded , locale} = useAppContext();

    const { id } = useParams();

    const [article, setArticle] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        showArticle(id).then(setArticle).finally(() => setLoaded(true))
    }, [id])

    const [news, setNews] = useState([])

    useEffect(() => {
        getArticles(locale).then(setNews)
    }, [locale])

    return (
        <div className='flex flex-col items-center font-sf'>
            {(!loaded || !translationLoaded) && (
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
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link to={"/articles"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.articles}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-sm text-[#9a9898] font-semibold">{article?.title}</Link>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="w-full">
                    <img className="rounded-lg" src={news1} alt="cover" />
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="flex flex-col bg-white gap-7.5 w-[22%] max-[992px]:w-full max-[992px]:mt-7.5 border border-[#eee] rounded-lg p-3.75">
                        <div className="bg-[#eaeaea] text-[#808080] text-center py-2.5 rounded-lg">{translation?.data?.business?.other_articles}</div>
                        {news.filter(item => item.id != id).slice(0, 3).map(item => (
                            <NewsCard page="detail" key={item.id} title={item.title} cover={item.cover} body={item.body} created={item.created_at} id={item.id} />
                        ))}
                    </div>
                    <div className="w-[78%] pl-12.5 max-[992px]:pl-0">
                        <div>
                            <h1 className="text-[25px] text-[#212529] font-semibold">{article.title}</h1>
                            <div className="flex items-center gap-2 mb-4">
                                <img className="w-4 h-4" src={grayCalendar} alt="" />
                                <p className="text-[#848484] text-sm font-medium">{article.created_at}</p>
                            </div>
                        </div>
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{
                                __html: article.body,
                            }}
                        />
                    </div>
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