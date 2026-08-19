import { LanguageSelect } from "../components/LanguageSelect";
import { Link } from "react-router-dom";
import { AppLinks } from "../components/AppLinks";
import logo from "../assets/logo.svg"
import t from "../assets/t.png"

export function Check() {
    return (
        <div className="w-full flex flex-col items-center justify-center font-sf">
            <div className="w-full max-w-350">
                <div className="flex items-center">
                    <div className="pr-12.5 flex-1">
                        <div>
                            <LanguageSelect />
                        </div>
                        <div className="w-55 mt-7.5 mb-25">
                            <Link to={"/"}>
                                <img className="max-w-full" src={logo} alt="" />
                            </Link>
                        </div>
                        <div>
                            <h1 className="mb-5 text-[25px] text-black font-medium">Port-Foy ile tanışın</h1>
                            <p className="mb-4 text-[#666666] font-medium">
                                Firmanızın ürettiği ya da satmak yetkisi olan gayrimenkullerinizi;
                                daha çok emlak firmasına ulaştırın. Hatta farklı şehirlerdeki emlak
                                firmaları da sizin ürünlerinizi görebilsin. Bunun için reklam vermenize gerek yok.
                                Hergün toplu mesaj sitelerinde “Drive link“ paylaşmanıza gerek yok. Bırakın bunu sizin
                                için biz daha profesyonel bir şekilde yapalım.
                            </p>
                            <ul className="list-disc text-[#666666] pl-8 mb-4 font-medium">
                                <li>Firma bilgilerinizi girin</li>
                                <li>Onaylandıktan sonra firma profilinizi oluşturun</li>
                                <li>Gayrimenkul ürünlerinizi girin</li>
                                <li>Port-foy.com’un size sunduğu daha birçok kolaylığı keşfedin ve tadını çıkarın</li>
                            </ul>
                        </div>
                        <div className="flex gap-2">
                            <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/"} href="">
                                Port-foy'a Dön
                            </Link>
                            <Link className="py-2 px-5 text-sm text-white font-semibold bg-[#27C5D2] rounded-lg hover:bg-[#026872] transition-colors duration-300 ease-in-out cursor-pointer" to={"/"} href="">
                                Başvuru Sorgulama
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 p-12.5">
                        <div className="mb-15">
                            <h2 className="text-[#686868] text-lg font-medium uppercase">
                                Başvuru Sorgulama
                            </h2>
                            <p className="text-sm text-[#A6A6A6] font-medium">
                                Başvurunuzun durumunu sorgulayın
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col mb-12.5 mx-2.5">
                                <label className="text-sm text-[#868686] font-medium mb-2" htmlFor="application">Başvuru Kodu veya E-Posta Adresiniz</label>
                                <div className="flex items-center relative">
                                    <img className="absolute w-4.5 h-4.5 left-3" src={t} alt="" />
                                    <input type="text" name="application" id="application" className="border border-[#EDEDED] rounded-lg w-full h-10 pl-10 font-medium" placeholder="Başvuru Kodu veya E-Posta Adresiniz" required />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="bg-[#27C5D2] text-white font-medium w-1/2 py-3 rounded-lg hover:bg-[#026872] hover:shadow-[0_0_30px_#27C5D2] transition-[background-color,box-shadow] duration-300 ease-in-out cursor-pointer">Başvuru Sorgulama</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-350 flex flex-col items-center justify-center bg-[#f7f6fb] mt-40 mb-15">
                <AppLinks />
            </div>
        </div>
    )
}