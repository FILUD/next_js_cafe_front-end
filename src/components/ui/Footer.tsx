import { companyContactType } from "@/types/companyInfo"
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';



export const Footer = () => {
    const { t, i18n } = useTranslation('common');
    const fontClass = i18n.language === 'la' ? 'font-notosanslao' : 'font-poppins';
    const [companyInfo, setCompanyInfo] = useState<companyContactType[]>([])
    useEffect(() => {
        const mockData: companyContactType[] = [
            {
                whatsapp: '+1234567890',
                email: 'info@example.com',
                tiktok: 'example_tiktok',
                facebook: 'example_facebook',
                ig: 'example_instagram',
                address: '123 Example St, Example City, 12345',
            },
        ];
        setCompanyInfo(mockData);
    }, []);


    return (
        <footer className={`${fontClass} bg-custom_peach w-full px-[7vw] rounded-t-[33px] p-16 grid grid-cols-3`}>
            <section className="flex flex-col gap-2">
                <p className="text-start pb-5 font-bold ">{t('contact us')}</p>
                {companyInfo.map((company, index) => (
                    <div className="flex flex-col pl-2 gap-2" key={index}>
                        <span className="flex items-center gap-5">
                            <img className="w-[32px] rounded-full h-[32px]" src="/icons/socials/social.png" alt="Whatsapps" />
                            <p>{company.whatsapp}</p>
                        </span>
                        <span className="flex items-center gap-5">
                            <img className="w-[32px] rounded-full h-[32px]" src="/icons/socials/email.png" alt="Whatsapps" />
                            <p>{company.email}</p>
                        </span>
                        <span className="flex items-center gap-5">
                            <img className="w-[32px] rounded-full h-[32px]" src="/icons/socials/tiktok.png" alt="Whatsapps" />
                            <p>{company.tiktok}</p>
                        </span>
                        <span className="flex items-center gap-5">
                            <img className="w-[32px] rounded-full h-[32px]" src="/icons/socials/facebook.png" alt="Whatsapps" />
                            <p>{company.facebook}</p>
                        </span>
                        <span className="flex items-center gap-5">
                            <img className="w-[32px] rounded-full h-[32px]" src="/icons/socials/instagram.png" alt="Whatsapps" />
                            <p>{company.ig}</p>
                        </span>
                    </div>
                ))}


            </section>
            <section>
                i
            </section>
            <section className="flex justify-end">
                <img className="w-[150px] h-[30px]" src="/logos/logo_coffe.svg" alt="" />
            </section>
        </footer>
    )
}