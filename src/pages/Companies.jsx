import { CompanyCard } from "../components/CompanyCard"
import { CompanyFilter } from "../components/CompanyFilter"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Companies({loged}) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Firmalar</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div>
                    <div>
                        <h2 className="text-[32px] mb-2 font-medium">Üye firmalar</h2>
                        <p className="text-sm text-[#9A9A9A]">
                            Üye firmaların yetkililerin iletişim bilgilerini ve yetkili oldukları proje ve gayrimenkulleri buradan görebilirsiniz.
                        </p>
                    </div>
                    <CompanyFilter />
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex justify-between flex-wrap my-5 -mx-3.75 max-[992px]:m-0">
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
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