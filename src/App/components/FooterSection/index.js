import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import SocialBlock from '../SocialBlock';
import './FooterSection.scss';
import logo from '../../assets/img/logo.png';

const FooterSection = () => {
	const { t } = useTranslation();
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<footer className='footer' id='contacts'>
			<div
				className='footer__container _container'
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<div className='footer__col'>
					<div className='footer__copy'>
						© {new Date().getFullYear()}. Art Craft.{' '}
						<p>{t('footer.copy')}</p>
					</div>
				</div>
				<div className='footer__col'>
					<div className='footer__logo' onClick={toggleHome}>
						<img src={logo} alt='' />
					</div>
				</div>
				<div className='footer__col'>
					<div className='footer__info'>
						<SocialBlock />
						<p>
							Developed by{' '}
							<a
								target='_blank'
								href='https://t.me/nicedocton'
								rel='noopener noreferrer'
							>
								CoDesign studio
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
