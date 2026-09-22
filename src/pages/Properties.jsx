import { Filter } from "../components/Filter"
import { Header } from "../components/Header"
import grid from "../assets/grid.png"
import flex from "../assets/flex.png"
import { PropertiesCard } from "../components/PropertiesCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { filterPublishedProperties, getDiscountedProperties, getSortingOptions } from "../services/propertiesApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Pagination } from "../components/Pagination"
import { useSearchParams } from "react-router-dom"
import blind from "../assets/blind.png"
import save from "../assets/save.png"

export function Properties({ loged }) {

    const [filterShown, setFilterShown] = useState(true);

    const [properties, setProperties] = useState([])
    const [loaded, setLoaded] = useState(false)

    const [selectedSorting, setSelectingOption] = useState("");

    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('discounted');
    const filter = searchParams.get("q")
    const typeId = searchParams.get("type_id");
    const minSellPrice = searchParams.get("min_sell_price");
    const maxSellPrice = searchParams.get("max_sell_price");
    const cityId = searchParams.get("city_id");
    const featured = searchParams.get("featured");
    const customerId = searchParams.get("customer_id");

    useEffect(() => {
        setLoaded(false)
        filterPublishedProperties({
            r: selectedSorting,
            page,
            q: filter,
            type_id: typeId,
            min_sell_price: minSellPrice,
            max_sell_price: maxSellPrice,
            city_id: cityId,
            featured,
            customer_id: customerId,
        }).then(setProperties).finally(() => setLoaded(true))
    }, [selectedSorting, page, filter, typeId, minSellPrice, maxSellPrice, cityId, featured, customerId])

    const [flexDirection, setFlexDirection] = useState("");

    const [sortingOptions, setSortingOptions] = useState([]);

    useEffect(() => {
        getSortingOptions().then(setSortingOptions)
    }, []);

    const [discounted, setDiscounted] = useState([])

    useEffect(() => {
        if (!category) return;

        getDiscountedProperties(page).then(setDiscounted);
    }, [category, page, filter]);

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
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İlanlar</span></p>
                </div>
            </div>
            <div className={`w-full max-w-[90%] ${filterShown ? "py-7.5" : "py-5"}`}>
                {filterShown && <div>
                    <h1 className="text-[35px]">İlanları Filtrele</h1>
                    <Filter setFilterShown={setFilterShown} />
                </div>}
                <div className="items-end justify-end p-3.75 flex gap-1">
                    <button className="px-7.5 py-2.5 text-sm cursor-pointer flex items-start hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out bg-[#f8f8f8] rounded-lg text-[#565656] font-semibold">
                        <img className="w-4 h-4 mr-2.5" src={save} alt="" />
                        Filtreyi Kaydet
                    </button>
                    <button onClick={() => setFilterShown(prev => !prev)} className="px-7.5 py-2.5 text-sm cursor-pointer flex items-start hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out bg-[#f8f8f8] rounded-lg text-[#565656] font-semibold">
                        <img className="w-4 h-4 mr-2.5" src={blind} alt="" />
                        Filtreyi Gizle
                    </button>
                </div>
            </div>
            <div className={`w-full max-w-[90%] ${filterShown ? "pt-12.5" : "pt-5"}`}>
                <div className="flex items-center flex-wrap justify-between">
                    <h1 className="text-[25px] text-[#212529] font-medium">
                        {!category ? "İlanlar" : "Fırsat İlanlar"}
                    </h1>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1.25 max-[992px]:hidden">
                            <button onClick={() => setFlexDirection("")} className={`${flexDirection === "flex-col" ? "opacity-80 bg-white border border-[#eee]" : ""} w-9.5 h-9.5 rounded-lg bg-[#F8F8F8] cursor-pointer flex items-center justify-center`}>
                                <img className="w-7 h-7" src={grid} alt="" />
                            </button>
                            <button onClick={() => setFlexDirection("flex-col")} className={` ${flexDirection === "flex-col" ? "" : "opacity-80 bg-white border border-[#eee]"} w-9.5 h-9.5 bg-[#F8F8F8] cursor-pointer rounded-lg flex items-center justify-center`}>
                                <img className="w-4 h-4" src={flex} alt="" />
                            </button>
                        </div>
                        <div>
                            <select value={selectedSorting} onChange={(e) => { setSelectingOption(e.target.value); setPage(1) }} className="border border-[#D9D9D9] h-9.5 w-full rounded-lg py-1.5 px-3 text-[#212529]" name="" id="">
                                {sortingOptions.map(item => (
                                    <option value={item.key} key={item.key}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`flex ${flexDirection === "flex-col" ? "flex-col" : ""} flex-wrap max-[992px]:flex-col max-[992px]:gap-4 items-stretch justify-between -mx-3.75 max-[992px]:m-0`}>
                    {!category
                        ? properties?.data?.map(item => (
                            <PropertiesCard
                                key={item.id}
                                title={item.title}
                                cover={item.cover}
                                price={item.price.formatted}
                                company={item.company.title}
                                type={item.type.title}
                                city={item.city.title}
                                district={item.district.title}
                                id={item.id}
                                badges={item?.badges?.[0]?.title}
                                page="properties"
                                flexDirection={flexDirection}
                            />
                        ))
                        : discounted?.data?.map(item => (
                            <PropertiesCard
                                key={item.id}
                                title={item.title}
                                cover={item.cover}
                                price={item.price.formatted}
                                company={item.company.title}
                                type={item.type.title}
                                city={item.city.title}
                                district={item.district.title}
                                id={item.id}
                                page="properties"
                                flexDirection={flexDirection}
                                badges={item?.badges?.[0]?.title}
                            />
                        ))}
                </div>
            </div>
            <div className="w-full max-w-[90%]">
                {!category ? <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-center">
                    <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                        {properties?.pagination?.pagination_text}
                    </p>
                    <Pagination
                        pagination={properties?.pagination}
                        onPageChange={setPage}
                    />
                </div> : (
                    <div className="flex items-center justify-between w-full max-[992px]:flex-col max-[992px]:items-center">
                        <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                            {discounted?.pagination?.pagination_text}
                        </p>
                        <Pagination
                            pagination={discounted?.pagination}
                            onPageChange={setPage}
                        />
                    </div>
                )}
            </div>
            <div className='w-full mt-40 mb-30 max-[992px]:mt-7.5'>
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