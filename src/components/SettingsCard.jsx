export function SettingsCard({ title, description, setPersonalSelectPopUp, preference, team }) {
    return (
        <div className="flex justify-between items-center max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-7.5 p-7.5 my-3.75 rounded-lg bg-[#f8f8f8]">
            <div>
                <p className="text-xl text-[#212529] font-semibold">{title}</p>
                <p className="text-sm text-[#212529] opacity-70">{description}</p>
            </div>
            <div>
                {title !== "Fiyat Teklifleri için Personel Seçimi" ? <select className="border border-[#d9d9d9] rounded-lg bg-white py-1.5 px-3" name="" id="">
                    <option value="" selected>
                        Herkese görünebilir
                    </option>
                    <option value="">
                        Sadece ekibim görebilir
                    </option>
                    {title === "Personel Bilgilerinin Görünürlüğü" && <option value="">
                        Personel bazlı seçim
                    </option>}
                </select> : <div className="flex items-center justify-center gap-7.5">
                    <div className="flex">
                        {team?.personals
                            ?.filter(item => preference.data.price_offer_users.includes(item.id))
                            .map(item => (
                                <div
                                    key={item.id}
                                    className="hover:-translate-y-2.5 transition-all duration-300 ease-in-out"
                                >
                                    <img
                                        className="rounded-full border border-white"
                                        src={item.avatar}
                                        alt=""
                                    />
                                </div>
                            ))}
                    </div>
                    <div>
                        <button onClick={() => setPersonalSelectPopUp(true)} className="py-2 px-5 cursor-pointer rounded-lg text-sm text-[#4b4b4b] bg-[#f1f1f1] font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Değiştir</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}