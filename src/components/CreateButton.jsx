import typeIcon from "../assets/type.svg";
import projects from "../assets/projects.svg"
import villa from "../assets/villa.svg"
import plot from "../assets/plot.svg"

const typeIcons = {
    27: typeIcon,
    29: projects,
    21: villa,
    9:plot,
    10:plot
};

export function CreateButton({title , id , setSelectedType , selectedType , setUnderConstruction}){
    return(
        <div onClick={() => {setSelectedType(id) ; setUnderConstruction(id !== 29 ? 0 : 1)}} className={`${selectedType === id ? "bg-[#27c5d2] text-white" : "bg-[#f8f8f8] text-[#515151]" } py-5 px-3.75 rounded-lg cursor-pointer shrink-0 mr-7.5 w-35 flex flex-col items-center`}>
            <img src={typeIcons[id]} alt="" />
            <p className="mt-2.5 whitespace-nowrap font-medium">{title}</p>
        </div>
    )
}