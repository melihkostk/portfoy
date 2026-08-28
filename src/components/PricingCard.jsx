import { Link } from "react-router-dom"
import checkIcon from "../assets/check.png"

export function PricingCard({name , price , trail , staff , offer , customer, ad , photo , video}) {
    return (
        <div className="bg-[#f9f9f9] p-7.5 m-3.75 w-[30%] shrink-0 max-[992px]:w-1/2 max-[992px]:m-0">
            <div>
                <h2 className="text-[#212529] text-[26px] font-semibold">{name}</h2>
                <p className="text-sm text-[#797979] min-h-10.5 font-medium mb-4">{name}</p>
            </div>
            <div className="mt-5 mb-7.5">
                <p className="text-[26px] font-medium">
                    Ücretsiz
                    <span className="text-[#898989] text-base ml-1.25"> / {trail} Gün</span>
                </p>
                <p className="text-sm text-[#6C757D] font-medium">
                    Sonraki yenileme {price} / Aylık
                </p>
            </div>
            <div className="mb-5">
                <p className="text-xs text-[#999999] mb-2.5 font-medium uppercase">Müşteri ve Personel</p>
                <ul>
                    <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                        <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                        <p>{staff} adet personel oluşturma</p>
                    </li>
                    <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                        <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                        <p>{offer} adet teklif oluşturma</p>
                    </li>
                    <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                        <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                        <p>{customer} adet müşteri oluşturma</p>
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <p className="text-xs text-[#999999] mb-2.5 font-medium uppercase">İlan</p>
                <ul>
                    <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                        <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                        <p>{ad} adet ilan oluşturma</p>
                    </li>
                    <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                        <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                        <p>Her ilan için {photo} adet fotoğraf</p>
                    </li>
                    <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                        <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                        <p>Her ilan için {video} video</p>
                    </li>
                </ul>
            </div>
            <div className="w-full bg-[#f1f1f1] text-center py-2 px-5 rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                <Link to={"/application"} className="uppercase text-[#4b4b4b] font-medium text-sm w-full">Firma başvurusu</Link>
            </div>
        </div>
    )
}