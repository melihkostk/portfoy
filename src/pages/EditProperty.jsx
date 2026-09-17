import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { PropertySettingsCard } from "../components/PropertySettingsCard";
import defaultProperty from "../assets/default-property.jpg"
import chain from "../assets/chain.png"

export function EditProperty({ loged }) {

    const [editType, setEditType] = useState("info");
    const [understand, setUnderstand] = useState(true)

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
                                <button onClick={() => setEditType("info")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "info" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>İlan Bilgileri</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("galery")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "galery" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Galeri</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("move")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "move" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Hareketler</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("settings")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "settings" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Ayarlar</button>
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
            {editType === "info" && <div className="w-full max-w-[90%]">
                <div className="w-full mb-7.5">
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
                <div className="w-full mb-7.5">
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
                <div className="w-full mb-7.5">
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
                <div className="w-full mb-7.5">
                    <div className="flex gap-1">
                        <button className="text-sm bg-[#27c5d2] text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Güncelle</button>
                        <button className="text-sm bg-[#F1F1F1] text-[#4B4B4B] rounded-lg py-2 px-5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Güncelle ve Yayınla</button>
                    </div>
                </div>
            </div>}
            {editType === "settings" && <div className="w-full max-w-[90%]">
                <div className="w-full mb-7.5">
                    <div className="flex flex-wrap ">
                        <PropertySettingsCard
                            title="İlanı Pasife Al"
                            description="İlan havuzunda yer almasını istemediğiniz ilanları pasif durumuna alabilirsiniz"
                            button="Pasife Al"
                        />
                        <PropertySettingsCard
                            title="İlanı Öne Çıkar"
                            description="Belirli bir süre için ilanınızı öne çıkararak daha fazla kullanıcının görmesini sağlayabilirsiniz."
                            button="İlanı Öne Çıkar"
                        />
                        <PropertySettingsCard
                            title="İlanı Kopyala"
                            description="Bu ilanın galeri görselleri dahil tüm özelliklerini kullanarak yeni bir ilan oluşturabilirsiniz."
                            button="Kopyala"
                        />
                        <PropertySettingsCard
                            title="İlanı Sil"
                            description="Bu ilana ait hareketleri, teklifleri ve benzeri tüm kayıtları tamamen kaldırın."
                            button="İlanı Sil"
                        />
                        <PropertySettingsCard
                            title="İlan Satıldı"
                            description="İlanı satıldı olarak işaretleyin ve tercihinize göre portföyünüzde kalmasını sağlayın."
                            button="İlan Satıldı"
                        />
                    </div>
                </div>
            </div>}
            {editType === "move" && <div className="w-full max-w-[90%] p-2.5 border border-[#f8f8f8] rounded-lg">
                <div className="w-full mb-7.5 p-4">
                    <div className="flex p-3.75">
                        <div className="w-15 h-15">
                            <img className="w-full h-full rounded-full" src="https://ui-avatars.com/api/?name=Enes+Bayba%C4%9Fan&background=d0d0d0&color=fff&size=32&bold=1&uppercase=1&format=svg&length=2" alt="" />
                        </div>
                        <div className="ml-4">
                            <h5>
                                <a className="text-black text-base opacity-70">Enes Baybağan</a>
                                <small className="text-sm text-[#6c757d] ml-1">1 yıl önce</small>
                            </h5>
                            <p className="text-lg text-[#6c757d]">CR0285ARS0003000015 numaralı ilanı oluşturdu</p>
                        </div>
                    </div>
                </div>
            </div>}
            {editType === "galery" && <div className="w-full max-w-[90%]">
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Kapak Fotoğrafı</h5>
                        </div>
                        <div className="p-4">
                            {understand && <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg">
                                <p className="text-[#664d03]">Lütfen logolu resimler eklemeyin. Aksi halde ilanınız pasif edilecektir</p>
                                <button onClick={() => setUnderstand(false)} className="bg-[#ffca64] text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out">Anladım</button>
                            </div>}
                            <div className="h-87.5 rounded-lg relative">
                                <img className="w-full h-full object-cover rounded-lg" src={defaultProperty} alt="" />
                                <div className="absolute flex items-center bottom-6 right-6">
                                    <button className="bg-[#f1f1f1] cursor-pointer text-[#4b4b4b] py-2 px-5 rounded-lg mr-2 hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                        <img className="w-5 h-5" src={chain} alt="" />
                                    </button>
                                    <button className="bg-[#f1f1f1] cursor-pointer text-[#4b4b4b] py-2 px-5 rounded-lg text-sm hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Kapak Fotoğrafını Değiştir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Arsa Fotoğrafı</h5>
                        </div>
                        <div className="p-4">
                            <div className="h-50 text-center p-5 flex items-center justify-center border-2 border-[#eee] border-dashed">
                                <input className="w-full h-full" type="file" id="file" hidden></input>
                                <label className="w-full h-full flex items-center justify-center cursor-pointer text-xl text-[#929292]" htmlFor="file">
                                    Dosyaları buraya sürükleyin veya seçmek için tıklayın
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Videolar</h5>
                        </div>
                        <div className="p-4">
                            <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg">
                                <p className="text-[#664d03]">Henüz video yüklemediniz</p>
                            </div>
                            <div>
                                <button className="bg-[#f1f1f1] cursor-pointer text-[#4b4b4b] text-sm rounded-lg py-2 px-5 hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Video Yükleyin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
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