import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useAppContext } from "../context/AppContext";
import { BlogCard } from "../components/BlogCard";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { ClipLoader } from "react-spinners";

export function Blogs() {

    const { translation , translationLoaded } = useAppContext();

    return (
        <div className="flex flex-col items-center font-sf">
            {!translationLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header />
            <div className="w-full bg-[#f8f8f8] flex justify-center mb-7.5">
                <ul className="py-2.5 w-full max-w-[90%] flex items-center gap-2">
                    <li>
                        <Link to={"/"} className="text-sm font-medium text-[#636363] hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    </li>
                    <li>
                        <p className="text-sm font-medium text-[#636363]">{">"}</p>
                    </li>
                    <li>
                        <Link className="text-sm font-semibold text-[#9a9898]">{translation?.data?.business?.blog}</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full max-w-[90%] px-3">
                <h1 className="text-[#212529] text-5xl font-medium mb-2">{translation?.data?.business?.blog}</h1>
                <div className="flex -ml-3.75 -mr-3.75 flex-wrap max-[992px]:flex-col">
                    <BlogCard
                        title="Emlak Vergisi Nedir Ne Zaman ve Nasıl Ödenir"
                        time="19 Kasım 2024"
                        id="1"
                    />
                    <BlogCard
                        title="Gayrimenkul ve Emlak Yatırımı Nasıl Yapılır?"
                        time="15 Kasım 2024"
                        id="2"
                    />
                    <BlogCard
                        title="Ev Satın Alırken Dikkat Edilmesi Gerekenler Nelerdir?"
                        time="23 Ekim 2024"
                        id="3"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[#6c757d] font-medium">3 kayıttan 1 - 3 arasındaki kayıtlar gösteriliyor</p>
                    </div>
                    <div className="py-1.5 px-3 rounded-lg text-white bg-[#27c5d2] font-semibold w-10 h-10 flex items-center justify-center">
                        1
                    </div>
                </div>
            </div>
            <div className="w-full mt-30 mb-20 max-[992px]:my-7.5">
                <AppLinks />
            </div>
            <div className="w-full mt-17.5">
                <Footer />
            </div>
        </div>
    )
}