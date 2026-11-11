import { AppLinks } from "../components/AppLinks"
import { CompanyHeader } from "../components/CompanyHeader"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { CompanyProposalCard } from "../components/CompanyProposalCard"
import { getCompanyProposals, getCustomerProposals, getCompanyProfile } from "../services/myCompanyApi"
import { useEffect } from "react"
import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { Link, useSearchParams } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

export function CompanyProposals() {

    const { translation, translationLoaded } = useAppContext();

    const [searchParams] = useSearchParams();
    const customer_id = searchParams.get("customer");

    const [proposals, setProposals] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getCompanyProposals().then(setProposals).finally(() => setLoaded(true))
    }, [])

    const [info, setInfo] = useState([])

    useEffect(() => {
        getCompanyProfile().then(setInfo)
    }, [])

    const [customerProposals, setCustomerPropoals] = useState([]);

    useEffect(() => {
        getCustomerProposals(customer_id).then(setCustomerPropoals)
    }, [customer_id])

    return (
        <div className='flex flex-col items-center font-sf'>
            {(!loaded || !translationLoaded) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link to={"/company"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.my_portfolio}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-sm text-[#9A9898] font-semibold">{translation?.data?.business?.proposals}</Link>
                </div>
            </div>
            <CompanyHeader
                page="proposals"
                name={info?.data?.name}
                code={info?.data?.code}
                created_at={info?.data?.created_at}
                type={info?.data?.type}
                logo={info?.data?.logo}
                email={info?.data?.profile.email}
                phoneNumber={info?.data?.profile?.phone.number}
                phoneCode={info?.data?.profile?.phone.code}
                setLoaded={setLoaded}
                loaded={loaded}
            />
            <div className="w-full max-w-[90%] mt-12.5">
                <div className="flex justify-between items-center mb-5 flex-wrap">
                    <h2 className="text-[#212529] font-semibold text-[32px]">{translation?.data?.business?.proposals}</h2>
                </div>
                <div className="overflow-auto scrollbar-thumb-[#27C5D2]">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-l-lg whitespace-nowrap">{translation?.data?.business?.code}</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">{translation?.data?.business?.customer}</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">{translation?.data?.business?.created_by}</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">{translation?.data?.business?.created_at}</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">{translation?.data?.business?.review}</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 whitespace-nowrap">{translation?.data?.business?.status}</th>
                                <th className="text-start bg-[#ececec] py-4 px-2.5 rounded-r-lg whitespace-nowrap">{translation?.data?.business?.actions}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!customer_id && proposals?.data?.proposals?.map((item, index) => (
                                <CompanyProposalCard
                                    id={item.id}
                                    key={item.id}
                                    name={item.customer.name}
                                    code={item.code}
                                    personal={item.company.personal}
                                    created_at={item.created_at}
                                    score={item.score}
                                    status={item.status.title}
                                    statusKey={item.status.key}
                                    count={item.property_count}
                                    index={index}

                                />
                            ))}
                            {customer_id &&
                                customerProposals?.proposals?.map((item, index) => (
                                    <CompanyProposalCard
                                        id={item.id}
                                        key={item.id}
                                        name={item.customer.name}
                                        code={item.code}
                                        personal={item.company.personal}
                                        created_at={item.created_at}
                                        score={item.score}
                                        status={item.status.title}
                                        statusKey={item.status.key}
                                        count={item.property_count}
                                        index={index}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='w-full mt-40 mb-30'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}