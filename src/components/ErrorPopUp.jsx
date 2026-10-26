import cross from "../assets/cross.png"

export function ErrorPopUp({setErrorShown , errorMessage , translation}){
    return(
        <div className="fixed pb-5 top-1/2 p-4 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-60">
            <div className="mt-10 mb-2.5">
                <img src={cross} alt="" />
            </div>
            <p className="text-xl text-[#545454] font-semibold text-center">
                {errorMessage}
            </p>
            <div className="mt-5">
                <button className="bg-[#27c5d2] py-2 px-5 rounded-lg text-sm text-white font-semibold cursor-pointer" onClick={() => setErrorShown(false)}>{translation?.data?.business?.ok_button}</button>
            </div>
        </div>
    )
}