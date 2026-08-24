import { Header } from "../components/Header"
import { Questions } from "../components/Questions"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Faqs() {
    return (
        <div className="w-full flex flex-col items-center font-sf">
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Sıkça Sorulan Sorular</span></p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-30">
                <div className="w-full max-w-350">
                    <div className="text-center flex flex-col items-center mb-15">
                        <h1 className="text-[34px] text-[#212529] font-medium mb-2.5">Sıkça Sorulan Sorular</h1>
                        <p className="text-[#525252] max-w-[40%]">
                            Port-foy.com kullanımı kolay bir platformdur.
                            Size istihdam ekonomisi ve hız kazandıracak şekilde planlanmıştır.
                            Sorularınız için bizlere her türlü platformdan ulaşabileceğinizi bilmenizi isteriz.
                        </p>
                    </div>
                    <div>
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