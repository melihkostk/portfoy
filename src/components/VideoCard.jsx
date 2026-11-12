import video from "../assets/video.jpg"

export function VideoCard(){
    return(
        <a href="https://demo.pigasoft.com/portfoy/public/storage/videos/file-example-mp4-640-3mg.mp4" target="_blank" className="m-3.75 rounded-lg p-3.75 shadow-[0_0_30px_#0000001A] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#27C5D2]">
            <div className="mb-5">
                <img className="w-full object-cover rounded-lg aspect-video" src={video} alt="" />
            </div>
            <div>
                <p className="line-clamp-2 overflow-hidden font-semibold">Test video başlığı</p>
            </div>
        </a>
    )
}