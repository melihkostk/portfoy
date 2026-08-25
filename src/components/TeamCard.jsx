import by from "../assets/by.svg"
import verticalMenu from "../assets/menu-vertical.png"
import grayPhone from "../assets/gray-phone.png"
import wp from "../assets/wp.png"
import grayMail from "../assets/gray-mail.png"

export function TeamCard() {
    return (
        <div className="flex flex-col relative items-center justify-center m-3.75 border border-[#dedede] rounded-lg pt-8.75 p-3.75 w-[22%]">
            <div className="absolute w-4 h-4 top-6 right-4">
                <img src={verticalMenu} alt="" />
            </div>
            <div className="text-center">
                <img className="w-20 h-20 rounded-full mb-5" src={by} alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-xl text-[#212529] font-medium mb-5">Melih Kostak</h2>
                <ul className="text-sm text-[#7e7e7e] mb-7.5">
                    <li>Genel Müdür</li>
                </ul>
                <div className="flex flex-col items-center">
                    <p className="uppercase text-[13px] text-[#bbbbbb] font-semibold">İletişim Bilgileri</p>
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={grayPhone} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href="tel:(543) 431 56 38">
                            90 (543) 431 56 38
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={wp} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href="https://wa.me/905434315638">
                            Whatsapp'dan mesaj gönder
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={grayMail} alt="" />
                        <a className="text-xs text-black opacity-50 font-semibold py-0.5 my-1.25 whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity duration-300 ease-in-out" href="mailto:bborukk@gmail.com">
                            bborukk@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}