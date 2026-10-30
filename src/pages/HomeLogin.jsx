import { Link } from "react-router-dom"
import { Filter } from "../components/Filter"
import { Header } from "../components/Header"
import { PropertiesCard } from "../components/PropertiesCard"
import { NewsCard } from "../components/NewsCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { getRecentlyProperties } from "../services/propertiesApi"
import { getDiscountedProperties } from "../services/propertiesApi"
import { useState, useEffect, useRef } from "react"
import { ClipLoader } from "react-spinners"
import { getTranslation } from "../services/translation"

export function HomeLogin({ loged, news, logOut , locale, setLocale }) {

    const [recentlyProperties, setRecentlyProperties] = useState([])
    const [discountedProperties, setDiscountedProperties] = useState([])

    const discountedScrollRef = useRef(null)
    const recentlyScrollRef = useRef(null)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getRecentlyProperties().then(setRecentlyProperties).finally(() => setLoaded(true))
    }, [])

    useEffect(() => {
        getDiscountedProperties().then(setDiscountedProperties)
    }, [])

    function scrollToDot(ref, index, dotCount) {
        const el = ref.current
        if (!el) return
        const maxScroll = el.scrollWidth - el.clientWidth + 800
        el.scrollTo({ left: (maxScroll / (dotCount - 1)) * index, behavior: "smooth" })
    }

    const [translation , setTranslation] = useState([]);

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
            <Header translation={translation} loged={loged} logOut={logOut} locale={locale} setLocale={setLocale} />
            <div className='w-full max-w-[90%] py-20'>
                <h1 className='text-[35px] text-[#45443f] font-medium mb-2'>{translation?.data?.business?.filter_properties}</h1>
                <Filter translation={translation} />
            </div>
            <div className='w-full max-w-[90%] flex flex-col items-center'>
                <div className="w-full py-18.75">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[32px] text-[#45443f] mb-2">{translation?.data?.business?.discounted_properties}</h2>
                        <Link className="text-[#B7B9BF] text-xl hover:text-[#45443F] transition-colors duration-300 ease-in-out" to={"/properties?discounted=1"}>{translation?.data?.business?.view_all}</Link>
                    </div>
                    <div>
                        <div ref={discountedScrollRef} className="flex overflow-auto scrollbar-none">
                            {discountedProperties?.data?.map(item => (
                                <PropertiesCard
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                    price={item.price.formatted}
                                    company={item.company.title}
                                    type={item.type.title}
                                    city={item.city.title}
                                    district={item.district.title}
                                    page="homeLogin"
                                    badges={item?.badges?.[0]?.key}
                                    badgeTitle={item?.badges?.[0]?.title}
                                    propertyType={item?.property_type}
                                    translation={translation}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center py-7.5 w-full gap-2.5 max-[992px]:hidden">
                            {[0, 1, 2, 3].map(index => (
                                <button
                                    key={index}
                                    onClick={() => scrollToDot(discountedScrollRef, index, 4)}
                                    className="bg-[#c2c2c2] w-3 h-3 rounded-full cursor-pointer focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[90%] flex flex-col items-center'>
                <div className="w-full py-18.75">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[32px] text-[#45443f] mb-2">{translation?.data?.business?.new_properties}</h2>
                    </div>
                    <div>
                        <div ref={recentlyScrollRef} className="flex overflow-auto py-6.25 scrollbar-none">
                            {recentlyProperties?.map(item => (
                                <PropertiesCard
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                    price={item.price.formatted}
                                    company={item.company.title}
                                    type={item.type.title}
                                    city={item.city.title}
                                    district={item.district.title}
                                    page="homeLogin"
                                    translation={translation}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center py-7.5 w-full gap-2.5 max-[992px]:hidden">
                            {[0, 1, 2, 3].map(index => (
                                <button
                                    key={index}
                                    onClick={() => scrollToDot(recentlyScrollRef, index, 4)}
                                    className="bg-[#c2c2c2] w-3 h-3 rounded-full cursor-pointer focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#f7f7fb] py-18.75'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center'>
                    <div className='flex justify-between items-center w-full'>
                        <h2 className='text-[#45443F] text-[32px]'>{translation?.data?.business?.article_and_announcements}</h2>
                        <Link to={"/articles"} className='text-[#B7B9BF] text-xl font-medium hover:text-[#45443f] transition-colors duration-300 ease-in-out' href="https://demo.pigasoft.com/portfoy/public/tr/articles">{translation?.data?.business?.view_all}</Link>
                    </div>
                    <div className='flex items-start overflow-hidden -mx-5 max-[992px]:flex-col max-[992px]:m-0'>
                        {news?.slice(0,4)?.map(item => (
                            <NewsCard translation={translation} key={item.id} title={item.title} cover={item.cover} created={item.created_at} id={item.id} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks translation={translation} />
                </div>
            </div>
            <div className='w-full'>
                <Footer translation={translation} loged={loged} />
            </div>
        </div>
    )
}