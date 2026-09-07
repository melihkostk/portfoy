import close from "../assets/close.png"

export function SuccessPopUp({error , setSuccessPopUp}) {
    return (
        <div className="fixed right-4 top-4 z-50 bg-[#22c55e] to-white text-white py-2 px-5 rounded-xl flex items-center gap-3.75">
            <p>{error}</p>
            <img onClick={() => setSuccessPopUp(false)} className="w-4 h-4 cursor-pointer" src={close} alt="" />
        </div>
    )
}