import arrowDown from "../assets/down-arrow.png"
import React from "react";

export function Questions({question , answer}) {

    const [accordionOpen , setAccordionOpen] = React.useState(false);

    return (
        <div className="p-2.5 border w-full border-[#e2e2e2] rounded-lg mb-5 cursor-pointer">
            <div className="select-none" onClick={() => setAccordionOpen(prev => !prev)}>
            <div className="flex justify-between items-center py-4 px-5 rounded-lg bg-white">
                <div>
                    <p className="font-semibold">
                        {question}
                    </p>
                </div>
                <div>
                    <img className="w-6 h-6" src={arrowDown} alt="" />
                </div>
            </div>
            </div>
            <div className={`px-5 py-4 select-none ${accordionOpen ? "block" : "hidden"}`}>
                <p className="text-[#212529]">{answer}</p>
            </div>
        </div>
    )
}