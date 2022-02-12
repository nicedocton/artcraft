import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactSection.scss';
import location from '../../assets/img/location.svg';
import phone from '../../assets/img/phone.svg';
import mail from '../../assets/img/mail.svg';

const ContactSection = () => {
	const { t } = useTranslation();
	return (
		<div className='contacts'>
			<div className='contacts__container _container'>
				<div className='contacts__header'>
					<div className='contacts__subtitle subtitle'>
						{t('contacts.subtitle')}
					</div>
					<div className='contacts__title title'>
						{t('contacts.title')}
					</div>
				</div>
				<div className='contacts__map'>
					<iframe
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Aa05917f98f8004676ad879970c390611a3a8d73422164439eeec305e7eeb1c81&amp;source=constructor'
						title='Art Craft'
						width='100%'
						height='400'
						frameBorder='0'
						scroll='false'
					></iframe>
				</div>
				<div className='contacts__info'>
					<div className='contacts__col'>
						<div className='contacts__info-icon'>
							<img src={location} alt='' />
						</div>
						<div className='contacts__info-head'>
							{t('contacts.address')}
						</div>
						<div className='contacts__info-text'>
							<p>{t('contacts.addressText')}</p>
						</div>
					</div>
					<div className='contacts__col'>
						<div className='contacts__info-icon'>
							<img src={phone} alt='' />
						</div>
						<div className='contacts__info-head'>
							{t('contacts.phone')}
						</div>
						<div className='contacts__info-text'>
							<p>
								<a href='tel:+998935330044'>
									+998 93 533 00 44
								</a>
							</p>
							<p>
								<a href='tel:+998903210044'>
									+998 90 321 00 44
								</a>
							</p>
						</div>
					</div>
					<div className='contacts__col'>
						<div className='contacts__info-icon'>
							<img src={mail} alt='' />
						</div>
						<div className='contacts__info-head'>
							{t('contacts.email')}
						</div>
						<div className='contacts__info-text'>
							<p>
								<a href='mailto:artcraftuz@gmail.com'>
									artcraftuz@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
