import mobileImage from "../assets/mobile.png"
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"

export function AppLinks(){
    return(
        <div className="flex items-center px-15 h-37.5">
            <div className="w-[25%]">
                <img className="max-w-full align-middle" src={mobileImage} alt="" />
            </div>
            <div className="w-[50%] text-center">
                <p className="text-[30px] text-[#212529] font-medium">Port-foy uygulamasını ücretsiz indirin!</p>
                <p className="text-base text-[#212529] font-normal">Firmanıza ve ilanlarınıza ait bildirimlere anında alın!</p>
            </div>
            <div className="flex items-center gap-2.5 w-[25%]">
                <a href="https://play.google.com/store/apps/details?id=com.pigasoft.portfoy&hl=tr">
                    <img className="hover:opacity-70 transition-opacity duration-300 ease-in-out" src={googlePlay} alt="" />
                </a>
                <a href="https://apps.apple.com/tr/app/port-foy/id6745571274">
                    <img className="hover:opacity-70 transition-opacity duration-300 ease-in-out" src={appStore} alt="" />
                </a>
            </div>
        </div>
    )
}