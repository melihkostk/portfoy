export function TransactionCard({name , avatar , message , time}) {
    return (
        <div className="flex p-3.75 border-b border-b-[#eee]">
            <div className="w-15 h-15">
                <img className="w-full h-full rounded-full" src={avatar} alt="" />
            </div>
            <div className="ml-4">
                <h5 className="mb-2">
                    <a className="text-black text-base opacity-70 font-semibold">{name}</a>
                    <small className="text-sm text-[#6c757d] ml-2">{time}</small>
                </h5>
                <p className="text-lg text-[#6c757d]">{message}</p>
            </div>
        </div>
    )
}