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
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[28%] max-[992px]:w-full sticky top-0">
                        <Sidebar />
                    </div>
                    <div className="w-[72%] max-[992px]:w-full pl-7.5 max-[992px]:pl-0">
                        <h2 className="text-[32px] text-[#212529] font-medium mb-2">Aldığım teklifler</h2>
                        <div className="p-4 mb-4 bg-[#fff3cd] rounded-lg">
                            <p className="text-[#664d03]">Bu sayfada sadece sizin oluşturduğunuz ilanların tekliflerini görüntüleyebilirsiniz.</p>
                        </div>
                        <div className="overflow-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">İlan</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Geçerli Fiyat</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Pass / Komisyon</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap ">Teklif Edilen Tutar</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Durum</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap rounded-r-lg">İşlemler</th>
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
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
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