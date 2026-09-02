import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { useEffect, useState } from "react";
import { showArticle } from "../services/articlesApi";
import { NewsCard } from "../components/NewsCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function NewsDetail({ loged, news }) {

    const { id } = useParams();

    const [article, setArticle] = useState([])

    useEffect(() => {
        showArticle(id).then(setArticle)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Haberler</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="w-full">
                    <img src={article.cover} alt="cover" />
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start">
                    <div className="flex flex-col bg-white gap-7.5 w-[30%] border border-[#eee] rounded-lg p-3.75">
                        <div className="bg-[#eaeaea] text-[#808080] text-center py-2.5 rounded-lg">Diğer Haberler</div>
                        {news.map(item => (
                            <NewsCard page="detail" key={item.id} title={item.title} cover={item.cover} body={item.body} created={item.created_at} id={item.id} />
                        ))}
                    </div>
                    <div className="w-[70%] pl-12.5">
                        <div>
                            <h1>{article.title}</h1>
                            <p>{article.created_at}</p>
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