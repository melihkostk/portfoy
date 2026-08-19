import logo from "../assets/logo.svg"
import video from "../assets/video-cover.png"
import play from "../assets/play.png"
import person from "../assets/gray-person.png"
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import location from "../assets/location.png"
import menu from "../assets/menu.png"
import pdf from "../assets/pdf.png"
import file from "../assets/file.png"
import downArrow from "../assets/down-arrow.png"
import { Link } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { LanguageSelect } from "../components/LanguageSelect"

export function Application() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-350">
                <div className="flex">
                    <div className="flex-1 pr-12.5">
                        <div>
                            <LanguageSelect />
                        </div>
                        <div className="mt-7.5 mb-25 w-55">
                            <Link to={"/"}>
                                <img className="max-w-full" src={logo} alt="" />
                            </Link>
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
                                <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/"} href="">
                                    Port-foy'a Dön
                                </Link>
                                <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/"} href="">
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
                                        <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Adınız ve Soyadınız</label>
                                        <div className="relative flex items-center ">
                                            <img className="w-7 h-7 absolute bottom-2 left-2" src={person} alt="" />
                                            <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Adınız ve Soyadınız" required />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-col mx-2.5 flex-1">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Telefon Numaranız</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-6 h-6 absolute bottom-2 left-2" src={phone} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Telefon Numaranız" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mx-2.5 flex-1">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">E-posta Adresiniz</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-5 h-5 absolute bottom-2 left-2" src={mail} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="E-posta Adresiniz" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Konum Bilgileri</h3>
                                    <div className="flex flex-col gap-3.75">
                                        <div className="flex justify-between border border-[#EDEDED] rounded-lg">
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center">
                                                <p>Ülke Seçin</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center">
                                                <p>İl Seçin</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center">
                                                <p>İlçe Seçin</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                            <div className="py-1.5 pl-3 pr-9 text-[#B4B4B4] font-medium flex items-center">
                                                <p>Mahalle</p>
                                                <img className="w-4 h-4" src={downArrow} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Açık Adres</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-6 h-6 absolute bottom-2 left-2" src={location} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Açık Adres" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Firma Bilgileri</h3>
                                    <div className="flex flex-wrap gap-3.75 items-start">
                                        <div className="flex flex-col w-[28%] mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Firma Ünvanı</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-7 h-7 absolute bottom-2 left-2" src={person} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Firma Ünvanı" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Faaliyet Alanı</label>
                                            <div className="relative flex items-center ">
                                                <img className="w-4 h-4 absolute top-3.5 left-2" src={menu} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Faaliyet Alanı" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Vergi Levhası (PDF)</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={pdf} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Dosya Seçin" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Vergi Numarası</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={file} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Vergi Numarası" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Ticaret Odası Faaliyet Belgesi (PDF)</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={pdf} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Dosya Seçin" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[28%] mx-2.5">
                                            <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="">Mersis Numarası</label>
                                            <div className="relative flex items-center">
                                                <img className="w-5 h-5 absolute top-2.5 left-2" src={file} alt="" />
                                                <input className="border border-[#EDEDED] rounded-lg h-10 w-full pl-10 font-medium" type="text" placeholder="Mersis Numarası" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12.5">
                                    <h3 className="text-sm mb-3.75 uppercase text-[#C9C9C9] font-medium">Yasal Sorumluluklar</h3>
                                    <div className="flex items-center gap-1.25">
                                        <input className="cursor-pointer w-5 h-5" type="checkbox" required />
                                        <label className="text-sm text-[#868686] font-medium" htmlFor="">Rıza metnini ve kişisel verilerin korunması kanununu  okudum ve kabul ediyorum
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-[#27C5D2] text-white font-medium w-1/2 py-3 rounded-lg hover:bg-[#026872] hover:shadow-[0_0_30px_#27C5D2] transition-[background-color,box-shadow] duration-300 ease-in-out cursor-pointer">Gönder</button>
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