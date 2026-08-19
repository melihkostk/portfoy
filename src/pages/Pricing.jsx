import { Header } from "../components/Header";
import { PricingCard } from "../components/PricingCard";
import { DiscoverCard } from "../components/DiscoverCard"
import { Questions } from "../components/Questions";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function Pricing() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Fiyatlandırma</span></p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full max-w-350'>
                    <div className='flex flex-col items-center my-15'>
                        <h2 className='text-[2rem] text-center mb-2 font-semibold'>Fiyatlandırma</h2>
                        <p className='text-[#525252] text-center max-w-[45%] font-medium'>Firmanızı tipini seçin, sizin için hazırlanmış özel paketler fırsatından faydalanın. Ücretsiz kullanım dönemini yakalamak için acele edin.</p>
                        <ul className='flex mt-10 border border-[#eee] p-2.5 rounded-lg'>
                            <li>
                                <button className='px-4 py-2 text-[#3e3e3e] font-medium bg-[#f4f4f4]'>
                                    Emlak Firması
                                </button>
                            </li>
                            <li>
                                <button className='px-4 py-2 text-[#3e3e3e] font-medium'>
                                    İnşaat Firması
                                </button>
                            </li>
                            <li>
                                <button className='px-4 py-2 text-[#3e3e3e] font-medium'>
                                    Emlak & İnşaat Firması
                                </button>
                            </li>
                            <li>
                                <button className='px-4 py-2 text-[#3e3e3e] font-medium'>
                                    Pazarlama Firması
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='flex w-full justify-center flex-wrap'>
                        <PricingCard />
                        <PricingCard />
                        <PricingCard />
                        <PricingCard />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className='w-full max-w-350'>
                    <div className="text-center flex flex-col items-center my-15">
                        <h1 className="text-[#212529] text-[34px] font-medium mb-2.5">Özellikler ve Avantajlar</h1>
                        <p className="text-[#525252] text-base max-w-[45%] font-normal">
                            Port-foy.com sizin için çözümler üretiyor.
                            Gayrimenkullerinizi en uzağa en doğru biçimde iletmek
                            ayrıca farklı bölgelerdeki firmaların ürünlerine
                            kolayca ulaşmak artık daha kolay.
                        </p>
                    </div>
                    <div>
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                        <DiscoverCard />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className='w-full max-w-350'>
                    <div className="text-center flex flex-col items-center my-15">
                        <h1 className="text-[34px] text-[#212529] font-semibold mb-2.5">Sıkça Sorulan Sorular</h1>
                        <p className="max-w-[45%]">
                            Port-foy.com kullanımı kolay bir platformdur.
                            Size istihdam ekonomisi ve hız kazandıracak şekilde planlanmıştır.
                            Sorularınız için bizlere her türlü platformdan ulaşabileceğinizi bilmenizi isteriz.
                        </p>
                    </div>
                    <div>
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                        <Questions />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-lg text-[#212529] font-semibold mb-1">Sizin için yeterli değil mi?</p>
                        <p className="text-sm text-[#767676] mb-4 font-medium">Her zaman sorularınızı yanıtlamaya hazırız</p>
                        <div>
                            <p className="text-[#212529] mb-4 font-medium">MÜŞTERI DESTEK HATTI</p>
                            <a className="text-[25px] text-black font-bold" href="">0 850 851 44 94</a>
                        </div>
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