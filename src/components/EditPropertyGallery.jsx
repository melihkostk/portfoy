import defaultProperty from "../assets/default-property.jpg"
import cover from "../assets/video-1.jpg"
import play from "../assets/play-white.png"
import can from "../assets/can.png"
import calendar from "../assets/w-calendar.png"
import whiteChain from "../assets/white-chain.png"
import chain from "../assets/chain.png"
import plus from "../assets/gray-plus.png"
import { UploadVideoPopup } from "./UploadVideoPopUp";

export function EditPropertyGallery({
    detail,
    understand,
    setUnderstand,
    handleUploadGallery,
    handleUpdateCover,
    setCoverFile,
    setDeleteVideoPopUp,
    setMediaID,
    setDeleteTarget,
    setVideoID,
    uploadVideoShown,
    setUploadVideoShown,
    handleAddOutsourceVideo,
    setVideoType,
    videoType,
    video,
    setVideo,
    coverImg,
    setCoverImg,
    handleAddLocalVideo,
    translation
}) {
    return (
        <div className="w-full max-w-[90%]">
            {uploadVideoShown && <UploadVideoPopup
                setUploadVideoShown={setUploadVideoShown}
                handleAddOutsourceVideo={handleAddOutsourceVideo}
                setVideoType={setVideoType}
                videoType={videoType}
                video={video}
                setVideo={setVideo}
                coverImg={coverImg}
                setCoverImg={setCoverImg}
                handleAddLocalVideo={handleAddLocalVideo}
                translation={translation}
            />}
            <div className="w-full mb-7.5">
                {detail?.galleries?.map(item => (
                    <div key={item.id} className="p-2.5 border border-[#f8f8f8] rounded-lg mb-7.5">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">{item.title}</h5>
                        </div>
                        <div className="p-4">
                            {(item.title.includes(translation?.data?.business?.cover_image) || item.title.includes(translation?.data?.business?.["3d_cover_image"]) && understand) && <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg border border-[#ffecb5]">
                                <p className="text-[#664d03]">{translation?.data?.business?.gallery_upload_warning_text}</p>
                                <button onClick={() => setUnderstand(false)} className="bg-[#ffca64] text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out">{translation?.data?.business?.understand}</button>
                            </div>}
                            <div className={`${item.title.includes(translation?.data?.business?.cover_image) ? "h-87.5" : "h-50"} text-center flex items-center justify-center`}>
                                {!(item.title.includes(translation?.data?.business?.cover_image) || item.title.includes(translation?.data?.business?.["3d_cover_image"])) ?
                                    <div className="w-full flex flex-col">
                                        <div className="h-50 text-center p-5 flex w-full items-center justify-center border-2 border-[#eee] border-dashed">
                                            <input onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) handleUploadGallery(file, item.id);
                                            }} className="w-full h-full" type="file" id={`file-${item.id}`} hidden></input>
                                            <label className="w-full h-full flex items-center justify-center cursor-pointer text-xl text-[#929292]" htmlFor={`file-${item.id}`}>
                                                {translation?.data?.business?.upload_or_drag_files}
                                            </label>
                                        </div>
                                    </div> : <div className="w-full h-full relative">
                                        <img className="w-full h-full object-cover rounded-lg" src={defaultProperty}></img>
                                        <div className="absolute right-7.5 bottom-7.5 flex flex-wrap items-center">
                                            <a href={item?.images?.[0]?.path?.large} target="_blank" rel="noopener noreferrer" className="text-sm bg-[#f1f1f1] mr-2 text-[#4b4b4b] font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                                <img className="w-5 h-5" src={chain} alt="" />
                                            </a>
                                            <div>
                                                <label htmlFor="cover" className="text-sm bg-[#f1f1f1] text-[#4b4b4b] font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">{translation?.data?.business?.change_cover_image}</label>
                                                <input onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    setCoverFile(file);
                                                    if (file) handleUpdateCover()
                                                }}
                                                    type="file" className="hidden" id="cover" name="cover" />
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                            {(item?.images[0]?.path?.small && item.title !== translation?.data?.business?.["3d_cover_image"]) && <div className="h-auto w-[25%] mt-5 bg-linear-to-b from-transparent to-black rounded-lg">
                                <img src={item?.images[0]?.path?.small} alt={item?.images[0]?.path?.small} />
                                <div className="p-4 flex flex-col items-end">
                                    <div>
                                        <button className="text-white flex items-center gap-2 text-[13px] font-medium p-1.25 rounded-sm cursor-pointer hover:bg-[#00000080] transition-colors duration-300 ease-in-out">
                                            {translation?.data?.business?.unspecified}
                                            <img className="w-4 h-4" src={calendar} alt="" />
                                        </button>
                                    </div>
                                    <div className="flex w-full justify-between items-end">
                                        <div className="text-white">
                                            <p className="text-sm opacity-80">119.46 kB</p>
                                            <p className="text-xs opacity-80">jpeg</p>
                                        </div>
                                        <div className="text-white flex items-center">
                                            <a target="_blank" href={item?.images[0]?.path?.small}>
                                                <img className="w-4.5 h-4.5 mr-2 opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out" src={whiteChain} alt="" />
                                            </a>
                                            <img onClick={() => { setDeleteVideoPopUp(true); setMediaID(item.images[0].id); setDeleteTarget("media"); }} className="w-5.5 h-5.5 mr-2 opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out" src={can} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full mb-7.5">
                <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                    <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                        <h5 className="text-[#676767] text-lg py-1.25">{translation?.data?.business?.videos}</h5>
                    </div>
                    <div className="p-4">
                        {detail.videos.length === 0 ? <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg">
                            <p className="text-[#664d03]">{translation?.data?.business?.video_not_uploaded_yet}</p>
                        </div> : <div className="flex flex-wrap">
                            {detail?.videos?.map(item => (
                                <div id={item.id} key={item.id} className="w-[calc(33.3%-30px)] p-7.5 rounded-lg flex items-end aspect-square bg-cover bg-center m-3.75" style={{ backgroundImage: `url(${cover})` }}>
                                    <div className="flex text-white gap-3.75 flex-wrap w-full">
                                        <a href={item.path} target="_blank" className="bg-[#27c5d2] flex items-center hover:shadow-[0_0_30px_#27c5d2] transition-shadow duration-300 ease-in-out py-1.25 px-3.75 rounded-lg">
                                            <img className="w-5 h-5 mr-2" src={play} alt="" />
                                            {translation?.data?.business?.play}
                                        </a>
                                        <button onClick={() => { setVideoID(item.id); setDeleteVideoPopUp(true); setDeleteTarget("video"); }} className="bg-[#e10606] flex items-center cursor-pointer hover:shadow-[0_0_30px_#e10606] transition-shadow duration-300 ease-in-out py-1.25 px-3.75 rounded-lg">
                                            <img className="w-6 h-6 mr-2" src={can} alt="" />
                                            {translation?.data?.business?.remove}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>}
                    </div>
                    <div>
                        <button onClick={() => setUploadVideoShown(true)} className="bg-[#f1f1f1] flex gap-1 items-center cursor-pointer font-semibold text-[#4b4b4b] text-sm rounded-lg py-2 px-5 hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                            <img className="w-4 h-4" src={plus} alt="" />
                            {translation?.data?.business?.upload_video}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
