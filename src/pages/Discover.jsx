import { Header } from "../components/Header";
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import frame from "../assets/screen.png"
import { DiscoverCard } from "../components/DiscoverCard";
import { DiscoverAccordion } from "../components/DiscoverAccordion";
import { PricingCard } from "../components/PricingCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function Discover() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Keşfet</span></p>
                </div>
            </div>
            <div className="w-full max-w-350">
                <div className="flex">
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
                    <div className="flex-1">
                        <img className="w-full max-w-full" src={frame} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-350">
                <div className="text-center flex flex-col items-center my-15">
                    <h1 className="mb-2.5 text-[32px] text-[#212529] font-semibold">
                        Port-Foy'ü Keşfet
                    </h1>
                    <p className="text-base text-[#525252] font-medium max-w-[45%]">
                        Size daha hızlı ve daha ekonomik çözümler sunan port-foy.com’un size sunduğu kolaylıklara birlikte inceleyelim.
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
            <div className="w-full bg-[#F7F6FB] flex items-center justify-center py-30">
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
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 flex flex-col items-center'>
                <div className='w-full max-w-350'>
                    <div className='flex flex-col items-center'>
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