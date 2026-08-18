import logo from "../assets/logo.svg"
import video from "../assets/video-cover.png"
import play from "../assets/play.png"
import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"

export function Application() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-350">
                <div className="flex">
                    <div className="flex-1 pr-12.5">
                        <div className="mt-7.5 mb-25 w-55">
                            <img className="max-w-full" src={logo} alt="" />
                        </div>
                        <div>
                            <div className="relative max-w-110 mb-7.5 shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:opacity-50 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-[opacity,box-shadow] duration-300 ease-in-out">
                                <a href="https://demo.pigasoft.com/portfoy/public/storage/videos/1-video-firma-basvurusu.mp4" data-fancybox>
                                    <img className="w-full object-cover" src={video} alt="" />
                                </a>
                                <img className="border-6 border-[#27C5D2] rounded-full p-3 shadow-[0_0_60px_#27C5D2] bg-transparent backdrop-blur-sm absolute top-[40%] left-[42%] z-40" src={play} alt="" />
                            </div>
                            <h1 className="mb-5 text-[25px] font-semibold">Port-Foy ile tanışın</h1>
                            <p className="text-[#666666] font-medium mb-4">
                                Firmanızın ürettiği ya da satmak yetkisi olan gayrimenkullerinizi;
                                daha çok emlak firmasına ulaştırın. Hatta farklı şehirlerdeki emlak firmaları
                                da sizin ürünlerinizi görebilsin. Bunun için reklam vermenize gerek yok.
                                Hergün toplu mesaj sitelerinde “Drive link“ paylaşmanıza gerek yok.
                                Bırakın bunu sizin için biz daha profesyonel bir şekilde yapalım.
                            </p>
                            <ul className="list-disc mb-4 pl-8">
                                <li className="text-[#666666]">
                                    Firma bilgilerinizi girin
                                </li>
                                <li className="text-[#666666]">
                                    Onaylandıktan sonra firma profilinizi oluşturun
                                </li>
                                <li className="text-[#666666]">
                                    Gayrimenkul ürünlerinizi girin
                                </li>
                                <li className="text-[#666666]">
                                    Port-foy.com’un size sunduğu daha birçok kolaylığı keşfedin ve tadını çıkarın
                                </li>
                            </ul>
                            <div className="flex gap-2">
                                <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg" to={"/"} href="">
                                    Port-foy'a Dön
                                </Link>
                                <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg" to={"/"} href="">
                                    Başvuru Sorgulama
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-12.5">
                        <div className="mb-15">
                            <h2 className="text-[#686868] mb-2 text-[18px] font-medium">FIRMA BAŞVURUSU FORMU</h2>
                            <p className="text-sm text-[#a6a6a6] font-medium">Lütfen tüm alanları doğru bir şekilde doldurun.</p>
                        </div>
                        <div>
                            <form action="">
                                <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Kişisel Bilgiler</h3>
                                <div className="mb-12.5 flex flex-col flex-wrap gap-3.75">
                                    <div className="flex flex-col mx-2.5">
                                        <label className="text-sm text-[#868686] font-medium" htmlFor="">Adınız ve Soyadınız</label>
                                        <input className="border border-[#EDEDED] rounded-lg h-10" type="text" placeholder="Adınız ve Soyadınız" />
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-col mx-2.5 flex-1">
                                            <label className="text-sm text-[#868686] font-medium" htmlFor="">Telefon Numaranız</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Telefon Numaranız" />
                                        </div>
                                        <div className="flex flex-col mx-2.5 flex-1">
                                            <label className="text-sm text-[#868686] font-medium" htmlFor="">E-posta Adresiniz</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="E-posta Adresiniz" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Konum Bilgileri</h3>
                                    <div className="flex flex-col gap-3.75">
                                        <div className="flex justify-between border border-[#EDEDED] rounded-lg">
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium">
                                                <p>Ülke Seçin</p>
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium">
                                                <p>İl Seçin</p>
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium">
                                                <p>İlçe Seçin</p>
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium">
                                                <p>Mahalle</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Açık Adres</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Açık Adres" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Firma Bilgileri</h3>
                                    <div className="flex flex-wrap gap-3.75">
                                        <div className="flex flex-col w-[28%] mx-2.5">   
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Firma Ünvanı" />
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">   
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Firma Ünvanı" />
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">   
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Firma Ünvanı" />
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">   
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Firma Ünvanı" />
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">   
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Firma Ünvanı" />
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">   
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full" type="text" placeholder="Firma Ünvanı" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Yasal Sorumluluklar</h3>
                                    <div>
                                        <input type="checkbox" />
                                        <label className="text-sm text-[#868686] font-medium" htmlFor="">Rıza metnini ve kişisel verilerin korunması kanununu  okudum ve kabul ediyorum
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-[#27C5D2] text-white font-medium w-1/2 py-3 rounded-lg">Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb] mt-30 mb-15">
                <AppLinks />
            </div>
        </div>
    )
}