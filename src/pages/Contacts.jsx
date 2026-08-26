import { Header } from "../components/Header";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import grayLinkedIn from "../assets/gray-linkedIn.png"
import grayFacebook from "../assets/gray-facebook.png"
import grayInsta from "../assets/gray-insta.png"
import grayX from "../assets/gray-x.png"

export function Contacts() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İletişim</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start mb-12 max-[992px]:flex-col">
                    <div className="flex-1 max-[992px]:pr-0 pr-37.5 max-[992px]:mb-7.5">
                        <h1 className="text-[40px] text-[#212529] font-bold mb-12.5">İletişim Bilgileri</h1>
                        <div className="mb-10">
                            <p className="text-sm text-[#212529] opacity-70 uppercase font-medium">Telefon</p>
                            <a className="text-xl text-black font-bold hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/tel: 0 850 851 44 94">
                                0 850 851 44 94
                            </a>
                        </div>
                        <div className="mb-10">
                            <p className="text-sm text-[#212529] opacity-70 uppercase font-medium">E-Posta</p>
                            <a className="text-xl text-black font-bold hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="mailto:support@port-foy.com">
                                support@port-foy.com
                            </a>
                        </div>
                        <div className="mb-10">
                            <p className="text-sm text-[#212529] opacity-70 uppercase font-medium">
                                Adres
                            </p>
                            <p className="text-black text-base font-medium">
                                Nef 9 Palaza Sultan Selim Mahallesi Hümeyra Sokak B Blok No: 7/73 Kağıthane Istanbul
                            </p>
                        </div>
                        <ul className="flex gap-2.5 flex-wrap">
                            <li>
                                <a className="bg-[#00000005] py-2.5 px-3.75 rounded-lg text-black font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out" href="">Fiyatlandırma</a>
                            </li>
                            <li>
                                <a className="bg-[#00000005] py-2.5 px-3.75 rounded-lg text-black font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out" href="">Sıkça Sorulan Sorular</a>
                            </li>
                            <li>
                                <a className="bg-[#00000005] py-2.5 px-3.75 rounded-lg text-black font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out" href="">Port-foy'ü keşfet</a>
                            </li>
                        </ul>
                        <div className="mt-10">
                            <p className="text-sm uppercase mb-2.5 text-[#212529] opacity-60 font-medium">Bizi takip edin</p>
                            <div className="flex">
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5" href="https://www.linkedin.com/company/port-foy-com">
                                    <img className="w-7 h-7" src={grayLinkedIn} alt="" />
                                </a>
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5" href="https://x.com/PortFoycom">
                                    <img className="w-7 h-7" src={grayX} alt="" />
                                </a>
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5" href="https://www.facebook.com/people/Port-Foycom/61566855802447/">
                                    <img className="w-7 h-7" src={grayFacebook} alt="" />
                                </a>
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5" href="https://www.instagram.com/portfoycom/">
                                    <img className="w-7 h-7" src={grayInsta} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border border-[#eee] rounded-lg p-7.5 max-[992px]:w-full">
                        <h2 className="text-[32px] text-[#212529] font-semibold mb-10">İletişim Formu</h2>
                        <form action="">
                            <input className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="name" placeholder="Adınız ve Soyadınız" required />
                            <input className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="email" placeholder="E-Posta" required />
                            <input className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="phone" placeholder="Telefon" required />
                            <input className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="subject" placeholder="Konu" required />
                            <textarea className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" name="message" placeholder="Mesajınız" required></textarea>
                            <button className="text-white text-sm rounded-lg cursor-pointer bg-[#27C5D2] py-2 px-5 font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}