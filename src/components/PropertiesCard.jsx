import { Link } from "react-router-dom"
import blueStar from "../assets/star-blue.png"
import grayStar from "../assets/star-gray.png"
import defaultProperty from "../assets/default-property.jpg"
import { useAppContext } from "../context/AppContext"

export function PropertiesCard(props) {
    const { translation } = useAppContext();
    return (
        <div className={`flex select-none ${props.page === "wishlist" || props.page === "myProperties" || props.page === "homeLogin" || props.page === "proposalDetail" || props.page === "companiesDetail" ? "bg-white shadow-[0_0_30px_rgb(246,246,246)]" : "bg-[#FAFAFA]"} items-start ${props.page === "proposalDetail" ? "w-full m-0 p-7.5" : ""} shrink-0 max-[992px]:w-full max-[992px]:m-0 ${props.flexDirection === "flex-col" ? "w-full" : ""}  max-[992px]:flex-col p-3.75 m-3.75 rounded-[10px] ${props.page === "wishlist" ? "w-[calc(50%-30px)]" : "w-[calc(33%-30px)]"} ${props.page === "myProperties" ? "w-full" : ""}`}>
            <div className={`w-[50%] ${props.page === "company" ? "aspect-square" : ""} ${props.page === "proposalDetail" ? "aspect-video" : ""} ${props.flexDirection === "flex-col" ? "aspect-video" : ""} max-[992px]:w-full max-[992px]:mb-3.75 ${props.page === "myProperties" ? "aspect-video" : "aspect-square"}`}>
                <div className="relative h-full">
                    <img className={`rounded-[10px] ${props.page === "company" ? "aspect-square h-1/2" : "h-full"} ${props.page === "proposalDetail" ? "aspect-video" : ""} ${props.flexDirection === "flex-col" ? "aspect-video" : ""} h-full  object-cover max-[992px]:aspect-video`} src={defaultProperty} alt="" />
                    {props.status == "draft" && <div className="bg-[#FFCA64] z-50 uppercase text-black text-xs absolute bottom-3.75 left-3.75 px-2 py-1.25 rounded-lg font-medium">
                        {translation?.data?.business?.statusess?.draft}
                    </div>}
                    {props.status == "sold" && <div className="bg-[#27c5d2] z-50 uppercase text-white text-xs absolute bottom-3.75 left-3.75 px-2 py-1.25 rounded-lg font-medium">
                        {translation?.data?.business?.statusess?.sold}
                    </div>}
                    {props.badges === "discounted" && <div className="bg-[#FFCA64] z-30 uppercase text-black text-xs absolute bottom-3.75 left-3.75 px-2 py-1.25 rounded-lg font-medium">
                        {props.badgeTitle}
                    </div>}
                </div>
            </div>
            <div className={`pl-5 w-[50%] max-[992px]:w-full max-[992px]:pl-0`}>
                <Link to={`/properties/${props.id}`} className={`min-h-12.5 font-medium ${props.page === "companiesDetail" || props.page === "homeLogin" || props.page === "myProperties" || props.page === "wishlist" || props.page === "proposalDetail" ? "text-2xl" : "text-base"} text-black hover:text-[#FFCA64] transition-colors duration-300 ease-in-out`}>{props.title}</Link>
                <ul className="text-[11px] text-[#B7BFB9] font-semibold flex flex-wrap gap-2.5 my-2.5">
                    <li className="w-full flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        <div>
                            <span>{props.city} </span>
                            <span>/</span>
                            <span> {props.district}</span>
                        </div>
                    </li>
                    <li className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building preview-icon"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
                        <span>{props?.propertyType === "ready" ? translation?.data?.business?.building_statusess?.ready : translation?.data?.business?.building_statusess?.under_construction}</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu preview-icon"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                        <span>{props.type}</span>
                    </li>
                    <li className="w-full flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round preview-icon"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                        {props.page === "company" ? <span>{props.created_by}</span> : <span>{props.company}</span>}
                    </li>
                </ul>
                <p>
                    <span className={`${props.page==="proposalDetail" ? "text-sm" : "text-[11px]"} text-[#B7BFB9] font-medium block py-1.25`}>
                        {translation?.data?.business?.sell_price}
                    </span>
                    <span className={`${props.page === "companiesDetail" || props.page === "homeLogin" || props.page === "myProperties" || props.page === "wishlist" || props.page === "proposalDetail" ? "text-2xl" : "text-lg"} text-[#FFCA64] font-semibold wrap-break-word`}>
                        {props.price}
                    </span>
                </p>
                {(props.page === "proposalDetail" && props.detail.score > 0) && <div className="p-3.75 mt-2.5 bg-white rounded-lg">
                    {props.detail?.review?.properties?.[`review_${props.id}`]?.map((item) => (
                        <div className="mb-7.5 flex flex-wrap justify-between items-center" key={item.index}>
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
                {props.page === "company" && <button onClick={() => props.handleOfferModal(props.id)} title={translation?.data?.business?.add_property_to_proposal_properties} className="bg-[#e6e6e6] flex items-center gap-2.5 max-w-full whitespace-nowrap overflow-hidden truncate py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 lucide lucide-folder-plus preview-icon"><path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                    <p className="whitespace-nowrap overflow-hidden truncate">{translation?.data?.business?.add_property_to_proposal_properties}</p>
                </button>}
                {props.page === "properties" && <button onClick={() => props.handleOfferModal(props.id)} title={translation?.data?.business?.add_property_to_proposal_properties} className="bg-[#e6e6e6] flex items-center gap-2.5 max-w-full whitespace-nowrap overflow-hidden truncate py-1.25 px-2.5 text-sm text-[#545454] mt-2.5 font-semibold cursor-pointer rounded-sm hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 lucide lucide-folder-plus preview-icon"><path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                    <p className="whitespace-nowrap overflow-hidden truncate">{translation?.data?.business?.add_property_to_proposal_properties}</p>
                </button>}
                {props.page === "wishlist" && <button onClick={() => props.handleToggleWishlist(props.id)} className="bg-white text-[#5f5f5f] border gap-1.25 max-w-full whitespace-nowrap overflow-hidden truncate border-[#eee] py-1.25 px-2.5 text-sm mt-2.5 flex items-center font-semibold cursor-pointer rounded-sm hover:bg-[#d1d1d1] hover:text-black transition-colors duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    {translation?.data?.business?.property_remove_from_wishlist}
                </button>}
            </div>
        </div>
    )
}