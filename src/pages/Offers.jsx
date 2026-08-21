import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { OfferCard } from "../components/OfferCard"

export function Offers() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-350">
                <div className="flex items-start">
                    <div className="w-[28%] sticky top-0">
                        <Sidebar />
                    </div>
                    <div className="w-[72%] pl-7.5">
                        <h2 className="text-[32px] text-[#212529] font-medium mb-2">Aldığım teklifler</h2>
                        <div className="p-4 mb-4 bg-[#fff3cd] rounded-lg">
                            <p className="text-[#664d03]">Bu sayfada sadece sizin oluşturduğunuz ilanların tekliflerini görüntüleyebilirsiniz.</p>
                        </div>
                        <div>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg">İlan</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Geçerli Fiyat</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Pass / Komisyon</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 ">Teklif Edilen Tutar</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Durum</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Oluşturma Tarihi</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-r-lg">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                    <OfferCard />
                                </tbody>
                            </table>
                        </div>
                    </div>
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