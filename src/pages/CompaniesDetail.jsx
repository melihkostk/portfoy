import { useParams } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { getCompaniesProperties } from "../services/companiesApi"
import { useEffect, useState } from "react"
import { PropertiesCard } from "../components/PropertiesCard"
import { ClipLoader } from "react-spinners"
import { getTranslation } from "../services/translation"

export function CompaniesDetail({ loged , locale, setLocale }) {

    const { id } = useParams();

    const [companyDetailProperties, setCompanyDetailProperties] = useState([]);
    const [loaded , setLoaded] = useState(false)

    useEffect(() => {
        getCompaniesProperties(id).then(setCompanyDetailProperties).finally(() => setLoaded(true))
    }, [id])

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
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
             <CompanyHeader
                page="companyDetail"
                id={id}
                name={companyDetailProperties?.name}
                created_at={companyDetailProperties?.created_at}
                type={companyDetailProperties?.type}
                badges={companyDetailProperties?.badges?.[0]?.title}
                logo={companyDetailProperties?.logo}
                translation={translation}

            />
            <div className="max-w-[90%] w-full pt-12.5">
                {companyDetailProperties?.properties?.length > 0 ? [...new Set(companyDetailProperties.properties.map(item => item.type.title))].map(type => (
                    <div key={type} className="mb-7.5">
                        <h3 className="text-[25px] font-semibold text-[#212529] mb-3.75">{type}</h3>
                        <div className="flex flex-wrap">
                            {companyDetailProperties.properties.filter(item => item.type.title === type).map(item => (
                                <PropertiesCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                    price={item.price.formatted}
                                    company={item.company.title}
                                    type={item.type.title}
                                    city={item.city.title}
                                    district={item.district.title}
                                    page="companiesDetail"
                                    propertyType={item.is_under_construction}
                                />
                            ))}
                        </div>
                    </div>
                )) : (
                    <div className="text-[#636464] w-full bg-[#fafafa] h-fit p-3.75 rounded-lg">Henüz bir ilan yok.</div>
                )}
            </div>
            <div className='w-full mt-30 mb-30'>
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