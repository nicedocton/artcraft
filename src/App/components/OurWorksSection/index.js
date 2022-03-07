import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './OurWorksSection.scss';
import slide1 from '../../assets/img/ourWorks/1.jpg';
import slide2 from '../../assets/img/ourWorks/2.jpg';

const OUR_WORKS = [
	{
		image: slide1,
	},
	{
		image: slide2,
	},
	{
		image: slide1,
	},
	{
		image: slide2,
	},
	{
		image: slide1,
	},
];

const OurWorksSection = () => {
	const { t } = useTranslation();
	const [slideIndex, setSlideIndex] = useState(0);

	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 0,
		focusOnSelect: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		beforeChange: (x, y) => {
			setSlideIndex(y++);
		},
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					centerMode: false,
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
		<div className='ourWorks'>
			<div className='ourWorks__container _container'>
				<h2 className='ourWorks__title title'>{t('ourWorks.title')}</h2>

				<Slider {...settings} className='ourWorks__slider'>
					{OUR_WORKS.map((slide, index) => {
						return (
							<div key={index} className='ourWorks__slide'>
								<img src={slide.image} alt='' />
							</div>
						);
					})}
				</Slider>
				<div className='ourWorks__slider-count'>
					<span>0{slideIndex + 1}</span>/0{OUR_WORKS.length}
				</div>
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

export default OurWorksSection;
