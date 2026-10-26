import { Header } from "../components/Header";
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import grayLinkedIn from "../assets/gray-linkedIn.png"
import grayFacebook from "../assets/gray-facebook.png"
import grayInsta from "../assets/gray-insta.png"
import grayX from "../assets/gray-x.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContactInfo , sendContactForm } from "../services/contactsApi";
import { ClipLoader } from "react-spinners";
import { getTranslation } from "../services/translation";
import { ErrorPopUp } from "../components/ErrorPopUp";

export function Contacts({ loged , locale, setLocale}) {

    const [name, setName] = useState("");
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [subject , setSubject] = useState("")
    const [message , setMessage] = useState("")

    const [contactInfo , setContactInfo] = useState(null)
    const [loaded , setLoaded] = useState(false);

     useEffect(() => {
        getContactInfo().then(setContactInfo).finally(() => setLoaded(true))
    }, [])

    useEffect(() => {
        const userStr = localStorage.getItem("user");

        if (userStr) {
            const user = JSON.parse(userStr);
            setName(user?.data?.name || "");
            setEmail(user?.data?.email || "");
            setCode(user?.data?.phone?.code || "");
            setPhone(user?.data?.phone?.number || "")
        }
    }, []);

    const [translation , setTranslation] = useState([]);

    useEffect(() => {
        setLoaded(false)
        getTranslation(locale).then(setTranslation).finally(() => setLoaded(true))
    }, [locale])

    const [errorShown , setErrorShown] = useState(false)

    function handleSendContactForm(e) {
        e.preventDefault();
        setLoaded(false)
        sendContactForm(name , email , phone , subject , message , locale).then(data => {
            if(data.status === "error"){
                setErrorShown(true)
            }
            else {
                console.log(data)
            }
        }).finally(() => setLoaded(true))
    }

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
            {errorShown && <ErrorPopUp />}
            <Header translation={translation} loged={loged} locale={locale} setLocale={setLocale} />
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">{translation?.data?.business?.home} {">"} <span className="text-[#9a9898]"> {translation?.data?.business?.contacts}</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                <div className="flex items-start mb-12 max-[992px]:flex-col">
                    <div className="flex-1 max-[992px]:pr-0 pr-37.5 max-[992px]:mb-7.5">
                        <h1 className="text-[40px] text-[#212529] font-bold mb-12.5">{translation?.data?.business?.contact_info}</h1>
                        <div className="mb-10">
                            <p className="text-sm text-[#212529] opacity-70 uppercase font-medium">{translation?.data?.business?.phone}</p>
                            <a className="text-xl text-black font-bold hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="https://demo.pigasoft.com/portfoy/public/tr/tel: 0 850 851 44 94">
                                {contactInfo?.phone}
                            </a>
                        </div>
                        <div className="mb-10">
                            <p className="text-sm text-[#212529] opacity-70 uppercase font-medium">{translation?.data?.validation?.attributes?.email}</p>
                            <a className="text-xl text-black font-bold hover:text-[#27C5D2] transition-colors duration-300 ease-in-out" href="mailto:support@port-foy.com">
                                {contactInfo?.email}
                            </a>
                        </div>
                        <div className="mb-10">
                            <p className="text-sm text-[#212529] opacity-70 uppercase font-medium">
                                {translation?.data?.business?.address}
                            </p>
                            <p className="text-black text-base font-medium">
                                {contactInfo?.address}
                            </p>
                        </div>
                        <ul className="flex gap-2.5 flex-wrap">
                            <li>
                                <Link to={"/pricing"} className="bg-[#00000005] py-2.5 px-3.75 rounded-lg text-black font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">{translation?.data?.business?.pricing}</Link>
                            </li>
                            <li>
                                <Link to={"/faqs"} className="bg-[#00000005] py-2.5 px-3.75 rounded-lg text-black font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">{translation?.data?.business?.faqs_section_header}</Link>
                            </li>
                            <li>
                                <Link to={"/discover"} className="bg-[#00000005] py-2.5 px-3.75 rounded-lg text-black font-semibold hover:bg-[#27C5D2] hover:text-white transition-colors duration-300 ease-in-out">{translation?.data?.business?.discover_portfoy}</Link>
                            </li>
                        </ul>
                        <div className="mt-10">
                            <p className="text-sm uppercase mb-2.5 text-[#212529] opacity-60 font-medium">{translation?.data?.business?.follow_on_social_media}</p>
                            <div className="flex">
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5 hover:bg-[#eee] transition-colors duration-300 ease-in-out" href={contactInfo?.socials?.linkedin}>
                                    <img className="w-7 h-7" src={grayLinkedIn} alt="" />
                                </a>
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5 hover:bg-[#eee] transition-colors duration-300 ease-in-out" href={contactInfo?.socials?.x}>
                                    <img className="w-7 h-7" src={grayX} alt="" />
                                </a>
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5 hover:bg-[#eee] transition-colors duration-300 ease-in-out" href={contactInfo?.socials?.facebook}>
                                    <img className="w-7 h-7" src={grayFacebook} alt="" />
                                </a>
                                <a className="border border-[#eee] rounded-lg w-12.5 h-12.5 flex items-center justify-center mr-2.5 hover:bg-[#eee] transition-colors duration-300 ease-in-out" href={contactInfo?.socials?.instagram}>
                                    <img className="w-7 h-7" src={grayInsta} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border border-[#eee] rounded-lg p-7.5 max-[992px]:w-full">
                        <h2 className="text-[32px] text-[#212529] font-semibold mb-10">{translation?.data?.business?.contact_form}</h2>
                        <form onSubmit={handleSendContactForm}>
                            <input onChange={(e) => setName(e.target.value)} value={name} className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="name" placeholder={translation?.data?.business?.fullname} required />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="email" placeholder={translation?.data?.business?.email} required />
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="phone" placeholder={translation?.data?.business?.phone} required />
                            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" type="text" name="subject" placeholder={translation?.data?.business?.subject} required />
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full font-semibold block bg-[#00000005] p-3.75 mb-2.5" name="message" placeholder={translation?.data?.business?.your_message} required></textarea>
                            <button type="submit" className="text-white text-sm rounded-lg cursor-pointer bg-[#27C5D2] py-2 px-5 font-semibold hover:bg-[#026872] transition-colors duration-300 ease-in-out">{translation?.data?.business?.submit}</button>
                        </form>
                    </div>
                </div>
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