"use client";

import { useTranslation } from "react-i18next";

export default function FooterSubscribe() {

    const { t } = useTranslation();

    return (
        <footer className="bg-[#1b2a34] text-white">
            <div className="max-w-[1440px] mx-auto py-20 mt-20 md:px-6 px-3 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left */}
                <div>
                    <h2 className="text-3xl font-semibold leading-snug mb-4">
                        {t('footer_subscribe.title')}
                    </h2>

                    <p className="text-gray-300 max-w-md">
                        {t('footer_subscribe.description')}
                    </p>
                </div>

                {/* Right */}
                <div className="w-full max-w-xl">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <input
                            type="email"
                            placeholder={t('footer_subscribe.input_placeholder_email')}
                            className="w-full px-4 py-3 rounded-lg text-black outline-none h-52px text-[#465a69] text-[16px]"
                        />

                        <input
                            type="text"
                            placeholder={t('footer_subscribe.input_placeholder_country')}
                            className="w-full px-4 py-3 rounded-lg text-black outline-none h-52px text-[#465a69] text-[16px]"
                        />
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-4"> {t('footer_subscribe.description_2')}</p>

                    <button className='bg-[#0062ff] text-white px-6 h-[50px] flex items-center justify-center rounded-full font-[600] text-[15px]'>
                        {t('footer_subscribe.button_text')}
                    </button>
                </div>

            </div>

            <div className="border-t border-white/20" />
        </footer>
    );
}
