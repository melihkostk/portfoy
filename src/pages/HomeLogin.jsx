import { Link } from "react-router-dom"
import { Filter } from "../components/Filter"
import { Header } from "../components/Header"
import { PropertiesCard } from "../components/PropertiesCard"
import { NewsCard } from "../components/NewsCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"

export function HomeLogin({ loged }) {
    return (
        <div className='flex flex-col items-center font-sf'>
            <Header loged={loged} />
            <div className='w-full max-w-[90%] py-20'>
                <h1 className='text-[35px] text-black font-medium mb-2'>İlanları Filtrele</h1>
                <Filter />
            </div>
            <div className='w-full max-w-[90%] flex flex-col items-center'>
                <div className="w-full py-18.75">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[32px] text-[#45443f] mb-2">Fırsat İlanları</h2>
                        <Link className="text-[#B7B9BF] text-xl hover:text-[#45443F] transition-colors duration-300 ease-in-out" to={"/properties"}>Tümünü Gör</Link>
                    </div>
                    <div>
                        <div className="flex overflow-auto scrollbar-none">
                            <PropertiesCard />
                            <PropertiesCard />
                            <PropertiesCard />
                            <PropertiesCard />
                            <PropertiesCard />
                        </div>
                        <div className="flex justify-center py-7.5 w-full gap-2.5">
                            <button className="bg-[#c2c2c2] w-3 h-3 rounded-full focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"></button>
                            <button className="bg-[#c2c2c2] w-3 h-3 rounded-full focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"></button>
                            <button className="bg-[#c2c2c2] w-3 h-3 rounded-full focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[90%] flex flex-col items-center mb-30'>
                <div className="w-full py-18.75">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[32px] text-[#45443f] mb-2">Fırsat İlanları</h2>
                        <Link className="text-[#B7B9BF] text-xl hover:text-[#45443F] transition-colors duration-300 ease-in-out" to={"/properties"}>Tümünü Gör</Link>
                    </div>
                    <div>
                        <div className="flex overflow-auto py-6.25 scrollbar-none">
                            <PropertiesCard />
                            <PropertiesCard />
                            <PropertiesCard />
                            <PropertiesCard />
                            <PropertiesCard />
                        </div>
                        <div className="flex justify-center py-7.5 w-full gap-2.5">
                            <button autofocus className="bg-[#c2c2c2] w-3 h-3 rounded-full focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"></button>
                            <button className="bg-[#c2c2c2] w-3 h-3 rounded-full focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"></button>
                            <button className="bg-[#c2c2c2] w-3 h-3 rounded-full focus:bg-[#27C5D2] focus:w-15 focus:rounded-[5px] transition-all duration-300 ease-in-out"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#f7f7fb] py-18.75'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center'>
                    <div className='flex justify-between items-center w-full'>
                        <h2 className='text-[#45443F] text-[32px] font-semibold'>Haberler ve Duyurular</h2>
                        <Link to={"/articles"} className='text-[#B7B9BF] text-xl font-medium hover:text-[#45443f] transition-colors duration-300 ease-in-out' href="https://demo.pigasoft.com/portfoy/public/tr/articles">Tümünü Gör</Link>
                    </div>
                    <div className='flex items-start -mx-5 max-[992px]:flex-col max-[992px]:m-0'>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
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