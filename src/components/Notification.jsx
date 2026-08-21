import noti from "../assets/notification.png"

export function Notification() {
    return (
        <div className="flex pb-2.5 my-2.5 border-b border-b-[#eee] cursor-pointer">
            <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
                <img className="w-7 h-7" src={noti} alt="" />
            </div>
            <div className="pl-2.5 w-full">
                <p className="text-[#a6a6a6] text-sm mb-1.25 hover:text-[#27C5D2] transition-colors duration-300 ease-in-out">
                    Müthiş ILAN başlıklı ilanınız bir kullanıcı tarafından favoriye eklendi.
                </p>
                <p className="text-xs text-black opacity-50">
                    2 ay önce
                </p>
            </div>
        </div>
    )
}