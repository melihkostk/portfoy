import { Header } from "../components/Header"
import { DiscoverAccordion } from "../components/DiscoverAccordion"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Faqs() {
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-350">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Sıkça Sorulan Sorular</span></p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-30">
                <div className="w-full max-w-350">
                    <div className="text-center flex flex-col items-center mb-15">
                        <h1 className="text-[34px] text-[#212529] font-medium mb-2.5">Sıkça Sorulan Sorular</h1>
                        <p className="text-[#525252] max-w-[40%]">
                            Port-foy.com kullanımı kolay bir platformdur.
                            Size istihdam ekonomisi ve hız kazandıracak şekilde planlanmıştır.
                            Sorularınız için bizlere her türlü platformdan ulaşabileceğinizi bilmenizi isteriz.
                        </p>
                    </div>
                    <div>
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
                        <DiscoverAccordion />
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