export function SettingsCard({ title, description, setPersonalSelectPopUp, preference, team , translation }) {
    return (
        <div className="flex justify-between items-center max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-7.5 p-7.5 my-3.75 rounded-lg bg-[#f8f8f8]">
            <div>
                <p className="text-xl text-[#212529] font-semibold">{title}</p>
                <p className="text-sm text-[#212529] opacity-70">{description}</p>
            </div>
            <div>
                {title !== translation.data?.business?.company_settings?.price_offers?.title ? <select className="border border-[#d9d9d9] rounded-lg bg-white py-1.5 px-3" name="" id="">
                    <option value="" selected>
                        {translation?.data?.business?.everyone_can_see}
                    </option>
                    <option value="">
                        {translation?.data?.business?.only_my_team_can_see}
                    </option>
                    {title === translation?.data?.business?.company_settings.personal_visibility.title && <option value="">
                        {translation?.data?.business?.per_by_personal}
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
                        <button onClick={() => setPersonalSelectPopUp(true)} className="py-2 px-5 cursor-pointer rounded-lg text-sm text-[#4b4b4b] bg-[#f1f1f1] font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">{translation?.data?.business?.change}</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}