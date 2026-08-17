import discover from "../assets/discover.jpg"

export function DiscoverCard() {
    return (
        <div className="flex gap-20 items-center mb-35">
            <div className="flex-1">
                <img className="w-full rounded-2xl" src={discover} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-[26px] text-[#212529] mb-5 font-medium">Sahibi olduğunuz ya da satış yetkisi aldığınız ürünleri gün de kaç kişi inceliyor?</h3>
                <div>
                    <p className="text-[#838383] text-base font-medium mb-4">
                        Herkesin merak ettiği bir konu: Drive linki paylaştığınızda acaba kaç
                        kişi bu linki inceledi ya da kaç firma ürünlerinizi müşterilerine sundu?
                        Ürünlerinizi gören müşterilerin bu konudaki düşünceleri nelerdir?
                        Ürünlerinizin beğenilen ve beğenilmeyen özellikleri nelerdir?
                    </p>
                    <p className="text-[#838383] text-base font-medium mb-4">
                        Port-foy.com, emlak ürünleri paylaşımı için tasarlanmış yenilikçi bir platformdur. 
                        Port-foy.com, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak 
                        ve geniş kitlelere ulaşmalarını sağlamak amacıyla geliştirilmiştir. 
                        Port-foy.com'a yüklediğiniz emlak ürünleri, sistemimize üye olan tüm kullanıcılar 
                        tarafından görüntülenebilir.
                    </p>
                    <p className="text-[#838383] text-base font-medium mb-4">
                        Port-foy.com, emlak ürünleri paylaşımı için tasarlanmış yenilikçi bir platformdur. 
                        Port-foy.com, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak 
                        ve geniş kitlelere ulaşmalarını sağlamak amacıyla geliştirilmiştir. 
                        Port-foy.com'a yüklediğiniz emlak ürünleri, sistemimize üye olan tüm kullanıcılar tarafından görüntülenebilir.
                    </p>
                    <p className="text-[#838383] text-base font-medium">
                        Firmalar, sizin ürünlerinizi müşterilere sunduğunda bundan haberdar olabilirsiniz. 
                        Müşterilerin ürünlerinize yaptığı yorumları takip edebilir, bu şekilde ürünlerinizin 
                        eksiklerini tamamlayabilir ve pazarlama planlarınızı gözden geçirebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    )
}