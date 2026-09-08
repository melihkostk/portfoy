import { ClipLoader } from "react-spinners"
import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { showProposal } from "../services/proposalApi";
import phone from "../assets/ph.png"
import email from "../assets/email.png"
import pp from "../assets/pp.png"
import { PropertiesCard } from "../components/PropertiesCard";
import blueStar from "../assets/star-blue.png"
import grayStar from "../assets/star-gray.png"
import wp from "../assets/white-wp.png"
import chain from "../assets/chain.png"
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";

export function ProposalDetail({ loged }) {


    const { id } = useParams();

    const [detail, setDetails] = useState([])
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        showProposal(id).then(setDetails).finally(() => setLoaded(true))
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
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> Hesabım</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="w-full bg-[#f8f8f8] py-7.5 px-3.75 mb-7.5 rounded-lg flex justify-between items-center">
                    <div>
                        <p className="text-[#6d6d6d] text-[25px] font-semibold">{detail?.code}</p>
                        <p className="text-sm text-[#989898]">{detail?.created_at} tarihinde Rahime tarafından oluşturuldu</p>
                    </div>
                    <div className="py-3.75 px-7.5 border border-[#eaeaea] rounded-lg flex items-center gap-5">
                        <div className="w-12.5 h-12.5">
                            <img className="rounded-full w-full h-full" src="https://ui-avatars.com/api/?name=raho&background=27c5d2&color=fff&size=32&bold=1&uppercase=1&format=svg" alt="" />
                        </div>
                        <div>
                            <p className="text-lg text-[#505050]">{detail?.customer?.name}</p>
                            <p className="text-sm text-[#9a9a9a]">{detail?.customer?.email}</p>
                        </div>
                        <div>
                            <ul className="flex items-center gap-1.5">
                                <li className="w-7.5 h-7.5 bg-[#eee] rounded-lg flex items-center justify-center hover:bg-[#27c5d2] transition-colors duration-300 ease-in-out">
                                    <a href={`tel:${detail?.customer?.phone}`}>
                                        <img className="w-5 h-5" src={phone} alt="" />
                                    </a>
                                </li>
                                <li className="w-7.5 h-7.5 bg-[#eee] rounded-lg flex items-center justify-center hover:bg-[#27c5d2] transition-colors duration-300 ease-in-out">
                                    <a href={detail?.customer?.email}>
                                        <img className="w-5 h-5" src={email} alt="" />
                                    </a>
                                </li>
                                <li className="w-7.5 h-7.5 bg-[#eee] rounded-lg flex items-center justify-center hover:bg-[#27c5d2] transition-colors duration-300 ease-in-out">
                                    <a href={`tel:${detail?.customer?.phone}`}>
                                        <img className="w-6 h-6" src={pp} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex">
                    <div className="pr-12.5 w-[70%]">
                        {detail?.properties?.map(item => (
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
                                page="proposalDetail"
                                detail={detail}
                            />
                        ))}
                    </div>
                    <div className="w-[30%]">
                        <div className="bg-white shadow-[0_0_80px_#f3f3f3] text-center p-7.5 mb-7.5 rounded-lg">
                            <p className="font-semibold">Notunuz (Müşteri için)</p>
                            <p className="text-sm italic text-[#212529]">{detail?.notes}</p>
                        </div>
                        <div className="bg-white shadow-[0_0_80px_#f3f3f3] text-center p-7.5 mb-7.5 rounded-lg flex flex-col gap-1">
                            <p className="text-[35px] text-[#212529] font-semibold">{detail?.score} <span className="text-[25px] font-normal text-[#999]">/ 5</span></p>
                            <div className="flex items-center gap-1 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={i < detail?.score ? blueStar : grayStar}
                                        alt="star"
                                        className="w-7 h-7"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-[#929292]">{detail?.created_at} tarihinde kaydedildi</p>
                            <p className="mt-2.5 font-semibold text-sm">Müşteri notu <span className="block italic font-normal">{detail?.reply_notes}</span></p>
                            <div className="rounded-lg border border-[#eee] p-2.5 mt-7.5">
                                {detail?.review?.summary?.questions?.map(item => (
                                    <div key={item.title} className="flex items-center justify-between p-2.5">
                                        <p className="text-[#212529]">{item.title}</p>
                                        <div className="flex items-center gap-0.5 justify-center">
                                            {[...Array(5)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={i < detail?.score ? blueStar : grayStar}
                                                    alt="star"
                                                    className="w-5 h-5"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow-[0_0_80px_#f3f3f3] flex flex-col items-center p-7.5 rounded-lg">
                            <p className="mb-5 text-sm text-[#979797]">Bu teklifi paylaş:</p>
                            <button className="bg-[#25d366] mb-2.5 text-white flex items-center gap-1 font-semibold rounded-lg py-2 px-5 text-sm cursor-pointer hover:bg-[#19a74e] transition-colors duration-300 ease-in-out">
                                <img className="w-5 h-5" src={wp} alt="" />
                                Whatsapp'ta paylaş
                            </button>
                            <button className="bg-[#f8f8f8] text-black flex items-center gap-1 font-semibold rounded-lg py-2 px-5 text-sm cursor-pointer block hover:bg-[#cdcdcd] transition-colors duration-300 ease-in-out">
                                <img className="w-5 h-5" src={chain} alt="" />
                                Bağlantıyı Kopyala
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-30 mb-30 max-[992px]:mt-7.5 max-[992px]:mb-7.5'>
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