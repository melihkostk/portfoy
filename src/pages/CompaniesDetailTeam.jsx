import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { getCompaniesTeam } from "../services/companiesApi";
import { CompanyHeader } from "../components/CompanyHeader";
import { TeamCard } from "../components/TeamCard";
import { ClipLoader } from "react-spinners";

export function CompaniesDetailTeam({ loged }) {
    const { id } = useParams();

    const [companyDetailTeam, setCompanyDetailTeam] = useState([]);
    const [loaded , setLoaded] = useState(false)

    useEffect(() => {
        getCompaniesTeam(id).then(setCompanyDetailTeam).finally(() => setLoaded(true))
    }, [])

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
            <Header loged={loged} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Portföyüm</span></p>
                </div>
            </div>
            <CompanyHeader page="companyDetail" id={id} />
            <div className="max-w-[90%] w-full pt-12.5">
                <div className="flex flex-wrap">
                    {companyDetailTeam?.personals?.map(item => (
                        <TeamCard
                            key={item?.id}
                            name={item?.name}
                            avatar={item?.avatar}
                            role={item?.roles[0]?.title}
                            email={item?.contacts?.email}
                            phone={item?.contacts?.phone?.number}
                            code={item?.contacts?.phone?.code} 
                            page="companiesDetail"    
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