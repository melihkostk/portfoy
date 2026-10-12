import close from "../assets/blue-close.png"
import trash from "../assets/trash.png"

export function DeleteVideoPopUp({setDeleteVideoPopUp , handleDeleteVideo}){
    return(
        <div className="fixed top-1/2 left-1/2 overflow-y-auto flex p-4 max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[30%] bg-white border border-[#eee] rounded-lg z-50">
            <div className="self-end">
                <img onClick={() => setDeleteVideoPopUp(false)} className="w-5.5 h-5.5 cursor-pointer" src={close} alt="" />
            </div>
            <div className="flex flex-col items-center">
                <img className="w-25 h-25" src={trash} alt="" />
                <h4 className="text-[#545454] text-2xl text-center font-semibold mt-6 mb-2">Silmek istediğinize emin misiniz?</h4>
                <p className="text-[#6c757d] text-lg text-center max-w-[60%]">Bu kayıt silindikten sonra tekrar geri alınamayacak, yine de silmek istiyor musunuz?</p>
                <div className="flex items-center gap-2.5 mt-5">
                    <button onClick={handleDeleteVideo} className="text-white cursor-pointer py-2 px-5 rounded-lg mr-2 bg-[#dc3545] text-sm font-semibold hover:bg-[#bb2d3b] transition-colors duration-300 ease-in-out">Evet, kaldır</button>
                    <button onClick={() => setDeleteVideoPopUp(false)} className="text-[#4b4b4b] cursor-pointer py-2 px-5 rounded-lg bg-[#f1f1f1] text-sm font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">İptal</button>
                </div>
            </div>
        </div>
    )
}