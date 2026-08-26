import { CreateButton } from "../components/CreateButton"
import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function Create() {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İlanlar</span> {">"} <span className="text-[#9a9898]"> Yeni İlan Oluştur</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%] flex items-center justify-center">
                <div className="w-[50%] max-[992px]:w-full">
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">Temel Bilgiler</p>
                        <input className="p-3.75 rounded-lg border border-[#ededed] w-full" type="text" placeholder="İlan Başlığı" />
                        <div className="flex overflow-x-auto scrollbar-none mt-7.5">
                            <CreateButton />
                            <CreateButton />
                            <CreateButton />
                            <CreateButton />
                            <CreateButton />
                        </div>
                        <div className="mt-5">
                            <select className="w-full bg-[#f8f8f8] text-[#818181] p-2.5 rounded-lg" name="" id="">
                                <option value="">Seçim Yapın</option>
                                <option value="">Proje Apartman</option>
                                <option value="">Proje Villa</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">Konum Bilgileri</p>
                        <div>
                            <div className="flex justify-start flex-wrap items-start max-[992px]:flex-col">
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">Ülke Seçin</label>
                                    <select className="p-2.5 border border-[#e8e8e8] rounded-lg">
                                        <option value="">Ülke Seçin</option>
                                        <option value="">Türkiye</option>
                                        <option value="">Kuzey Kıbrıs Türk Cumhuriyeti</option>
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">İl Seçin</label>
                                    <select className="p-2.5 border border-[#e8e8e8] rounded-lg">
                                        <option value="">Ankara</option>
                                        <option value="">Konya</option>
                                        <option value="">İstanbul</option>
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">İlçe Seçin</label>
                                    <select className="p-2.5 border border-[#e8e8e8] rounded-lg">
                                        <option value="">İlçe Seçin</option>
                                    </select>
                                </div>
                                <div className="flex flex-col max-[992px]:m-0 m-2.5 flex-1 max-[992px]:w-full">
                                    <label className="text-sm text-[#212529] opacity-50" htmlFor="">Mahalle</label>
                                    <select className="p-2.5 border border-[#e8e8e8] rounded-lg">
                                        <option value="">Mahalle Seçin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-2.5 max-[992px]:w-full max-[992px]:px-0">
                                <label className="text-sm text-[#212529] opacity-50" htmlFor="">Adres</label>
                                <input className="p-2.5 rounded-lg border border-[#e8e8e8] block w-full" type="text" placeholder="Adres" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">Fiyat Bilgileri</p>
                        <div>
                            <div className="flex flex-col items-center">
                                <p className="mb-1.25 text-sm text-[#212529] text-center opacity-50">Lütfen ilanınızda kullanmak istediğiniz fiyatlandırma tipini seçin.</p>
                                <label className="text-center bg-[#e2e2e2] text-sm font-semibold py-2.5 px-7.5 rounded-lg mb-7.5">Pass Fiyatı</label>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="mb-1.25 text-sm text-[#212529] opacity-50 text-center">
                                    Lütfen ilanınızda kullanmak istediğiniz para birimini seçin.
                                </p>
                                <div className="flex items-center mb-7.5">
                                    <div className="text-sm text-[#212529] font-semibold py-2.5 px-7.5 bg-[#e2e2e2] rounded-lg">
                                        TRY
                                    </div>
                                    <div className="text-sm text-[#212529] font-semibold py-2.5 px-7.5">
                                        USD
                                    </div>
                                    <div className="text-sm text-[#212529] font-semibold py-2.5 px-7.5">
                                        EUR
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="mb-5">
                                <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">Pass Fiyatı</label>
                                <input className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="text" placeholder="Pass Fiyatı" />
                            </div>
                            <div className="mb-5">
                                <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">Satış Fiyatı</label>
                                <input className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="text" placeholder="Satış Fiyatı" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-12.5">
                        <p className="uppercase text-sm text-[#212529] opacity-60 text-center mb-5 font-medium">Yetki Belgesi</p>
                        <div>
                            <label className="text-sm text-[#212529] opacity-50 mb-2" htmlFor="">Proje Satış Vekaletinizi Ekleyin</label>
                            <input className="block rounded-lg p-2.5 border border-[#e8e8e8] w-full" type="file" accept="application/pdf" required />
                            <div className="p-4 mt-2 mb-4 bg-[#fff3cd] rounded-lg text-[#664d03]">
                                <p>Pazarlama Firması türündeki firma olarak herhangi bir inşaat firmasından belirli sayıda bir daireyi satmak istiyorsanız ekteki belgeyi inşaat firmasına doldurtup imzalatıp ve sisteme yüklemeniz yeterli olacaktır.</p>
                                <p className="mt-5 mb-4">
                                    Yetki belgesi örneğini indirin
                                </p>
                                <a href="https://demo.pigasoft.com/portfoy/public/licence-of-authorization.pdf" className="uppercase bg-[#FFCA64] py-2 px-5 rounded-lg text-black text-sm hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out cursor-pointer">İndir</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="h-12.5 bg-[#27C5D2] px-5 cursor-pointer rounded-[5px] text-white whitespace-nowrap hover:bg-[#026872] transition-colors duration-300 ease-in-out">Yeni İlan Oluştur</button>
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
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