export function PersonelCard({ name, avatar, role, preference, id, page }) {
    return (
        <div className={`${preference.data.price_offer_users.includes(id) ? "border-[#27c5d2]" : "border-[#ddd]"} flex justify-between items-center p-3.75 grow border rounded-lg gap-2.5 m-1.25 ${page === "select" ? "w-[48%]" : "w-full"} cursor-pointer`}>
            <div className="flex items-center gap-2.5">
                <div className="w-12.5 h-12.5">
                <img className="w-full h-full object-cover rounded-full" src={avatar} alt=""></img>
                </div>
                <div>
                    <p className="text-sm text-[#212529] font-semibold">{name}</p>
                    <p className="text-xs text-[#212529] opacity-50 font-semibold">{role}</p>
                </div>
            </div>
            {page === "info" && <div className="justify-self-end">
                <select className="border border-[#d9d9d9] rounded-lg bg-white py-1.5 px-3 font-semibold text-[#212529]">
                    <option value="">
                        Herkese görünebilir
                    </option>
                    <option value="">
                        Sadece ekibim görebilir
                    </option>
                </select>
            </div>}
        </div>
    )
}