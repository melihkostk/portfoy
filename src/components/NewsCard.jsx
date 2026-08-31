export function NewsCard({title , cover , created}) {
    return (
        <div className="bg-white p-7.5 m-5 w-[22%] shrink-0 rounded-[10px] shadow-[0_0_30px_rgb(246_246_246)] max-[992px]:w-full max-[992px]:m-0">
            <div>
                <img className="align-middle aspect-square object-cover max-w-full w-full rounded-[10px]" src={cover} alt={title} />
            </div>
            <div>
                <a className="mt-5 mb-2.5 text-[22px] line-clamp-3 min-h-25" href="https://demo.pigasoft.com/portfoy/public/tr/articles/2024/October/25/10">{title}</a>
                <p className="text-[#b7b9bf] text-base mb-4 font-medium">
                    {created}
                </p>
                <a className="bg-[#b7b9bf] py-3.75 px-5 text-white text-sm font-medium rounded-[10px] hover:bg-[#919191] transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/articles/2024/October/25/10">Devamını Oku</a>
            </div>
        </div>
    )
}