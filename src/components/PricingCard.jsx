import { Link } from "react-router-dom"
import checkIcon from "../assets/check.png"

export function PricingCard({ title, translation, price, time, trialPrice, customerTitle, customerFeatures, propertyTitle, propertyFeatures }) {
    return (
        <div className="bg-[#f9f9f9] rounded-lg p-7.5 m-3.75 w-[30%] shrink-0 max-[992px]:w-1/2 max-[992px]:m-0">
            <div>
                <h2 className="text-[#212529] text-[26px] font-semibold">{title}</h2>
                <p className="text-sm text-[#797979] min-h-10.5 font-medium mb-4">{title}</p>
            </div>
            <div className="mt-5 mb-7.5">
                <p className="text-[26px] font-medium">
                    {trialPrice === "0" ? translation?.data?.business?.free_trial : trialPrice}
                    <span className="text-[#898989] text-base ml-1.25"> / {time}</span>
                </p>
                <p className="text-sm text-[#6C757D] font-medium">
                    {translation?.data?.business?.next_period_payment_with_year_and_amount.replace(":amount", price)}
                </p>
            </div>
            <div className="mb-5">
                <p className="text-xs text-[#999999] mb-2.5 font-medium uppercase">{customerTitle}</p>
                <ul>
                    {customerFeatures?.map(item => (
                        <div>
                            <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                                <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                                <p>{item}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="mb-5">
                <p className="text-xs text-[#999999] mb-2.5 font-medium uppercase">{propertyTitle}</p>
                <ul>
                    {propertyFeatures?.map(item => (
                        <div>
                            <li className="text-base text-[#212529] my-0.5 font-medium flex items-center">
                                <img className="w-5 h-5 mr-2.5" src={checkIcon} alt="" />
                                <p>{item}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="w-full bg-[#f1f1f1] text-center py-2 px-5 rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                <Link to={"/application"} className="uppercase text-[#4b4b4b] font-medium text-sm w-full">{translation?.data?.business?.company_application}</Link>
            </div>
        </div>
    )
}