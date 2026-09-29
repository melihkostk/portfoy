import typeIcon from "../assets/type.svg";

export function CreateButton({title , id , setSelectedType , selectedType}){
    return(
        <div onClick={() => setSelectedType(id)} className={`${selectedType === id ? "bg-[#27c5d2] text-white" : "bg-[#f8f8f8] text-[#515151]" } py-5 px-3.75 rounded-lg cursor-pointer shrink-0 mr-7.5 w-35 flex flex-col items-center`}>
            <img src={typeIcon} alt="" />
            <p className="mt-2.5 whitespace-nowrap">{title}</p>
        </div>
    )
}