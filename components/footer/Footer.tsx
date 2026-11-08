// components/Footer.tsx
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const [openSections, setOpenSections] = useState<number[]>([]);
    const { t } = useTranslation();

    const footerSections = [
        {
            title: t('footer.footer_section_1.title'),
            items: [
                { name: t('footer.footer_section_1.items.facebook'), href: '#' },
                { name: t('footer.footer_section_1.items.instagram'), href: '#' },
                { name: t('footer.footer_section_1.items.messenger'), href: '#' },
                { name: t('footer.footer_section_1.items.whatsapp'), href: '#' },
                { name: t('footer.footer_section_1.items.audience_network'), href: '#' },
                { name: t('footer.footer_section_1.items.meta_quest'), href: '#', external: true },
                { name: t('footer.footer_section_1.items.workplace'), href: '#', external: true },
                { name: t('footer.footer_section_1.items.meta_for_work'), href: '#', external: true },
            ],
        },
        {
            title: t('footer.footer_section_2.title'),
            items: [
                { name: t('footer.footer_section_2.items.free_tools'), href: '#' },
                { name: t('footer.footer_section_2.items.facebook_pages'), href: '#' },
                { name: t('footer.footer_section_2.items.instagram_profiles'), href: '#' },
                { name: t('footer.footer_section_2.items.stories'), href: '#' },
                { name: t('footer.footer_section_2.items.shops'), href: '#' },
                { name: t('footer.footer_section_2.items.meta_business_suite'), href: '#' },
                { name: t('footer.footer_section_2.items.facebook_ads'), href: '#' },
                { name: t('footer.footer_section_2.items.instagram_ads'), href: '#' },
                { name: t('footer.footer_section_2.items.video_ads'), href: '#' },
                { name: t('footer.footer_section_2.items.ads_manager'), href: '#' },
            ],
        },
        {
            title: t('footer.footer_section_3.title'),
            items: [
                { name: t('footer.footer_section_3.items.set_up_a_facebook_page'), href: '#' },
                { name: t('footer.footer_section_3.items.build_brand_awareness'), href: '#' },
                { name: t('footer.footer_section_3.items.promote_your_local_business'), href: '#' },
                { name: t('footer.footer_section_3.items.grow_online_sales'), href: '#' },
                { name: t('footer.footer_section_3.items.promote_your_app'), href: '#' },
                { name: t('footer.footer_section_3.items.generate_leads'), href: '#' },
                { name: t('footer.footer_section_3.items.measure_and_optimise_ads'), href: '#' },
                { name: t('footer.footer_section_3.items.retarget_existing_customers'), href: '#' },
            ],
        },
        {
            title: t('footer.footer_section_4.title'),
            items: [
                { name: t('footer.footer_section_4.items.small_business'), href: '#' },
                { name: t('footer.footer_section_4.items.large_businesses'), href: '#' },
                { name: t('footer.footer_section_4.items.agency'), href: '#' },
                { name: t('footer.footer_section_4.items.media_and_publisher'), href: '#', external: true },
                { name: t('footer.footer_section_4.items.creator'), href: '#', external: true },
                { name: t('footer.footer_section_4.items.developer'), href: '#' },
                { name: t('footer.footer_section_4.items.business_partner'), href: '#' },
            ],
        },
        {
            title: t('footer.footer_section_5.title'),
            items: [
                { name: t('footer.footer_section_5.items.automotive'), href: '#' },
                { name: t('footer.footer_section_5.items.consumer_packaged_goods'), href: '#' },
                { name: t('footer.footer_section_5.items.ecommerce'), href: '#' },
                { name: t('footer.footer_section_5.items.entertainment_and_media'), href: '#' },
                { name: t('footer.footer_section_5.items.financial_services'), href: '#' },
                { name: t('footer.footer_section_5.items.gaming'), href: '#' },
                { name: t('footer.footer_section_5.items.property'), href: '#' },
                { name: t('footer.footer_section_5.items.restaurants'), href: '#' },
                { name: t('footer.footer_section_5.items.retail'), href: '#' },
                { name: t('footer.footer_section_5.items.technology_and_telecom'), href: '#' },
                { name: t('footer.footer_section_5.items.travel'), href: '#' },
            ],
        },
        {
            title: t('footer.footer_section_6.title'),
            items: [
                { name: t('footer.footer_section_6.items.online_learning'), href: '#' },
                { name: t('footer.footer_section_6.items.certification_programmes'), href: '#' },
                { name: t('footer.footer_section_6.items.webinars'), href: '#' },
            ],
        },
        {
            title: t('footer.footer_section_7.title'),
            items: [
                { name: t('footer.footer_section_7.items.ads_guide'), href: '#' },
                { name: t('footer.footer_section_7.items.brand_safety_and_suitability'), href: '#' },
                { name: t('footer.footer_section_7.items.click_here_book'), href: '#' },
                { name: t('footer.footer_section_7.items.media_responsibility'), href: '#' },
                { name: t('footer.footer_section_7.items.sitemap'), href: '#' },
            ],
        },
    ];

    const toggleSection = (index: number) => {
        setOpenSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <footer className="bg-[#1b2a34] text-gray-400">
            {/* Main content */}
            <div className="max-w-[1440px] mx-auto py-20 md:px-6 px-3">
                {/* Desktop grid - 4 cột trên lg, 3 cột trên md, 2 cột trên sm */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {footerSections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-[#cbd2d9] text-[18px] mb-4 tracking-wide">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 hover:text-gray-200 text-[13px] transition-colors"
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile - Accordion style */}
                <div className="md:hidden divide-y divide-gray-800">
                    {footerSections.map((section, idx) => (
                        <div key={idx} className="py-5">
                            <button
                                onClick={() => toggleSection(idx)}
                                className="flex justify-between items-center w-full text-left text-white font-medium"
                            >
                                <span className="text-[24px]">{section.title}</span>
                                <span className="text-xl transition-transform duration-200" style={{ transform: openSections.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src="/images/icons/ic_arrow_w.svg" alt="arrow" className='w-[20px] h-[20px]' />
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openSections.includes(idx) ? 'max-h-96 mt-4' : 'max-h-0'
                                    }`}
                            >
                                <ul className="space-y-3 pl-1">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-400 hover:text-gray-200 text-[18px] block"
                                                target={item.external ? '_blank' : undefined}
                                                rel={item.external ? 'noopener noreferrer' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#465A69] pt-12 text-sm mt-12">
                    <div className="flex flex-col md:flex-row sm:justify-between sm:items-start gap-6">
                        <div className="text-[#cbd2d9] text-[13px]">
                            © {new Date().getFullYear()} Meta
                            <div className="flex gap-3 text-[#cbd2d9] text-[13px] mt-4">
                                <img src="/images/icons/ic_facebook.svg" alt="flag" className='w-[24px] h-[24px]' />
                                <img src="/images/icons/ic_instagram.svg" alt="flag" className='w-[24px] h-[24px]' />
                                <img src="/images/icons/ic_x.svg" alt="flag" className='w-[24px] h-[24px]' />
                                <img src="/images/icons/ic_in.svg" alt="flag" className='w-[24px] h-[24px]' />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {[t('footer_bottom.about'), t('footer_bottom.developers'), t('footer_bottom.careers'), t('footer_bottom.privacy'), t('footer_bottom.cookies'), t('footer_bottom.terms'), t('footer_bottom.help_centre')].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-[#cbd2d9] hover:text-gray-200 transition-colors md:text-[13px] text-[12px]"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}