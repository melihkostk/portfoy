import close from "../assets/blue-close.png"

export function UploadVideoPopup({translation, setUploadVideoShown, handleAddOutsourceVideo, handleAddLocalVideo, videoType, setVideoType, setVideo, setCoverImg }) {

    return (
        <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
            <div className="flex justify-between items-center w-full p-4 border-b border-b-[#dee2e6]">
                <h2 className="text-xl text-[#212529] font-semibold">{translation?.data?.business?.upload_video}</h2>
                <img onClick={() => setUploadVideoShown(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
            </div>
            <div className="p-4 w-full">
                <div className="flex items-center justify-between gap-3 mb-5">
                    <button onClick={() => setVideoType("local")} className={`${videoType === "local" ? "bg-[#27c5d2] text-white" : "bg-[#eeeeee] text-black"} py-2.5 px-5 rounded-lg w-[calc(50%-5px)] whitespace-nowrap cursor-pointer`}>{translation?.data?.business?.upload_from_my_device}</button>
                    <button onClick={() => setVideoType("outsource")} className={`${videoType === "outsource" ? "bg-[#27c5d2] text-white" : "bg-[#eeeeee] text-black"} py-2.5 px-5 rounded-lg w-[calc(50%-5px)] whitespace-nowrap cursor-pointer`}>{translation?.data?.business?.upload_from_youtube}</button>
                </div>
                <div className="p-7.5 rounded-lg border border-[#eee]">
                    {videoType === "local" ? <form key="local" onSubmit={handleAddLocalVideo}>
                        <div className="flex flex-col mb-2">
                            <label className="text-[#212529] mb-2 font-semibold" htmlFor="">{translation?.data?.business?.select_video_cover}</label>
                            <input accept="image/*" required onChange={(e) => setCoverImg(e.target.files[0])} className="border z-50 border-[#d9d9d9] py-1.5 px-3 rounded-lg" type="file" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#212529] mb-2 font-semibold" htmlFor="">{translation?.data?.business?.select_video}</label>
                            <input accept="video/mp4,video/webm,video/ogv" required onChange={(e) => setVideo(e.target.files[0])} className="border border-[#d9d9d9] py-1.5 px-3 rounded-lg" type="file" />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="text-white bg-[#27c5d2] text-sm rounded-lg py-2 px-5 mt-2 font-semibold cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.upload}</button>
                        </div>
                    </form> : <form key="outsource" onSubmit={handleAddOutsourceVideo}>
                        <div className="flex flex-col">
                            <label className="text-[#212529] mb-2 font-semibold" htmlFor="">{translation?.data?.business?.youtube_link}</label>
                            <input required onChange={(e) => setVideo(e.target.value)} className="border border-[#d9d9d9] py-1.5 px-3 rounded-lg" type="text" placeholder={translation?.data?.business?.youtube_link} />
                        </div>
                        <div className="mt-2 text-[#6c757d] text-sm bg-[#e2e3e5] p-4 border border-[#d3d6d8] rounded-lg">
                            <p>{translation?.data?.business?.youtube_link_info}</p>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="text-white bg-[#27c5d2] text-sm rounded-lg py-2 px-5 mt-2 font-semibold cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.upload}</button>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    )
}