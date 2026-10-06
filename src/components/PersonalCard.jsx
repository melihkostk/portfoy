export function PersonelCard({name , avatar , role}){
    return(
        <div className="flex items-center p-3.75 grow border border-[#ddd] rounded-lg gap-2.5 m-1.25 w-[48%] cursor-pointer">
            <div className="w-12.5 h-12.5">
                <img className="w-full h-full object-cover rounded-full" src={avatar} alt=""></img>
            </div>
            <div>
                <p className="text-sm text-[#212529] font-semibold">{name}</p>
                <p className="text-xs text-[#212529] opacity-50 font-semibold">{role}</p>
            </div>
        </div>
    )
}