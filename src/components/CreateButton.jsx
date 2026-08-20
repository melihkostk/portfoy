import typeIcon from "../assets/type.svg";

export function CreateButton(){
    return(
        <div className="bg-[#f8f8f8] py-5 px-3.75 rounded-lg cursor-pointer shrink-0 mr-7.5 w-35 flex flex-col items-center">
            <img src={typeIcon} alt="" />
            <p className="mt-2.5 whitespace-nowrap text-[#515151]">Apartman</p>
        </div>
    )
}