export function PropertySettingsCard({ title, description, button, onClick }) {
    return (
        <div className="mb-7.5 border border-[#f8f8f8] rounded-lg w-[32%] mx-2">
            <div className="p-2.5">
                <div className="p-4">
                    <h4 className="text-2xl text-[#6c757d] font-semibold mb-2">{title}</h4>
                    <p className="text-base text-[#6c757d] mb-4">{description}</p>
                    <button onClick={onClick} className="bg-[#f1f1f1] rounded-lg font-semibold cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out text-sm text-[#4b4b4b] py-2 px-5">{button}</button>
                </div>
            </div>
        </div>

    )
}