import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { PropertySettingsCard } from "../components/PropertySettingsCard";
import defaultProperty from "../assets/default-property.jpg"
import chain from "../assets/chain.png"
import { getDetails } from "../services/propertyDetails";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { cloneProperty, deleteProperty, updateDraftStatus, updateSoldStatus } from "../services/propertiesApi";
import close from "../assets/blue-close.png"
import trash from "../assets/trash.png"
import file from "../assets/ff.png"

export function EditProperty({ loged }) {

    const navigate = useNavigate();

    const [editType, setEditType] = useState("info");
    const [understand, setUnderstand] = useState(true)

    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [passPrice, setPassPrice] = useState("")
    const [sellPrice, setSellPrice] = useState("");
    const [currency, setCurrency] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [no, setNo] = useState("");
    const [type, setType] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [status, setStatus] = useState("");
    const [detail, setDetail] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getDetails(id).then(data => {
            setDetail(data)
            setTitle(data?.title)
            setNo(data?.no)
            setPassPrice(data?.prices?.secondary?.number)
            setSellPrice(data?.prices?.primary?.number)
            setCurrency(data?.currency?.title)
            setCountry(data?.country?.title)
            setCity(data?.city?.title)
            setDistrict(data?.district?.title)
            setStreet(data?.street?.title)
            setType(data?.type?.title)
            setLatitude(data?.map?.latitude);
            setLongitude(data?.map?.longitude);
            setStatus(data?.status)
        }).finally(() => setLoaded(true));
    }, [id])

    function handleDelete() {
        deleteProperty(id).then(data => {
            if (data.status === "success") {
                navigate("/company")
            }
        })
    }

    const [deletePopUp, setDeletePopUp] = useState(false)
    const [copyPopUp, setCopyPopUp] = useState(false);

    const [copyTitle, setCopyTitle] = useState("");
    const [cloneImage, setCloneImage] = useState(0)

    function handleClone(e) {
        e.preventDefault();
        setLoaded(false)
        cloneProperty(id, copyTitle, cloneImage).then(data => {
            if (data.status === "success") {
                setCopyPopUp(false)
                navigate(`/properties/${data?.data?.id}/edit`)
            }
        }).finally(() => setLoaded(true));
    }

    function handleToggleStatus() {
        const newStatus = status === "published" ? "draft" : "published";
        setLoaded(false)
        updateDraftStatus(id, newStatus).then(data => {
            if (data.status === "success") {
                setToogleMenu(false);
                getDetails(id).then(data => {
                    setDetail(data)
                })
            }
        }).finally(() => setLoaded(true));
    }

    const [toggleMenu, setToogleMenu] = useState(false);

    const [soldPopUp, setSoldPopUp] = useState(false)

    const [hold, setHold] = useState("");

    function handleSoldStatus() {
        setLoaded(false)
        updateSoldStatus(id, hold, "sold").then(data => {
            if (data.status === "success") {
                setSoldPopUp(false)
                navigate("/company")
            }
        }).finally(() => setLoaded(true));
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            {(deletePopUp || copyPopUp || toggleMenu || soldPopUp) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
            {!loaded && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <ClipLoader
                        size={150}
                        color="#27c5d2"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <Header loged={loged} />
            {deletePopUp && <div className="fixed top-1/2 left-1/2 overflow-y-auto pb-5 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-end items-center w-full p-4 border-b-[#dee2e6]">
                    <img onClick={() => setDeletePopUp(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="text-center flex flex-col items-center justify-start h-full w-full">
                    <div className="flex flex-col items-center">
                        <img className="w-25 h-25" src={trash} alt="" />
                        <div className="mt-4 flex flex-col items-center">
                            <p className="text-[#545454] text-2xl mb-2">Emin misiniz ?</p>
                            <p className="text-lg text-[#6c757d] max-w-[60%] leading-none">İlanı sildiğinizde tekrar geri alamayacaksınız, silmek istediğinize emin misiniz?</p>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2.5 justify-center">
                        <button onClick={() => handleDelete()} className="bg-[#dc3545] cursor-pointer font-semibold hover:bg-[#bb2d3b] transition-colors duration-300 ease-in-out text-white py-2 px-5 rounded-lg text-sm">Evet, eminim</button>
                        <button onClick={() => setDeletePopUp(false)} className="bg-[#f1f1f1] cursor-pointer font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out text-[#4b4b4b] py-2 px-5 rounded-lg text-sm">İptal</button>
                    </div>
                </div>
            </div>}
            {copyPopUp && <form onSubmit={handleClone} className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-between items-center w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">İlanı Kopyala</h2>
                    <img onClick={() => setCopyPopUp(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="p-4 w-full">
                    <div className="mb-4">
                        <label className="text-[#212529]" htmlFor="title">Başlık</label>
                        <input required value={copyTitle} onChange={(e) => setCopyTitle(e.target.value)} className="block px-3 py-1.5 w-full mt-2 rounded-lg border border-[#d9d9d9]" id="title" name="title" type="text" placeholder="Başlık" />
                    </div>
                    <div>
                        <p className="text-[#6c757d] mb-4">Seçenekler</p>
                        <div className="flex items-center gap-2">
                            <input id="transfer" name="transfer" type="checkbox" />
                            <label checked={cloneImage === 1} onChange={(e) => setCloneImage(e.target.checked ? 1 : 0)} className="select-none" htmlFor="transfer">Görselleri Aktar</label>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button onClick={() => setCopyPopUp(false)} className="text-[#4b4b4b] cursor-pointer bg-[#f1f1f1] text-sm rounded-lg py-2 px-5 font-semibold hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">İptal</button>
                        <button className="text-white cursor-pointer bg-[#198754] text-sm rounded-lg py-2 px-5 font-semibold hover:bg-[#157347] transition-colors duration-300 ease-in-out">Kaydet</button>
                    </div>
                </div>
            </form>}
            {toggleMenu && <div className="fixed top-1/2 left-1/2 overflow-y-auto pb-5 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-end items-center w-full p-4 border-b-[#dee2e6]">
                    <img onClick={() => setToogleMenu(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="p-4 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-25 h-25" src={file} alt="" />
                        <div className="mt-6 max-w-[87%]">
                            <p className="text-center mb-2 text-2xl text-[#545454]">İlanı pasife almak istediğinize emin misiniz?</p>
                            <p className="text-center text-lg text-[#6c757d]">Pasife alınan ilanlar ilan havuzunda görünmez ve ilan limitlerinizi etkilemez</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 mt-5">
                        <button onClick={handleToggleStatus} className="bg-[#ffca64] text-black text-sm font-semibold py-2 px-5 rounded-lg hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out cursor-pointer">Evet, pasife al</button>
                        <button onClick={() => setToogleMenu(false)} className="bg-[#f1f1f1] text-[#4c4c4c] text-sm font-semibold py-2 px-5 rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out cursor-pointer">İptal</button>
                    </div>
                </div>
            </div>}
            {soldPopUp && <div className="fixed top-1/2 left-1/2 overflow-y-auto pb-5 flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-between items-center w-full p-4 border-b border-b-[#dee2e6]">
                    <p className="text-xl text-[#212529] font-semibold">İlan Satıldı</p>
                    <img onClick={() => setSoldPopUp(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                {status === "published" ? <div className="p-4">
                    <div className="text-[#664d03] bg-[#fff3cd] border border-[#ffecb5] p-4 mb-4 rounded-lg">
                        <p>İlan satıldı olarak belirlendikten sonra arama sonuçlarında ve ilan listesinde yer alamaz. Tercihinize bağlı olarak sadece portföyünüzde görünebilir.</p>
                    </div>
                    <p className="text-lg text-[#212529] mb-4 font-semibold">Satılan ilanı portföyünüzde tutmak ister misiniz?</p>
                    <div className="w-full flex">
                        <button onClick={() => setHold(1)} className={`flex-1 rounded-l-lg py-2.5 ${hold === 1 ? "bg-[#27c5d2] text-white" : "bg-[#f8f8f8] text-[#212529] hover:bg-[#c3c3c3]"} text-sm cursor-pointer transition-colors duration-300 ease-in-out font-semibold border-r border-r-[#0000002D]`}>Evet</button>
                        <button onClick={() => setHold(0)} className={`flex-1 rounded-r-lg py-2.5 ${hold === 0 ? "bg-[#27c5d2] text-white" : "bg-[#f8f8f8] text-[#212529] hover:bg-[#c3c3c3]"} cursor-pointer transition-colors duration-300 ease-in-out font-semibold`}>Hayır</button>
                    </div>
                    <div className="flex justify-end mt-6 gap-2">
                        <button onClick={() => setSoldPopUp(false)} className="py-2 px-5 rounded-lg text-sm text-[#4b4b4b] font-semibold bg-[#f1f1f1] cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">İptal</button>
                        <button onClick={handleSoldStatus} className="py-2 px-5 rounded-lg text-sm text-white font-semibold bg-[#198754] cursor-pointer hover:bg-[#157347] transition-colors duration-300 ease-in-out">Kaydet</button>
                    </div>
                </div> : <div className="p-4 w-full">
                    <div className="text-[#842029] bg-[#f8d7da] w-full p-4 rounded-lg border border-[#f5c2c7]">
                        <p>Sadece yayında olan ilanları satıldı olarak belirleyebilirsiniz.</p>
                    </div>
                </div>}
            </div>}
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-7.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"}</p>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="w-full flex justify-between items-center sticky top-0">
                    <div>
                        <h1 className="text-[25px]">{title}</h1>
                        <ul className="flex text-sm text-[#7d7d7d] mt-1.25">
                            <li>
                                Taslak
                            </li>
                            <li className="mx-2.5">
                                -
                            </li>
                            <li>
                                {no}
                            </li>
                            <li className="mx-2.5">
                                -
                            </li>
                            <li>
                                {type}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex">
                            <li>
                                <button onClick={() => setEditType("info")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "info" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>İlan Bilgileri</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("galery")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "galery" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Galeri</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("offers")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "offers" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Teklifler</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("move")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "move" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Hareketler</button>
                            </li>
                            {detail.status !== "sold" && <li>
                                <button onClick={() => setEditType("settings")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "settings" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Ayarlar</button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
            {detail.status === "draft" && <div className="w-full max-w-[90%]">
                <div className="w-full flex items-center justify-between border border-[#ffecb5] p-4 mb-4 bg-[#fff3cd] rounded-lg">
                    <p className="text-[#664d03]">Bu ilan şuanda taslak durumunda, ilan bilgilerinizi tamamladıktan sonra yayınlayabilirsiniz.</p>
                    <button className="bg-[#ffca64] text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out">Şimdi Yayınla</button>
                </div>
            </div>}
            {detail.status === "sold" && <div className="w-full max-w-[90%]">
                <div className="w-full flex items-center justify-between border border-[#27C5D2] p-4 mb-4 bg-[#27c5d217] rounded-lg">
                    <p className="text-[#27c5d2]">Bu ilan Port-Foy.com aracılığı ile satılmıştır.</p>
                    <button className="bg-[#27C5D2] text-white text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Taslağa Çevir</button>
                </div>
            </div>}
            {editType === "info" && <div className="w-full max-w-[90%]">
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Temel Bilgiler</h5>
                        </div>
                        <div className="p-4">
                            <div className="px-3 mb-2">
                                <label className="text-[#6c757d]" htmlFor="">Başlık</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                            </div>
                            <div className="flex">
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">Pass Fiyatı <span className="text-sm">({currency})</span></label>
                                    <input value={passPrice} onChange={(e) => setPassPrice(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                                </div>
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">Satış Fiyatı <span className="text-sm">({currency})</span></label>
                                    <input value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="number" />
                                </div>
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">Para Birimi</label>
                                    <input value={currency} onChange={(e) => setCurrency(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">Ülke Seçin</label>
                                    <input value={country} onChange={(e) => setCountry(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                                </div>
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">İl Seçin</label>
                                    <input value={city} onChange={(e) => setCity(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                                </div>
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">İlçe Seçin</label>
                                    <input value={district} onChange={(e) => setDistrict(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                                </div>
                                <div className="flex-1 px-3 mb-2">
                                    <label className="text-[#6c757d]" htmlFor="">Mahalle</label>
                                    <input value={street} onChange={(e) => setStreet(e.target.value)} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Harita Bilgisi</h5>
                        </div>
                        <div className="p-4">
                            <div className={`flex flex-col items-center justify-center ${latitude && longitude ? "h-100" : "h-50"}`}>
                                {!(latitude && longitude) && <div className="flex flex-col items-center">
                                    <p className="text-[#6c757d] mb-4">Harita üzerinde ilanın konumunu belirleyin</p>
                                    <button className="text-sm font-semibold text-white py-2 px-5 rounded-lg cursor-pointer bg-[#27c5d2] hover:bg-[#026872] transition-colors duration-300 ease-in-out">Konum Belirleyin</button>
                                </div>}
                                {(latitude && longitude) && <div className="w-full h-full">
                                    <iframe
                                        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                                        className="w-full block h-full border-0 rounded-lg"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        title="Google Maps"
                                    />
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-7.5">
                    {detail?.features?.map((item) => (
                        <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                            <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                                <h5 className="text-[#676767] text-lg py-1.25">{item.title}</h5>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap justify-start">
                                    {item.features?.map(item => (
                                        <div key={item.id} className="w-[25%] px-3 mb-2 flex flex-col">
                                            <label className="text-[#6c757d]" htmlFor="">{item?.title}</label>
                                            {item.input_type !== "select"
                                                ? <input key={item.id} value={item.input_type === "text" || item.input_type === "number" ? item?.value : ""} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]" type={item.input_type} />
                                                : <select key={item.id} value={item.value} className="py-1.5 px-3 border mt-2 block w-full rounded-lg border-[#d9d9d9]">
                                                    <option>{item.title}</option>
                                                    {item.options.map(item => (
                                                        <option key={item.id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full mb-7.5">
                    <div className="flex gap-1">
                        <button className="text-sm bg-[#27c5d2] text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Güncelle</button>
                        {status === "draft" && <button className="text-sm bg-[#F1F1F1] text-[#4B4B4B] rounded-lg py-2 px-5 cursor-pointer hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Güncelle ve Yayınla</button>}
                    </div>
                </div>
            </div>}
            {editType === "settings" && <div className="w-full max-w-[90%]">
                <div className="w-full mb-7.5">
                    <div className="flex flex-wrap ">
                        <PropertySettingsCard
                            title="İlanı Pasife Al"
                            description="İlan havuzunda yer almasını istemediğiniz ilanları pasif durumuna alabilirsiniz"
                            button="Pasife Al"
                            disabled={detail?.status === "draft"}
                            onClick={() => setToogleMenu(true)}
                        />
                        <PropertySettingsCard
                            title="İlanı Öne Çıkar"
                            description="Belirli bir süre için ilanınızı öne çıkararak daha fazla kullanıcının görmesini sağlayabilirsiniz."
                            button="İlanı Öne Çıkar"
                            onClick={() => navigate(`/properties/${id}/boost`)}
                            status={detail?.status}
                        />
                        <PropertySettingsCard
                            title="İlanı Kopyala"
                            description="Bu ilanın galeri görselleri dahil tüm özelliklerini kullanarak yeni bir ilan oluşturabilirsiniz."
                            button="Kopyala"
                            onClick={() => setCopyPopUp(true)}
                            status={detail?.status}
                        />
                        <PropertySettingsCard
                            title="İlanı Sil"
                            description="Bu ilana ait hareketleri, teklifleri ve benzeri tüm kayıtları tamamen kaldırın."
                            button="İlanı Sil"
                            onClick={() => setDeletePopUp(true)}
                            status={detail?.status}
                        />
                        <PropertySettingsCard
                            title="İlan Satıldı"
                            description="İlanı satıldı olarak işaretleyin ve tercihinize göre portföyünüzde kalmasını sağlayın."
                            button="İlan Satıldı"
                            status={detail?.status}
                            onClick={() => setSoldPopUp(true)}
                        />
                    </div>
                </div>
            </div>}
            {editType === "move" && <div className="w-full max-w-[90%] p-2.5 border border-[#f8f8f8] rounded-lg">
                <div className="w-full mb-7.5 p-4">
                    <div className="flex p-3.75">
                        <div className="w-15 h-15">
                            <img className="w-full h-full rounded-full" src="https://ui-avatars.com/api/?name=Enes+Bayba%C4%9Fan&background=d0d0d0&color=fff&size=32&bold=1&uppercase=1&format=svg&length=2" alt="" />
                        </div>
                        <div className="ml-4">
                            <h5>
                                <a className="text-black text-base opacity-70">Enes Baybağan</a>
                                <small className="text-sm text-[#6c757d] ml-1">1 yıl önce</small>
                            </h5>
                            <p className="text-lg text-[#6c757d]">CR0285ARS0003000015 numaralı ilanı oluşturdu</p>
                        </div>
                    </div>
                </div>
            </div>}
            {editType === "offers" && <div className="w-full max-w-[90%]">
                <div className="p-2.5 mb-7.5 rounded-lg border border-[#f8f8f8]">
                    <div className="text-lg text-[#676767] py-2 px-4 bg-[#f8f8f8] rounded-lg">
                        <p className="py-1.25">Müşteriye Gelen Fiyat Teklifleri</p>
                    </div>
                    <div className="w-full p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#ececec] text-[#6c757d]">
                                    <th className="text-start py-4 px-2.5 rounded-l-lg">Teklif Gönderen</th>
                                    <th className="text-start py-4 px-2.5">Fiyat</th>
                                    <th className="text-start py-4 px-2.5">Durum</th>
                                    <th className="text-start py-4 px-2.5">Oluşturma Tarihi</th>
                                    <th className="text-start py-4 px-2.5 rounded-r-lg">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-2.5 mb-7.5 rounded-lg border border-[#f8f8f8]">
                    <div className="text-lg text-[#676767] py-2 px-4 bg-[#f8f8f8] rounded-lg">
                        <p className="py-1.25">Müşteriye Gönderilen Teklifler</p>
                    </div>
                    <div className="w-full p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#ececec] rounded-lg text-[#6c757d]">
                                    <th className="text-start py-4 px-2.5 rounded-l-lg">#</th>
                                    <th className="text-start py-4 px-2.5">Müşteri</th>
                                    <th className="text-start py-4 px-2.5">Değerlendirme</th>
                                    <th className="text-start py-4 px-2.5">Durum</th>
                                    <th className="text-start py-4 px-2.5">Oluşturma Tarihi</th>
                                    <th className="text-start py-4 px-2.5 rounded-r-lg">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-2.5 mb-7.5 rounded-lg border border-[#f8f8f8]">
                    <div className="text-lg text-[#676767] py-2 px-4 bg-[#f8f8f8] rounded-lg">
                        <p className="py-1.25">Diğer Firmaların Oluşturduğu Teklifler</p>
                    </div>
                    <div className="w-full p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#ececec] rounded-lg text-[#6c757d]">
                                    <th className="text-start py-4 px-2.5 rounded-l-lg">Firma</th>
                                    <th className="text-start py-4 px-2.5">Değerlendirme</th>
                                    <th className="text-start py-4 px-2.5">Durum</th>
                                    <th className="text-start py-4 px-2.5 rounded-r-lg">Oluşturma Tarihi</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}
            {editType === "galery" && <div className="w-full max-w-[90%]">
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Kapak Fotoğrafı</h5>
                        </div>
                        <div className="p-4">
                            {understand && <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg">
                                <p className="text-[#664d03]">Lütfen logolu resimler eklemeyin. Aksi halde ilanınız pasif edilecektir</p>
                                <button onClick={() => setUnderstand(false)} className="bg-[#ffca64] text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out">Anladım</button>
                            </div>}
                            <div className="h-87.5 rounded-lg relative">
                                <img className="w-full h-full object-cover rounded-lg" src={defaultProperty} alt="" />
                                <div className="absolute flex items-center bottom-6 right-6">
                                    <button className="bg-[#f1f1f1] cursor-pointer text-[#4b4b4b] py-2 px-5 rounded-lg mr-2 hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                                        <img className="w-5 h-5" src={chain} alt="" />
                                    </button>
                                    <button className="bg-[#f1f1f1] cursor-pointer text-[#4b4b4b] py-2 px-5 rounded-lg text-sm hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Kapak Fotoğrafını Değiştir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Arsa Fotoğrafı</h5>
                        </div>
                        <div className="p-4">
                            <div className="h-50 text-center p-5 flex items-center justify-center border-2 border-[#eee] border-dashed">
                                <input className="w-full h-full" type="file" id="file" hidden></input>
                                <label className="w-full h-full flex items-center justify-center cursor-pointer text-xl text-[#929292]" htmlFor="file">
                                    Dosyaları buraya sürükleyin veya seçmek için tıklayın
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-7.5">
                    <div className="p-2.5 border border-[#f8f8f8] rounded-lg">
                        <div className="bg-[#f8f8f8] py-2 px-4 rounded-lg">
                            <h5 className="text-[#676767] text-lg py-1.25">Videolar</h5>
                        </div>
                        <div className="p-4">
                            <div className="w-full flex items-center justify-between p-4 mb-4 bg-[#fff3cd] rounded-lg">
                                <p className="text-[#664d03]">Henüz video yüklemediniz</p>
                            </div>
                            <div>
                                <button className="bg-[#f1f1f1] cursor-pointer text-[#4b4b4b] text-sm rounded-lg py-2 px-5 hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">Video Yükleyin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className='w-full mt-40 mb-30 max-[992px]:mt-10'>
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