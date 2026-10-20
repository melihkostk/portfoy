export function ScoreCard({ translation }) {
    return (
        <div className="flex flex-col items-center justify-center border border-[#eee] rounded-lg w-80 h-85 max-[992px]:w-full">
            <div>
                <p className="text-center text-[40px] font-semibold">3.1</p>
                <p className="text-sm text-[#a1a1a1] text-center font-semibold mb-5">
                    {translation?.data?.business?.average_rating}
                    <span className="text-xs block font-semibold">29 {translation?.data?.business?.review}</span>
                </p>
            </div>
            <div>

            </div>
        </div>
    )
}