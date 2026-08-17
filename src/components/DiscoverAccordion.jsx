import downArrow from "../assets/down-arrow.png"

export function DiscoverAccordion(){
    return(
        <div className="flex items-center bg-white justify-between mb-5 py-6.5 px-7.5 rounded-lg shadow-[0_0_120px_rgba(0,0,0,0.1)]">
            <div>
                <p className="font-semibold">
                    Port-foy.com’a üye olabilmem için firma sahibi olmam gerekli mi?
                </p>
            </div>
            <div>
                <img className="w-6 h-6" src={downArrow} alt="down arrow" />
            </div>
        </div>
    )
}