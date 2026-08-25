import mobileImage from "../assets/mobile.png"
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"

export function AppLinks(){
    return(
        <div className="flex items-center justify-between max-[992px]:p-7.5 max-[992px]:items-start max-[992px]:justify-start  px-15 h-37.5 max-[992px]:flex-col max-[992px]:h-auto">
            <div className="w-[25%] max-[992px]:hidden">
                <img className="max-w-full align-middle" src={mobileImage} alt="" />
            </div>
            <div className="w-[50%] text-center max-[992px]:text-start max-[992px]:w-full ">
                <p className="text-[30px] text-[#212529] font-medium">Port-foy uygulamasını ücretsiz indirin!</p>
                <p className="text-base text-[#212529] font-normal">Firmanıza ve ilanlarınıza ait bildirimlere anında alın!</p>
            </div>
            <div className="flex items-center gap-2.5 w-[25%] max-[992px]:w-full">
                <a className="max-[992px]:mt-5" href="https://play.google.com/store/apps/details?id=com.pigasoft.portfoy&hl=tr">
                    <img className="hover:opacity-70 transition-opacity duration-300 ease-in-out" src={googlePlay} alt="" />
                </a>
                <a className="max-[992px]:mt-5" href="https://apps.apple.com/tr/app/port-foy/id6745571274">
                    <img className="hover:opacity-70 transition-opacity duration-300 ease-in-out" src={appStore} alt="" />
                </a>
            </div>
        </div>
    )
}