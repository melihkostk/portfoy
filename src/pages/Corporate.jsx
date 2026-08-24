import { Header } from "../components/Header";
import corporate from "../assets/corporate.png"
import { CorporateCard } from "../components/CorporateCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import mission from "../assets/mission.png"
import vision from "../assets/vision.png"
import about from "../assets/about.png"

export function Corporate() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Kurumsal</span></p>
                </div>
            </div>
            <div className="w-full max-w-350">
                <div>
                    <img src={corporate} alt="" />
                </div>
            </div>
            <div className="w-full max-w-350">
                <div className="flex flex-col items-center w-full max-w-[70%] bg-white -mt-20 mb-30 mx-auto rounded-lg p-12.5 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                    <h1 className="mb-7.5 text-[25px] text-[#212529] font-medium text-center">Port-foy.com - Sizler İçin Çözüm Üretiyoruz</h1>
                    <p className="text-center mb-7.5 text-sm text-[#212529] opacity-70 max-w-[70%] font-medium">
                        Port-foy.com olarak, gayrimenkul sektöründe faaliyet gösteren profesyonellere
                        işlerini kolaylaştıracak ve geniş kitlelere ulaşmalarını sağlayacak yenilikçi çözümler sunuyoruz.
                        Ürünlerinizi güncel tutmak, müşteri yorumlarını takip etmek ve en doğru gayrimenkul seçeneklerini
                        sunmak artık çok daha kolay.
                    </p>
                    <p className="text-center mb-7.5 text-sm text-[#212529] opacity-70 max-w-[70%] font-medium">
                        Platformumuz, gayrimenkul profesyonellerine hızlı, güvenilir ve kullanıcı dostu bir deneyim
                        sunarak iş süreçlerini optimize eder. Port-foy.com ile, yalnızca belirli bir bölgeyle sınırlı
                        kalmadan geniş bir coğrafi alanda etkili olmanızı sağlıyoruz.
                    </p>
                    <p className="text-center mb-7.5 text-sm text-[#212529] opacity-70 max-w-[70%] font-medium">
                        Sizler için çözüm üretiyoruz; müşterilerinize en doğru gayrimenkul seçeneklerini sunmanız için
                        buradayız. Port-foy.com, güncel bilgiye kolay erişim, hızlı teklif oluşturma ve müşteri memnuniyetini
                        artırma konularında size destek olur. Hayalinizdeki gayrimenkul çözümlerine Port-foy.com ile ulaşın.
                    </p>
                    <div className="w-full flex items-center justify-center gap-5 mt-8">
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="#Hakkımızda">Hakkımızda</a>
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="#Misyon">Misyon</a>
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="#Vizyon">Vizyon</a>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-350 py-30">
                <CorporateCard
                    title="Hakkımızda"
                    location="left"
                    img={about}
                    p1="Port-foy.com, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak ve geniş kitlelere ulaşmalarını sağlamak amacıyla Order Teknoloji tarafından projelendirilmiştir. Yenilikçi ve kullanıcı dostu yapısıyla, gayrimenkul ürünlerinin etkili bir şekilde paylaşılmasını ve yönetilmesini sağlar."
                    p2="Platformumuz, kullanıcıların güncel emlak bilgilerine hızlı ve kolay bir şekilde erişim sağlamalarına yardımcı olur. Port-foy.com üzerinden yüklediğiniz gayrimenkul ürünleri, sistemimize üye olan tüm kullanıcılar tarafından görüntülenebilir ve değerlendirmeye alınabilir. Bu sayede, sahip olduğunuz veya satış yetkisi aldığınız ürünlerin kimler tarafından incelendiğini ve hangi özelliklerinin beğenildiğini veya eleştirildiğini öğrenebilirsiniz."
                    p3="Port-foy.com, bölgenizdeki tüm emlakçılar ve inşaat firmalarının güncel ürün bilgilerine anlık olarak ulaşmanızı mümkün kılar. Emlak satış personelinin müşteri taleplerine en kısa sürede ve en doğru şekilde cevap verebilmesi için tasarlanmış olan platformumuz, telefon aramaları veya drive linkleri arasında kaybolma derdine son verir. Güncel olmayan ürünler otomatik olarak pasif duruma geçer ve yanlış bilgi iletme riskini ortadan kaldırır."
                    p4="Farklı şehirlerde gayrimenkul arayan müşterilerinize de hızlı ve güvenilir çözümler sunmanızı sağlıyoruz. Port-foy.com üzerinden belirlediğiniz kriterlere göre en uygun gayrimenkul seçeneklerini hızlı bir şekilde filtreleyebilir ve müşterinize sunabilirsiniz. Ayrıca, müşteri yorumlarını takip ederek pazarlama planlarınızı ve ürünlerinizi sürekli olarak geliştirebilirsiniz."
                    p5="Port-foy.com, emlak firmalarının geniş coğrafi alanlarda etkin olmasını sağlarken, akıllı hatırlatmalar ve performans takibi ile iş süreçlerinizi optimize eder. Ekibinizin performansını kontrol edebilir ve ilanlarınızın güncel kalmasını sağlayabilirsiniz."
                    p6="Order Teknoloji'nin bilgi birikimi ve deneyimiyle geliştirilen Port-foy.com, gayrimenkul sektöründe fark yaratmanızı ve başarıya ulaşmanızı sağlar. Sizler için çözüm üretiyoruz. Port-foy.com ile hayalinizdeki gayrimenkul çözümlerine ulaşmak artık çok daha kolay ve zahmetsiz."

                />
            </div>
            <div className="w-full bg-[#F7F6FB] flex justify-center">
                <div className="w-full max-w-350 py-30">
                    <CorporateCard
                        title="Misyon"
                        location="right"
                        img={mission}
                        p1="Port-foy.com olarak misyonumuz, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak ve geniş kitlelere ulaşmalarını sağlamaktır. Yenilikçi teknolojilerimiz ve kullanıcı dostu platformumuzla, emlak acenteleri ve inşaat firmalarının gayrimenkul ürünlerini etkili bir şekilde yönetmelerini ve pazarlamalarını destekliyoruz."
                        p2="Müşterilerimizin ihtiyaçlarını anlamak ve onlara en uygun çözümleri sunmak öncelikli hedefimizdir. Port-Foy.com üzerinden sağladığımız güncel ve doğru bilgilerle, kullanıcılarımızın zamanını ve kaynaklarını verimli bir şekilde yönetmelerini sağlıyoruz. Her adımda kaliteyi ve müşteri memnuniyetini ön planda tutarak, sektörde öncü bir rol oynamayı hedefliyoruz."
                        p3="Amacımız, emlak sektöründeki dijital dönüşümü liderlik ederek, kullanıcılarımızın iş süreçlerini kolaylaştırmak ve verimliliklerini artırmak için teknolojik çözümler sunmaktır. Sektördeki en güvenilir ve yenilikçi platform olma vizyonumuzu gerçekleştirmek için sürekli olarak kendimizi yeniliyor ve geliştiriyoruz."
                    />
                </div>
            </div>
            <div className="w-full max-w-350 py-30">
                <CorporateCard
                    title="Vizyon"
                    location="left"
                    img={vision}
                    p1="Port-foy.com olarak vizyonumuz, emlak sektöründe dijital dönüşümün öncüsü olmak ve kullanıcılarımıza en yenilikçi çözümleri sunarak sektördeki lider konumumuzu sürdürmektir. Teknolojiyi en etkili şekilde kullanarak, emlak acenteleri ve inşaat firmalarının iş süreçlerini optimize etmelerini ve daha geniş kitlelere ulaşmalarını sağlamak amacıyla çalışıyoruz."
                    p2="Gelecekteki gayrimenkul piyasasını şekillendiren bir platform olma hedefimiz doğrultusunda, kullanıcılarımıza güvenilir, hızlı ve kullanıcı dostu bir deneyim sunmayı taahhüt ediyoruz. Sürekli olarak yeni teknolojileri takip ediyor, platformumuzu daha da geliştirerek müşterilerimizin beklentilerini ve ihtiyaçlarını karşılayacak çözümler üretiyoruz."
                    p3="Port-foy.com olarak, emlak sektöründe sürdürülebilir büyümeyi destekleyen ve kullanıcı memnuniyetini ön planda tutan bir yaklaşım benimsiyoruz. Her adımda yenilikçi düşünceyi ve mükemmeliyetçi tutumu teşvik ederek, sektöre değer katmayı ve fark yaratmayı amaçlıyoruz."
                />
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