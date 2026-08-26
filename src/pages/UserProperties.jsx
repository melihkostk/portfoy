import { Header } from "../components/Header"
import { PropertiesCard } from "../components/PropertiesCard"
import { Sidebar } from "../components/Sidebar"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function UserProperties() {
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
                        <h2 className="text-[32px] text-[#212529] font-medium mb-2">İlanlarım</h2>
                        <div>
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
                            <PropertiesCard page="myProperties" />
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