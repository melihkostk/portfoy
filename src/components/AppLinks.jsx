import mobileImage from "../assets/mobile.png"
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import { useAppContext } from "../context/AppContext"

export function AppLinks() {
    const { translation } = useAppContext();
    return (
        <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb] rounded-lg'>
            <div className="flex items-center w-full justify-between max-[992px]:p-7.5 max-[992px]:items-start max-[992px]:justify-start  px-15 h-37.5 max-[992px]:flex-col max-[992px]:h-auto">
                <div className="w-[25%] max-[992px]:hidden">
                    <img className="max-w-full align-middle max-h-67.5" src={mobileImage} alt="" />
                </div>
                <div className="w-[50%] text-center max-[992px]:text-start max-[992px]:w-full ">
                    <p className="text-[30px] max-[992px]:text-xl text-[#212529] font-semibold">{translation?.data?.business?.download_app_title}</p>
                    <p className="text-base text-[#212529] font-medium">{translation?.data?.business?.download_app_description}</p>
                </div>
                <div className="flex items-center flex-wrap gap-2.5 w-[25%] max-[992px]:w-full">
                    <a aria-label="googlePlay" className="max-[992px]:mt-5" href="https://play.google.com/store/apps/details?id=com.pigasoft.portfoy&hl=tr">
                        <img className="hover:opacity-70 transition-opacity duration-300 ease-in-out max-w-45" src={googlePlay} alt="" />
                    </a>
                    <a aria-label="appStore" className="max-[992px]:mt-5" href="https://apps.apple.com/tr/app/port-foy/id6745571274">
                        <img className="hover:opacity-70 transition-opacity duration-300 ease-in-out max-w-45" src={appStore} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}