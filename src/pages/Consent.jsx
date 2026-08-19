import { Header } from "../components/Header";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function Consent() {
    return (
        <div className="w-full flex flex-col items-center justify-center font-sf">
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Rıza Metni</span></p>
                </div>
            </div>
            <div className="w-full max-w-350">
                <h1 className="text-[40px] font-medium mb-2 text-[#212529]">Rıza Metni</h1>
                <div>
                    <p className="text-base text-[#212529] mb-4 font-bold">Kullanıcı Rıza Metni</p>
                    <p className="mb-4 text-[#212529]">Değerli Üyemiz,</p>
                    <p className="mb-4 text-[#212529]">
                        Port-foy ortak platformumuzda emlak/İnşaat/Pazarlama firması olarak kayıt olup,
                        satılık gayrimenkul ürünlerinizi sergileyebilmeniz ve diğer firmalarla paylaşabilmeniz
                        için Kişisel/Firma verilerinizin işlenmesi ve saklanması konusunda rızanızı almak istiyoruz.
                    </p>
                    <p className="mb-4 text-[#212529]">
                        Lütfen aşağıdaki maddeleri dikkatlice okuyun:
                    </p>
                    <p className="text-base text-[#212529] mb-4 font-bold">Veri Toplama ve Kullanım Amacı:</p>
                    <ul className="pl-8 mb-4 list-disc">
                        <li>
                            Kişisel/Firma verileriniz (isim, soyisim, firma adı, e-posta adresi, telefon numarası, adres vb.) ve gayrimenkul bilgileri, platformumuz tarafından emlak ürünlerinizi sergileyebilmek, diğer emlak firmalarıyla paylaşmak ve müşteri taleplerine yanıt verebilmek amacıyla toplanmaktadır.
                        </li>
                        <li>
                            Verileriniz, emlak ilanlarının yönetimi, müşteri ilişkilerinin sürdürülmesi, pazarlama faaliyetleri ve platformun iyileştirilmesi için kullanılabilir.
                        </li>
                        <li>
                            Ayrıca kişisel ya da firmanıza ait mali bilgileriniz e-fatura ve benzeri mali işlemler için istenilmekte ve saklanmaktadır.
                        </li>
                        <li>
                            Port-foy.com platformunun yapacağı pazarlama çalışmalarında; sizleri müşteriler ile buluşturmak amacıyla iletişim bilgileriniz kullanılacaktır.
                        </li>
                        <li>
                            Port-foy.com yada bu platformun organize ettiği başka platformlarda gayrimenkul müşterisi tekliflerinin sizlere ulaşması için kullanılabilir.
                        </li>
                        <li>
                            Port-foy.com’a gireceğiniz müşteri bilgilerinin doğruluğu, müşteri sadakati kapsamında büyük önem taşır.
                        </li>
                        <li>
                            Port-foy.com platformuna gireceğiniz müşteri isimleri, telefon numaraları, e-posta adresleri gibi bilgiler yalnızca sizin tarafınızdan ve yetkilendirdiğiniz ekip üyeleriniz tarafından görüntülenebilir.
                        </li>
                        <li>
                            Port-foy.com platformuna gireceğiniz müşteri bilgileri, platforma üye olan diğer firmalarla paylaşılmayacaktır.
                        </li>
                        <li>
                            Port-foy.com platformuna gireceğiniz müşteri bilgileri, Order Teknoloji A.Ş. tarafından herhangi bir amaçla kullanılmayacak ve müşterilerinize herhangi bir temas sağlanmayacaktır.
                        </li>
                    </ul>
                    <p className="text-base text-[#212529] mb-4 font-bold">Veri Saklama Süresi:</p>
                    <ul className="pl-8 mb-4 list-disc">
                        <li>
                            Kişisel/Firma verileriniz, yasal zorunluluklar ve hizmet sunumunun gerektirdiği süre boyunca güvenli bir şekilde saklanacaktır.
                        </li>
                        <li>
                            Hizmet kullanımınız sona erdikten sonra verileriniz, yasal saklama süreleri dikkate alınarak, gerekli olan süre boyunca muhafaza edilecektir.
                        </li>
                        <li>
                            Ayrıca Kişisel/Firma verileriniz platformumuzda size ait gayrimenkul yada benzeri ürünlerin kaldığı sürece, veritabanımızda saklanmaya devam edecektir.
                        </li>
                    </ul>
                    <p className="text-base text-[#212529] mb-4 font-bold">Veri Paylaşımı:</p>
                    <ul className="pl-8 mb-4 list-disc">
                        <li>
                            Kişisel/Firma verileriniz ( Telefon, mail vb iletişim bilgileriniz) , ürünlerinizi satmak isteyen diğer emlak firmaları, potansiyel müşteriler ve iş ortaklarımızla paylaşılabilir. Ayrıca, yasal zorunluluklar gereği resmi makamlarla paylaşılması gerekebilir.
                        </li>
                        <li>
                            Port-foy.com Platformumuzda yer alan emlak ilanları, kullanıcılar ve iş ortaklarımız arasında serbestçe görülebilir ve paylaşılabilir.
                        </li>
                        <li>
                            Kişisel/Firma verileriniz ( Telefon, mail vb iletişim bilgileriniz) , Port-foy.com platformu tarafından yapılacak reklam faaliyetlerinde; ürünlerinizi satmak isteyen diğer emlak firmaları, potansiyel gayrimenkul müşterileri ve iş ortaklarımızla paylaşılabilir.
                        </li>
                        <li>
                            Kişisel/Firma verileriniz ( Telefon, mail vb iletişim bilgileriniz) , Port-foy.com tarafından yönetilen başka web sayfaları tarafından yapılacak reklam faaliyetlerinde; ürünlerinizi satmak isteyen diğer emlak firmaları, potansiyel gayrimenkul müşterileri ve iş ortaklarımızla paylaşılabilir.
                        </li>
                    </ul>
                    <p className="text-base text-[#212529] mb-4 font-bold">Veri Güvenliği:</p>
                    <ul className="pl-8 mb-4 list-disc">
                        <li>Kişisel/Firma verileriniz, yetkisiz erişime karşı korunmakta olup, veri güvenliği en yüksek seviyede sağlanmaktadır. Platformumuzda gerekli teknik ve idari tedbirler alınmıştır.</li>
                    </ul>
                    <p className="text-base text-[#212529] mb-4 font-bold">Haklarınız:</p>
                    <ul className="pl-8 mb-4 list-disc">
                        <li>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, Kişisel/Firma verilerinizin işlenmesine dair her türlü bilgi talep edebilir, yanlış veya eksik olan verilerin düzeltilmesini isteyebilir, verilerinizin silinmesini veya anonim hale getirilmesini talep edebilirsiniz. Ayrıca, veri işleme faaliyetlerine ilişkin her türlü itiraz hakkınız saklıdır. Bu haklarınızı kullanmak için platformumuzla iletişime geçebilirsiniz.
                        </li>
                        <li>
                            Port-foy.com platformuna kendi adınıza veya firmanız adına üye olurken girmiş olduğunuz bilgilerin doğruluğunu onayladığınızı ve yanlış veya yanıltıcı bilgi girmeniz durumunda 3.kişilere ve port-foy.com’a karşı sorumluluk size aittir.
                        </li>
                    </ul>
                    <p className="text-base text-[#212529] mb-4 font-bold">Çerezler ve İzleme Teknolojileri:</p>
                    <ul className="pl-8 mb-4 list-disc">
                        <li>Platformumuz, kullanıcı deneyimini iyileştirmek ve hizmetlerimizi geliştirmek amacıyla çerezler ve diğer izleme teknolojilerini kullanabilir. Bu teknolojiler, site kullanımınızı analiz etmek ve kişiselleştirilmiş içerik sunmak için kullanılabilir.</li>
                    </ul>
                    <p className="mb-4"><span className="font-bold text-[#212529]">Rıza Beyanı:</span> Yukarıda belirtilen hususları okuyup anladığımı ve 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel/firma verilerimin belirtilen amaçlar doğrultusunda işlenmesine rıza gösterdiğimi kabul ve beyan ederim.</p>
                </div>
            </div>
            <div className='w-full mt-40 mb-30'>
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