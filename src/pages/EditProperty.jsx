import { Header } from "../components/Header"
import { AppLinks } from "../components/AppLinks";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { getDetails } from "../services/propertyDetails";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { cloneProperty, deleteGalery, deleteProperty, deleteVideo, getAllOffers, getAllProposals, getAllTransactions, getExternalProposals, updateCover, updateDraftStatus, updateProperty, updateSoldStatus, uploadGallery, uploadVideo } from "../services/propertiesApi";
import { replyOffer } from "../services/profileApi";
import close from "../assets/blue-close.png"
import trash from "../assets/trash.png"
import file from "../assets/ff.png"
import { DeleteVideoPopUp } from "../components/DeleteVideoPopUp";
import whiteClose from "../assets/close.png"
import { EditPropertyGallery } from "../components/EditPropertyGallery";
import { EditPropertyOffers } from "../components/EditPropertyOffers";
import { EditPropertyMove } from "../components/EditPropertyMove";
import { EditPropertySettings } from "../components/EditPropertySettings";
import { EditPropertyInfo } from "../components/EditPropertyInfo";

export function EditProperty({ loged, setMessage, setMessageShown }) {

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
    const [features, setFeatures] = useState([]);

    const [offerMenuShown, setOfferMenuShown] = useState(false)

    useEffect(() => {
        getDetails(id).then(data => {
            setDetail(data)
            setTitle(data?.title)
            setNo(data?.no)
            setPassPrice(data?.prices?.secondary?.number)
            setSellPrice(data?.prices?.primary?.number)
            setCurrency(data?.currency?.title)
            setCountry(data?.country?.id)
            setCity(data?.city?.id)
            setDistrict(data?.district?.id)
            setStreet(data?.street?.id)
            setType(data?.type?.title)
            setLatitude(data?.map?.latitude);
            setLongitude(data?.map?.longitude);
            setStatus(data?.status)
            setFeatures(data?.features ?? [])
        }).finally(() => setLoaded(true));
    }, [id])

    function handleFeatureChange(groupIndex, featureId, newValue) {
        setFeatures(prev => prev.map((group, index) => {
            if (index !== groupIndex) return group;
            return {
                ...group,
                features: group.features.map(feature =>
                    feature.id === featureId ? { ...feature, value: newValue } : feature
                )
            };
        }));
    }

    function handleDelete() {
        deleteProperty(id).then(data => {
            if (data.status === "success") {
                navigate("/company")
                setMessage(data.message)
            }
        }).finally(() => setMessageShown(true))
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
                setMessage(data.message)
            }
        }).finally(() => { setLoaded(true); setMessageShown(true) });
    }

    const [error, setError] = useState([]);

    function handleToggleStatus() {
        const newStatus = status === "published" || status === "sold" ? "draft" : "published";
        setLoaded(false)
        updateDraftStatus(id, newStatus).then(data => {
            if (data.status === "success") {
                navigate("/company")
                setMessage(data.message)
            }
            else {
                setPublishPopUp(false);
                setError(data);
                setToogleMenu(false);
            }
        }).finally(() => { setLoaded(true); setMessageShown(true) });
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
                setMessage(data.message)
            }
        }).finally(() => { setLoaded(true); setMessageShown(true) });
    }

    const [publishPopUp, setPublishPopUp] = useState(false);

    const [soldToDraft, setSoldToDraft] = useState(false)

    function handleUpdateProperty() {
        setLoaded(false)
        const details = {};
        features.forEach(group => {
            group.features.forEach(feature => {
                details[feature.id] = feature.value;
            });
        });

        updateProperty(id, title, country, city, district, street, sellPrice, passPrice, details).then(data => {
            if (data.status === "success") {
                console.log(data)
            }
            else {
                console.log(data.message)
            }
        }).finally(() => setLoaded(true))
    }

    const [externalProposals, setExternalProposals] = useState([]);

    useEffect(() => {
        getExternalProposals(id).then(setExternalProposals);
    }, [id])

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        getAllOffers(id).then(setOffers);
    }, [id])

    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        getAllProposals(id).then(setProposals)
    }, [id])

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getAllTransactions(id).then(setTransactions);
    }, [id])

    const [deleteVideoPopUp, setDeleteVideoPopUp] = useState(false);
    const [videoID, setVideoID] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState("video");

    function handleDeleteVideo() {
        setLoaded(false);
        deleteVideo(id, videoID).then(data => {
            if (data.status === "error") {
                setErrorMessage(data.message);
                setErrorMessageShown(true)

            }
            else {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getDetails(id).then(data => {
                    setDetail(data)
                })
            }
        }).finally(() => { setDeleteVideoPopUp(false); setLoaded(true) });
    }

    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessageShown, setErrorMessageShown] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");
    const [successMessageShown, setSuccessMessageShown] = useState(false);


    const [uploadVideoShown, setUploadVideoShown] = useState(false);

    const [videoType, setVideoType] = useState("local");
    const [coverImg, setCoverImg] = useState(null);
    const [video, setVideo] = useState(null);

    function handleAddOutsourceVideo(e) {
        setLoaded(false)
        e.preventDefault()
        uploadVideo(id, videoType, video).then(data => {
            if (!data.status) {
                setUploadVideoShown(false)
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else if (data.status === "error") {
                setUploadVideoShown(false)
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else {
                setUploadVideoShown(false)
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getDetails(id).then(data => {
                    setDetail(data);
                })
            }
        }).finally(() => setLoaded(true))
    }

    function handleAddLocalVideo(e) {
        setLoaded(false);
        e.preventDefault();
        uploadVideo(id, videoType, video, coverImg).then(data => {
            if (!data.status) {
                setUploadVideoShown(false)
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else {
                setUploadVideoShown(false)
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getDetails(id).then(data => {
                    setDetail(data);
                })
            }
        }).finally(() => setLoaded(true))
    }

    const [mediaID, setMediaID] = useState("");

    function handleDeleteGalery() {
        setLoaded(false);
        deleteGalery(id, mediaID).then(data => {
            if (data.status === "error") {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getDetails(id).then(data => {
                    setDetail(data)
                })
            }
        }).finally(() => { setDeleteVideoPopUp(false); setLoaded(true) });
    }

    const [coverFile, setCoverFile] = useState(null);

    function handleUpdateCover() {
        setLoaded(false);
        updateCover(id, coverFile).then(data => {
            if (data.status === "error") {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getDetails(id).then(data => {
                    setDetail(data)
                })
            }
        }).finally(() => setLoaded(true))
    }

    function handleUploadGallery(file, categoryId) {
        setLoaded(false);
        uploadGallery(id, file, categoryId).then(data => {
            if (data.status === "error") {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else {
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getDetails(id).then(data => {
                    setDetail(data)
                })
            }
        }).finally(() => setLoaded(true))
    }

    const [offerInfo, setOfferInfo] = useState([]);
    const [selectedOfferId, setSelectedOfferId] = useState(null);
    const [offerStatus, setOfferStatus] = useState("");
    const [note, setNote] = useState("");

    const closeOfferMenu = () => {
        setOfferMenuShown(false)
        setSelectedOfferId(null)
        setOfferStatus("")
        setNote("")
    }

    function handleReplyOffer() {
        if (!offerStatus) return;
        setLoaded(false);
        replyOffer(selectedOfferId, offerStatus, note).then(data => {
            if (data.status === "error") {
                setErrorMessage(data.message);
                setErrorMessageShown(true)
            }
            else {
                closeOfferMenu()
                setSuccessMessage(data.message);
                setSuccessMessageShown(true)
                getAllOffers(id).then(setOffers)
            }
        }).finally(() => setLoaded(true))
    }

    return (
        <div className='flex flex-col items-center font-sf'>
            {(deletePopUp || copyPopUp || toggleMenu || soldPopUp || publishPopUp || soldToDraft || deleteVideoPopUp || uploadVideoShown || offerMenuShown) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>}
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
            {deleteVideoPopUp && <DeleteVideoPopUp setDeleteVideoPopUp={setDeleteVideoPopUp} onClick={deleteTarget === "media" ? handleDeleteGalery : handleDeleteVideo} />}
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
            {errorMessageShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(155,0,0),rgb(220,38,38))] p-3 text-white">
                <p>{errorMessage}</p>
                <img onClick={() => setErrorMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
            {successMessageShown && <div className="fixed flex items-center gap-2 right-4 rounded-lg font-semibold z-50 top-4 bg-[linear-gradient(to_right,rgb(0,176,155),rgb(150,201,61))] p-3 text-white">
                <p>{successMessage}</p>
                <img onClick={() => setSuccessMessageShown(false)} className="w-5 h-5 cursor-pointer" src={whiteClose} alt="" />
            </div>}
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
            {soldToDraft && <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-between items-center w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529]">Taslağa Çevir</h2>
                    <img onClick={() => setCopyPopUp(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="p-4">
                    <div>
                        <p className="text-2xl text-[#212529] mb-2">Emin misiniz ?</p>
                        <p className="text-base text-[#212529] mb-4">Pasife alınan ilanlar ilan havuzunda görünmez ve ilan limitlerinizi etkilemez</p>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button onClick={() => setSoldToDraft(false)} className="bg-[#f1f1f1] text-[#4b4b4b] text-sm rounded-lg cursor-pointer py-2 px-5 font-semibold">İptal</button>
                        <button onClick={handleToggleStatus} className="bg-[#198754] text-white text-sm rounded-lg cursor-pointer py-2 px-5 font-semibold">Taslağa Çevir</button>
                    </div>
                </div>
            </div>}
            {publishPopUp && <div className="fixed top-1/2 left-1/2 overflow-y-auto flex max-[992px]:w-full flex-col items-start justify-start -translate-x-1/2 -translate-y-1/2 h-auto w-[27%] bg-white border border-[#eee] rounded-lg z-50">
                <div className="flex justify-between items-center w-full p-4 border-b border-b-[#dee2e6]">
                    <h2 className="text-xl text-[#212529] font-semibold">İlanı Yayınla</h2>
                    <img onClick={() => setPublishPopUp(false)} className="cursor-pointer w-5 h-5" src={close} alt="" />
                </div>
                <div className="p-4">
                    <p className="text-[#212529]">
                        İlana hiç görsel eklemediniz, görsel eklemeden yayına almak istediğinize emin misiniz?
                    </p>
                    <div className="mt-6 flex justify-end gap-2">
                        <button onClick={() => setPublishPopUp(false)} className="bg-[#f1f1f1] text-[#4b4b4b] text-sm rounded-lg cursor-pointer py-2 px-5 font-semibold">İptal</button>
                        <button onClick={handleToggleStatus} className="bg-[#198754] text-white text-sm rounded-lg cursor-pointer py-2 px-5 font-semibold">Evet</button>
                    </div>
                </div>
            </div>}
            <div className="w-full bg-[#f8f8f8] flex justify-center py-2.5 mb-7.5">
                <div className="w-full max-w-[90%]">
                    <p className="text-sm text-[#636363] font-medium">Anasayfa {">"} <span>İlanlar {">"} </span><span>{title} {">"} </span><span>Düzenle</span></p>
                </div>
            </div>
            <div className="w-full max-w-[90%] mb-7.5">
                <div className="w-full flex justify-between items-center sticky top-0 max-[992px]:flex-col max-[992px]:items-start">
                    <div>
                        <h1 className="text-[25px]">{title}</h1>
                        <ul className="flex text-sm text-[#7d7d7d] mt-1.25 max-[992px]:mb-5 flex-wrap">
                            <li>
                                {status === "draft" ? "Taslak" : "Yayında"}
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
                    <div className="w-full max-w-fit">
                        <ul className="flex overflow-x-auto scrollbar-thin">
                            <li>
                                <button onClick={() => setEditType("info")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "info" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg whitespace-nowrap hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>İlan Bilgileri</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("galery")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "galery" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg whitespace-nowrap hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Galeri</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("offers")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "offers" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg whitespace-nowrap hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Teklifler</button>
                            </li>
                            <li>
                                <button onClick={() => setEditType("move")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "move" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg whitespace-nowrap hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Hareketler</button>
                            </li>
                            {detail.status !== "sold" && <li>
                                <button onClick={() => setEditType("settings")} className={`py-2.5 px-5 text-sm cursor-pointer ${editType === "settings" ? "bg-[#d5d5d5]" : ""} text-[#565656] rounded-lg whitespace-nowrap hover:bg-[#ededed] transition-colors duration-300 ease-in-out`}>Ayarlar</button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
            {error.length !== 0 && <div className="w-full max-w-[90%] bg-[#f8d7da] p-4 rounded-lg mt-2 mb-4 border border-[#f5c2c7]">
                {error?.data?.map((item, index) => {
                    const messages = typeof item === "string" ? [item] : Object.values(item).flat();
                    return (
                        <div className="w-full" key={index}>
                            {messages.map((message, i) => (
                                <p className="text-[#842029]" key={i}>{message}</p>
                            ))}
                        </div>
                    );
                })}
            </div>}
            {detail.status === "draft" && <div className="w-full max-w-[90%]">
                <div className="w-full flex items-center justify-between border border-[#ffecb5] p-4 mb-4 bg-[#fff3cd] rounded-lg">
                    <p className="text-[#664d03]">Bu ilan şuanda taslak durumunda, ilan bilgilerinizi tamamladıktan sonra yayınlayabilirsiniz.</p>
                    <button onClick={() => setPublishPopUp(true)} className="bg-[#ffca64] text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ffca2c] transition-colors duration-300 ease-in-out">Şimdi Yayınla</button>
                </div>
            </div>}
            {detail.status === "sold" && <div className="w-full max-w-[90%]">
                <div className="w-full flex items-center justify-between border border-[#27C5D2] p-4 mb-4 bg-[#27c5d217] rounded-lg">
                    <p className="text-[#27c5d2]">Bu ilan Port-Foy.com aracılığı ile satılmıştır.</p>
                    <button onClick={() => setSoldToDraft(true)} className="bg-[#27C5D2] text-white text-sm py-2 px-5 rounded-lg cursor-pointer hover:bg-[#026872] transition-colors duration-300 ease-in-out">Taslağa Çevir</button>
                </div>
            </div>}
            {editType === "info" && <EditPropertyInfo
                detail={detail}
                title={title}
                setTitle={setTitle}
                currency={currency}
                setCurrency={setCurrency}
                passPrice={passPrice}
                setPassPrice={setPassPrice}
                sellPrice={sellPrice}
                setSellPrice={setSellPrice}
                country={country}
                setCountry={setCountry}
                city={city}
                setCity={setCity}
                district={district}
                setDistrict={setDistrict}
                street={street}
                setStreet={setStreet}
                latitude={latitude}
                longitude={longitude}
                features={features}
                handleFeatureChange={handleFeatureChange}
                handleUpdateProperty={handleUpdateProperty}
                status={status}
            />}
            {editType === "settings" && <EditPropertySettings
                detail={detail}
                navigate={navigate}
                id={id}
                setToogleMenu={setToogleMenu}
                setCopyPopUp={setCopyPopUp}
                setDeletePopUp={setDeletePopUp}
                setSoldPopUp={setSoldPopUp}
            />}
            {editType === "move" && <EditPropertyMove transactions={transactions} />}
            {editType === "offers" && <EditPropertyOffers
                offerMenuShown={offerMenuShown}
                closeOfferMenu={closeOfferMenu}
                loaded={loaded}
                offerInfo={offerInfo}
                offerStatus={offerStatus}
                setOfferStatus={setOfferStatus}
                note={note}
                setNote={setNote}
                handleReplyOffer={handleReplyOffer}
                offers={offers}
                setOfferMenuShown={setOfferMenuShown}
                setOfferInfo={setOfferInfo}
                setSelectedOfferId={setSelectedOfferId}
                setLoaded={setLoaded}
                proposals={proposals}
                externalProposals={externalProposals}
            />}
            {editType === "galery" && <EditPropertyGallery
                detail={detail}
                understand={understand}
                setUnderstand={setUnderstand}
                handleUploadGallery={handleUploadGallery}
                handleUpdateCover={handleUpdateCover}
                setCoverFile={setCoverFile}
                setDeleteVideoPopUp={setDeleteVideoPopUp}
                setMediaID={setMediaID}
                setDeleteTarget={setDeleteTarget}
                setVideoID={setVideoID}
                uploadVideoShown={uploadVideoShown}
                setUploadVideoShown={setUploadVideoShown}
                handleAddOutsourceVideo={handleAddOutsourceVideo}
                setVideoType={setVideoType}
                videoType={videoType}
                video={video}
                setVideo={setVideo}
                coverImg={coverImg}
                setCoverImg={setCoverImg}
                handleAddLocalVideo={handleAddLocalVideo}
            />}
            <div className='w-full mt-40 mb-30 max-[992px]:mt-10'>
                <div className='w-full mx-auto max-w-[90%] flex flex-col items-center justify-center bg-[#f7f6fb]'>
                    <AppLinks />
                </div>
            </div>
            <div className='w-full'>
                <Footer loged={loged} />
            </div>
        </div >
    )
}