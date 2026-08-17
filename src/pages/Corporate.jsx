import { Header } from "../components/Header";
import corporate from "../assets/corporate.png"
import { CorporateCard } from "../components/CorporateCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function Corporate() {
    return (
        <div className='flex flex-col items-center'>
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
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="">Hakkımızda</a>
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="">Misyon</a>
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="">Vizyon</a>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-350 py-30">
                <CorporateCard />
            </div>
            <div className="w-full bg-[#F7F6FB]">
                <div className="w-full max-w-350 py-30">
                    <CorporateCard />
                </div>
            </div>
            <div className="w-full max-w-350 py-30">
                <CorporateCard />
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