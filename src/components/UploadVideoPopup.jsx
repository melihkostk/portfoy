import { useState } from "react"
import close from "../assets/blue-close.png"

export function UploadVideoPopup({ setUploadVideoShown }) {

    const [type , setType] = useState("local");

    return (
        <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
            <div className="flex justify-between items-center w-full p-4 border-b border-b-[#dee2e6]">
                <h2 className="text-xl text-[#212529] font-semibold">Video Yükleyin</h2>
                <img onClick={() => setUploadVideoShown(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
            </div>
            <div className="p-4 w-full">
                <div className="flex items-center justify-between gap-3 mb-5">
                    <button onClick={() => setType("local")} className={`${type === "local" ? "bg-[#27c5d2] text-white" : "bg-[#eeeeee] text-black" } py-2.5 px-5 rounded-lg w-[calc(50%-5px)] cursor-pointer`}>Bilgisayarımdan Yükle</button>
                    <button onClick={() => setType("youtube")} className={`${type === "youtube" ? "bg-[#27c5d2] text-white" : "bg-[#eeeeee] text-black" } py-2.5 px-5 rounded-lg w-[calc(50%-5px)] cursor-pointer`}>Youtube Bağlantısı Paylaş</button>
                </div>
                <div className="p-7.5 rounded-lg border border-[#eee]">
                    {type === "local" ? <div>
                        <div className="flex flex-col mb-2">
                            <label className="text-[#212529] mb-2" htmlFor="">Video kapak görseli seçin</label>
                            <input className="border border-[#d9d9d9] py-1.5 px-3 rounded-lg" type="file" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#212529] mb-2" htmlFor="">Video Seçin</label>
                            <input className="border border-[#d9d9d9] py-1.5 px-3 rounded-lg" type="file" />
                        </div>
                    </div> : <div>
                        <div className="flex flex-col">
                            <label className="text-[#212529] mb-2" htmlFor="">Youtube Bağlantısı</label>
                            <input className="border border-[#d9d9d9] py-1.5 px-3 rounded-lg" type="text" placeholder="Youtube Bağlantısı" />
                        </div>
                        <div className="mt-2 text-[#6c757d] text-sm bg-[#e2e3e5] p-4 border border-[#d3d6d8] rounded-lg">
                            https://www.youtube.com/watch?v= ile başlayan video izleme bağlantısını yapıştırabilirsiniz
                        </div>
                    </div>}
                    <div className="text-right">
                        <button className="text-white bg-[#27c5d2] text-sm rounded-lg py-2 px-5 mt-2 font-semibold cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Yükle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}