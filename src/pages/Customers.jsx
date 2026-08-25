import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import graySearch from "../assets/gray-search.png"
import { CustomerCard } from "../components/CustomerCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Customers() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader />
            <div className="w-full max-w-350 mt-12.5">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-[#212529] text-[32px]">Müşteriler</h2>
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center relative">
                            <img className="w-4 h-4 absolute left-1" src={graySearch} alt="" />
                            <input className="text-sm bg-[#f8f8f8] pl-7 rounded-lg h-9.25 placeholder:text-sm" type="text" placeholder="Müşteri adı ile arayın" />
                        </div>
                        <a className="text-[#4b4b4b] bg-[#f1f1f1] text-sm py-2 px-5 font-semibold rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out cursor-pointer" href="">Müşteri Oluştur</a>
                    </div>
                </div>
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg">İsim ve Soyisim</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5">E-Posta</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5">Telefon</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5">Dil</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5">Notunuz</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5">Oluşturma Tarihi</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-r-lg">Teklif ve İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CustomerCard />
                            <CustomerCard />
                            <CustomerCard />
                            <CustomerCard />
                            <CustomerCard />
                            <CustomerCard />
                        </tbody>
                    </table>
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