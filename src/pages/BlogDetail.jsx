import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useAppContext } from "../context/AppContext";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function BlogDetail() {

    const { translation } = useAppContext();

    return (
        <div className="flex flex-col items-center font-sf">
            <Header />
            <div className="w-full bg-[#f8f8f8] mb-7.5">
                <div className="flex justify-center">
                    <ul className="flex items-center gap-2 w-full max-w-[90%] py-2.5">
                        <li>
                            <Link className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out" to={"/"}>{translation?.data?.business?.home}</Link>
                        </li>
                        <li className="text-sm text-[#636363] font-medium">
                            {">"}
                        </li>
                        <li>
                            <Link className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out" to={"/blog"}>{translation?.data?.business?.blog}</Link>
                        </li>
                        <li className="text-sm text-[#636363] font-medium">
                            {">"}
                        </li>
                        <li>
                            <Link className="text-sm text-[#9a9898] font-semibold">Ev Satın Alırken Dikkat Edilmesi Gerekenler Nelerdir?</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-[90%] flex">
                <div className="w-[75%]">
                    <div className="my-7.5">
                        <h1 className="mb-2 text-[40px] text-[#212529] font-semibold">Ev Satın Alırken Dikkat Edilmesi Gerekenler Nelerdir?</h1>
                        <p className="text-sm text-[#646464] mb-4 font-medium">23 Ekim 2024 tarihinde yayımlandı</p>
                    </div>
                    <div>
                        <p className="text-[#212529] font-medium mb-4">
                            Yeni bir ev alırken yaşadığınız heyecanı ve stresi anlayabiliyoruz.
                            Bu blog yazımızda, ev satın alırken dikkat etmeniz gereken tüm noktalara değineceğiz.
                            Satın alım sürecinde bir tüketici olduğunuzu en başından bilmelisiniz.
                            Hayalini kurduğunuz bir eve sorunsuz ve güvenilir şekilde satın almak en doğal hakkınız!
                            Şimdi madde madde dikkat etmeniz gerekenleri sıralayalım.
                        </p>
                        <ul className="list-disc pl-8 text-[#212529] font-medium mb-4">
                            <li>Bütçenizi belirleyerek ev satın alım sürecinizi başlatmalısınız. Eğer yeterli bütçeniz yoksa kredi seçeneklerini değerlendirip, sizler için en uygun olan krediye başvurabilirsiniz. Farklı bankaların ödeme planlarını ve faiz oranlarını kıyaslayarak seçim yapabilirsiniz.</li>
                            <li>Satın almak istediğiniz evin tapu türü “mesken” olmalı. Dükkan, ofis, depo türünde tapular olmamasına dikkat etmelisiniz.</li>
                            <li>Tapuda sorun olup olmadığı konusunda resmi kurumlara başvurup bilgi almayı unutmayın.</li>
                            <li>Satın alacağınız konutun birikmiş emlak vergisi borcunun olup olmamasına dikkat edin. </li>
                            <li>Yapının kullanılabileceğine dair “yapı kullanma izin belgesi” olup olmadığını sorgulamalısınız.</li>
                            <li>Tapu sicilinin temiz olmasına ve ipotek olmamasına dikkat etmelisiniz.</li>
                            <li>Tapunun üzerinde kiracıyla yapılmış olan kira sözleşmesinin şerhi olup olmadığı hakkında bilgi sahibi olmalısınız. </li>
                            <li>Ev satın alma sürecinde resmi kurumlara ödeyeceğiniz harçlar konusunda bilgi sahibi olmayı unutmayın.</li>
                        </ul>
                        <h2 className="text-[#212529] text-[32px] font-bold">2. El Ev Alırken Nelere Dikkat Edilmeli?</h2>
                        <p className="text-[#212529] font-medium mb-4">Ev satın alırken dikkat etmeniz gerekenleri bir önceki başlığımızda sıraladık. 2. El ev satın alırken ekstra dikkat etmeniz gereken noktalar bulunmakta. Şimdi 2. El ev alırken dikkat etmeniz gereken maddelere detaylı olarak bakalım.</p>
                        <ul className="list-disc pl-8 text-[#212529] font-medium mb-4">
                            <li>Evin inşa sürecine tanıklık etmediğiniz için mutlaka beton değerleri, demir değerleri ve kalitesi hakkında detaylı bilgi sahibi olduktan sonra diğer adımlara geçmelisiniz. </li>
                            <li>Komşular, altyapı, güvenlik gibi faktörleri göz önünde bulundurmalısınız. </li>
                            <li>2. El bazı evlerde tapunun var olmama durumları olabiliyor.</li>
                            <li>Türkiye deprem ülkesi olduğu için yapının deprem yönetmeliğine uygun ve dikkat edilerek üretilip üretilmediğine dikkat etmelisiniz.</li>
                            <li>Ortak yaşam alanları ve giderlerin ne kadar olduğunu öğrenerek diğer işlemlere geçmelisiniz.</li>
                            <li>İmar durumundaki bilgiler ile satın alacağınız evin kat, yüksekliği gibi bilgilerin uyuşup uyuşmadığını kontrol edin. </li>
                            <li>Evin üzerinde geçmişten kalan bir borcun olup olmadığına dikkat etmelisiniz.</li>
                            <li>Herhangi bir büyük depremden önce mi sonra mı yapıldığına dikkat etmelisiniz.</li>
                            <li>Uzmanlara göre bir beton yapının 50 yıl ortalama bir ömrü bulunmaktadır. Yapının yaşını dikkate alarak karar vermelisiniz.</li>
                            <li>Isı yalıtımı beraberinde enerji tasarrufu ve düşük faturalara sebep olmakta. Dolayısıyla satın alacağınız dairenin ısı yalıtımı olup olmadığı mutlaka sormalısınız.</li>
                            <li>Satın almayı düşündüğünüz ev ikinci el olsa bile, krediye ihtiyaç duyuyorsanız uygun kredi seçeneklerini araştırıp bankaları karşılaştırmanız önemlidir.</li>
                        </ul>
                    </div>
                </div>
                <div className="pl-7.5 w-[25%]">
                    <div className="p-3.75 rounded-lg bg-white shadow-[0_0_30px_#ececec] sticky top-2.5">
                        <div className="bg-[#f8f8f8] rounded-lg p-3.75 text-[#a1a1a1] font-semibold mb-4">
                            Benzer Makaleler
                        </div>
                        <ul>
                            <li className="pb-1.25 mb-1.25 border-b border-b-[#eee]">
                                <p className="text-[#6f6f6f] font-medium hover:text-black transition-colors duration-300 ease-in-out cursor-pointer">Emlak Vergisi Nedir Ne Zaman ve Nasıl Ödenir</p>
                                <p className="text-sm text-[#b8b8b8] font-medium">19 Kasım 2024</p>
                            </li>
                            <li>
                                <p className="text-[#6f6f6f] font-medium hover:text-black transition-colors duration-300 ease-in-out cursor-pointer">Gayrimenkul ve Emlak Yatırımı Nasıl Yapılır?</p>
                                <p className="text-sm text-[#b8b8b8] font-medium">15 Kasım 2024</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full mt-30 mb-15">
                <AppLinks />
            </div>
            <div className="w-full mt-22.5">
                <Footer />
            </div>
        </div>
    )
}