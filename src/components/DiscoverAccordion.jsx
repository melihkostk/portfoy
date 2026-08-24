import downArrow from "../assets/down-arrow.png"
import React from "react";

export function DiscoverAccordion({ question , answer }) {
    const [accordionOpen , setAccordionOpen] = React.useState(false);

    return (
        <div className="flex flex-col mb-5 rounded-lg cursor-pointer shadow-[0_0_120px_rgba(0,0,0,0.1)]">
            <div onClick={() => setAccordionOpen(prev => !prev)} className="p-2.5 bg-[#f7f6fb]">
                <div className="flex items-center justify-between px-5 py-4">
                    <div>
                        <p className="font-semibold select-none">
                            {question}
                        </p>
                    </div>
                    <div>
                        <img className="w-6 h-6 select-none" src={downArrow} alt="down arrow" />
                    </div>
                </div>
            </div>
            <div className={`px-5 py-4 select-none ${accordionOpen ? "block" : "hidden"}`}>
                <p className="text-[#212529]">{answer}</p>
            </div>
        </div>
    )
}