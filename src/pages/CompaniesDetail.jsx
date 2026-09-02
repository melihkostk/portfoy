import { useParams } from "react-router-dom"
import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { getCompaniesProperties } from "../services/companiesApi"
import { useEffect, useState } from "react"
import { PropertiesCard } from "../components/PropertiesCard"

export function CompaniesDetail({ loged }) {

    const { id } = useParams();

    const [companyDetailProperties, setCompanyDetailProperties] = useState([]);

    useEffect(() => {
        getCompaniesProperties(id).then(setCompanyDetailProperties)
    }, [])

    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="companyDetail" id={id} />
            <div className="max-w-[90%] w-full pt-12.5">
                <div className="flex flex-wrap">
                    {companyDetailProperties?.properties?.map(item => (
                        <PropertiesCard
                            key={item.id}
                            title={item.title}
                            cover={item.cover}
                            price={item.price.formatted}
                            company={item.company.title}
                            type={item.type.title}
                            city={item.city.title}
                            district={item.district.title}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full mt-30 mb-30'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer loged={loged} />
            </div>
        </div>
    )
}