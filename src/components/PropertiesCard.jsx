import defaultProperty from "../assets/default-property.jpg"
import building from "../assets/building.png"
import location from "../assets/gray-location.png"
import menu from "../assets/gray-menu.png"
import shop from "../assets/gray-shop.png"

export function PropertiesCard(props) {
    return (
        <div className={`flex items-start bg-[#FAFAFA] shrink-0 max-[992px]:w-full max-[992px]:m-0  max-[992px]:flex-col p-3.75 m-3.75 rounded-[10px] ${props.page === "wishlist" ? "w-[46%]" : "w-[30%]"} ${props.page === "myProperties" ? "w-full" : ""}`}>
            <div className={`w-[50%] max-[992px]:w-full max-[992px]:mb-3.75 h-full ${props.page === "myProperties" ? "aspect-video" : "aspect-square" }`}>
                <img className="rounded-[10px] w-full h-full object-cover aspect-square max-[992px]:aspect-video" src={defaultProperty} alt="" />
            </div>
            <div className="pl-5 w-[50%]">
                <a className="min-h-12.5 line-clamp-2 overflow-hidden text-black font-semibold" href="">Müthiş ILAN</a>
                <ul className="text-[11px] text-[#B7BFB9] font-medium flex flex-wrap gap-2.5 my-2.5">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-5 h-5" src={location} alt="" />
                        <span>Burdur / Ağlasun</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <img className="w-5 h-5" src={building} alt="" />
                        <span>Hazır</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <img className="w-5 h-5" src={menu} alt="" />
                        <span>Apartman</span>
                    </li>
                    <li className="w-full flex items-center gap-1">
                        <img className="w-5 h-5" src={shop} alt="" />
                        <span>Burak Pigasoft</span>
                    </li>
                </ul>
                <p>
                    <span className="text-[11px] text-[#B7BFB9] font-medium block py-1.25">
                        Satış Fiyatı
                    </span>
                    <span className="text-lg text-[#FFCA64] font-semibold">
                        ₺44.400.000
                    </span>
                </p>
                {props.page ==="company" && <button className="bg-[#e6e6e6] max-w-full whitespace-nowrap overflow-hidden truncate py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    İlanı teklif listesine ekle
                </button>}
                {props.page ==="properties" && <button className="bg-[#e6e6e6] max-w-full whitespace-nowrap overflow-hidden truncate py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    İlanı teklif listesine ekle
                </button>}
                {props.page==="wishlist" &&  <button className="bg-white border max-w-full whitespace-nowrap overflow-hidden truncate border-[#eee] py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    Favorilerden Kaldır
                </button>}
            </div>
        </div>
    )
}