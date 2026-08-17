export function PricingCard() {
    return (
        <div className="bg-[#f9f9f9] p-7.5 m-3.75 w-[30%]">
            <div>
                <h2 className="text-[#212529] text-[26px] font-semibold">XL Emlak Paketi</h2>
                <p className="text-sm text-[#797979] min-h-10.5 font-medium mb-4">XL Emlak Paketi</p>
            </div>
            <div className="mt-5 mb-7.5">
                <p className="text-[26px] font-medium">
                    Ücretsiz
                    <span className="text-[#898989] text-base ml-1.25"> / 30 Gün</span>
                </p>
                <p className="text-sm text-[#6C757D] font-medium">
                    Sonraki yenileme ₺15,00 + KDV / Aylık
                </p>
            </div>
            <div className="mb-5">
                <p className="text-xs text-[#999999] mb-2.5 font-medium uppercase">Müşteri ve Personel</p>
                <ul>
                    <li className="text-base text-[#212529] my-0.5 font-medium">10 adet personel oluşturma</li>
                    <li className="text-base text-[#212529] my-0.5 font-medium">3000 adet teklif oluşturma</li>
                    <li className="text-base text-[#212529] my-0.5 font-medium">1000 adet müşteri oluşturma</li>
                </ul>
            </div>
            <div className="mb-5">
                <p className="text-xs text-[#999999] mb-2.5 font-medium uppercase">İlan</p>
                <ul>
                    <li className="text-base text-[#212529] my-0.5 font-medium">520 adet ilan oluşturma</li>
                    <li className="text-base text-[#212529] my-0.5 font-medium">Her ilan için 20 adet fotoğraf</li>
                    <li className="text-base text-[#212529] my-0.5 font-medium">Her ilan için 20 video</li>
                </ul>
            </div>
            <div className="w-full bg-[#f1f1f1] text-center py-2 px-5 rounded-lg hover:bg-[#c3c3c3] transition-colors duration-300 ease-in-out">
                <a className="uppercase text-[#4b4b4b] font-medium text-sm w-full" href="https://demo.pigasoft.com/portfoy/public/tr/registration/application">Firma başvurusu</a>
            </div>
        </div>
    )
}