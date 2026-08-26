export function SubscriptionCard() {
    return (
        <div className="p-7.5 border border-[#eee] rounded-lg flex items-start max-[992px]:flex-col">
            <div className="w-1/2 max-[992px]:w-full">
                <span className="bg-[#ffca64] py-1.25 px-2 uppercase rounded-sm text-xs font-semibold">Aktif Abonelik</span>
                <span className="bg-[#27C5D2] py-1.25 px-2 ml-1 text-white uppercase rounded-sm text-xs font-semibold">Deneme Sürümü</span>
                <p className="text-[25px] font-medium mb-1.25">Premium Pazarlama Firması Paket</p>
                <p className="text-sm text-[#707070] mb-7.5">28 Ocak 2027 tarihinde sonlanacak (155 Gün Kaldı)</p>
                <button className="bg-[#f8f8f8] text-[#7a7a7a] text-[13px] uppercase py-2 px-3.75 rounded-lg font-semibold cursor-pointer hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">
                    Dahil Olan Özellikler
                </button>
            </div>
            <div className="w-1/2 max-[992px]:w-full max-[992px]:mt-2">
                <p className="mb-4 text-[#212529] font-semibold">Ödemeler</p>
                <div className="p-4 rounded-lg bg-[#fff3cd] text-[#664d03]">Henüz ödeme yok</div>
            </div>
        </div>
    )
}