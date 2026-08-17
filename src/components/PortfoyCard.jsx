import step1 from "../assets/step1.png"

export function PortfoyCard(){
    return(
        <div>
            <div className="mb-20">
                <img src={step1} alt="" />
            </div>
            <div>
                <h3 className="text-xl text-[#202125] font-medium mb-2 text-center">Başvurunuzu Yapın</h3>
                <p className="text-sm text-[#202125] font-medium text-center opacity-70">Firmanıza ait mali bilgileri, firma yetkilisi olarak siz kişisel bilgilerinizi girdikten sonra kısa bir onay süreci sizi bekliyor olacak. Onay maili ile birlikte size giriş kodunuz gönderilecek. Dilerseniz tanııtm videomuzda bu adımları izleyerek ilerleyebilirsiniz.</p>
            </div>
        </div>
    )
}