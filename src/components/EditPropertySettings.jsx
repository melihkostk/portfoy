import { PropertySettingsCard } from "./PropertySettingsCard"

export function EditPropertySettings({ detail, navigate, id, setToogleMenu, setCopyPopUp, setDeletePopUp, setSoldPopUp }) {
    return (
        <div className="w-full max-w-[90%]">
            <div className="w-full mb-7.5">
                <div className="flex flex-wrap max-[992px]:flex-col ">
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
        </div>
    )
}
