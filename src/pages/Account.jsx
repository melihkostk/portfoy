import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import pg from "../assets/pg.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"

export function Account({loged}) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[28%] max-[992px]:w-full">
                        <Sidebar />
                    </div>
                    <div className="pl-7.5 w-[72%] max-[992px]:w-full max-[992px]:pl-0">
                        <h2 className="text-[#212529] text-[25px] mb-5 font-semibold">Firma Bilgilerim</h2>
                        <div className="flex p-7.5 border border-[#eee] rounded-lg mb-10 max-[992px]:flex-col max-[992px]:gap-5">
                            <div className="flex w-1/2 max-[992px]:flex-col max-[992px]:w-full">
                                <div className="w-20 h-20 mr-5">
                                    <img className="max-w-full align-middle" src={pg} alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl text-[#212529] font-semibold mb-2.5">Burak Pigasoft</h1>
                                    <ul className="text-sm text-[#909090]">
                                        <li>
                                            Oluşturma Tarihi
                                            11 Eylül 2024
                                        </li>
                                        <li>
                                            Oluşturan
                                            Pigasoft
                                        </li>
                                        <li>
                                            Ekip
                                            23 Kişi
                                        </li>
                                    </ul>
                                    <div className="mt-7.5">
                                        <Link to={"/company"} className="text-xs text-[#909090] font-semibold hover:text-black transition-colors duration-300 ease-in-out" href="">
                                            Firma Profilini Görüntüle
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center w-1/2 max-[992px]:w-full">
                                <div>
                                    <h3 className="text-xl text-[#212529] mb-2 font-medium">Abonelik Bilgileri</h3>
                                    <div>
                                        <div className="flex items-center max-[992px]:flex-col max-[992px]:items-start gap-1.25">
                                            <p className="text-[25px] max-[992px]:text-lg text-[#212529] font-semibold w-[80%] max-[992px]:w-full">
                                                Premium Pazarlama Firması Paket
                                            </p>
                                            <p className="w-[20%] bg-[#f8f8f8] py-1.25 px-2 rounded-lg text-sm text-center max-[992px]:max-w-fit max-[992px]:whitespace-nowrap">
                                                Deneme Sürümü
                                            </p>
                                        </div>
                                        <p className="text-sm text-[#a1a1a1]">
                                            Sona Erme Süresi
                                            28 Ocak 2027
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-[25px] mb-5 font-semibold">Hesap Bilgilerim</h2>
                            <form action="">
                                <div className="flex mb-2.5">
                                    <div className="pr-3 w-1/2">
                                        <label htmlFor="">İsim ve Soyisim</label>
                                        <input className="block border border-[#D9D9D9] w-full rounded-lg py-1.5 px-3" type="text" value={"Pigasoft"} />
                                    </div>
                                    <div className="pl-3 w-1/2">
                                        <label htmlFor="">E-Posta</label>
                                        <input className="block border border-[#D9D9D9] w-full rounded-lg py-1.5 px-3" type="mail" value={"admin@pigasoft.com"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-1/2 pr-3 max-[992px]:w-full max-[992px]:mb-2.5 max-[992px]:pr-0">
                                        <label htmlFor="">Telefon</label>
                                        <div className="flex items-center gap-3.75">
                                            <div>
                                                <select className="border border-[#D9D9D9] rounded-lg text-base py-1.5 px-3" name="" id="">
                                                    <option value="357">(357)</option>
                                                    <option value="90" selected>(90)</option>
                                                    <option value="971">(971)</option>
                                                    <option value="01">(01)</option>
                                                </select>
                                            </div>
                                            <input className="block border border-[#D9D9D9] w-full rounded-lg py-1.5 px-3" type="text" placeholder="Telefon" value="5533773828"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <button className="text-white text-base font-semibold bg-[#27C5D2] px-5 rounded-[5px] h-12.5 whitespace-nowrap cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out" type="submit">Güncelle</button>
                                </div>
                            </form>
                        </div>
                        <div className="max-[992px]:mb-10">
                            <h2 className="text-[25px] mb-5 font-semibold">Şifre Değiştir</h2>
                            <div className="mb-4 bg-[#fff3cd] text-[#664d03] p-4 rounded-lg">
                                Henüz şifre değişikliği yok
                            </div>
                            <button className="bg-[#27C5D2] text-white text-sm py-2 px-5 font-semibold rounded-lg">Şifre Değiştir</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-10 max-[992px]:mb-7.5 max-[992px]:mt-7.5'>
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