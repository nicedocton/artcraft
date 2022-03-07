import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './FeaturesSection.scss';
import work1 from '../../assets/img/ourWorks/1.jpg';
import work2 from '../../assets/img/ourWorks/2.jpg';

const FEATURES = [
	{
		image: work1,
	},
	{
		image: work2,
	},
	{
		image: work1,
	},
	{
		image: work2,
	},
	{
		image: work1,
	},
	{
		image: work2,
	},
];

const FeaturesSection = () => {
	const { t } = useTranslation();
	let settings = {
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				},
			},
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
		<div className='features' id='features'>
			<div className='features__container _container'>
				<div className='features__header'>
					<div className='features__subtitle subtitle'>
						{t('features.subtitle')}
					</div>
					<div className='features__title title'>
						{t('features.title')}
					</div>
				</div>
				<Slider {...settings} className='features__slider'>
					{FEATURES.map((slide, index) => {
						return (
							<div key={index} className='features__slide'>
								<img src={slide.image} alt='' />
							</div>
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

export default FeaturesSection;
