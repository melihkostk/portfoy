export function PortfoyCard(props){
    return(
        <div className="flex-1">
            <div className="mb-20">
                <img className="h-50 w-full object-cover rounded-lg" src={props.img} alt="" />
            </div>
            <div>
                <h3 className="text-xl text-[#202125] font-medium mb-2 text-center">{props.title}</h3>
                <p className="text-sm text-[#202125] font-medium text-center opacity-70">{props.description}</p>
            </div>
        </div>
    )
}