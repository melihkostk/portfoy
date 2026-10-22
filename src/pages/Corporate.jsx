import { Header } from "../components/Header";
import corporate from "../assets/corporate.png"
import { CorporateCard } from "../components/CorporateCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import mission from "../assets/mission.png"
import vision from "../assets/vision.png"
import about from "../assets/about.png"
import { useEffect, useState } from "react";
import { getTranslation } from "../services/translation";
import { ClipLoader } from "react-spinners"

export function Corporate({loged , locale, setLocale}) {

    const [translation , setTranslation] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    return (
        <div className='flex flex-col items-center font-sf'>
            {!loaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.corporate}</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%] max-[992px]:max-w-full">
                <div>
                    <img className="rounded-b-xl" src={corporate} alt="" />
                </div>
            </div>
            <div className="w-full max-w-[90%] max-[992px]:max-w-full">
                <div className="flex flex-col items-center w-full max-w-[70%] max-[992px]:max-w-full max-[992px]:p-0 max-[992px]:mt-5  max-[992px]:mb-5 max-[992px]:shadow-none bg-white -mt-20 mb-30 mx-auto rounded-lg p-12.5 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                    <h1 className="mb-7.5 text-[25px] text-[#212529] font-medium text-center">{translation?.data?.business?.corporate_page_section_header_title}</h1>
                    <div className="text-center mb-7.5 text-sm text-[#212529] opacity-70 max-w-[70%] font-medium">
                       {translation?.data?.business?.corporate_page_section_header_descriptions.map((item , index) => (
                            <p key={index} className="mb-7.5">{item}</p>
                       ))}
                    </div>
                    <div className="w-full flex items-center justify-center gap-5 mt-8">
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="#Hakkımızda">{translation?.data?.business?.about_us}</a>
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="#Misyon">{translation?.data?.business?.mission}</a>
                        <a className="bg-[#f8f8f8] text-sm text-black py-2 px-5 rounded-lg font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out hover:shadow-[0_0_50px_10px_rgba(39,197,210,0.5)]" href="#Vizyon">{translation?.data?.business?.vision}</a>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] py-30 max-[992px]:py-7.5">
                <CorporateCard
                    title={translation?.data?.business?.about_us}
                    location="left"
                    img={about}
                    p={translation.data?.business?.corporate_page_about_section_descriptions}

                />
            </div>
            <div className="w-full bg-[#F7F6FB] flex justify-center">
                <div className="w-full max-w-[90%] py-30 max-[992px]:py-7.5">
                    <CorporateCard
                        title={translation?.data?.business?.mission}
                        location="right"
                        img={mission}
                        p={translation.data?.business?.corporate_page_mission_section_descriptions}
                    />
                </div>
            </div>
            <div className="w-full max-w-[90%] py-30 max-[992px]:py-7.5">
                <CorporateCard
                    title={translation?.data?.business?.vision}
                    location="left"
                    img={vision}
                    p={translation.data?.business?.corporate_page_vision_section_descriptions}
                />
            </div>
            <div className='w-full mt-30 mb-30 max-[992px]:mt-7.5'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks  translation={translation} />
                </div>
            </div>
            <div className='w-full'>
                <Footer translation={translation} loged={loged} />
            </div>
        </div>
    )
}