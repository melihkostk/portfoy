export function SettingsCard({title , description}) {
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
                            <div className="hover:-translate-y-2.5 transition-all duration-300 ease-in-out">
                                <img className="rounded-full border border-white" src="https://ui-avatars.com/api/?name=Rahime&amp;background=27c5d2&amp;color=fff&amp;size=32&amp;bold=1&amp;uppercase=1&amp;format=svg&amp;length=2" alt=""></img>
                            </div>
                            <div className="-ml-2 hover:-translate-y-2.5 transition-all duration-300 ease-in-out">
                                <img className="rounded-full border border-white" src="https://ui-avatars.com/api/?name=Enes+Bayba%C4%9Fan&amp;background=27c5d2&amp;color=fff&amp;size=32&amp;bold=1&amp;uppercase=1&amp;format=svg&amp;length=2" alt=""></img>
                            </div>
                        </div>
                        <div>
                            <button className="py-2 px-5 cursor-pointer rounded-lg text-sm text-[#4b4b4b] bg-[#f1f1f1] font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Değiştir</button>
                        </div>
                </div>}
            </div>
        </div>
    )
}