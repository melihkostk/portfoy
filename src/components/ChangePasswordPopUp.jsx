import close from "../assets/blue-close.png"

export function ChangePasswordPopUp({setChangePassword , handlePasswordChange , setCurrent , setPassword , setConfirm , translation}){
    return(
        <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
            <div className="flex justify-between w-full items-center p-4 border-b border-b-[#dee2e6]">
                <p className="text-xl font-semibold text-[#212529]">{translation?.data?.business?.new_password}</p>
                <img className="cursor-pointer" onClick={() => setChangePassword(false)} src={close} alt="" />
            </div>
            <form onSubmit={handlePasswordChange} className="p-4 w-full">
                <div className="flex flex-col mb-2">
                    <label className="font-semibold" htmlFor="">{translation?.data?.business?.current_password}</label>
                    <input onChange={(e) => setCurrent(e.target.value)} required className="border border-[#d9d9d9] rounded-lg py-1.5 px-3" type="password" placeholder={translation?.data?.business?.current_password} />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="font-semibold" htmlFor="">{translation?.data?.business?.new_password}</label>
                    <input onChange={(e) => setPassword(e.target.value)} required className="border border-[#d9d9d9] rounded-lg py-1.5 px-3" type="password" placeholder={translation?.data?.business?.new_password} />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="font-semibold" htmlFor="">{translation?.data?.business?.new_password_confirm}</label>
                    <input onChange={(e) => setConfirm(e.target.value)} required className="border border-[#d9d9d9] rounded-lg py-1.5 px-3" type="password" placeholder={translation?.data?.business?.new_password_confirm} />
                </div>
                <div className="justify-self-end">
                    <button type="submit" className="py-2 px-5 rounded-lg bg-[#27c5d2] text-white font-semibold text-sm cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.update}</button>
                </div>
            </form>
        </div>
    )
}