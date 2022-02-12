import React from 'react';
import { ReactSVG } from 'react-svg';
import './SocialBlock.scss';
import instagram from '../../assets/img/icons/instagram.svg';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import telegram from '../../assets/img/icons/telegram.svg';

const SocialBlock = () => {
	return (
		<div className='socials'>
			<a
				href='https://www.instagram.com/uz_artcrafts/'
				className='socials__link'
				rel='noopener noreferrer'
			>
				<ReactSVG src={instagram} />
			</a>
			<a
				href='https://www.instagram.com/uz_artcrafts/'
				className='socials__link'
				rel='noopener noreferrer'
			>
				<ReactSVG src={facebook} />
			</a>
			<a
				href='https://www.instagram.com/uz_artcrafts/'
				className='socials__link'
				rel='noopener noreferrer'
			>
				<ReactSVG src={youtube} />
			</a>
			<a
				href='https://www.instagram.com/uz_artcrafts/'
				className='socials__link'
				rel='noopener noreferrer'
			>
				<ReactSVG src={telegram} />
			</a>
		</div>
	);
};

export default SocialBlock;
