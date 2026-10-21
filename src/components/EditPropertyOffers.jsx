import { ClipLoader } from "react-spinners";
import defaultCompany from "../assets/default-company.png"
import close from "../assets/blue-close.png"
import { OfferCard } from "./OfferCard"
import { ProposalCard } from "./ProposalCard";

export function EditPropertyOffers({
    offerMenuShown,
    closeOfferMenu,
    loaded,
    offerInfo,
    offerStatus,
    setOfferStatus,
    note,
    setNote,
    handleReplyOffer,
    offers,
    setOfferMenuShown,
    setOfferInfo,
    setSelectedOfferId,
    setLoaded,
    proposals,
    externalProposals,
}) {
    return (
        <div className="w-full max-w-[90%]">
            {offerMenuShown && <div className="fixed overflow-y-scroll scrollbar-none top-1/2 left-1/2 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 w-[25%] max-h-[95%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="p-4 flex justify-between w-full items-center border-b border-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">Fiyat Teklifini Görüntüle</h2>
                    <img onClick={closeOfferMenu} className="w-6 h-6 cursor-pointer" src={close} alt="" />
                </div>
                <div className="p-4 w-full">
                    {!loaded ? (
                        <div className="flex items-center justify-center py-10 w-full">
                            <ClipLoader size={50} color="#27c5d2" aria-label="Loading Spinner" />
                        </div>
                    ) : (
                        <>
                            <div className="flex bg-[#f9f9f9] p-3.75 rounded-lg w-full mb-7.5 gap-7.5 justify-start">
                                <div className="w-20 h-20 bg-white rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                                    <img className="w-full h-full rounded-full" src={defaultCompany} alt="company-logo" />
                                </div>
                                <div>
                                    <div className="text-lg text-[#212529] font-semibold">{offerInfo?.data?.company?.name}</div>
                                    <div className="text-sm text-[#212529] mb-2.5 opacity-80">{offerInfo?.data?.company?.type}</div>
                                    <div className="text-[13px] font-semibold text-[#212529] opacity-50">{offerInfo?.data?.company?.personal}</div>
                                </div>
                            </div>
                            {offerInfo?.data?.notes !== null && <div className="p-3.75 rounded-lg mb-5 border border-[#ececec]">
                                <p className="mb-4 text-[#212529] font-semibold">Müşteri Notu</p>
                                <p className="mb-4 text-[#212529] font-meidum">{offerInfo?.data?.notes}</p>
                            </div>}
                            <div>
                                <div className="flex">
                                    {offerInfo?.data?.pricing_type === "PASS" && <div className="flex-1 max-w-full text-center">
                                        <p className="text-sm text-[#212529] opacity-70 font-semibold">Pass Fiyatı</p>
                                        <p className="text-[22px] text-[#212529]">{offerInfo?.data?.prices?.secondary?.formatted}</p>
                                    </div>}
                                    <div className="flex-1 max-w-full text-center">
                                        <p className="text-sm text-[#212529] opacity-70 font-semibold">Satış Fiyatı</p>
                                        <p className="text-[22px] text-[#212529]">{offerInfo?.data?.prices?.primary?.formatted}</p>
                                    </div>
                                </div>
                                <div className="my-7.5">
                                    <div className="flex-1 max-w-full text-center">
                                        <p className="text-sm text-[#212529] opacity-70 font-semibold">Teklif Edilen Tutar</p>
                                        <p className="text-[22px] text-[#212529]">{offerInfo?.data?.offered_price?.formatted}</p>
                                    </div>
                                </div>
                            </div>
                            {offerInfo?.data?.status?.key === "waiting" && <div className="p-3.75 bg-[#f9f9f9] rounded-lg">
                                <h2 className="text-xl text-[#212529] mb-5 font-semibold">Teklife Yanıt Verin</h2>
                                <div className="mb-5 flex justify-start gap-2.5">
                                    <button onClick={() => setOfferStatus("confirm")} className={`text-sm ${offerStatus === "confirm" ? "bg-[#4e4e4e] text-white" : "bg-[#e7e7e7]"} p-2.5 flex-1 rounded-lg cursor-pointer`}>Kabul Et</button>
                                    <button onClick={() => setOfferStatus("reject")} className={`text-sm ${offerStatus === "reject" ? "bg-[#4e4e4e] text-white" : "bg-[#e7e7e7]"} p-2.5 flex-1 rounded-lg cursor-pointer`}>Reddet</button>
                                </div>
                                <div className="mb-2">
                                    <label className="text-[#212529]" htmlFor="note">Notunuz</label>
                                    <textarea value={note} onChange={(e) => setNote(e.target.value)} className="bg-white px-3 py-1.5 block w-full border border-[#d9d9d9] rounded-lg min-h-[calc(1.5em+0.75rem+2px)]" type="text" id="note" name="note" />
                                </div>
                                <button disabled={!offerStatus} onClick={handleReplyOffer} className="w-full text-white text-sm font-semibold cursor-pointer hover:bg-[#157347] transition-colors duration-300 ease-in-out bg-[#198754] py-2 px-5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#198754]">Kaydet</button>
                            </div>}
                        </>
                    )}
                </div>
            </div>}
            <div className="p-2.5 mb-7.5 rounded-lg border border-[#f8f8f8]">
                <div className="text-lg text-[#676767] py-2 px-4 bg-[#f8f8f8] rounded-lg">
                    <p className="py-1.25 font-semibold">Müşteriden Gelen Fiyat Teklifleri</p>
                </div>
                <div className="w-full p-4 overflow-x-auto scrollbar-thin">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#ececec] text-[#6c757d]">
                                <th className="text-start py-4 px-2.5 rounded-l-lg whitespace-nowrap">Teklif Gönderen</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Fiyat</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Durum</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                                <th className="text-end py-4 px-2.5 rounded-r-lg whitespace-nowrap">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offers?.data?.map(item => (
                                <OfferCard
                                    price={item.offered_price.formatted}
                                    name={item.company.personal}
                                    status={item.status.title}
                                    statusKey={item.status.key}
                                    key={item.id}
                                    created_at={item.created_at}
                                    page="edit"
                                    id={item.id}
                                    setOfferMenuShown={setOfferMenuShown}
                                    setOfferInfo={setOfferInfo}
                                    setSelectedOfferId={setSelectedOfferId}
                                    setLoaded={setLoaded}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-2.5 mb-7.5 rounded-lg border border-[#f8f8f8]">
                <div className="text-lg text-[#676767] py-2 px-4 bg-[#f8f8f8] rounded-lg">
                    <p className="py-1.25 font-semibold">Müşteriye Gönderilen Teklifler</p>
                </div>
                <div className="w-full p-4 overflow-x-auto scrollbar-thin">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#ececec] rounded-lg text-[#6c757d]">
                                <th className="text-start py-4 px-2.5 rounded-l-lg whitespace-nowrap">#</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Müşteri</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Değerlendirme</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Durum</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                                <th className="text-end py-4 px-2.5 rounded-r-lg whitespace-nowrap">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proposals.data.map(item => (
                                <ProposalCard
                                    score={item.score}
                                    created_at={item.created_at}
                                    status={item.status.title}
                                    statusKey={item.status.key}
                                    page="edit"
                                    name={item.customer.name}
                                    key={item.id}
                                    code={item.code}
                                    id={item.id}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-2.5 mb-7.5 rounded-lg border border-[#f8f8f8]">
                <div className="text-lg text-[#676767] py-2 px-4 bg-[#f8f8f8] rounded-lg">
                    <p className="py-1.25 font-semibold">Diğer Firmaların Oluşturduğu Teklifler</p>
                </div>
                <div className="w-full p-4 overflow-x-auto scrollbar-thin">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#ececec] rounded-lg text-[#6c757d]">
                                <th className="text-start py-4 px-2.5 rounded-l-lg whitespace-nowrap">Firma</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Değerlendirme</th>
                                <th className="text-start py-4 px-2.5 whitespace-nowrap">Durum</th>
                                <th className="text-start py-4 px-2.5 rounded-r-lg whitespace-nowrap">Oluşturma Tarihi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {externalProposals?.data.map(item => (
                                <ProposalCard
                                    score={item.score}
                                    created_at={item.created_at}
                                    status={item.status.title}
                                    statusKey={item.status.key}
                                    page="external"
                                    name={item.company.name}
                                    key={item.id}
                                    id={item.id}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
