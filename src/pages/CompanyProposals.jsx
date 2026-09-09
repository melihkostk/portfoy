import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { CompanyProposalCard } from "../components/CompanyProposalCard"
import { getCompanyProposals, getCustomerProposals } from "../services/myCompanyApi"
import { useEffect } from "react"
import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { useSearchParams } from "react-router-dom"

export function CompanyProposals({ loged }) {

    const [searchParams] = useSearchParams();
    const customer_id = searchParams.get("customer");

    const [proposals, setProposals] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getCompanyProposals().then(setProposals).finally(() => setLoaded(true))
    }, [])

    const [customerProposals, setCustomerPropoals] = useState([]);

    useEffect(() => {
        getCustomerProposals(customer_id).then(setCustomerPropoals)
    }, [customer_id])

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
            <CompanyHeader page="proposals" />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex justify-between items-center mb-5 flex-wrap">
                    <h2 className="text-[#212529] text-[32px]">Teklifler</h2>
                </div>
                <div className="overflow-auto scrollbar-thumb-[#27C5D2]">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">Kod</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Müşteri</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturan Kullanıcı</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Oluşturma Tarihi</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Değerlendirme</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">Durum</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-r-lg whitespace-nowrap">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!customer_id && proposals.map(item => (
                                <CompanyProposalCard
                                    id={item.id}
                                    key={item.id}
                                    name={item.customer.name}
                                    code={item.code}
                                    personal={item.company.personal}
                                    created_at={item.created_at}
                                    score={item.score}
                                    status={item.status.title}
                                    count={item.property_count}

                                />
                            ))}
                            {customer_id &&
                                customerProposals?.proposals?.map(item => (
                                    <CompanyProposalCard
                                        id={item.id}
                                        key={item.id}
                                        name={item.customer.name}
                                        code={item.code}
                                        personal={item.company.personal}
                                        created_at={item.created_at}
                                        score={item.score}
                                        status={item.status.title}
                                        count={item.property_count}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='w-full mt-40 mb-30'>
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