import { Header } from "../components/Header"
import pg from "../assets/pg.jpg"
import heart from "../assets/heart.png"
import folder from "../assets/folder.png"
import defaultImg from "../assets/default-property.jpg"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { FeatureCard } from "../components/FeatureCard"

export function PropertiesDetail({ loged }) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Firmalar</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start">
                    <div className="w-1/2 p-3.75 border border-[#eee] rounded-lg">
                        <div className="flex">
                            <div className="w-40 h-112.5 overflow-y-auto flex flex-col pr-3.75 gap-3.75">
                                <div className="text-center">
                                    <p className="text-[#a0a0a0] text-xs uppercase font-semibold">Kapak Fotoğrafı</p>
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="text-center">
                                    <p className="text-[#a0a0a0] text-xs uppercase font-semibold">Site Çevresi Fotoğrafları</p>
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img className="rounded-lg" src={defaultImg} alt="" />
                                </div>
                            </div>
                            <div className="w-[calc(100%-160px)] pl-5">
                                <img className="w-full h-full object-cover" src={defaultImg} alt="" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="w-1/2 pl-12.5">
                        <p className="text-sm text-[#888888] mb-2.5">M0325APT00860002021461</p>
                        <h1 className="text-[25px] text-[#212529] mb-3.75 font-semibold">Müthiş ILAN</h1>
                        <p className="text-[#c2c2c2] text-sm">Burdur / Ağlasun / Yeşilbaşköy Köyü, Deregözü Mevkii</p>
                        <div className="flex items-center gap-5 bg-[#f2f2f2] p-3.75 w-fit rounded-lg my-7.5">
                            <div className="w-13.75 h-13.75 shadow-[0_0_30px_rgb(234_234_234/10%)]">
                                <img className="w-full h-full rounded-full bg-white" src={pg} alt="" />
                            </div>
                            <div>
                                <p className="mb-1.25 font-bold">Burak Pigasoft</p>
                                <p className="text-xs font-semibold">Firma 1 yıl önce katıldı</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="uppercase text-[#5f5f5f] text-xs font-semibold">Satış Fiyatı</p>
                            <p className="text-[#FFCA64] text-[25px] font-semibold">₺44.400.000</p>
                        </div>
                        <div className="flex gap-2.5 flex-wrap">
                            <button className="bg-[#27C5D2] w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                <img className="w-5 h-5" src={heart} alt="" />
                            </button>
                            <button className="uppercase text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 text-sm rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                Fiyat Teklifi Oluştur
                            </button>
                            <button className="bg-[#f1f1f1] w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                <img className="w-5 h-5" src={folder} alt="" />
                            </button>
                        </div>
                        <div className="mt-10">
                            <a className="text-[#767676] text-sm font-semibold cursor-pointer hover:text-black transition-colors duration-300 ease-in-out" href="">İlanın detaylı özelliklerini inceleyin</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex">
                    <div className="w-[30%]">
                        <h2 className="p-5 mb-4 text-xl text-[#212529] font-semibold">Arsa Bilgileri</h2>
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                    </div>
                    <div className="w-[70%] pl-12.5">
                        <div className="mb-5">
                            <button className="bg-[#27C5D2] mr-1.25 text-white py-3.75 px-7.5 cursor-pointer font-semibold rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out">Harita Konumu</button>
                            <button className="bg-[#eee] text-black py-3.75 px-7.5 cursor-pointer font-semibold rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Videolar (1)</button>
                        </div>
                        <div className="h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25184.027549982296!2d32.505486000000005!3d37.906982199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1788348281053!5m2!1str!2str"
                                className="w-full h-full border-0 rounded-lg"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Google Maps"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-40 mb-30'>
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