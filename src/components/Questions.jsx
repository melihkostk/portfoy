import arrowDown from "../assets/down-arrow.png"

export function Questions() {
    return (
        <div className="p-2.5 border border-[#e2e2e2] rounded-lg mb-5 cursor-pointer">
            <div className="flex justify-between items-center py-4 px-5 rounded-lg bg-white">
                <div>
                    <p className="font-semibold">
                        Port-foy.com’a üye olabilmem için firma sahibi olmam gerekli mi?
                    </p>
                </div>
                <div>
                    <img className="w-6 h-6" src={arrowDown} alt="" />
                </div>
            </div>
        </div>
    )
}