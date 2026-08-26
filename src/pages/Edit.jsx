import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function Edit() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader />
            <div className="w-full max-w-[90%] mt-12.5">
                <div>
                    <div className="p-12.5 max-[992px]:p-7.5">
                        <h2 className="text-[32px] text-[#212529]">Firma Bilgileri</h2>
                        <div className="flex flex-wrap justify-between max-[992px]:flex-col">
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0 ">
                                <label className="text-[#212529]" htmlFor="">Firma Adı</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="Burak Pigasoft" placeholder="Firma Adı" />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Firma Tipi</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="Pazarlama Firması" placeholder="Firma Tipi" />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Vergi Levhası (PDF)</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="file" placeholder="Firma Adı" />
                                <a className="text-sm text-[#7f7f7f] mt-1.25 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">Dosyayı Görüntüle</a>
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Vergi Numarası</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="0000000" placeholder="Vergi Numarası" />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Ticaret Odası Faaliyet Belgesi (PDF)</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="file" placeholder="Firma Adı" />
                                <a className="text-sm text-[#7f7f7f] mt-1.25 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">Dosyayı Görüntüle</a>
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Mersis Numarası</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="1111115" placeholder="Mersis Numarası" />
                            </div>
                        </div>
                    </div>
                    <div className="p-12.5 max-[992px]:p-7.5">
                        <h2 className="text-[32px] text-[#212529]">İletişim Bilgileri</h2>
                        <div className="flex flex-wrap justify-between max-[992px]:flex-col">
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">E-Posta</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="loos.katya@yandex.ru" placeholder="E-Posta" />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Telefon</label>
                                <div className="flex gap-3.75">
                                    <select className="py-1.5 pl-3 pr-9 border border-[#d9d9d9] rounded-lg" name="" id="">
                                        <option value="">(357)</option>
                                        <option value="">(90)</option>
                                        <option value="">(971)</option>
                                        <option value="">(01)</option>
                                    </select>
                                    <input className="px-3 py-1.5 w-full border border-[#D9D9D9] rounded-lg" type="text" value="(553) 300 68 25" placeholder="Mersis Numarası" />
                                </div>
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Website</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="http://www.burak.com" placeholder="Website" />
                            </div>
                        </div>
                    </div>
                    <div className="p-12.5 max-[992px]:p-7.5">
                        <h2 className="text-[32px] text-[#212529]">Fatura Bilgileri</h2>
                        <div className="flex max-[992px]:flex-col">
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Ticari Ünvan</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="“Delete”" placeholder="Ticari Ünvan" />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Vergi Dairesi</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="44" placeholder="Vergi Dairesi" />
                            </div>
                            <div className="flex flex-col w-[48%] max-[992px]:w-full m-2.5 max-[992px]:m-0">
                                <label className="text-[#212529]" htmlFor="">Firma Adresi</label>
                                <input className="px-3 py-1.5 border border-[#D9D9D9] rounded-lg" type="text" value="2" placeholder="Firma Adresi" />
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#198754] text-white rounded-lg py-2 px-5 ml-12.5">Kaydet</button>
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