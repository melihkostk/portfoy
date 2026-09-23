import { Filter } from "../components/Filter"
import { Header } from "../components/Header"
import grid from "../assets/grid.png"
import flex from "../assets/flex.png"
import { PropertiesCard } from "../components/PropertiesCard"
import { AppLinks } from "../components/AppLinks"
import { Footer } from "../components/Footer"
import { filterPublishedProperties, getAllPropertiesType, getDiscountedProperties, getSortingOptions } from "../services/propertiesApi"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Pagination } from "../components/Pagination"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import blind from "../assets/blind.png"
import save from "../assets/save.png"
import downArrow from "../assets/down-arrow.png"
import { getAllFilterOptions } from "../services/filterApi"
import close from "../assets/blue-close.png"
import { createQuickFilter, getQuickFilters } from "../services/quickFiltersApi"
import menu from "../assets/dark-menu.png"
import { SuccessPopUp } from "../components/SuccessPopup"

export function Properties({ loged }) {

    const [filterShown, setFilterShown] = useState(true);

    const [properties, setProperties] = useState([])
    const [loaded, setLoaded] = useState(false)

    const [selectedSorting, setSelectingOption] = useState("");

    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('discounted');
    const filter = searchParams.get("q")
    const typeId = searchParams.get("type_id");
    const minSellPrice = searchParams.get("min_sell_price");
    const maxSellPrice = searchParams.get("max_sell_price");
    const cityId = searchParams.get("city_id");
    const featured = searchParams.get("featured");
    const customerId = searchParams.get("customer_id");

    const [paramValues, setParamValues] = useState({});
    const [appliedParamValues, setAppliedParamValues] = useState({});

    useEffect(() => {
        setParamValues({});
        setAppliedParamValues({});
    }, [typeId]);

    const handleSelectParam = (paramId, value) => {
        setParamValues(prev => ({ ...prev, [paramId]: value === "" ? undefined : value }));
    };

    const handleRangeParam = (paramId, key, value) => {
        setParamValues(prev => ({
            ...prev,
            [paramId]: { ...(typeof prev[paramId] === "object" && prev[paramId] ? prev[paramId] : {}), [key]: value }
        }));
    };

    const handleTextParam = (paramId, value) => {
        setParamValues(prev => ({ ...prev, [paramId]: value === "" ? undefined : value }));
    };

    const applyParamFilters = () => {
        setAppliedParamValues(paramValues);
        setPage(1);
    };

    const buildDetails = () => {
        const details = {};

        for (const [key, value] of searchParams.entries()) {
            const match = key.match(/^details\[(\d+)\]$/);
            if (match) details[match[1]] = value;
        }

        Object.entries(appliedParamValues).forEach(([paramId, value]) => {
            if (value && typeof value === "object") {
                const { min, max } = value;
                if (!min && !max) return;
                details[paramId] = { min: min || undefined, max: max || undefined };
                return;
            }
            if (value === undefined || value === null || value === "") return;
            details[paramId] = value;
        });

        return details;
    };

    useEffect(() => {
        setLoaded(false)

        const details = buildDetails();

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
            details: Object.keys(details).length ? details : undefined,
        }).then(setProperties).finally(() => setLoaded(true))
    }, [selectedSorting, page, filter, typeId, minSellPrice, maxSellPrice, cityId, featured, customerId, appliedParamValues, searchParams])

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

    const [options, setOptions] = useState([]);

    useEffect(() => {
        getAllFilterOptions(typeId).then(setOptions)
    }, [typeId])

    const [openGroups, setOpenGroups] = useState({});

    const toggleGroup = (title) => {
        setOpenGroups(prev => ({ ...prev, [title]: !prev[title] }));
    };

    const [propertiesTypes, setPropertiesTypes] = useState([]);

    useEffect(() => {
        getAllPropertiesType().then(setPropertiesTypes)
    }, []);

    const currentTypeName = propertiesTypes?.find(item => item.id === Number(typeId))?.title;

    const currentList = !category ? properties?.data : discounted?.data;
    const isEmpty = loaded && currentList?.length === 0;

    const [quickFilterMenu, setQuickFilterMenu] = useState(false)
    const [quickFilters , setQuickFilters] = useState([]);

    useEffect(() => {
        getQuickFilters().then(setQuickFilters)
    }, [])

    const [addQuickFilterMenu , setAddQuickFilterMenu] = useState(false)

    const handleApplyQuickFilter = (item) => {
        let filterDetails = item.filter_details;
        if (typeof filterDetails === "string") {
            try {
                filterDetails = JSON.parse(filterDetails);
            } catch {
                filterDetails = {};
            }
        }
        filterDetails = filterDetails || {};

        const params = new URLSearchParams();

        if (filterDetails.types?.length) params.set("type_id", filterDetails.types[0]);
        if (filterDetails.min_sell_price) params.set("min_sell_price", filterDetails.min_sell_price);
        if (filterDetails.max_sell_price) params.set("max_sell_price", filterDetails.max_sell_price);
        if (filterDetails.city_id) params.set("city_id", filterDetails.city_id);
        if (filterDetails.q) params.set("q", filterDetails.q);
        if (filterDetails.featured) params.set("featured", filterDetails.featured);
        if (filterDetails.customer_id) params.set("customer_id", filterDetails.customer_id);

        Object.entries(filterDetails.details || {}).forEach(([paramId, value]) => {
            if (value && typeof value === "object") return;
            if (value === undefined || value === null || value === "") return;
            params.set(`details[${paramId}]`, value);
        });

        setQuickFilterMenu(false);
        navigate(`/properties?${params.toString()}`);
    };

    const [filterTitle , setFilterTitle] = useState("");
    const [notify , setNotify] = useState(0)

    const buildQuickFilterDetails = () => {
        const filterDetails = {};

        if (typeId) filterDetails.types = [Number(typeId)];
        if (minSellPrice) filterDetails.min_sell_price = minSellPrice;
        if (maxSellPrice) filterDetails.max_sell_price = maxSellPrice;
        if (cityId) filterDetails.city_id = cityId;
        if (filter) filterDetails.q = filter;
        if (featured) filterDetails.featured = featured;
        if (customerId) filterDetails.customer_id = customerId;

        const details = buildDetails();
        if (Object.keys(details).length) filterDetails.details = details;

        return filterDetails;
    };

    const [error , setError] = useState("");
    const [successPopUp, setSuccessPopUp] = useState(false);

    const handleSaveQuickFilter = async () => {
        await createQuickFilter(filterTitle, notify, buildQuickFilterDetails());
        setAddQuickFilterMenu(false);
        setFilterTitle("");
        setNotify(0);
        getQuickFilters().then(setQuickFilters);
        setSuccessPopUp(true);
        setError("Filtre başarıyla kaydedildi");
    };

    const titleAndSortRow = (
        <div className="flex items-center flex-wrap justify-between">
            <h1 className="text-[25px] text-[#212529] font-medium">
                {category ? "Fırsat İlanlar" : currentTypeName ? `${currentTypeName} İlanları` : "İlanlar"}
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
    );

    return (
        <div className='flex flex-col items-center font-sf'>
            {(quickFilterMenu || addQuickFilterMenu) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
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
            {successPopUp && <SuccessPopUp error={error} setSuccessPopUp={setSuccessPopUp} />}
            {quickFilterMenu && <div className="fixed top-1/2 max-h-fit left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-[70%] w-[30%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-center justify-between w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529]">Hızlı Filtreler</h2>
                    <img onClick={() => setQuickFilterMenu(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="w-full p-4">
                    {quickFilters.map(item => (
                        <div key={item.id} className="flex justify-between items-center pb-2.5 mb-2.5 border-b border-b-[#eee]">
                            <div className="text-base text-[#212529]">{item.title}</div>
                            <div>
                                <button type="button" onClick={() => handleApplyQuickFilter(item)} className="bg-[#f1f1f1] flex items-start gap-1 cursor-pointer py-2 px-5 rounded-lg text-sm text-[#4b4b4b] hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                    <img className="w-3.5 h-3.5" src={menu} alt="" />
                                    Seçenekleri Uygula
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
            {addQuickFilterMenu && <div className="fixed top-1/2 max-h-fit left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-[70%] w-[30%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex items-center justify-between w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529]">Filtreyi Kaydet</h2>
                    <img onClick={() => setAddQuickFilterMenu(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="p-4">
                    <p className="text-base text-[#212529] mb-4">Filtreleme seçeneklerinizi daha sonra kullanmak üzere kaydedebilirsiniz. Ayrıca isterseniz kaydettiğiniz filtreye uygun yeni ilan eklendiğinde bildirim alabilirsiniz.</p>
                    <div className="mb-2">
                        <label className="text-[#212529]" htmlFor="title">Filtre Başlığı</label>
                        <input value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)} id="title" name="title" className="block w-full px-3 py-1.5 border border-[#d9d9d9] rounded-lg" type="text" placeholder="Filtre Başlığı" />    
                    </div>
                    <div className="mb-2">
                        <input checked={notify === 1} onChange={(e) => setNotify(e.target.checked ? 1 : 0)} id="notify" name="notify" type="checkbox" />
                        <label className="text-base text-[#212529] ml-2" htmlFor="notify">Filtreye uygun yeni ilan eklendiğinde beni bildir</label>
                    </div>
                    <div>
                        <button type="button" onClick={handleSaveQuickFilter} className="text-white bg-[#27c5d2] cursor-pointer rounded-lg text-sm py-2 px-5 hover:bg-[#026872] transition-colors duration-300 ease-in-out">Kaydet</button>    
                    </div>                
                </div>
            </div>}
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-4">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span className="text-[#9a9898]"> İlanlar</span></p>
                </div>
            </div>
            <div className={`w-full max-w-[90%] ${filterShown ? "py-7.5" : "py-5"}`}>
                {filterShown && <div>
                    <h1 className="text-[35px]">İlanları Filtrele</h1>
                    <Filter setFilterShown={setFilterShown} searchParams={searchParams} typeId={typeId} />
                </div>}
                {searchParams.toString() && <div className="items-end justify-end p-3.75 flex gap-1">
                    <button onClick={() => setAddQuickFilterMenu(true)} className="px-7.5 py-2.5 text-sm cursor-pointer flex items-start hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out bg-[#f8f8f8] rounded-lg text-[#565656] font-semibold">
                        <img className="w-4 h-4 mr-2.5" src={save} alt="" />
                        Filtreyi Kaydet
                    </button>
                    <button onClick={() => setFilterShown(prev => !prev)} className="px-7.5 py-2.5 text-sm cursor-pointer flex items-start hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out bg-[#f8f8f8] rounded-lg text-[#565656] font-semibold">
                        <img className="w-4 h-4 mr-2.5" src={blind} alt="" />
                        Filtreyi Gizle
                    </button>
                </div>}
            </div>
            <div className={`w-full max-w-[90%] ${filterShown ? "pt-12.5" : "pt-5"}`}>
                {!searchParams.toString() && titleAndSortRow}
                <div className="flex">
                    {typeId && <div className="w-80">
                        <div>
                            <button onClick={() => setQuickFilterMenu(true)} className="text-center w-full bg-[#f8f8f8] rounded-lg py-2.5 mb-5 text-sm cursor-pointer hover:bg-[#27c5d2] hover:text-white transition-colors duration-300 ease-in-out">Hızlı Filtreler</button>
                        </div>
                        <div>
                            <div className="flex justify-between mb-3.75">
                                <p className="uppercase text-sm text-[#b4b4b4]">Ilanları Filtrele</p>
                                <Link className="underline text-sm cursor-pointer text-[#b4b4b4] hover:text-[#27c5d2] transition-colors duration-300 ease-in-out">Temizle</Link>
                            </div>
                            <div className="mb-5">
                                {options?.data?.map(item => {
                                    const isOpen = !!openGroups[item.title];
                                    return (
                                        <div key={item.title} className="py-2.5 text-[#6c757d] text-sm w-full text-start">
                                            <button
                                                type="button"
                                                onClick={() => toggleGroup(item.title)}
                                                className="flex items-center justify-between w-full uppercase py-2.5 cursor-pointer"
                                            >
                                                <h2>{item.title}</h2>
                                                <img
                                                    className={`w-3 h-3 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                                                    src={downArrow}
                                                    alt=""
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="flex flex-col gap-3.75 pt-2.5">
                                                    {item?.params?.filter(param => param.details?.can_filter)?.map((param) => (
                                                        <div className="flex flex-col" key={param.id}>
                                                            <label className="text-sm text-[#878787] mb-2">{param.title}</label>

                                                            {param.input_type === "select" && (
                                                                <select
                                                                    className="border border-[#ced4da] rounded-lg py-1.5 px-3 min-h-9.5"
                                                                    value={paramValues[param.id] ?? ""}
                                                                    onChange={(e) => handleSelectParam(param.id, e.target.value)}
                                                                >
                                                                    <option value="">Seçiniz</option>
                                                                    {param.options.map((opt) => (
                                                                        <option key={opt.id} value={opt.id}>
                                                                            {opt.title}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            )}

                                                            {param.input_type === "number" && (
                                                                <div className="flex gap-2">
                                                                    <input
                                                                        type="number"
                                                                        min={param.details?.min ?? undefined}
                                                                        placeholder="En az"
                                                                        className="border border-[#ced4da] rounded-lg py-1.5 px-3 w-full  min-h-9.5"
                                                                        value={paramValues[param.id]?.min ?? ""}
                                                                        onChange={(e) => handleRangeParam(param.id, "min", e.target.value)}
                                                                    />
                                                                    {param.details?.is_range === "1" && (
                                                                        <input
                                                                            type="number"
                                                                            max={param.details?.max ?? undefined}
                                                                            placeholder="En fazla"
                                                                            className="border border-[#ced4da] rounded-lg py-1.5 px-3 w-full"
                                                                            value={paramValues[param.id]?.max ?? ""}
                                                                            onChange={(e) => handleRangeParam(param.id, "max", e.target.value)}
                                                                        />
                                                                    )}
                                                                </div>
                                                            )}

                                                            {param.input_type === "text" && (
                                                                <input
                                                                    type="text"
                                                                    className="border border-[#ced4da] rounded-lg py-1.5 px-3 min-h-9.5"
                                                                    value={paramValues[param.id] ?? ""}
                                                                    onChange={(e) => handleTextParam(param.id, e.target.value)}
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <button type="button" onClick={applyParamFilters} className="w-full py-2 px-5 bg-[#f1f1f1] uppercase text-sm cursor-pointer text-[#4b4b4b] rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Seçenekleri Uygula</button>
                            </div>
                        </div>
                    </div>}
                    <div className={`${searchParams.toString() && typeId ? "w-[calc(100%-320px)] pl-12.5" : "w-full"}`}>
                        {searchParams.toString() && (
                            <div className="mb-7.5">
                                {titleAndSortRow}
                            </div>
                        )}
                        {isEmpty ? (
                            <div className="w-full p-3.75 m-3.75 text-start text-[#636464] bg-[#fafafa] rounded-lg">
                                <p>Hiç ilan bulunamadı. Seçtiğiniz filtre kriterlerini kontrol edin.</p>
                            </div>
                        ) : (
                            <div className={`flex ${flexDirection === "flex-col" ? "flex-col" : ""} flex-wrap max-[992px]:flex-col max-[992px]:gap-4 items-start justify-start -mx-3.75 max-[992px]:m-0`}>
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
                        )}
                        {!isEmpty && (!category ? <div className="flex items-center justify-between w-full mt-0 max-[992px]:flex-col max-[992px]:items-center">
                            <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                                {properties?.pagination?.pagination_text}
                            </p>
                            <Pagination
                                pagination={properties?.pagination}
                                onPageChange={setPage}
                            />
                        </div> : (
                            <div className="flex items-center justify-between w-full mt-7.5 max-[992px]:flex-col max-[992px]:items-center">
                                <p className="text-[#6C757D] max-[992px]:mb-4 max-[992px]:mt-4">
                                    {discounted?.pagination?.pagination_text}
                                </p>
                                <Pagination
                                    pagination={discounted?.pagination}
                                    onPageChange={setPage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
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