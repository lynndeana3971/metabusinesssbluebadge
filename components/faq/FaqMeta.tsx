"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

const FaqMeta = () => {

    const [active, setActive] = useState<number | null>(0);
    const { t } = useTranslation();

    const faqData: FaqItem[] = [
        {
            question: t('faq.faq_1.question'),
            answer: (
                <>
                    {t('faq.faq_1.answer_1')} (<Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://www.facebook.com/business/help/2876154822522394">{t('faq.faq_1.answer_2')}</Link>; <Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://faq.whatsapp.com/3872729742954601">{t('faq.faq_1.answer_3')}</Link>).
                </>
            ),
        },
        {
            question: t('faq.faq_2.question'),
            answer: (
                <>
                    <Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://business.facebook.com/business/loginpage">{t('faq.faq_2.answer_1')}</Link> {t('faq.faq_2.answer_2')} <br />
                </>
            ),
        },
        {
            question: t('faq.faq_3.question'),
            answer: (
                <>
                    {t('faq.faq_3.answer_1')} (<Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://www.facebook.com/business/help/2876154822522394">{t('faq.faq_3.answer_2')}</Link>; <Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://faq.whatsapp.com/3872729742954601">{t('faq.faq_3.answer_3')}</Link>).
                </>
            ),
        },
        {
            question: t('faq.faq_4.question'),
            answer: (
                <>
                    {t('faq.faq_4.answer_1')} (<Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="">{t('faq.faq_4.answer_2')}</Link>).
                </>
            ),
        },
        {
            question: t('faq.faq_5.question'),
            answer: t('faq.faq_5.answer'),
        },
        {
            question: t('faq.faq_6.question'),
            answer: t('faq.faq_6.answer'),  
        },
        {
            question: t('faq.faq_7.question'),
            answer: t('faq.faq_7.answer'),
        },
    ];

    return (
        <div className='max-w-[1440px] mx-auto mt-20 mb-[80px] md:px-6 px-3'>
            <p className='text-[32px] mb-3'>{t('faq.title')}</p>
            <p className='text-[18px] font-[500] mb-10'>{t('faq.description')} (<Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://www.facebook.com/business/help/2876154822522394">{t('faq.description_2')}</Link>; <Link className='text-[#0064E0] underline decoration-[#cbd2d9]' href="https://faq.whatsapp.com/3872729742954601">{t('faq.description_3')}</Link>).</p>

            <div className="divide-y border-t border-b">
                {faqData.map((item, index) => {
                    const open = active === index;

                    return (
                        <div key={index}>
                            <button
                                onClick={() => setActive(open ? null : index)}
                                className="py-8 w-full flex items-center justify-between py-6 text-left text-lg font-medium"
                            >
                                <span className="md:text-[24px] text-[20px]">{item.question}</span>
                                <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
                                    <img src="/images/icons/ic_arrow.svg" alt="arrow" className='md:w-[24px] w-[20px] md:h-[24px] h-[20px]' />
                                </span>
                            </button>

                            <div className={`grid transition-all duration-300 linear-in-out ${open ? "max-h-40 grid-rows-[1fr] opacity-100" : "max-h-0 grid-rows-[0fr] opacity-0"}`}>
                                <div className="md:text-[18px] text-[16px] overflow-hidden text-gray-600 pb-8 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FaqMeta
