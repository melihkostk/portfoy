import news1 from "../assets/news1.jpeg"
import { Link } from "react-router-dom"
import grayCalendar from "../assets/gray-calendar.png"

export function NewsCard({ title, created, id, page }) {
    return (
        <div className={`bg-white w-[22%] ${page === "detail" ? "w-full m-0 p-0" : "m-5 p-7.5"} shrink-0 rounded-[10px] shadow-[0_0_30px_rgb(246_246_246)] max-[992px]:w-full max-[992px]:m-0`}>
            <div>
                <img className="align-middle aspect-square object-cover max-w-full w-full rounded-[10px]" src={news1} alt={title} />
            </div>
            <div>
                <Link to={`/articles/${id}`} className="mt-5 mb-2.5 text-[22px] line-clamp-3 min-h-25">{title}</Link>
                <div className="flex items-center gap-2 mb-4">
                    <img className="w-4 h-4" src={grayCalendar} alt="" />
                    <p className="text-[#b7b9bf] text-base font-medium">
                        {created}
                    </p>
                </div>
                {page !== "detail" && <Link to={`/articles/${id}`} className="bg-[#b7b9bf] py-3.75 px-5 text-white text-sm font-medium rounded-[10px] hover:bg-[#919191] transition-colors duration-300 ease-in-out">Devamını Oku</Link>}
            </div>
        </div>
    )
}