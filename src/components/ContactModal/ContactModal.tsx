import React, { useEffect, useState } from 'react';
import styles from './ContactModal.module.css';
import { AnimatePresence, motion } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setStatus('idle');
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Ошибка отправки');
      
      setStatus('success');
      setFormData({ name: '', phone: '', direction: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 3000);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay} 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className={styles.modal} 
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.content}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.headerBlock}>
              <span className={styles.label}>Связаться с нами</span>
              <h2 className={styles.title}>
                Давайте обсудим <span className={styles.highlight}>ваш проект.</span>
              </h2>
              <p className={styles.desc}>
                Расскажите о своей задаче, а мы предложим лучшее решение и рассчитаем стоимость.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureBox}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                    <rect x="0.5" y="0.5" width="63" height="63" rx="10.5" fill="#5EB5F0" fillOpacity="0.11" stroke="#3DDC84"/>
                    <path d="M25 32.9351C24.0908 32.7507 23.4344 32.0943 23.25 31.1851C23.25 30.2758 24.0908 29.6194 25 29.4351C25.9092 29.6194 26.75 30.2758 26.75 31.1851C26.5656 32.0943 25.9092 32.7507 25 32.9351ZM32 32.9351C31.0908 32.7507 30.4344 32.0943 30.25 31.1851C30.25 30.2758 31.0908 29.6194 32 29.4351C32.9092 29.6194 33.75 30.2758 33.75 31.1851C33.5656 32.0943 32.9092 32.7507 32 32.9351ZM39 32.9351C38.0908 32.7507 37.4344 32.0943 37.25 31.1851C37.25 30.2758 38.0908 29.6194 39 29.4351C39.9092 29.6194 40.75 30.2758 40.75 31.1851C40.5656 32.0943 39.9092 32.7507 39 32.9351Z" fill="#3DDC84"/>
                    <path d="M21.7887 44.8403C25.0262 44.1981 27.8927 42.8996 32 43.4351C39.7315 43.4351 46 37.9506 46 31.1851C46 24.4196 39.7315 18.9351 32 18.9351C24.2685 18.9351 18 24.4196 18 31.1851C18 34.2651 19.3003 37.0826 21.4475 39.2351C20.9902 41.9789 20.0983 44.4256 20.576 45.0591C20.9814 44.9926 21.3857 44.9197 21.7887 44.8403Z" fill="#3DDC84" fillOpacity="0.5"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <span>Ответ в течение</span>
                  <strong>2 часов</strong>
                </div>
              </div>
              <div className={styles.featureBox}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                    <rect x="0.5" y="0.5" width="63" height="63" rx="10.5" fill="#5EB5F0" fillOpacity="0.11" stroke="#3DDC84"/>
                    <path d="M38.6 28.2C38.8 27.8 38.8 27.3 38.6 27C38.2 26.7 37.5 26.7 37.3 27L31.1 33.3L28.3 30.5C27.9 30.2 27.3 30.2 27.1 30.5C26.8 30.8 26.8 31.4 27.1 31.7L30.5 35.2C30.8 35.5 31.4 35.5 31.7 35.2L38.6 28.2ZM32.4 18.1C32.1 18 31.8 18 31.5 18.1C28.2 20.3 24.5 21.8 20.7 22.3C20.2 22.6 20 23 20 23.2V31.1C20 37.9 23.9 42.9 31.6 45.9C32.1 46 32.3 45.9 31.6 45.9C40 42.9 44 37.9 44 31.1V23.2C44 23 43.7 22.6 43.2 22.3C39.3 21.8 35.7 20.3 32.4 18.1Z" fill="#3DDC84"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <span>Конфиденциальность</span>
                  <strong>гарантирована</strong>
                </div>
              </div>
              <div className={styles.featureBox}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                    <rect x="0.5" y="0.5" width="63" height="63" rx="10.5" fill="#5EB5F0" fillOpacity="0.11" stroke="#3DDC84"/>
                    <circle cx="32" cy="32" r="14" stroke="#3DDC84" strokeWidth="3"/>
                    <path d="M32 23V32L38 38" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <span>Бесплатная</span>
                  <strong>консультация</strong>
                </div>
              </div>
            </div>

            <div className={styles.messengersBlock}>
              <p>Или пишите нам в удобный мессенджер</p>
              <div className={styles.messengersWrapper}>
                <div className={styles.messengerBox}>
                  <a href="tel:+992901000535" className={styles.mCircle} style={{ background: '#2EB843' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </a>
                  <span>Телефон</span>
                </div>
                <div className={styles.messengerBox}>
                  <a href="https://t.me/m_yakub" target="_blank" rel="noopener noreferrer" className={styles.mCircle} style={{ background: '#38B0E3' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </a>
                  <span>Telegram</span>
                </div>
                <div className={styles.messengerBox}>
                  <a href="mailto:info@dushanbesoft.tj" className={styles.mCircle} style={{ background: '#6460EC' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </a>
                  <span>Email</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={styles.rightCol}>
            <div className={styles.formHeader}>
              <div className={styles.formIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3DDC84" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.formTitleGroup}>
                <h3>Оставьте заявку</h3>
                <p>Мы свяжемся с вами для обсуждения деталей</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Имя</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" required />
                </div>
                <div className={styles.field}>
                  <label>Телефон</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+992 _ _ _ _ _ _ _ _ _" required />
                </div>
              </div>

              <div className={styles.field}>
                <label>Направление</label>
                <select name="direction" value={formData.direction} onChange={handleChange} required>
                  <option value="" disabled hidden>Выберите услугу</option>
                  <option value="Веб-разработка">Веб-разработка</option>
                  <option value="Мобильные приложения">Мобильные приложения</option>
                  <option value="CRM и автоматизация">CRM и автоматизация</option>
                  <option value="UI/UX Дизайн">UI/UX Дизайн</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Сообщение</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Расскажите о вашем проекте: задача, масштаб, сроки…"></textarea>
              </div>

              {status === 'success' && (
                <div style={{ color: '#3DDC84', fontSize: '14px', marginBottom: '10px' }}>
                  Заявка успешно отправлена!
                </div>
              )}
              {status === 'error' && (
                <div style={{ color: '#FF6B6B', fontSize: '14px', marginBottom: '10px' }}>
                  {errorMsg}
                </div>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50716 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="#F1F7FF"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
