import { useState, useEffect } from "react";
import blackClose from "../assets/black-close.svg"
import { getAllCustomers } from "../services/myCompanyApi";
import { getAllCurrencies } from "../services/filterApi";
import defaultProperty from "../assets/default-property.jpg";

export function CreateOfferModel({ setOfferModalShown, notify ,  setNotify ,handleCreateProposal , translation , step, setStep, customerNote, setCustomerNote, details, selectedCustomer, setSelectedCurrencie, selectedCurrencie, setSelectedCustomer }) {

    const [customers, setCustomer] = useState([])

    useEffect(() => {
        getAllCustomers().then(setCustomer)
    }, [])

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getAllCurrencies().then(setCurrencies)
    }, [])

    return (
        <div className="fixed bg-white w-[30%] z-50 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] left-1/2 top-8 -translate-x-1/2 ">
            <div className="flex items-center justify-between p-4 border-b border-b-[#dee2e6]">
                <h5 className="text-xl font-medium text-[#212529]">{translation?.data?.business?.create_proposal}</h5>
                <button onClick={() => setOfferModalShown(false)}>
                    <img className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out" src={blackClose} alt="" />
                </button>
            </div>
            <div className="p-4">
                <ul className="flex justify-between items-center mb-6">
                    <li>
                        <button className={`py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] ${step === 1 ? "bg-[#27c5d2] text-white" : "bg-white text-[#212529]"}`}>1</button>
                    </li>
                    <li>
                        <button className={`py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] ${step === 2 ? "bg-[#27c5d2] text-white" : "bg-white text-[#212529]"} `}>2</button>
                    </li>
                    <li>
                        <button className={`py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] ${step === 3 ? "bg-[#27c5d2] text-white" : "bg-white text-[#212529]"}`}>3</button>
                    </li>
                    <li>
                        <button className={`py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] ${step === 4 ? "bg-[#27c5d2] text-white" : "bg-white text-[#212529]"}`}>4</button>
                    </li>
                </ul>
                {step === 1 && (
                    <div>
                        <h2 className="mb-4 text-[#212529]">{translation?.data?.business?.choose_customer_before_select_proposal_properties}</h2>
                        <form onSubmit={() => setStep(2)}>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="" className="mb-2 text-[#212529]">{translation?.data?.business?.choose?.customer}</label>
                                <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} required name="" id="" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3">
                                    <option disabled value="">{translation?.data?.business?.choose?.customer}</option>
                                    {customers?.data?.customers?.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-2 text-[#212529]">{translation?.data?.business?.choose?.currency}</label>
                                <select value={selectedCurrencie} onChange={(e) => setSelectedCurrencie(e.target.value)} required name="" id="" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3">
                                    <option disabled value="">{translation?.data?.business?.choose?.currency}</option>
                                    {currencies?.map(item => (
                                        <option value={item.code} key={item.id}>{item.code}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-6 justify-self-end">
                                <button className="uppercase text-sm text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                    {translation?.data?.business?.save_customer_for_proposal}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className="mb-6">
                            <h2 className="mb-1 text-[#212529] text-xl">{translation?.data?.business?.your_selected_properties_for_proposal_title}</h2>
                            <p className="text-[#6c757d] mb-4">{translation?.data?.business?.your_selected_properties_for_proposal_description}</p>
                        </div>
                        <div className="flex items-center justify-between p-3.75 mb-5 rounded-lg bg-[#f8f8f8]">
                            <div>
                                <p className="text-xs text-[#212529] opacity-70 font-medium">{translation?.data?.business?.selected_customer_for_proposal}</p>
                                <p className="text-lg">{selectedCustomer}</p>
                            </div>
                            <div>
                                <button onClick={() => {setOfferModalShown(false); setStep(1)}} className="text-sm text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">{translation?.data?.business?.cancel}</button>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[25%] pr-3">
                                <img className="rounded-lg object-cover" src={defaultProperty} alt="cover" />
                            </div>
                            <div className="w-[75%] px-3">
                                <p className="text-lg text-black mb-2.5 font-semibold">{details?.title}</p>
                                <p className="text-sm text-[#6c757d]">{details?.type?.title} <span>/ {details?.property_type === "ready" ? translation?.data?.business?.building_statusess?.ready : translation?.data?.business?.building_statusess?.under_construction}</span></p>
                                <p className="text-sm text-[#6c757d]">{details?.no}</p>
                                <div className="flex items-end">
                                    <div className="mt-2.5 flex-1 pr-3.75">
                                        <label className="text-[13px] text-[#212529] opacity-80" htmlFor="price">{translation.data.business.sell_price}</label>
                                        <div className="flex border border-[#D9D9D9] rounded-sm cursor-no-drop">
                                            <span className="bg-[#d9d9d9] w-12.5 rounded-l-sm text-sm font-semibold flex items-center justify-center">{details?.prices?.primary?.code}</span>
                                            <div className="bg-[#eee] w-full py-1.5 px-3 rounded-r-sm">{details?.prices?.primary?.number}</div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <button onClick={() => setOfferModalShown(false)} className="border border-[#D9D9D9] rounded-sm h-9.5 py-1.25 px-2 text-[#717171] text-xs w-full font-semibold cursor-pointer hover:bg-[#d40000] hover:text-white hover:shadow-[0_0_30px_rgba(212,0,0,0.43)] transition-[color, box-shadow] duration-300 ease-in-out">{translation?.data?.business?.remove}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 justify-self-end">
                            <button onClick={() => setStep(prev => prev + 1)} className="uppercase text-sm text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                {translation?.data?.business?.next}
                            </button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <div>
                            <div className="mb-2">
                                <label className="mb-2" htmlFor="note">{translation?.data?.business?.notes_for_customer}</label>
                                <textarea value={customerNote} onChange={(e) => setCustomerNote(e.target.value)} className="block w-full py-1.5 px-3 border border-[#d9d9d9] rounded-lg" placeholder={translation?.data?.business?.notes_for_customer} name="note" id="note"></textarea>
                            </div>
                            <div className="flex items-center gap-1">
                                <input onChange={(e) => {setNotify(e.target.checked); console.log(notify)}} checked={notify} type="checkbox" name="mail" id="mail" />
                                <label htmlFor="mail">{translation?.data?.business?.notify_customer_with_email}</label>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <button className="text-[#545454] text-sm cursor-pointer hover:text-[#27c5d2] transition-colors duration-300 ease-in-out">{translation?.data?.business?.back_to_selected_properties}</button>
                                <button onClick={handleCreateProposal} className="uppercase bg-[#f1f1f1] text-[#4b4b4b] cursor-pointer py-2 px-5 rounded-lg text-sm hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">{translation?.data?.business?.save_proposal}</button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div >
    )
}