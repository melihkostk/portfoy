import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { useEffect } from "react";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function EditProperty({ loged }) {

    const { id } = useParams();

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-7.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"}</p>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="w-full flex justify-between items-center sticky top-0">
                    <div>
                        <h1 className="text-[25px]">KEYFE KEDER DOSTA GİDER</h1>
                        <ul className="flex text-sm text-[#7d7d7d]">
                            <li>
                                Taslak -
                            </li>
                            <li>
                                CR0285ARS0003000015 -
                            </li>
                            <li>
                                Arsa -
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex">
                            <li>
                                <a className="py-2.5 px-5 text-sm text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out" href="">İlan Bilgileri</a>
                            </li>
                            <li>
                                <a className="py-2.5 px-5 text-sm text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out" href="">Galeri</a>
                            </li>
                            <li>
                                <a className="py-2.5 px-5 text-sm text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out" href="">Teklifler</a>
                            </li>
                            <li>
                                <a className="py-2.5 px-5 text-sm text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out" href="">Hareketler</a>
                            </li>
                            <li>
                                <a className="py-2.5 px-5 text-sm text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out" href="">Ayarlar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg">
                    <p className="text-[#664d03]">Bu ilan şuanda taslak durumunda, ilan bilgilerinizi tamamladıktan sonra yayınlayabilirsiniz.</p>
                    <button className="bg-[#ffca64] text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out">Şimdi Yayınla</button>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                    <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                        <h5 className="text-[#676767] text-lg py-1.25">Temel Bilgiler</h5>
                    </div>
                    <div className="p-4">
                        <div className="px-3">
                            <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                            <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                        </div>
                        <div className="flex">
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex-1 px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                    <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                        <h5 className="text-[#676767] text-lg py-1.25">Harita Bilgisi</h5>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col items-center justify-center h-50">
                            <p className="text-[#6c757d] mb-4">Harita üzerinde ilanın konumunu belirleyin</p>
                            <button className="text-sm text-white py-2 px-5 rounded-lg cursor-pointer bg-[#27c5d2] hover:bg-[#026872] transition-colors duration-300 ease-in-out">Konum Belirleyin</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                    <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                        <h5 className="text-[#676767] text-lg py-1.25">Arsa Bilgileri</h5>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="w-[25%] px-3">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="flex gap-1">
                    <button className="text-sm bg-[#27c5d2] text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Güncelle</button>
                    <button className="text-sm bg-[#F1F1F1] text-[#4B4B4B] rounded-lg py-2 px-5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Güncelle ve Yayınla</button>
                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-10'>
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