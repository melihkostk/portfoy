import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import check from "../assets/white-check.png"

export function FilterSidebar({ type, team , currencie , selectedTeam , setSelectedTeam , handleFilter ,selectedCurrencie , setSelectedCurrencie , countries , selectedCountry , setSelectedCountry , cities , selectedCity , setSelectedCity , districts , selectedDistrict , setSelectedDistrict , minSell ,  setMinSell , maxSell , setMaxSell , status , setStatus , selectedType , setSelectedType}) {
    const { translation } = useAppContext();

    function toggleType(id) {
        setSelectedType(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    return (
        <div className="w-full">
            <div className="mb-5 w-full">
                <div className="bg-[#f8f8f8] text-[#7d7d7d] font-semibold min-w-full text-center py-2.5 rounded-lg hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    <Link to={"/properties/create"}>{translation?.data?.business?.create_property}</Link>
                </div>
            </div>
            <form action="">
                <div className="flex justify-between items-center mb-3.75">
                    <p className="uppercase text-[#b4b4b4] text-sm">{translation?.data?.business?.filter_properties}</p>
                    <a className="text-[#b4b4b4] text-sm underline hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="">{translation?.data?.business?.clear}</a>
                </div>
                <div>
                    <ul className="my-7.5">
                        {type?.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-1.25">
                                <div className="flex items-center gap-2">
                                    <input className="hidden" id={`type-${item.id}`} name="type" type="checkbox" checked={selectedType.includes(item.id)} onChange={() => toggleType(item.id)} />
                                    <label className={`flex items-center gap-2.5 text-[13px] ${selectedType.includes(item.id) ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold transition-colors duration-300 ease-in-out cursor-pointer`} htmlFor={`type-${item.id}`}>
                                        <div className={`w-3.75 flex items-center justify-center h-3.75 rounded-sm border ${selectedType.includes(item.id) ? "bg-[#27c5d2] border-[#D9D9D9]" : "border-[#D9D9D9]"}`}>
                                            <img className="w-2.5 h-2.5" src={check} alt="" />
                                        </div>
                                        {item.title}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-5">
                    <label className="text-sm font-medium text-[#878787] mb-2" htmlFor="personal">{translation?.data?.business?.choose?.personal}</label>
                    <select id="personal" name="personal" value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)} className="block w-full mt-2 border border-[#d9d9d9] rounded-lg py-1.5 pl-3 pr-9">
                        <option value={""}>{translation?.data?.business?.all}</option>
                        {team?.personals?.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <label className="text-sm font-medium text-[#878787] mb-2" htmlFor="price">{translation?.data?.business?.sell_price}</label>
                    <div className="flex gap-1 mt-2">
                        <input value={minSell} onChange={(e) => setMinSell(e.target.value)} type="number" placeholder={translation?.data?.business?.min} min={0} className="border focus:outline-none border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" />
                        <input value={maxSell} onChange={(e) => setMaxSell(e.target.value)} type="number" placeholder={translation?.data?.business?.max} className="border focus:outline-none border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full" />
                    </div>
                    <div className="mt-2">
                        <select id="price" name="price" value={selectedCurrencie} onChange={(e) => setSelectedCurrencie(e.target.value)} className="border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full">
                            {currencie.map(item => (
                                <option value={item.id} key={item.id}>({item.code}) {item.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-sm text-[#878787] font-medium mb-2" htmlFor="">{translation?.data?.business?.location}</p>
                    <div>
                        <div className="mb-2">
                            <label className="text-[13px] text-[#212529] font-semibold" htmlFor="country">{translation?.data?.business?.choose?.country}</label>
                            <select name="country" id="country" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full">
                                <option value="">{translation?.data?.business?.choose?.country}</option>
                                {countries?.data?.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="city" className="text-[13px] text-[#212529] font-semibold">{translation?.data?.business?.choose?.city}</label>
                            <select id="city" name="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full">
                                <option value="">{translation?.data?.business?.choose?.city}</option>
                                {cities.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="district" className="text-[13px] text-[#212529] font-semibold">{translation?.data?.business?.choose?.district}</label>
                            <select id="district" name="district" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="block border border-[#d9d9d9] rounded-lg py-1.5 px-3 w-full">
                                <option value="">{translation?.data?.business?.choose?.district}</option>
                                {districts.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-sm text-[#878787] font-medium mb-2" htmlFor="">{translation?.data?.business?.property_status}</p>
                    <div>
                        <div className="flex items-center gap-2.5 mb-1.25">
                            <input className="hidden" id="status-all" name="status" type="checkbox" checked={status === ""} onChange={() => setStatus("")} />
                            <label className={`flex items-center gap-2.5 text-[13px] ${status === "" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold transition-colors duration-300 ease-in-out cursor-pointer`} htmlFor="status-all">
                                <div className={`flex items-center justify-center w-3.75 h-3.75 rounded-sm border ${status === "" ? "bg-[#27c5d2] border-[#D9D9D9]" : "border-[#D9D9D9]"}`}>
                                    <img className="w-2.5 h-2.5" src={check} alt="" />
                                </div>
                                {translation?.data?.business?.all}
                            </label>
                        </div>
                        <div className="flex items-center gap-2.5 mb-1.25">
                            <input className="hidden" id="status-published" name="status" type="checkbox" checked={status === "published"} onChange={() => setStatus("published")} />
                            <label htmlFor="status-published" className={`flex items-center gap-2.5 text-[13px] ${status === "published" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}>
                                <div className={`flex items-center justify-center w-3.75 h-3.75 rounded-sm border ${status === "published" ? "bg-[#27c5d2] border-[#D9D9D9]" : "border-[#D9D9D9]"}`}>
                                    <img className="w-2.5 h-2.5" src={check} alt="" />
                                </div>
                                {translation?.data?.business?.only_published_properties}
                            </label>
                        </div>
                        <div className="flex items-center gap-2.5 mb-1.25">
                            <input className="hidden" id="status-not_published" name="status" type="checkbox" checked={status === "not_published"} onChange={() => setStatus("not_published")} />
                            <label htmlFor="status-not_published" className={`flex items-center gap-2.5 text-[13px] ${status === "not_published" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}>
                                <div className={`flex items-center justify-center w-3.75 h-3.75 rounded-sm border border-[#D9D9D9] ${status === "not_published" ? "bg-[#27c5d2]" : ""}`}>
                                    <img className="w-2.5 h-2.5" src={check} alt="" />
                                </div>
                                {translation?.data?.business?.only_not_published_properties}
                            </label>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <input className="hidden" id="status-sold" name="status" type="checkbox" checked={status === "sold"} onChange={() => setStatus("sold")} />
                            <label htmlFor="status-sold" className={`flex items-center gap-2.5 text-[13px] ${status === "sold" ? "text-[#27c5d2]" : "text-[#212529]"} font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}>
                                <div className={`flex items-center justify-center w-3.75 h-3.75 rounded-sm border border-[#D9D9D9] ${status === "sold" ? "bg-[#27c5d2]" : ""}`}>
                                    <img className="w-2.5 h-2.5" src={check} alt="" />
                                </div>
                                {translation?.data?.business?.only_sold_properties}
                            </label>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => handleFilter(selectedCountry , selectedCity , selectedDistrict , selectedTeam , minSell , maxSell , selectedCurrencie , status , selectedType)} className="uppercase w-full rounded-lg bg-[#f1f1f1] text-[#4b4b4b] font-semibold text-sm py-2 px-5 sticky bottom-7.5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">{translation?.data?.business?.filter_apply}</button>

            </form>

        </div>
    )
}