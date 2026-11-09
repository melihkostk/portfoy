import { Link } from "react-router-dom"

export function BlogCard({title , time , id }){
    return(
        <div className="m-3.75 w-[calc(25%-30px)]">
            <div>
                <Link to={`/blog/${id}`} className="text-[#0d6efd] font-medium hover:text-[#0a58ca] transition-colors duration-300 ease-in-out">
                    <img src="https://demo.pigasoft.com/portfoy/public/storage/posts/202411/emlak-vergisi-nedir-nasil-odenir-ne-zaman.jpg" alt={title} />
                </Link>
            </div>
            <div className="mt-2.5">
                <p className="text-sm mb-2.5 text-[#5b5b5b] font-medium">{time}</p>
                <Link className="text-black text-lg font-semibold hover:text-[#27c5d2] transition-colors duration-300 ease-in-out">{title}</Link>
            </div>
        </div>
    )
}