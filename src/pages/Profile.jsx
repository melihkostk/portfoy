import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ProfileCard } from "../components/ProfileCard"
import { Sidebar } from "../components/Sidebar"
import heart from "../assets/black-heart.png"
import menu from "../assets/black-menu.png"
import file from "../assets/black-file.png"
import { getPropertyAlerts, getUserProperties, getWishlist } from "../services/profileApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { getCompanyInfo, getCustomerProposals } from "../services/myCompanyApi"
import { useAppContext } from "../context/AppContext"
import { Link } from "react-router-dom"

export function Profile() {

    const { translation, translationLoaded } = useAppContext();

    const [loaded, setLoaded] = useState(false)
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        getWishlist().then(setWishlist).finally(() => setLoaded(true))
    }, [])

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getUserProperties().then(setProperties)
    }, [])

    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        getCustomerProposals().then(setProposals)
    }, [])

    const [info, setInfo] = useState([]);

    useEffect(() => {
        getCompanyInfo().then(setInfo).finally(() => setLoaded(true))
    }, [])

    const [user, setUser] = useState([]);

    useEffect(() => {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const parsedUser = JSON.parse(userInfo);
            setUser(parsedUser);
        }
    }, [])

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        getPropertyAlerts().then(setAlerts);
    }, [])

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
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%] flex items-center gap-2">
                    <Link to={"/"} className="text-sm text-[#636363] font-medium hover:text-black transition-colors duration-300 ease-in-out">{translation?.data?.business?.home}</Link>
                    <p className="text-sm text-[#636363] font-medium">{">"}</p>
                    <Link className="text-sm text-[#9a9898] font-semibold">{translation?.data?.business?.my_account}</Link>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start max-[992px]:flex-col-reverse">
                    <div className="w-[22%] max-[992px]:w-full">
                        <Sidebar info={info} user={user} />
                    </div>
                    <div className="w-[78%] pl-7.5 max-[992px]:w-full max-[992px]:pl-0">
                        <div className="flex max-[992px]:flex-wrap justify-between -ml-3.75 -mr-3.75">
                            <ProfileCard title={translation?.data?.business?.property} link="auth/properties" img={menu} number={properties?.pagination?.total} />
                            <ProfileCard title={translation?.data?.business?.favorite_property} link="wishlist" img={heart} number={wishlist?.data?.length} />
                            <ProfileCard title={translation?.data?.business?.proposal} link="proposals" img={file} number={proposals?.proposals?.length} />
                            <ProfileCard title={translation?.data?.business?.user_invitation} link="company/team" img={menu} number="18" />
                        </div>
                        <div className="mt-7.5">
                            <h2 className="mb-5 text-[25px] text-[#212529] font-semibold">{translation?.data?.business?.outdated_properties}</h2>
                            {alerts?.data?.length === 0 && <div className="bg-[#fff3cd] border border-[#ffecb5] font-medium text-[#664d03] p-4 rounded-lg max-[992px]:mb-4">
                                {translation?.data?.business?.no_records}
                            </div>}
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:my-7.5'>
                <AppLinks />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}