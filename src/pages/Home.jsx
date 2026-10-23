import { Header } from "../components/Header"
import { NewsCard } from '../components/NewsCard'
import { PortfoyCard } from "../components/PortfoyCard"
import { PortfoyText } from "../components/PortfoyText"
import { PricingCard } from '../components/PricingCard'
import { AppLinks } from '../components/AppLinks'
import { Footer } from '../components/Footer'
import { Link } from "react-router-dom"
import about from "../assets/about.png"
import step1 from "../assets/step1.png"
import step3 from "../assets/step3.png"
import { useEffect, useState } from "react"
import { getTranslation } from "../services/translation"
import { ClipLoader } from "react-spinners"
import { getPackages } from "../services/pricingApi"

export function Home({ loged, news, locale, setLocale }) {

  const [pricingCate, setPricingCate] = useState("Emlak Firması")

  const [translation, setTranslation] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false)
    getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
  }, [locale])

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then(setPackages);
  }, [])

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
      <div className='w-full max-w-[90%] py-20'>
        <h1 className='text-[35px] text-black font-medium mb-2'>{translation?.data?.business?.filter_properties}</h1>
        {/*<Filter />*/}
      </div>
      <div className='w-full max-w-[90%] flex flex-col items-center my-30'>
        <div className='w-full flex flex-col items-center mb-10'>
          <h2 className='text-[32px] text-[#212529] mb-2 font-medium text-center'>{translation?.data?.business?.app_steps_section_title}</h2>
          <p className='max-w-[40%] text-center text-[#212529] max-[992px]:max-w-full'>{translation?.data?.business?.app_steps_section_description}</p>
        </div>
        <div className='flex items-start gap-7.5 justify-between max-w-[80%] max-[992px]:flex-col mb-12.5'>
          <PortfoyCard img={step1} title={translation?.data?.business?.app_steps_section_1_title} description={translation?.data?.business?.app_steps_section_1_description} />
          <PortfoyCard img={about} title={translation?.data?.business?.app_steps_section_2_title} description={translation?.data?.business?.app_steps_section_2_description} />
          <PortfoyCard img={step3} title={translation?.data?.business?.app_steps_section_3_title} description={translation?.data?.business?.app_steps_section_3_description} />
        </div>
        <div>
          <Link to={"/application"} className='bg-[#f1f1f1] text-[#4b4b4b] px-5 py-2 text-sm uppercase rounded-lg hover:bg-[#c3c3c3] font-semibold transition-colors duration-300 ease-in-out cursor-pointer'>{translation?.data?.business?.company_application}</Link>
        </div>
      </div>
      <div className='w-full bg-[#f7f6fb] flex flex-col items-center py-30'>
        <div className='w-full max-w-[90%]'>
          <div className='flex justify-between items-start mb-12.5 max-[992px]:flex-col'>
            <div>
              <h2 className='text-[30px] text-black font-medium mb-2'>{translation?.data?.business?.app_discover}</h2>
              <p className='text-[15px] opacity-70 text-[#212529] font-medium'>{translation?.data?.business?.discover_app_section_description}</p>
            </div>
            <div>
              <Link to={"/discover"} className='text-[#818181] text-sm font-medium hover:text-[#27C5D2] transition-colors duration-300 ease-in-out'>{translation?.data?.business?.view_all}</Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-between max-[992px]:flex-col'>
            <PortfoyText
              title="Sahibi olduğunuz ya da satış yetkisi aldığınız ürünleri gün de kaç kişi inceliyor?"
              description="Herkesin merak ettiği bir konu: Drive linki paylaştığınızda acaba kaç kişi bu linki inceledi ya da kaç firma ürünlerinizi müşterilerine sundu? Ürünlerinizi gören müşterilerin bu konudaki düşünceleri nelerdir? Ürünlerinizin beğenilen ve beğenilmeyen özellikleri nelerdir?Port-foy.com, emlak ürünleri paylaşımı için tasarlanmış yenilikçi bir platformdur. Port-foy.com, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak ve geniş kitlelere ulaşmalarını sağlamak amacıyla geliştirilmiştir. Port-foy.com'a yüklediğiniz emlak ürünleri, sistemimize üye olan tüm kullanıcılar tarafından görüntülenebilir.Platformumuz, emlak acentelerinin kendi portföylerini aktif tutarak daha fazla emlak acentesine ulaşmalarını sağlar. Böylece, firma çalışanlarınız sadece belirli bir bölgeyle sınırlı kalmadan geniş bir coğrafi alanda etkili olabilir.Firmalar, sizin ürünlerinizi müşterilere sunduğunda bundan haberdar olabilirsiniz. Müşterilerin ürünlerinize yaptığı yorumları takip edebilir, bu şekilde ürünlerinizin eksiklerini tamamlayabilir ve pazarlama planlarınızı gözden geçirebilirsiniz. "
            />
            <PortfoyText
              title="Bulunduğunuz bölgedeki tüm emlakçıların ve inşaat firmalarının güncel ürün bilgilerine anlık olarak ulaşabiliyor musunuz?"
              description="Emlak satış personeli müşteri ile temasa geçtiğinde bir geri sayım başlar. En kısa sürede en doğru ürünü gönderebilmek için bölgenize hakim olmanız gerekiyor. Peki, bölgenize ne kadar hakimsiniz?Bir yandan satış kaygısı, bir yandan satılacak ürün bulma telaşıyla firmalar sürekli bir çaba içerisindedir. Firmaların portföylerini sürekli güncelledikleri de bir gerçektir. Bir müşteriye en kısa zamanda, istediği kriterlere yakın bir ürünü sunmak için birçok sayfayı veya drive linkini araştırmak zorunda kalmayacağınız bir platform öneriyoruz size.En önemlisi de; güncel bilgiye ulaşmak için sürekli telefon araması yapmak ya da drive linkleri arasında kaybolmak zorunda değilsiniz. Port-foy.com'da sürekli güncel bilgiler yer alır.Güncelleme yapılmayan ürünler otomatik olarak listede pasif duruma gelir ve size görünmez. Böylece müşterinize yanlış bir ürün göndermemiş olursunuz. "
            />
            <PortfoyText
              title="Müşteriniz, firmanızın bulunduğu şehir dışında, başka bir bölgede gayrimenkul almak için sizden yardım isterse ne yaparsınız?"
              description="Birçok firmanın sadık müşterileri bazen farklı şehirlerde gayrimenkul almak için yardım isteyebilir. Peki, başka bir şehirde gayrimenkul önerisinde bulunmak için nasıl bir yol izlerdiniz? Müşterinizin fikrini mi değiştirmeye çalışırdınız yoksa istediği bölgede uygun bir ürün arayıp yeni bir satış sözleşmesi mi yapmak isterdiniz?En önemli soru: Bu bölgedeki emlak veya inşaat firmalarını tanıyor musunuz?Şimdi size çok kolay bir yöntem öneriyoruz.Port-foy.com'a giriş yapın. Müşterinizin dilediği bölge ve diğer kriterleri girin. Dilerseniz satıcı veya üretici firma bilgilerini inceleyin. Müşterinize en hızlı şekilde istediği bölgede gayrimenkul seçeneklerini sunun.Müşteriyi başka bir ürün ya da bölgeye yönlendirmeye çalışmak yerine, istediği bölgede istediği gayrimenkulü satmanın keyfini yaşayın. "
            />
            <PortfoyText
              title="Müşterilerinize sunacağınız gayrimenkul bilgilerini nereden iletiyorsunuz?"
              description="Müşterilerinize hangi vasıta ile ürünlerinizi sunabilirsiniz? Hem müşterinizin kafası karışmayacak, hem de ürünler hakkındaki yorumlar satış elemanınız tarafından anlaşılabilir.Bu her zaman mümkün olmayabilir, değil mi?Drive link kaosundan sonra bir diğer kaos, sunum araçlarında ortaya çıkıyor. WhatsApp, Telegram, Viber, e-mail vb. Müşteriler bazen doğru resim ancak yanlış ürün bilgisi alabiliyor. Ayrıca, e-mailleriniz spam olarak müşterinin gözünden kaçabiliyor.Gayrimenkul sektörü, hem yükte hem de pahada ağır bir sektördür. Bu nedenle, üretim aşamasından sözleşme yapılmasına kadar son derece hassas bir şekilde çalışılması gerekmektedir.Port-foy.com üyeleri bu sorunu son derece modern ve hızlı bir şekilde çözüyor.Müşterinizin istediği kriterlere uygun ürünleri Port-foy.com üzerinden seçin.Teklif oluşturun.Müşterinize hem e-mail hem de WhatsApp üzerinden oluşturduğunuz linki gönderin.Müşteriniz linki tıkladığında, bir landing page üzerinde tüm gönderileri görebilir, inceleyebilir ve satıcıya ışık tutacak değerlendirmeler yapabilir.Daha sonra, dilediğiniz zaman bu teklifleri tekrar inceleyebilirsiniz.Müşterinizin Port-foy.com üzerinden yapacağı yorumlara dayanarak yeni teklifler oluşturabilirsiniz."
            />
            <PortfoyText
              title="Ofiste kaç adet portföy elemanı ile kaç firmanın bilgilerini güncel tutabiliyorsunuz?"
              description="Böyle bir istatistik elbette yapılamaz. Elbette portföy departmanı çalışanları sadece bir işi takip etmiyorlar. Ancak bir gerçek var: Birileri satmaya çalışacak, birileri de bu satış ekibine ürün bulmaya çalışacak.En önemlisi, satış elemanı müşteri ile temas ettiğinde, portföy departmanının hızlı bir şekilde drive linklerden istenilen nitelikte ürünleri satış elemanına hazırlaması gerekmekte.Peki, ne kadar sürede? 15 dakika mı? 30 dakika mı? Bir saat mi?Şimdi size birkaç adımda bunu kolaylaştıracak bir yöntem öneriyoruz:Müşterinin istediği kriterleri Port-foy.com'a girin.Listelediğiniz ürünlerden seçtiklerinizi teklif oluşturun.Müşterinize gönderin.Bu işlem 1,5-2 dakikadan fazla zamanınızı almayacaktır. Bu anlattıklarımda ne eksik?Satış elemanı ile portföy elemanı arasında geçen detaylı görüşme.Satış elemanının portföy departmanına istediklerini doğru şekilde aktaramaması.Müşterinin kriterleri dar ise satış elemanının “Haydi biraz çabuk olun” şeklindeki uyarıları.En iyi ihtimalle 15 dakika sonra portföy elemanından gelen ürünlerin satış elemanı tarafından incelenmesi ve gerekiyorsa ihtiyacı olan dile çevrilmesi.Müşteri gönderilen seçimi beğenmezse, arama, seçme, tercüme etme ve gönderme gibi tüm sıkıcı adımlar en baştan tekrarlanacak, ancak uygun seçenekleri bulmak daha zor olacaktır. "
            />
            <PortfoyText
              title="Projemi ya da hazır gayrimenkullerimi acaba başka şehirdeki emlak firmalarına nasıl ulaştırabilirim?"
              description="Bilinen satış platformları dışında sektör temsilcilerinin kullandığı başka bir platform aramayın. Artık tüm ülkede varsınız.Sistemde kayıtlı gayrimenkullerinizle ilgili bir emlak firmasının ihtiyacı olan tüm bilgileri başka şehirlerdeki emlak firmaları sizin haberiniz olmadan inceleyebilir ve müşterilerine sunabilir.Port-foy.com’daki hesabınıza doğru bilgileri girdiğiniz takdirde, herhangi bir şehirde, herhangi bir satıcının arama kriterine girmeniz an meselesi.Ya da siz ihtiyaç duyduğunuzda, dilediğiniz şehirdeki ürünleri filtreleyebilir ve inceleyebilirsiniz. İhtiyaç duyarsanız, bu bilgileri çok hızlı ve pratik bir şekilde müşterinize sunabilirsiniz."
            />
            <PortfoyText
              title="Port-foy.com sayesinde hem ekibinizin performansını kontrol edin hem de akıllı hatırlatmalar ile işinizi daha kolay takip edin."
              description="Port-foy.com'daki hesabınızda bulunan ürünlerinizin tam ve eksiksiz olması, ürünlerinizi ne kadar satmak istediğinize bağlıdır.İlanlarınızı Port-foy.com'a girdikten sonra, sistem belli periyotlarda sizden güncelleme yapmanızı isteyecek. Bu güncellemeleri yaparsanız, ilanınız listelemelerde görünmeye devam edecek. Ancak güncellemeleri yapmaz ve sistemin tüm uyarılarını görmezden gelirseniz, ilanlarınızın diğer firmalar tarafından görüntülenmesi engellenecektir.Kabul edersiniz ki, kimse bilgileri, fiyatı ve diğer detayları doğru olmayan bir ürünü müşterisine sunmak istemez.Ayrıca, elemanlarınızın performansını da bu yolla ölçme imkanına sahip olacaksınız."
            />
            <PortfoyText
              title="Çok emek verdiğim müşterime online sunum yaptım. Ancak müşterim, başka bir emlak firmasından da benzeri ürünleri isterse ne yaparım?"
              description="Gayrimenkul üreticileri ve emlak firmaları oldukça yüksek maliyetlerle reklam çalışması yaparlar. Nitekim, temas kurdukları müşterilerine satış gerçekleştirmek isterler. Peki müşteri, emlakçı emlakçı gezerse ne yapacağız?Bu çok karşılaşılan bir durum. Aslında bir problem değil; bu, sistemdeki bir eksikliğin istenmeyen tecrübesidir.Yüksek bedeller ödeyerek sosyal medya reklamı yaptınız, müşteri ile temas kurdunuz, kendisine bir takım seçenekler gönderdiniz. Ancak müşteriniz başka emlak firmaları ile de iletişime geçerse ne olur?İkinci emlak firması, çok düşük bir komisyonla aynı ürünü o müşteriye teklif ederse ne yaparım?Port-foy.com kullanıcıları, müşteri online sunumunda müşterilerini koruyor.Müşterilerin en temel bilgilerini sisteme giriyorlar.Müşterisi için hızlı bir şekilde seçenekleri hazırlıyorlar.Sunum linkini gönderiyorlar.Ve burası çok önemli; artık o müşteri ve kendisine gönderilen o gayrimenkuller birbirine belli bir süre mühürlenmiş oluyor.Müşteri başka bir emlakçı ile görüşse bile; ikinci emlakçı, ilk emlak firmasının gönderdiği ürünleri listelemede göremeyecektir.Dolayısıyla, Port-foy.com sizin için müşteri kaydını otomatik olarak oluşturmuş olacaktır."
            />
            <PortfoyText
              title="Yakın gelecekte vereceğimiz servisler;"
              description="Port-foy.com, yakın bir tarihte sizi daha da mutlu edecek kolaylıklarla şaşırtacak. Sizi sadece bir paylaşım platformu üyesi yapmıyoruz.Peki neler olacak?Port-foy.com platformuna eklediğiniz ürünleri müşteri ile buluşturacağız. Bu buluşmada sizlerden herhangi bir satış komisyonu talep edilmeyecek.Eğer müşteri herhangi bir bölgede alım yapmak ister ve firmaların mevcut satış planlamaları müşteri için yeterli olmazsa, müşteri kendi teklifini hazırlayıp bölgedeki tüm emlakçılara tek tuşla gönderebilecek. Müşteri tarafından belirtilen bölgedeki emlak ve inşaat firmaları bu teklife dilerlerse cevap verebilecek.Üyelerimiz, dilerlerse paketlerine Sanal Sunum Robotu ekleyebilecekler. Sanal Sunum Robotu ile videolu sanal robot sunucular eşliğinde ürünlerinizi tanıtabileceksiniz.Satış elemanınız sunum yaptıktan sonra, müşterinin ürünleri değerlendirmelerine göre yapay zekâ sistemimiz, müşteriye tekrar yeni ürünler sunmaya hazır olacak."
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-30 flex flex-col items-center mb-30'>
        <div className='w-full max-w-[90%]'>
          <div className='flex flex-col items-center'>
            <h2 className='text-[2rem] text-center mb-2 font-semibold'>{translation?.data?.business?.pricing}</h2>
            <p className='text-[#525252] text-center max-w-[45%] font-medium max-[992px]:max-w-full'>{translation?.data?.business?.pricing_section_description}</p>
            <ul className='flex mt-10 border border-[#eee] p-2.5 rounded-lg max-w-full overflow-auto scrollbar-thin scrollbar-thumb-[#27C5D2]'>
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
          <div className='flex w-full justify-center flex-wrap overflow-auto scrollbar-thin scrollbar-thumb-[#27C5D2] max-[992px]:flex-nowrap max-[992px]:justify-start max-[992px]:items-start max-[992px]:gap-10 max-[992px]:mt-3.75'>
            {packages?.data?.[0]?.packages?.map(item => (
              <PricingCard
                title={item.title}
                description={item.description}
                key={item.id}
                price={item.price.formatted}
                time={item.trial_version.time}
                trialPrice={item.trial_version.price.amount}
                customerTitle={item.features.customer_and_personal.title}
                customerFeatures={item.features.customer_and_personal.features}
                propertyTitle={item.features.property.title}
                propertyFeatures={item.features.property.features}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full bg-[#f7f7fb] py-18.75'>
        <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center'>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-[#45443F] text-[32px] font-semibold'>{translation?.data?.business?.article_and_announcements}</h2>
            <Link to={"/articles"} className='text-[#B7B9BF] text-xl font-medium hover:text-[#45443f] transition-colors duration-300 ease-in-out' href="https://demo.pigasoft.com/portfoy/public/tr/articles">{translation?.data?.business?.view_all}</Link>
          </div>
          <div className='flex items-start overflow-hidden -mx-5 max-[992px]:flex-col max-[992px]:m-0'>
            {news.map(item => (
              <NewsCard translation={translation} key={item.id} title={item.title} cover={item.cover} body={item.body} created={item.created_at} id={item.id} />
            ))}
          </div>
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

