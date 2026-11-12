import { Header } from "../components/Header"
import search from "../assets/search.png"
import { VideoCard } from "../components/VideoCard"
import { Questions } from "../components/Questions"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { ClipLoader } from "react-spinners"
import { useAppContext } from "../context/AppContext"
import { Link, useSearchParams } from "react-router-dom"
import { getArticles } from "../services/articlesApi"
import { useEffect } from "react"
import { useState } from "react"

export function Support() {

    const { translation, translationLoaded, locale } = useAppContext();

    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');

    const [news, setNews] = useState([]);

    useEffect(() => {
        if (q) {
            getArticles(locale).then(setNews);
        }
    }, [q, locale])

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
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out" to={"/"}>{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-[#9a9898] text-sm font-semibold">{translation?.data?.business?.support}</Link>
                </div>
            </div>
            <div className="w-full bg-[linear-gradient(70deg,#27C5D2,#048B99)] flex items-center justify-center py-10 mb-10">
                <div className="flex flex-col items-center justify-center w-full max-w-[90%]">
                    <h2 className="text-white text-[32px] font-semibold">{translation?.data?.business?.how_we_can_help_you}</h2>
                    <form action={"/support"} method="GET" className="w-[60%] max-[992px]:w-full relative mb-2.5 bg-[#FFFFFF33] shadow-[0_0_120px_#FFFFFF80]">
                        <input className="w-full border border-white bg-transparent text-white rounded-lg p-2.5 placeholder:text-white focus:outline-none" type="text" placeholder={translation?.data?.business?.search_on_faqs_and_videos} name="q"></input>
                        <button aria-label="search" className="w-9 h-9 bg-[#FFFFFF4D] rounded-lg absolute cursor-pointer right-1.5 top-1.5 flex items-center justify-center">
                            <img className="w-6 h-6" src={search} alt="" />
                        </button>
                    </form>
                    <div className="flex items-center gap-5">
                        <a href={`/support?q=${translation?.data?.business?.company_application}`} className="text-white text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            #{translation?.data?.business?.company_application}
                        </a>
                        <a href={`/support?q=${translation?.data?.business?.company_subscription}`} className="text-white text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            #{translation?.data?.business?.company_subscription}
                        </a>
                        <a href={`/support?q=${translation?.data?.business?.properties}`} className="text-white text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            #{translation?.data?.business?.properties}
                        </a>
                    </div>
                </div>
            </div>
            {!q ?
                <>
                    <div className="w-full max-w-[90%] mb-5">
                        <div>
                            <div>
                                <h2 className="text-[32px] text-[#212529] mb-2 font-semibold">{translation?.data?.business?.videos}</h2>
                                <p className="mb-4 text-[#212529] font-semibold">{translation?.data?.business?.support_videos_description}</p>
                            </div>
                            <div className="flex justify-between -mx-3.75 flex-wrap">
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[90%]">
                        <div className="flex flex-col items-center justify-center w-full">
                            <h2 className="text-[32px] font-semibold text-[#212529] mb-2">{translation?.data?.business?.faqs_section_header}</h2>
                            <div className="w-full">
                                <Questions question="Port-foy.com’a üye olabilmem için firma sahibi olmam gerekli mi?" answer="Platforma üye olmak için vergi levhası sahibi olmanız gerekmektedir. Eğer freelancer çalışan iseniz üye firmanın bünyesinde çalışabilirsiniz. Vergi levhasız başvurular kabul edilmeyecektir." />
                                <Questions question="Port-foy.com’a kimler üye olabilir?" answer="Üyelik için öncelikle vergi levhası gerekmekte. Sadece Emlak firmaları, İnşaat firmaları ve pazarlama firmaları platforma üye olabilir. Araba kiralama firmaları, Seyahat acentaları ve benzeri firmalar üye olamazlar." />
                                <Questions question="Port-foy.com’dan hangi paketi almalıyım?" answer="Fiyatlandırma sayfasında sizler için detaylı fiyat bilgisi paylaşıyoruz. Firmanızın tipine göre paketlerden faydalanabilirsiniz. Ayrıca Deneme sürümü kullanabileceğinizi unutmayın." />
                                <Questions question="Port-foy.com’dan  üyelik aldıktan sonra kurlumu nasıl yapabilirim?" answer="Üyelik sonrası aşamalar oldukça kolay. Ekibinizi oluşturun – Ürünlerini yükleyin ve kullanıma başlayın. Dilerseniz sayfamızda eğitim videoları içerisinde ilgili konunun videosunu izleyerek yardım alabilirsiniz." />
                                <Questions question="Port-Foy’ü sadece bilgisayarda mı kullanabilirim?" answer="Port-Foy platformunu bilgisayarlarda ve akıllı telefonların her türünde tam anlamıyla kullanabilirsiniz." />
                                <Questions question="Port-foy.com’a yüklediğim ürünler kimler tarafından görüntülenebilir?" answer="Port-foy.com platformuna yüklediğiniz ürünler, tüm üye firmalar tarafından görüntülenebilir. Ancak, aylık portföy güncellemelerinizi yapmadığınız takdirde, ürünleriniz pasif duruma gelir ve görüntülenemez. Bu durumda yalnızca kendi firma çalışanlarınız ürünlerinizi görebilir." />
                                <Questions question="Platformdaki tüm bilgiler herkes tarafından görülecek mi?" answer="Dilerseniz başka firmaların sizin bilgileriniz erişimini düzenleyebilirsiniz. Ayrıca personelinizin erişim yetkilerini düzenleyebilir ve planlayabilirsiniz." />
                                <Questions question="Port-Foy’de mişterime sunum yapmak için müşterimi programa girmem gerekiyor mu?" answer="Sunum hazırlama ve göndermek için müşterinizin adını – mailini – telefon numarasının bir kısmını girmeniz gerekmekte. Bu bilgileri sadece siz görebilirsiniz. Ayrıca bu bilgileri doğru olarak girerseniz gönderdiğiniz ürünler o müşteri için giriş yapılmış olur." />
                                <Questions question="Sadece kendi bölgemdeki gayrimenkullere mi erişimim var?" answer="Port-foy.com’um kuruluş amaçlarından birisi de bu. Türkiye’nin neresinde olursanız olun Port-foy.com üyelerinin girmiş olduğu tüm ürünleri görebilirsiniz. Satıcıları ile iletişim kurabilirsiniz. Platform üzerinden teklif verebilirsiniz." />
                                <Questions question="Port-foy.com’a eklediğimiz ürünleri potansiyel müşteriler görebilecek mi?" answer="2025 yılı itibariyle wowiest.com sayfasında ürünleriniz yer alacak. Port-foy.com’daki tüm değişiklikler ve güncellemeler bu sayfada anlık değişecek. wowiest.com üzerinden müşteriler satış fiyatları ile ürünlerinizi görmeye başlayacak. Potansiyel müşteriler temas kurmak istediklerinde doğrudan satıcı ile temas edebilecek.   " />
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="w-1/2 max-[992px]:w-full max-[992px]:max-w-[90%]">
                    <div className="flex items-center justify-between mb-7.5  flex-wrap-reverse">
                        <h2 className="text-[#212529] text-[32px] font-semibold">{translation?.data?.business?.support_title_with_q.replace(":q", q)}</h2>
                        <a className="text-black text-base font-medium opacity-70 hover:text-[#27c5d2] hover:opacity-100 transition-[colors , opacity] duration-300 ease-in-out" href="/support">{translation?.data?.business?.back_to_support}</a>
                    </div>
                    <div>
                        <h2 className="text-[#212529] text-[28px] mb-2 font-medium">{translation?.data?.business?.articles}</h2>
                        {news.filter(item => item.title.toLowerCase().includes(q)).length > 0 ?
                            news.filter(item => item.title.toLowerCase().includes(q)).map(item => (
                                <div className="pb-2.5 mb-2.5 border-b border-b-[#eee]" key={item.id}>
                                    <p className="text-lg text-[#212529] font-semibold">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-black opacity-60 font-medium">
                                        {item.slug}
                                    </p>
                                    <div className="mt-1.25">
                                        <Link to={`/articles/${item.id}`} className="uppercase text-black mt-1.25 font-semibold hover:text-[#27c5d2] transition-colors duration-300 ease-in-out">{translation?.data?.business?.read_more}</Link>
                                    </div>
                                </div>
                            ))
                            :
                            <div className="p-4 rounded-lg bg-[#fff3cd] text-[#664d03] border border-[#ffecb5]">
                                {translation?.data?.business?.no_records}
                            </div>
                    }
                    </div>
                </div>
            }
            <div className='w-full mt-30 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}