import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { CompanyHeader } from "../components/CompanyHeader";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { AppLinks } from "../components/AppLinks";
import { getCompaniesLocation } from "../services/companiesApi";
import { LocationCard } from "../components/LocationCard";

export function CompaniesDetailLocation({loged}) {

    const { id } = useParams();

    const [location , setLocation] = useState([]);

    useEffect(() => {
        getCompaniesLocation(id).then(setLocation)
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
                <div className="flex flex-col">
                    {location?.locations?.map(item => (
                    <LocationCard
                        key={item.id}
                        address={item.address}
                        country={item.country.title}
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