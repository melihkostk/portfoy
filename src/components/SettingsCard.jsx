export function SettingsCard() {
    return (
        <div className="flex justify-between items-center max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-7.5 p-7.5 my-3.75 rounded-lg bg-[#f8f8f8]">
            <div>
                <p className="text-xl text-[#212529]">Personel Bilgilerinin Görünürlüğü</p>
                <p className="text-sm text-[#212529] opacity-70">Ekibinizdeki personellerin bilgilerinin diğer Port-Foy kullanıcılarına görünürlüğünü seçin</p>
            </div>
            <div>
                <select className="border border-[#d9d9d9] rounded-lg bg-white py-1.5 px-3" name="" id="">
                    <option value="" selected>
                        Herkese görünebilir
                    </option>
                    <option value="">
                        Sadece ekibim görebilir
                    </option>
                    <option value="">
                        Personel bazlı seçim
                    </option>
                </select>
            </div>
        </div>
    )
}