import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { ProposalCard } from "../components/ProposalCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Proposals() {
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
                    <div className="w-[28%]">
                        <Sidebar />
                    </div>
                    <div className="w-[72%] pl-7.5">
                        <h2 className="text-[32px] text-[#212529] mb-2">Müşteriye gönderilen teklifler</h2>
                        <div>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg">#</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Müşteri</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Değerlendirme</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Durum</th>
                                        <th className="text-start bg-[#ececec] py-4 px-2.5">Oluşturma Tarihi</th>
                                        <th className="text-end bg-[#ececec] py-4 px-2.5 rounded-r-lg">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                    <ProposalCard />
                                </tbody>
                            </table>
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