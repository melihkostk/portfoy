import newsImage from "../assets/news1.jpeg"

export function NewsCard() {
    return (
        <div className="bg-white p-7.5 m-5 w-[24%] rounded-[10px] shadow-[0_0_30px_rgb(246_246_246)]">
            <div>
                <img className="align-middle aspect-square object-cover max-w-full rounded-[10px]" src={newsImage} alt="" />
            </div>
            <div>
                <a className="mt-5 mb-2.5 text-[22px] line-clamp-3 min-h-25" href="https://demo.pigasoft.com/portfoy/public/tr/articles/2024/October/25/10">Türkiye</a>
                <p className="text-[#b7b9bf] text-base mb-4 font-medium">
                    25 Ekim, Cuma
                </p>
                <a className="bg-[#b7b9bf] py-3.75 px-5 text-white text-sm font-medium rounded-[10px] hover:bg-[#919191] transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/articles/2024/October/25/10">Devamını Oku</a>
            </div>
        </div>
    )
}