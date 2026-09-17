export function PropertySettingsCard({ title, description, button }) {
    return (
        <div className="mb-7.5 border border-[#f8f8f8] rounded-lg w-[32%] mx-2">
            <div className="p-2.5">
                <div className="p-4">
                    <h4 className="text-2xl text-[#6c757d] mb-2">{title}</h4>
                    <p className="text-base text-[#6c757d] mb-4">{description}</p>
                    <button className="bg-[#f1f1f1] rounded-lg text-sm text-[#4b4b4b] py-2 px-5">{button}</button>
                </div>
            </div>
        </div>

    )
}