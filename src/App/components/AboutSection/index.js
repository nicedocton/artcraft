import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialBlock from '../SocialBlock';
import './AboutSection.scss';
import aboutBg from '../../assets/img/about.png';

const AboutSection = () => {
	const { t } = useTranslation();
	return (
		<div className='about' id='about'>
			<div className='about__container'>
				<div className='about__content'>
					<div className='about__image'>
						<img src={aboutBg} alt='' />
					</div>
					<div className='about__info'>
						<div>
							<div className='about__title title'>
								{t('about.title')}
							</div>
							<div className='about__text'>{t('about.text')}</div>
							<div className='about__actions'>
								<a
									href='https://www.instagram.com/uz_artcrafts/'
									className='about__btn'
									target='__blank'
									rel='noopener noreferrer'
								>
									Follow to: <span>@uz_artcrafts</span>
								</a>
								<SocialBlock />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
