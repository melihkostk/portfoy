import { Link } from "react-router-dom"

export function ProfileCard({title , link , img , number}){
    return(
        <Link to={`/${link}`} className="p-3.75 m-3.75 flex justify-between bg-[#f8f8f8] rounded-lg w-[23%] max-[992px]:w-[40%] relative">
            <div>
                <div className="absolute bg-[#eee] rounded-tl-lg rounded-br-lg w-[30%] h-[70%] top-0 left-0 flex items-center justify-center">
                    <img className="w-6 h-6" src={img} alt="" />
                </div>
            </div>
            <div>
                <p className="text-[25px] text-black font-semibold text-end">{number}</p>
                <p className="text-sm text-[#9f9f9f] text-end">{title}</p>
            </div>
        </Link>
    )
}