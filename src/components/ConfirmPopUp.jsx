import close from "../assets/blue-close.png"

export function ConfirmPopUp({setConfirmShown , translation , setVerifyCode , verifyCode , handleVerifyPassword}) {
    return (
        <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
            <div className="p-4 flex justify-between w-full border-b border-b-[#dee2e6]">
                <p className="text-[#212529] text-xl font-semibold">{translation?.data?.business?.new_password}</p>
                <img onClick={() => setConfirmShown(false)} src={close} alt="" />
            </div>
            <form onSubmit={handleVerifyPassword} className="p-4">
                <div className="p-4 rounded-lg bg-[#fff3cd] text-[#664d03] mb-4">
                    {translation?.data?.business?.send_reset_password_with_code}
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="">{translation?.data?.business?.verify_code}</label>
                    <input minlength="6" maxlength="6" required value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} className="py-1.5 px-3 rounded-lg border border-[#d9d9d9]" type="text" placeholder={translation?.data?.business?.verify_code} />
                </div>
                <div className="justify-self-end">
                    <button type="submit" className="text-white cursor-pointer text-sm bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.update}</button>
                </div>
            </form>
        </div>
    )
}