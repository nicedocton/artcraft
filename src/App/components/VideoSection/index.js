import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Fancybox from './fancybox.js';
import './VideoSection.scss';
import videoBg from '../../assets/img/video.jpg';

const VIDEOS = [
	{
		image: '/images/video.jpg',
		url: 'https://youtu.be/fPO76Jlnz6c',
	},
	{
		image: '/images/video.jpg',
		url: 'https://youtu.be/VYOjWnS4cMY',
	},
	{
		image: '/images/video.jpg',
		url: 'https://youtu.be/SbPx5vymy4Q',
	},
	{
		image: '/images/video.jpg',
		url: 'https://youtu.be/2zToEPpFEN8',
	},
];

const VideoSection = () => {
	const { t } = useTranslation();
	let settings = {
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className='videoSection'>
			<div className='videoSection__container _container'>
				<div className='videoSection__header'>
					<div className='videoSection__subtitle subtitle'>
						{t('videoSection.subtitle')}
					</div>
					<div className='videoSection__title title'>
						{t('videoSection.title')}
					</div>
				</div>
				<Slider {...settings} className='videoSection__slider'>
					{VIDEOS.map((slide, index) => {
						return (
							<Fancybox options={{ infinite: false }} key={index}>
								<div
									key={index}
									className='videoSection__slide'
								>
									<a data-fancybox='gallery' href={slide.url}>
										<img src={videoBg} alt='' />
										<span></span>
									</a>
								</div>
							</Fancybox>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className='ourWorks__buttons-wrap'>
			<div className='_container'>
				<button className='slick-arrow slick-next' onClick={onClick}>
					<span></span>
				</button>
			</div>
		</div>
	);
};

const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className='ourWorks__buttons-wrap'>
			<div className='_container'>
				<button className='slick-arrow slick-prev' onClick={onClick}>
					<span></span>
				</button>
			</div>
		</div>
	);
};

export default VideoSection;
