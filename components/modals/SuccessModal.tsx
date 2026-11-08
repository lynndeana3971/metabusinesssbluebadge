import React from 'react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

interface SuccessModalProps {
    isOpend: boolean;
    onToggleSuccess: (value: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpend, onToggleSuccess }) => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(isOpend);

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const handleClose = () => {
        setIsOpen(false);
        onToggleSuccess(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            title={t('modal.success.title')}
            onClose={handleClose}
        >

            <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
                <div>
                    <div className='rounded-[10px] overflow-hidden mb-[15px]'>
                        <img src="/images/meta/succes.jpg" width="100%" alt="success" />
                    </div>
                    <p className='text-[#9a979e] mb-[10px] text-[15px]'>{t('modal.success.description')}</p>
                    <p className='text-[#9a979e] mb-[20px] text-[15px]'>{t('modal.success.description_2')}</p>
                    <a className='h-[45px] min-h-[45px] w-full bg-[#0064E0] text-white rounded-[40px] pt-[10px] pb-[10px] flex items-center justify-center transition-opacity duration-300' href="https://www.facebook.com">{t('modal.success.button.text')}</a>
                </div>

                <div className='w-[60px] mt-[20px] mx-auto'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="logo" />
                </div>
            </div>
        </Modal>
    );
};

export default SuccessModal;