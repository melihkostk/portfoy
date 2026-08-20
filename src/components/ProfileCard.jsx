import menu from "../assets/black-menu.png"

export function ProfileCard(){
    return(
        <div className="p-3.75 m-3.75 flex justify-between bg-[#f8f8f8] rounded-lg w-[23%] relative">
            <div>
                <div className="absolute bg-[#eee] rounded-tl-lg rounded-br-lg w-[30%] h-[70%] top-0 left-0 flex items-center justify-center">
                    <img className="w-6 h-6" src={menu} alt="" />
                </div>
            </div>
            <div>
                <p className="text-[25px] text-black font-semibold">323</p>
                <p className="text-sm text-[#9f9f9f] text-end">İlan</p>
            </div>
        </div>
    )
}