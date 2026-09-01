import home from "../assets/home.png"

export function CountCard({title , value}){
    return(
        <div className="border border-[#eee] rounded-lg flex flex-col items-center justify-center m-2.5 w-[23%] h-40">
            <div className="w-12.5 h-12.5 rounded-full bg-[#eee] flex items-center justify-center mb-2.5">
                <img className="w-5 h-5" src={home} alt="" />
            </div>
            <div>
                <p className="text-center text-[25px] font-semibold">{value}</p>
                <p className="text-center text-sm text-[#a1a1a1] uppercase font-medium">{title}</p>
            </div>
        </div>
    )
}