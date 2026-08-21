import { Header } from "../components/Header"
import { NewsCard } from '../components/NewsCard'
import { PortfoyCard } from "../components/PortfoyCard"
import { PortfoyText } from "../components/PortfoyText"
import { PricingCard } from '../components/PricingCard'
import { AppLinks } from '../components/AppLinks'
import { Footer } from '../components/Footer'
import { Link } from "react-router-dom"
import { Filter } from "../components/Filter"

export function Home() {

  return (
    <div className='flex flex-col items-center font-sf'>
      <Header />
      <div className='w-full max-w-350 py-20'>
        <h1 className='text-[35px] text-black font-medium mb-2'>İlanları Filtrele</h1>
        <Filter />
      </div>
      <div className='w-full max-w-350 flex flex-col items-center mb-30'>
        <div className='w-full flex flex-col items-center mb-10'>
          <h2 className='text-[32px] text-[#212529] mb-2 font-medium text-center'>Üç Adımda Port-foy’unuzu Yönetin</h2>
          <p className='max-w-[40%] text-center text-[#212529]'>Port-foy.com sizin için çok kolaylaştırıldı. Sizi bekleyen birkaç adımdan sonra işleriniz artık daha da kolaylaşacak.</p>
        </div>
        <div className='flex items-start gap-7.5 justify-between max-w-285 mb-12.5'>
          <PortfoyCard />
          <PortfoyCard />
          <PortfoyCard />
        </div>
        <div>
          <Link to={"/application"} className='bg-[#f1f1f1] text-[#4b4b4b] px-5 py-2 text-sm rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out cursor-pointer'>FIRMA BASVURUSU</Link>
        </div>
      </div>
      <div className='w-full bg-[#f7f6fb] flex flex-col items-center py-30'>
        <div className='w-full max-w-350'>
          <div className='flex justify-between items-start mb-12.5'>
            <div>
              <h2 className='text-[30px] text-black font-medium mb-2'>Port-Foy'ü Keşfet</h2>
              <p className='text-[15px] opacity-70 text-[#212529] font-medium'>Size daha hızlı ve daha ekonomik çözümler sunan port-foy.com’un size sunduğu kolaylıklara birlikte inceleyelim.</p>
            </div>
            <div>
              <Link to={"/discover"} className='text-[#818181] text-sm font-medium hover:text-[#27C5D2] transition-colors duration-300 ease-in-out'>Tümünü Gör</Link>
            </div>
          </div>
          <div className='flex flex-wrap -mx-7.5'>
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
            <PortfoyText />
          </div>
        </div>
      </div>
      <div className='w-full mt-30 flex flex-col items-center mb-30'>
        <div className='w-full max-w-350'>
          <div className='flex flex-col items-center'>
            <h2 className='text-[2rem] text-center mb-2 font-semibold'>Fiyatlandırma</h2>
            <p className='text-[#525252] text-center max-w-[45%] font-medium'>Firmanızı tipini seçin, sizin için hazırlanmış özel paketler fırsatından faydalanın. Ücretsiz kullanım dönemini yakalamak için acele edin.</p>
            <ul className='flex mt-10 border border-[#eee] p-2.5 rounded-lg'>
              <li>
                <button className='px-4 py-2 text-[#3e3e3e] font-medium bg-[#f4f4f4] hover:text-black cursor-pointer'>
                  Emlak Firması
                </button>
              </li>
              <li>
                <button className='px-4 py-2 text-[#3e3e3e] font-medium hover:text-black cursor-pointer'>
                  İnşaat Firması
                </button>
              </li>
              <li>
                <button className='px-4 py-2 text-[#3e3e3e] font-medium hover:text-black cursor-pointer'>
                  Emlak & İnşaat Firması
                </button>
              </li>
              <li>
                <button className='px-4 py-2 text-[#3e3e3e] font-medium hover:text-black cursor-pointer'>
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
      <div className='w-full bg-[#f7f7fb] py-18.75'>
        <div className='w-full mx-auto max-w-350 flex flex-col items-center justify-center'>
          <div className='flex justify-between w-full'>
            <h2 className='text-[#45443F] text-[32px] font-semibold'>Haberler ve Duyurular</h2>
            <Link to={"/articles"} className='text-[#B7B9BF] text-xl font-medium hover:text-[#45443f] transition-colors duration-300 ease-in-out' href="https://demo.pigasoft.com/portfoy/public/tr/articles">Tümünü Gör</Link>
          </div>
          <div className='flex items-start -mx-5'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
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

