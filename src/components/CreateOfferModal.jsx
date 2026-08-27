import React from "react";
import blackClose from "../assets/black-close.svg"

export function CreateOfferModel({ setOfferModalShown }) {

    const [step, setStep] = React.useState(1);

    return (
        <div className="fixed bg-white w-[30%] z-50 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] left-1/2 top-8 -translate-x-1/2 ">
            <div className="flex items-center justify-between p-4 border-b border-b-[#dee2e6]">
                <h5 className="text-xl font-medium text-[#212529]">Teklif Oluştur</h5>
                <button onClick={() => setOfferModalShown(false)}>
                    <img className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out" src={blackClose} alt="" />
                </button>
            </div>
            <div className="p-4">
                <ul className="flex justify-between items-center mb-6">
                    <li>
                        <button onClick={() => setStep(1)} className="py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white text-[#212529] focus:text-white focus:bg-[#27C5D2]">1</button>
                    </li>
                    <li>
                        <button onClick={() => setStep(2)} className="py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white text-[#212529] focus:text-white focus:bg-[#27C5D2]">2</button>
                    </li>
                    <li>
                        <button className="py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white text-[#212529] focus:text-white focus:bg-[#27C5D2]">3</button>
                    </li>
                    <li>
                        <button className="py-2 px-4 rounded-full cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white text-[#212529] focus:text-white focus:bg-[#27C5D2]">4</button>
                    </li>
                </ul>
                {step === 1 && (
                    <div>
                        <h2 className="mb-4 text-[#212529]">Teklif oluşturmak için lütfen önce müşteri seçin</h2>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="" className="mb-2 text-[#212529]">Müşteri Seçin</label>
                            <select required name="" id="" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3">
                                <option value="" selected disabled>Müşteri Seçin</option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="mb-2 text-[#212529]">Para Birimi Seçin</label>
                            <select required name="" id="" className="border border-[#d9d9d9] rounded-lg py-1.5 px-3">
                                <option value="" selected disabled>Para Birimi Seçin</option>
                                <option value="">TRY</option>
                                <option value="">USD</option>
                                <option value="">EUR</option>
                            </select>
                        </div>
                        <div className="mt-6 justify-self-end">
                            <button onClick={() => setStep(prev => prev + 1)} className="uppercase text-sm text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                Seçilen Müşteriyi Teklif için Kaydet
                            </button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className="mb-6">
                            <h2 className="mb-1 text-[#212529] text-xl">Teklif için seçtiğiniz ilanlar</h2>
                            <p className="text-[#6c757d] mb-4">Teklif oluşturduktan sonra ilanları düzenleyemezsiniz.</p>
                        </div>
                        <div className="flex items-center justify-between p-3.75 mb-5 rounded-lg bg-[#f8f8f8]">
                            <div>
                                <p className="text-xs text-[#212529] opacity-70 font-medium">Seçilen Müşteri</p>
                                <p className="text-lg">Adı Adı</p>
                            </div>
                            <div>
                                <button onClick={() => setOfferModalShown(false)} className="text-sm text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">İptal</button>
                            </div>
                        </div>
                        <div className="p-4 mb-4 rounded-lg bg-[#fff3cd] text-[#664d03] border border-[#ffecb5]">
                            Teklife henüz ilan eklenmedi
                        </div>
                        <div className="mt-6 justify-self-end">
                            <button onClick={() => setStep(prev => prev + 1)} className="uppercase text-sm text-[#4b4b4b] bg-[#f1f1f1] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                ilerle
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}