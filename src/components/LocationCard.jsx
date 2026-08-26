import pencil from "../assets/pencil.png"
import location from "../assets/black-location.png"
import deleteIcon from "../assets/delete.png"

export function LocationCard() {
    return (
        <div className="pb-5 mb-5 border-b border-b-[#eee] w-1/2 max-[992px]:w-full">
            <h3 className="text-[20px] text-[#212529] font-medium mb-2">Türkiye / Konya / Meram</h3>
            <p className="mb-4 max-w-[80%] flex items-center gap-1">
                <img className="w-5 h-5" src={location} alt="" />
                t
            </p>
            <div className="flex items-center gap-1 flex-wrap">
                <button className="bg-[#f1f1f1] whitespace-nowrap py-2 px-5 rounded-lg flex items-center gap-1 cursor-pointer text-sm text-[#4b4b4b] font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    <img className="w-4 h-4" src={pencil} alt="" />
                    Düzenle
                </button>
                <button className="bg-[#f1f1f1] whitespace-nowrap py-2 px-5 rounded-lg flex items-center gap-1 cursor-pointer text-sm text-[#4b4b4b] font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    <img className="w-5 h-5" src={location} alt="" />
                    Harita Konumunu Düzenle    
                </button>
                <button className="bg-[#f1f1f1] whitespace-nowrap py-2 px-5 rounded-lg flex items-center gap-1 cursor-pointer text-sm text-[#4b4b4b] font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                    <img className="w-5 h-5" src={deleteIcon} alt="" />
                    Sil
                </button>
            </div>
        </div>
    )
}