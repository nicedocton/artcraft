import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { ReactSVG } from 'react-svg';
import './BenefitsSection.scss';
import penTool from '../../assets/img/icons/penTool.svg';
import clock from '../../assets/img/icons/clock.svg';
import chrome from '../../assets/img/icons/chrome.svg';

const BENEFITS = [
	{
		imageUrl: `${penTool}`,
		text: 'Роспись на различных поверхностях',
	},
	{
		imageUrl: `${clock}`,
		text: 'Скорость нанесения до 10 м2 в час',
	},
	{
		imageUrl: `${chrome}`,
		text: 'Помощь дизайнера, при необходимости',
	},
];

const BenefitsSection = () => {
	const { t } = useTranslation();
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className='benefits'>
			<div className='benefits__container _container'>
				<div className='benefits__title title'>
					{t('benefits.title')}
				</div>
				<Slider {...settings} className='benefits__slider'>
					{BENEFITS.map((slide, index) => {
						return (
							<div
								className='benefits__slide'
								style={{ width: 435 }}
								key={index}
							>
								<div className='benefits__icon'>
									<ReactSVG src={slide.imageUrl} />
								</div>
								<div className='benefits__text'>
									{slide.text}
								</div>
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

export default BenefitsSection;
