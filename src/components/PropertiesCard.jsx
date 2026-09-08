import { Link } from "react-router-dom"
import building from "../assets/building.png"
import location from "../assets/gray-location.png"
import menu from "../assets/gray-menu.png"
import shop from "../assets/gray-shop.png"
import blueStar from "../assets/star-blue.png"
import grayStar from "../assets/star-gray.png"

export function PropertiesCard(props) {
    return (
        <div className={`flex items-start ${props.page === "proposalDetail" ? "w-full m-0 p-7.5" : ""} bg-[#FAFAFA] shrink-0 max-[992px]:w-full max-[992px]:m-0 ${props.flexDirection === "flex-col" ? "w-full" : ""}  max-[992px]:flex-col p-3.75 m-3.75 rounded-[10px] ${props.page === "wishlist" ? "w-[46%]" : "w-[30%]"} ${props.page === "myProperties" ? "w-full" : ""}`}>
            <div className={`w-[50%] ${props.page === "company" ? "aspect-square" : ""} ${props.page === "proposalDetail" ? "aspect-video" : ""} ${props.flexDirection === "flex-col" ? "aspect-video" : ""} max-[992px]:w-full max-[992px]:mb-3.75 h-full ${props.page === "myProperties" ? "aspect-video" : "aspect-square"}`}>
                <img className={`rounded-[10px] ${props.page === "company" ? "aspect-square" : ""} w-full ${props.page === "proposalDetail" ? "aspect-video" : ""} ${props.flexDirection === "flex-col" ? "aspect-video" : ""} h-full object-cover max-[992px]:aspect-video`} src={props.cover} alt="" />
            </div>
            <div className={`pl-5 w-[50%]`}>
                <Link to={`/properties/${props.id}`} className="min-h-12.5 line-clamp-2 overflow-hidden text-black font-semibold hover:text-[#FFCA64] transition-colors duration-300 ease-in-out">{props.title}</Link>
                <ul className="text-[11px] text-[#B7BFB9] font-medium flex flex-wrap gap-2.5 my-2.5">
                    <li className="w-full flex items-center gap-1">
                        <img className="w-5 h-5" src={location} alt="" />
                        <div>
                            <span>{props.city} </span>
                            <span>/</span>
                            <span> {props.district}</span>
                        </div>
                    </li>
                    <li className="flex items-center gap-1">
                        <img className="w-5 h-5" src={building} alt="" />
                        <span>Hazır</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <img className="w-5 h-5" src={menu} alt="" />
                        <span>{props.type}</span>
                    </li>
                    <li className="w-full flex items-center gap-1">
                        <img className="w-5 h-5" src={shop} alt="" />
                        <span>{props.company}</span>
                    </li>
                </ul>
                <p>
                    <span className="text-[11px] text-[#B7BFB9] font-medium block py-1.25">
                        Satış Fiyatı
                    </span>
                    <span className="text-lg text-[#FFCA64] font-semibold">
                        {props.price}
                    </span>
                </p>
                {props.page === "proposalDetail" && <div className="p-3.75 mt-2.5 bg-white rounded-lg">
                    {props.detail?.review?.properties?.[`review_${props.id}`]?.map((item) => (
                        <div className="mb-7.5 flex flex-wrap" key={item.index}>
                            <div className="whitespace-wrap">
                                <p className="text-[15px] text-[#212529] font-semibold">{item.title}</p>
                                <p className="text-xs text-[#828282] font-semibold">{item.description}</p>
                            </div>
                            <div className="flex items-center gap-0.5 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={i < item?.value ? blueStar : grayStar}
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>}
                {props.page === "company" && <button className="bg-[#e6e6e6] max-w-full whitespace-nowrap overflow-hidden truncate py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    İlanı teklif listesine ekle
                </button>}
                {props.page === "properties" && <button className="bg-[#e6e6e6] max-w-full whitespace-nowrap overflow-hidden truncate py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    İlanı teklif listesine ekle
                </button>}
                {props.page === "wishlist" && <button className="bg-white border max-w-full whitespace-nowrap overflow-hidden truncate border-[#eee] py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    Favorilerden Kaldır
                </button>}
            </div>
        </div>
    )
}