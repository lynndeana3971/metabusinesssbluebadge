import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

const StepVerified = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-[url(/images/meta/bg_step_verified.jpg)] bg-cover bg-center bg-no-repeat my-20'>
            <div className='max-w-[1440px] mx-auto md:py-20 py-10 md:px-6 px-3 mb-[80px]'>
                <div className='w-[100%]'>
                    <p className='text-[32px]'>{t('signup_verified.title')}</p>
                    <p className='text-[16px] text-[#1c2b33] font-[300] my-4'>{t('signup_verified.description')}</p>
                    <div className='grid grid-cols-12 gap-4 pt-12'>
                        <div className='md:col-span-4 col-span-12 border border-[#cbd2d9] rounded-[24px] bg-white p-10'>
                            <img src="/images/meta/one.png" alt="step_verified_1" className='w-[56px] h-[56px] mb-4 min-w-[56px] min-h-[56px]' />
                            <h3 className="text-[24px] font-[300]">{t('signup_verified.step_1.title')}</h3>
                            <p className='mt-3 text-[14px] text-[#465A69] font-[100]'>{t('signup_verified.step_1.description')}</p>
                        </div>
                        <div className='md:col-span-4 col-span-12 border border-[#cbd2d9] rounded-[24px] bg-white p-10'>
                            <img src="/images/meta/two.png" alt="step_verified_1" className='w-[56px] h-[56px] mb-4 min-w-[56px] min-h-[56px]' />
                            <h3 className="text-[24px] font-[300]">{t('signup_verified.step_2.title')}</h3>
                            <p className='mt-3 text-[14px] text-[#465A69] font-[100]'>{t('signup_verified.step_2.description')}</p>
                        </div>
                        <div className='md:col-span-4 col-span-12 border border-[#cbd2d9] rounded-[24px] bg-white p-10'>
                            <img src="/images/meta/three.png" alt="step_verified_1" className='w-[56px] h-[56px] mb-4 min-w-[56px] min-h-[56px]' />
                            <h3 className="text-[24px] font-[300]">{t('signup_verified.step_3.title')}</h3>
                            <p className='mt-3 text-[14px] text-[#465A69] font-[100]'>{t('signup_verified.step_3.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepVerified
