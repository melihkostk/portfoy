import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ProfileCard } from "../components/ProfileCard"
import { Sidebar } from "../components/Sidebar"

export function Profile() {
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
                    <div className="w-[28%] max-[992px]:w-full">
                        <Sidebar />
                    </div>
                    <div className="w-[72%] pl-7.5 max-[992px]:w-full max-[992px]:pl-0">
                        <div className="flex max-[992px]:flex-wrap justify-between -ml-3.75 -mr-3.75">
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                        </div>
                        <div className="mt-7.5">
                            <h2 className="mb-5 text-[25px] text-[#212529]">Güncellenme Gerektiren İlanlar</h2>
                            <div className="bg-[#fff3cd] text-[#664d03] p-4 rounded-lg max-[992px]:mb-4">
                                Hiç kayıt yok
                            </div>
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