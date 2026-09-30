import { Header } from "../components/Header"
import defaultProperty from "../assets/default-property.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Boost({ loged }) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İlanlar {">"}</span><span className="text-[#9a9898]">Öne Çıkar</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between items-center gap-12.5">
                    <div className="w-1/2">
                        <h1 className="text-[35px] max-w-[80%] font-semibold mb-7.5">İlanınız daha fazla Port-foy kullanıcısının dikkatini çeksin ister misiniz?</h1>
                        <p className="text-[#808080]">İlanı öne çıkarma başvuru yapın ve daha çok dikkatleri ilanınıza toplayın.</p>
                    </div>
                    <div className="w-1/2 p-7.5">
                        <div className="bg-[#f9d7da] text-[#842029] border border-[#f5c2c7] p-4 mb-4 rounded-lg">
                            Sadece yayında olan ilanlarınızı öne çıkarabilirsiniz.
                        </div>
                        <div className="p-7.5 bg-[#f8f8f8] rounded-lg">
                            <div>
                                <h2 className="text-[25px] font-semibold mb-2">İlanı Öne Çıkarma Başvurusu</h2>
                                <p className="text-sm text-[#212529] mb-4">
                                    Başvurunuzu yapmadan önce lütfen ilanınızın, tüm detayları ile birlikte
                                    doğru bir şekilde girildiğinden emin olun. İlanınızı tek seferde 60 güne
                                    kadar öne çıkarabilirsiniz.
                                </p>
                            </div>
                            <div className="bg-white flex items-center justify-between rounded-lg p-3.75">
                                <div className="w-50">
                                    <img className="w-full rounded-lg h-auto" src={defaultProperty} alt="" />
                                </div>
                                <div className="pl-7.5 w-[calc(100%-200px)]">
                                    <p className="text-lg font-semibold">KEYFE KEDER DOSTA GİDER</p>
                                    <p className="text-sm opacity-70 mb-4">CR0285ARS0003000015</p>
                                    <ul className="flex text-sm text-[#747474] gap-2.5">
                                        <li>Konya / Selçuklu</li>
                                        <li>Hazır</li>
                                        <li>30 Eylül 2024</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-10'>
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