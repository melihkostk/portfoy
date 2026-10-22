import close from "../assets/blue-close.png"

export function ConfirmPopUp({setConfirmShown}) {
    return (
        <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
            <div className="p-4 flex justify-between w-full border-b border-b-[#dee2e6]">
                <p className="text-[#212529] text-xl font-semibold">Yeni Şifre</p>
                <img onClick={() => setConfirmShown(false)} src={close} alt="" />
            </div>
            <div className="p-4">
                <div className="p-4 rounded-lg bg-[#fff3cd] text-[#664d03] mb-4">
                    Doğrulama kodu e-posta adresinize gönderildi, Lütfen e-posta adresinizi ve spam klasörünü kontrol edin.
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="">Doğrulama Kodu</label>
                    <input className="py-1.5 px-3 rounded-lg border border-[#d9d9d9]" type="text" placeholder="Doğrulama Kodu" />
                </div>
                <div className="justify-self-end">
                    <button onClick={() => setConfirmShown(false)} className="text-white cursor-pointer text-sm bg-[#27c5d2] py-2 px-5 rounded-lg font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out">Güncelle</button>
                </div>
            </div>
        </div>
    )
}