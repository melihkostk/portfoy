import { Header } from "../components/Header";
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import frame from "../assets/screen.png"
import { DiscoverCard } from "../components/DiscoverCard";
import { DiscoverAccordion } from "../components/DiscoverAccordion";
import { PricingCard } from "../components/PricingCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { useState } from "react";

export function Discover({ loged }) {

    const [pricingCate, setPricingCate] = useState("Emlak Firması")

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Keşfet</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-center">
                    <div className="flex-1">
                        <h1 className="text-[#212529] text-[40px] font-bold leading-[1.2] mb-5">Port-Foy ile daha kısa zamanda daha fazla emlak firmasına ulaşın.</h1>
                        <p className="text-sm text-[#818181] font-medium mb-12.5">
                            Firmanızın ürünlerini Port-foy.com’a yükleyin.
                            Hem mobil telefonunuzdan hem de bilgisayarınızdan
                            yakındaki veya uzaktaki gayrimenkullere anında ulaşın.
                        </p>
                        <div>
                            <p className="text-sm text-[#212529] opacity-70 mb-2.5 font-medium">Uygulamayı şimdi ücretsiz indirin</p>
                            <div className="flex gap-2.5">
                                <a className="hover:opacity-70 transition-opacity duration-300 ease-in-out" href="https://apps.apple.com/tr/app/port-foy/id6745571274">
                                    <img src={googlePlay} alt="" />
                                </a>
                                <a className="hover:opacity-70 transition-opacity duration-300 ease-in-out" href="https://play.google.com/store/apps/details?id=com.pigasoft.portfoy&hl=tr">
                                    <img src={appStore} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-[992px]:hidden">
                        <img className="w-full max-w-full" src={frame} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="text-center flex flex-col items-center my-15">
                    <h1 className="mb-2.5 text-[32px] text-[#212529] font-semibold">
                        Port-Foy'ü Keşfet
                    </h1>
                    <p className="text-base text-[#525252] font-medium max-w-[45%] max-[992px]:w-full max-[992px]:max-w-full">
                        Size daha hızlı ve daha ekonomik çözümler sunan port-foy.com’un size sunduğu kolaylıklara birlikte inceleyelim.
                    </p>
                </div>
                <div>
                    <DiscoverCard
                        title="Sahibi olduğunuz ya da satış yetkisi aldığınız ürünleri gün de kaç kişi inceliyor?"
                        location="left"
                        p1="Herkesin merak ettiği bir konu: Drive linki paylaştığınızda acaba kaç kişi bu linki inceledi ya da kaç firma ürünlerinizi müşterilerine sundu? Ürünlerinizi gören müşterilerin bu konudaki düşünceleri nelerdir? Ürünlerinizin beğenilen ve beğenilmeyen özellikleri nelerdir?"
                        p2="Port-foy.com, emlak ürünleri paylaşımı için tasarlanmış yenilikçi bir platformdur. Port-foy.com, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak ve geniş kitlelere ulaşmalarını sağlamak amacıyla geliştirilmiştir. Port-foy.com'a yüklediğiniz emlak ürünleri, sistemimize üye olan tüm kullanıcılar tarafından görüntülenebilir."
                        p3="Platformumuz, emlak acentelerinin kendi portföylerini aktif tutarak daha fazla emlak acentesine ulaşmalarını sağlar. Böylece, firma çalışanlarınız sadece belirli bir bölgeyle sınırlı kalmadan geniş bir coğrafi alanda etkili olabilir."
                        p4="Firmalar, sizin ürünlerinizi müşterilere sunduğunda bundan haberdar olabilirsiniz. Müşterilerin ürünlerinize yaptığı yorumları takip edebilir, bu şekilde ürünlerinizin eksiklerini tamamlayabilir ve pazarlama planlarınızı gözden geçirebilirsiniz."
                    />
                    <DiscoverCard
                        title="Bulunduğunuz bölgedeki tüm emlakçıların ve inşaat firmalarının güncel ürün bilgilerine anlık olarak ulaşabiliyor musunuz?"
                        location="right"
                        p1="Emlak satış personeli müşteri ile temasa geçtiğinde bir geri sayım başlar. En kısa sürede en doğru ürünü gönderebilmek için bölgenize hakim olmanız gerekiyor. Peki, bölgenize ne kadar hakimsiniz?"
                        p2="Bir yandan satış kaygısı, bir yandan satılacak ürün bulma telaşıyla firmalar sürekli bir çaba içerisindedir. Firmaların portföylerini sürekli güncelledikleri de bir gerçektir. Bir müşteriye en kısa zamanda, istediği kriterlere yakın bir ürünü sunmak için birçok sayfayı veya drive linkini araştırmak zorunda kalmayacağınız bir platform öneriyoruz size."
                        p3="En önemlisi de; güncel bilgiye ulaşmak için sürekli telefon araması yapmak ya da drive linkleri arasında kaybolmak zorunda değilsiniz. Port-foy.com'da sürekli güncel bilgiler yer alır."
                        p4="Güncelleme yapılmayan ürünler otomatik olarak listede pasif duruma gelir ve size görünmez. Böylece müşterinize yanlış bir ürün göndermemiş olursunuz."
                    />
                    <DiscoverCard
                        title="Müşteriniz, firmanızın bulunduğu şehir dışında, başka bir bölgede gayrimenkul almak için sizden yardım isterse ne yaparsınız?"
                        location="left"
                        p1="Birçok firmanın sadık müşterileri bazen farklı şehirlerde gayrimenkul almak için yardım isteyebilir. Peki, başka bir şehirde gayrimenkul önerisinde bulunmak için nasıl bir yol izlerdiniz? Müşterinizin fikrini mi değiştirmeye çalışırdınız yoksa istediği bölgede uygun bir ürün arayıp yeni bir satış sözleşmesi mi yapmak isterdiniz?"
                        p2="En önemli soru: Bu bölgedeki emlak veya inşaat firmalarını tanıyor musunuz?"
                        p3="Şimdi size çok kolay bir yöntem öneriyoruz."
                        p4="Port-foy.com'a giriş yapın. Müşterinizin dilediği bölge ve diğer kriterleri girin. Dilerseniz satıcı veya üretici firma bilgilerini inceleyin. Müşterinize en hızlı şekilde istediği bölgede gayrimenkul seçeneklerini sunun."
                        p5="Müşteriyi başka bir ürün ya da bölgeye yönlendirmeye çalışmak yerine, istediği bölgede istediği gayrimenkulü satmanın keyfini yaşayın."
                    />
                    <DiscoverCard
                        title="Müşterilerinize sunacağınız gayrimenkul bilgilerini nereden iletiyorsunuz?"
                        location="right"
                        p1="Müşterilerinize hangi vasıta ile ürünlerinizi sunabilirsiniz? Hem müşterinizin kafası karışmayacak, hem de ürünler hakkındaki yorumlar satış elemanınız tarafından anlaşılabilir."
                        p2="Bu her zaman mümkün olmayabilir, değil mi?"
                        p3="Drive link kaosundan sonra bir diğer kaos, sunum araçlarında ortaya çıkıyor. WhatsApp, Telegram, Viber, e-mail vb. Müşteriler bazen doğru resim ancak yanlış ürün bilgisi alabiliyor. Ayrıca, e-mailleriniz spam olarak müşterinin gözünden kaçabiliyor."
                        p4="Gayrimenkul sektörü, hem yükte hem de pahada ağır bir sektördür. Bu nedenle, üretim aşamasından sözleşme yapılmasına kadar son derece hassas bir şekilde çalışılması gerekmektedir."
                        p5="Port-foy.com üyeleri bu sorunu son derece modern ve hızlı bir şekilde çözüyor."
                        p6="Müşterinizin istediği kriterlere uygun ürünleri Port-foy.com üzerinden seçin."
                        p7="Teklif oluşturun."
                        p8="Müşterinize hem e-mail hem de WhatsApp üzerinden oluşturduğunuz linki gönderin."
                        p9="Müşteriniz linki tıkladığında, bir landing page üzerinde tüm gönderileri görebilir, inceleyebilir ve satıcıya ışık tutacak değerlendirmeler yapabilir."
                        p10="Daha sonra, dilediğiniz zaman bu teklifleri tekrar inceleyebilirsiniz."
                        p11="Müşterinizin Port-foy.com üzerinden yapacağı yorumlara dayanarak yeni teklifler oluşturabilirsiniz."
                    />
                    <DiscoverCard
                        title="Projemi ya da hazır gayrimenkullerimi acaba başka şehirdeki emlak firmalarına nasıl ulaştırabilirim?"
                        location="left"
                        p1="Bilinen satış platformları dışında sektör temsilcilerinin kullandığı başka bir platform aramayın. Artık tüm ülkede varsınız."
                        p2="Sistemde kayıtlı gayrimenkullerinizle ilgili bir emlak firmasının ihtiyacı olan tüm bilgileri başka şehirlerdeki emlak firmaları sizin haberiniz olmadan inceleyebilir ve müşterilerine sunabilir."
                        p3="Port-foy.com’daki hesabınıza doğru bilgileri girdiğiniz takdirde, herhangi bir şehirde, herhangi bir satıcının arama kriterine girmeniz an meselesi."
                        p4="Ya da siz ihtiyaç duyduğunuzda, dilediğiniz şehirdeki ürünleri filtreleyebilir ve inceleyebilirsiniz. İhtiyaç duyarsanız, bu bilgileri çok hızlı ve pratik bir şekilde müşterinize sunabilirsiniz."
                    />
                    <DiscoverCard
                        title="Port-foy.com sayesinde hem ekibinizin performansını kontrol edin hem de akıllı hatırlatmalar ile işinizi daha kolay takip edin."
                        location="right"
                        p1="Port-foy.com'daki hesabınızda bulunan ürünlerinizin tam ve eksiksiz olması, ürünlerinizi ne kadar satmak istediğinize bağlıdır."
                        p2="İlanlarınızı Port-foy.com'a girdikten sonra, sistem belli periyotlarda sizden güncelleme yapmanızı isteyecek. Bu güncellemeleri yaparsanız, ilanınız listelemelerde görünmeye devam edecek. Ancak güncellemeleri yapmaz ve sistemin tüm uyarılarını görmezden gelirseniz, ilanlarınızın diğer firmalar tarafından görüntülenmesi engellenecektir."
                        p3="Kabul edersiniz ki, kimse bilgileri, fiyatı ve diğer detayları doğru olmayan bir ürünü müşterisine sunmak istemez."
                        p4="Ayrıca, elemanlarınızın performansını da bu yolla ölçme imkanına sahip olacaksınız."
                    />
                </div>
            </div>
            <div className="w-full bg-[#F7F6FB] flex items-center justify-center py-30">
                <div className="w-full max-w-[90%]">
                    <div className="text-center flex flex-col items-center mb-15">
                        <h1 className="text-[34px] text-[#212529] font-medium mb-2.5">Sıkça Sorulan Sorular</h1>
                        <p className="text-[#525252] max-w-[40%] max-[992px]:w-full max-[992px]:max-w-full">
                            Port-foy.com kullanımı kolay bir platformdur.
                            Size istihdam ekonomisi ve hız kazandıracak şekilde planlanmıştır.
                            Sorularınız için bizlere her türlü platformdan ulaşabileceğinizi bilmenizi isteriz.
                        </p>
                    </div>
                    <div>
                        <DiscoverAccordion
                            question="Port-foy.com’a üye olabilmem için firma sahibi olmam gerekli mi?"
                            answer="Platforma üye olmak için vergi levhası sahibi olmanız gerekmektedir. Eğer freelancer çalışan iseniz üye firmanın bünyesinde çalışabilirsiniz. Vergi levhasız başvurular kabul edilmeyecektir."
                        />
                        <DiscoverAccordion
                            question="Port-foy.com’a kimler üye olabilir?"
                            answer="Üyelik için öncelikle vergi levhası gerekmekte. Sadece Emlak firmaları, İnşaat firmaları ve pazarlama firmaları platforma üye olabilir. Araba kiralama firmaları, Seyahat acentaları ve benzeri firmalar üye olamazlar."
                        />
                        <DiscoverAccordion
                            question="Port-foy.com’dan hangi paketi almalıyım?"
                            answer="Fiyatlandırma sayfasında sizler için detaylı fiyat bilgisi paylaşıyoruz. Firmanızın tipine göre paketlerden faydalanabilirsiniz. Ayrıca Deneme sürümü kullanabileceğinizi unutmayın."
                        />
                        <DiscoverAccordion
                            question="Port-foy.com’dan  üyelik aldıktan sonra kurlumu nasıl yapabilirim?"
                            answer="Üyelik sonrası aşamalar oldukça kolay. Ekibinizi oluşturun – Ürünlerini yükleyin ve kullanıma başlayın. Dilerseniz sayfamızda eğitim videoları içerisinde ilgili konunun videosunu izleyerek yardım alabilirsiniz."
                        />
                        <DiscoverAccordion
                            question="Port-Foy’ü sadece bilgisayarda mı kullanabilirim?"
                            answer="Port-Foy platformunu bilgisayarlarda ve akıllı telefonların her türünde tam anlamıyla kullanabilirsiniz."
                        />
                        <DiscoverAccordion
                            question="Port-foy.com’a yüklediğim ürünler kimler tarafından görüntülenebilir?"
                            answer="Port-foy.com platformuna yüklediğiniz ürünler, tüm üye firmalar tarafından görüntülenebilir. Ancak, aylık portföy güncellemelerinizi yapmadığınız takdirde, ürünleriniz pasif duruma gelir ve görüntülenemez. Bu durumda yalnızca kendi firma çalışanlarınız ürünlerinizi görebilir."
                        />
                        <DiscoverAccordion
                            question="Platformdaki tüm bilgiler herkes tarafından görülecek mi?"
                            answer="Dilerseniz başka firmaların sizin bilgileriniz erişimini düzenleyebilirsiniz. Ayrıca personelinizin erişim yetkilerini düzenleyebilir ve planlayabilirsiniz."
                        />
                        <DiscoverAccordion
                            question="Port-Foy’de mişterime sunum yapmak için müşterimi programa girmem gerekiyor mu?"
                            answer="Sunum hazırlama ve göndermek için müşterinizin adını – mailini – telefon numarasının bir kısmını girmeniz gerekmekte. Bu bilgileri sadece siz görebilirsiniz. Ayrıca bu bilgileri doğru olarak girerseniz gönderdiğiniz ürünler o müşteri için giriş yapılmış olur."
                        />
                        <DiscoverAccordion
                            question="Sadece kendi bölgemdeki gayrimenkullere mi erişimim var?"
                            answer="Port-foy.com’um kuruluş amaçlarından birisi de bu. Türkiye’nin neresinde olursanız olun Port-foy.com üyelerinin girmiş olduğu tüm ürünleri görebilirsiniz. Satıcıları ile iletişim kurabilirsiniz. Platform üzerinden teklif verebilirsiniz."
                        />
                        <DiscoverAccordion
                            question="Port-foy.com’a eklediğimiz ürünleri potansiyel müşteriler görebilecek mi?"
                            answer="2025 yılı itibariyle wowiest.com sayfasında ürünleriniz yer alacak. Port-foy.com’daki tüm değişiklikler ve güncellemeler bu sayfada anlık değişecek. wowiest.com üzerinden müşteriler satış fiyatları ile ürünlerinizi görmeye başlayacak. Potansiyel müşteriler temas kurmak istediklerinde doğrudan satıcı ile temas edebilecek.   "
                        />
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 flex flex-col items-center'>
                <div className='w-full max-w-[90%]'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-[2rem] text-center mb-2 font-semibold'>Fiyatlandırma</h2>
                        <p className='text-[#525252] text-center max-w-[45%] font-medium max-[992px]:w-full max-[992px]:max-w-full'>Firmanızı tipini seçin, sizin için hazırlanmış özel paketler fırsatından faydalanın. Ücretsiz kullanım dönemini yakalamak için acele edin.</p>
                        <ul className='flex mt-10 border border-[#eee] p-2.5 rounded-lg scrollbar-thin scrollbar-thumb-[#27C5D2] overflow-auto max-[992px]:max-w-full'>
                            <li>
                                <button onClick={() => setPricingCate("Emlak Firması")} className={`px-4 py-2 whitespace-nowrap text-[#3e3e3e] font-medium rounded-lg ${pricingCate === "Emlak Firması" ? "bg-[#f4f4f4] text-black" : ""} hover:text-black cursor-pointer`}>
                                    Emlak Firması
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setPricingCate("İnşaat Firması")} className={`px-4 py-2 whitespace-nowrap text-[#3e3e3e] font-medium rounded-lg ${pricingCate === "İnşaat Firması" ? "bg-[#f4f4f4] text-black" : ""}  hover:text-black cursor-pointer`}>
                                    İnşaat Firması
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setPricingCate("Emlak & İnşaat Firması")} className={`px-4 py-2 whitespace-nowrap text-[#3e3e3e] font-medium rounded-lg ${pricingCate === "Emlak & İnşaat Firması" ? "bg-[#f4f4f4] text-black" : ""} hover:text-black cursor-pointer`}>
                                    Emlak & İnşaat Firması
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setPricingCate("Pazarlama Firması")} className={`px-4 py-2 whitespace-nowrap text-[#3e3e3e] font-medium rounded-lg ${pricingCate === "Pazarlama Firması" ? "bg-[#f4f4f4] text-black" : ""} hover:text-black cursor-pointer`}>
                                    Pazarlama Firması
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='flex w-full justify-center flex-wrap scrollbar-thin scrollbar-thumb-[#27C5D2] overflow-auto max-[992px]:flex-nowrap max-[992px]:justify-start max-[992px]:items-start max-[992px]:gap-10 max-[992px]:mt-3.75'>
                        {pricingCate === "Emlak Firması" && (
                            <>
                                <PricingCard
                                    name="XL Emlak Paketi"
                                    price="₺15,00 + KDV"
                                    trail="30"
                                    staff="Sınırsız"
                                    offer="510"
                                    customer="500"
                                    ad="520"
                                    photo="20"
                                    video="20"
                                />

                                <PricingCard
                                    name="Standart Emlak Paket"
                                    price="₺450,00 + KDV"
                                    trail="30"
                                    staff="3"
                                    offer="10"
                                    customer="10"
                                    ad="10"
                                    photo="12"
                                    video="1"
                                />

                                <PricingCard
                                    name="Medium Emlak Paket"
                                    price="₺650,00 + KDV"
                                    trail="45"
                                    staff="6"
                                    offer="1500"
                                    customer="500"
                                    ad="50"
                                    photo="12"
                                    video="2"
                                />

                                <PricingCard
                                    name="Premium Emlak Paket"
                                    price="₺950,00 + KDV"
                                    trail="60"
                                    staff="10"
                                    offer="3000"
                                    customer="1000"
                                    ad="100"
                                    photo="15"
                                    video="5"
                                />
                            </>
                        )}
                        {pricingCate === "İnşaat Firması" && (
                            <>
                                <PricingCard
                                    name="XL İnşaat Paketi"
                                    price="₺500,00 + KDV"
                                    trail="15 "
                                    staff="Sınırsız"
                                    offer="0"
                                    customer="Sınırsız"
                                    ad="Sınırsız "
                                    photo="0"
                                    video="0"
                                />

                                <PricingCard
                                    name="XXL"
                                    price="₺8,00 + KDV"
                                    trail="30"
                                    staff="2000"
                                    offer="50"
                                    customer="50"
                                    ad="1500"
                                    photo="85"
                                    video="18"
                                />

                                <PricingCard
                                    name="Standart İnşaat Paket"
                                    price="₺1.300,00 + KDV"
                                    trail="30"
                                    staff="3"
                                    offer="10"
                                    customer="10"
                                    ad="10"
                                    photo="10"
                                    video="3"
                                />

                                <PricingCard
                                    name="Medium İnşaat Paket"
                                    price="₺1.650,00 + KDV"
                                    trail="45 "
                                    staff="6 "
                                    offer="1500"
                                    customer="500"
                                    ad="50 "
                                    photo="25"
                                    video="3"
                                />

                                <PricingCard
                                    name="Premium İnşaat Paket"
                                    price=" ₺1.900,00 + KDV"
                                    trail="60  "
                                    staff="10 "
                                    offer="3000"
                                    customer="1000"
                                    ad="100  "
                                    photo="30 "
                                    video="5"
                                />
                            </>
                        )}
                        {pricingCate === "Emlak & İnşaat Firması" && (
                            <>
                                <PricingCard
                                    name="Medium İnşaat & Emlak Paket"
                                    price="₺1.650,00 + KDV"
                                    trail="45"
                                    staff="6 "
                                    offer="10"
                                    customer="10"
                                    ad="10"
                                    photo="10"
                                    video="3"
                                />

                                <PricingCard
                                    name="Premium İnşaat & Emlak Paket"
                                    price=" ₺1.900,00 + KDV"
                                    trail="60  "
                                    staff="10 "
                                    offer="3000"
                                    customer="1000"
                                    ad="100  "
                                    photo="30 "
                                    video="5"
                                />
                            </>
                        )}
                        {pricingCate === "Pazarlama Firması" && (
                            <>
                                <PricingCard
                                    name="Medium Pazarlama Firması Paket"
                                    price="₺1.650,00 + KDV"
                                    trail="45"
                                    staff="6 "
                                    offer="15"
                                    customer="10"
                                    ad="10"
                                    photo="10"
                                    video="3"
                                />

                                <PricingCard
                                    name="Premium Pazarlama Firması Paket"
                                    price=" ₺1.900,00 + KDV"
                                    trail="60  "
                                    staff="10 "
                                    offer="3000"
                                    customer="1000"
                                    ad="100  "
                                    photo="30 "
                                    video="5"
                                />
                            </>
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-lg text-[#212529] font-semibold mb-1">Sizin için yeterli değil mi?</p>
                        <p className="text-sm text-[#767676] mb-4 font-medium">Her zaman sorularınızı yanıtlamaya hazırız</p>
                        <div>
                            <p className="text-[#212529] mb-4 font-medium">MÜŞTERI DESTEK HATTI</p>
                            <a className="text-[25px] text-black font-bold hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">0 850 851 44 94</a>
                        </div>
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