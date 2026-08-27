import { Header } from "../components/Header"
import { CompanyHeader } from "../components/CompanyHeader"
import { FilterSidebar } from "../components/FilterSidebar"
import { PropertiesCard } from "../components/PropertiesCard"
import { Footer } from "../components/Footer"
import { AppLinks } from "../components/AppLinks"

export function Company({loged}) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader />
            <div className="max-w-[90%] w-full pt-12.5">
                <div className="flex max-[992px]:flex-col">
                    <div className="w-[26%] max-[992px]:w-full">
                        <FilterSidebar />
                    </div>
                    <div className="w-[74%] max-[992px]:w-full max-[992px]:pl-0 pl-7.5 flex flex-wrap">
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                        <PropertiesCard page="company" />
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
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