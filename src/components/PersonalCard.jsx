export function PersonelCard({name , avatar , role , preference ,id}){
    return(
        <div className={`${preference.data.price_offer_users.includes(id) ? "border-[#27c5d2]" : "border-[#ddd]"} flex items-center p-3.75 grow border rounded-lg gap-2.5 m-1.25 w-[48%] cursor-pointer`}>
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