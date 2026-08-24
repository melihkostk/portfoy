import { Header } from "../components/Header"
import search from "../assets/search.png"
import { VideoCard } from "../components/VideoCard"
import { Questions } from "../components/Questions"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Support() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Yardım & Destek</span></p>
                </div>
            </div>
            <div className="w-full bg-[linear-gradient(70deg,#27C5D2,#048B99)] flex items-center justify-center py-10 mb-10">
                <div className="flex flex-col items-center justify-center w-full max-w-[80%]">
                    <h2 className="text-white text-[32px] font-medium">Nasıl yardımcı olabiliriz?</h2>
                    <div className="w-[60%] relative mb-2.5 bg-[#FFFFFF33] shadow-[0_0_120px_#FFFFFF80]">
                        <input className="w-full border border-white bg-transparent text-white rounded-lg p-2.5 placeholder:text-white" type="text" placeholder="Yardımda arayın" name="q"></input>
                        <button className="w-9 h-9 bg-[#FFFFFF4D] rounded-lg absolute right-1.5 top-1.5 flex items-center justify-center">
                            <img className="w-6 h-6" src={search} alt="" />
                        </button>
                    </div>
                    <div className="flex items-center gap-5">
                        <a className="text-white text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            #Firma Başvurusu
                        </a>
                        <a className="text-white text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            #Abonelik Yönetimi
                        </a>
                        <a className="text-white text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            #İlanlar
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-350 mb-5">
                <div>
                    <div>
                        <h2 className="text-[32px] text-[#212529] mb-2">Videolar</h2>
                        <p className="mb-4 text-[#212529]">Uygulamalarla nasıl yapıldığını öğrenin</p>
                    </div>
                    <div className="flex -mx-3.75">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-350">
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="text-[32px] text-[#212529] mb-2">Sıkça Sorulan Sorular</h2>
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
            <div className='w-full mt-30 mb-30'>
                <div className='w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}