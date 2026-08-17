import about from "../assets/about.png"

export function CorporateCard(){
    return(
        <div className="flex items-start justify-between gap-12.5">
            <div className="flex-1 flex items-center justify-center sticky top-4">
                <img className="max-w-[70%]" src={about} alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-[30px] mb-5 text-black font-bold">Hakkımızda</h2>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">
                    Port-foy.com, emlak sektöründe faaliyet gösteren profesyonellerin işlerini kolaylaştırmak 
                    ve geniş kitlelere ulaşmalarını sağlamak amacıyla Order Teknoloji tarafından projelendirilmiştir. 
                    Yenilikçi ve kullanıcı dostu yapısıyla, gayrimenkul ürünlerinin etkili bir şekilde paylaşılmasını 
                    ve yönetilmesini sağlar.
                </p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">
                    Platformumuz, kullanıcıların güncel emlak bilgilerine hızlı ve kolay bir şekilde erişim sağlamalarına 
                    yardımcı olur. Port-foy.com üzerinden yüklediğiniz gayrimenkul ürünleri, sistemimize üye olan tüm 
                    kullanıcılar tarafından görüntülenebilir ve değerlendirmeye alınabilir. Bu sayede, sahip olduğunuz 
                    veya satış yetkisi aldığınız ürünlerin kimler tarafından incelendiğini ve hangi özelliklerinin 
                    beğenildiğini veya eleştirildiğini öğrenebilirsiniz.
                </p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">
                    Port-foy.com, bölgenizdeki tüm emlakçılar ve inşaat firmalarının güncel ürün bilgilerine anlık 
                    olarak ulaşmanızı mümkün kılar. Emlak satış personelinin müşteri taleplerine en kısa sürede ve en 
                    doğru şekilde cevap verebilmesi için tasarlanmış olan platformumuz, telefon aramaları veya drive 
                    linkleri arasında kaybolma derdine son verir. Güncel olmayan ürünler otomatik olarak pasif duruma 
                    geçer ve yanlış bilgi iletme riskini ortadan kaldırır.
                </p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">
                    Farklı şehirlerde gayrimenkul arayan müşterilerinize de hızlı ve güvenilir çözümler sunmanızı sağlıyoruz. 
                    Port-foy.com üzerinden belirlediğiniz kriterlere göre en uygun gayrimenkul seçeneklerini hızlı bir 
                    şekilde filtreleyebilir ve müşterinize sunabilirsiniz. Ayrıca, müşteri yorumlarını takip ederek 
                    pazarlama planlarınızı ve ürünlerinizi sürekli olarak geliştirebilirsiniz.
                </p>
                <p className="mb-4 text-[#6b6b6b] font-medium text-base">
                    Port-foy.com, emlak firmalarının geniş coğrafi alanlarda etkin olmasını sağlarken, akıllı hatırlatmalar 
                    ve performans takibi ile iş süreçlerinizi optimize eder. Ekibinizin performansını kontrol edebilir ve 
                    ilanlarınızın güncel kalmasını sağlayabilirsiniz.
                </p>
                <p className="text-[#6b6b6b] font-medium text-base">
                    Order Teknoloji'nin bilgi birikimi ve deneyimiyle geliştirilen Port-foy.com, gayrimenkul sektöründe 
                    fark yaratmanızı ve başarıya ulaşmanızı sağlar. Sizler için çözüm üretiyoruz. 
                    Port-foy.com ile hayalinizdeki gayrimenkul çözümlerine ulaşmak artık çok daha kolay ve zahmetsiz.
                </p>
            </div>
        </div>
    )
}