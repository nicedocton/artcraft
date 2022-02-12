import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './ServivesSection.scss';
import slider1 from '../../assets/img/services/1.jpg';
import slider2 from '../../assets/img/services/2.jpg';

const SERVICES = [
	{
		image: slider1,
		text: 'Wall art',
	},
	{
		image: slider2,
		text: 'Painting glass',
	},
	{
		image: slider1,
		text: 'Office art',
	},
	{
		image: slider2,
		text: 'Ready-made accessories',
	},
	{
		image: slider2,
		text: 'Wall ar123123t',
	},
];

const ServivesSection = () => {
	const { t } = useTranslation();
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const [slideIndex, setSlideIndex] = useState(0);

	let settings = {
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		vertical: true,
		focusOnSelect: true,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 4000,
		beforeChange: (x, y) => {
			setSlideIndex(y++);
		},
	};
	let settings2 = {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		focusOnSelect: true,
		fade: true,
		pauseOnHover: true,
	};

	return (
		<div className='services'>
			<div className='services__container _container'>
				<div className='services__subtitle subtitle'>
					{t('services.subtitle')}
				</div>
				<div className='services__title title'>
					{t('services.title')}
				</div>
				<div className='services__slider-wrapper'>
					<div className='services__slider-dots'>
						{SERVICES.map((slide, index) => {
							if (index === slideIndex) {
								return (
									<button className='_active' key={index}>
										{index}
									</button>
								);
							} else {
								return <button key={index}>{index}</button>;
							}
						})}
					</div>
					<div className='services__slider-count'>
						<span>0{slideIndex + 1}</span>/0{SERVICES.length}
					</div>
					<Slider
						{...settings}
						className='slider-nav'
						asNavFor={nav2}
						ref={(slider1) => setNav1(slider1)}
					>
						{SERVICES.map((slide, index) => {
							return (
								<div key={index} className='servives__slide'>
									{slide.text}
								</div>
							);
						})}
					</Slider>
					<Slider
						className='slider-for'
						asNavFor={nav1}
						ref={(slider2) => setNav2(slider2)}
						{...settings2}
					>
						{SERVICES.map((slide, index) => {
							return (
								<div key={index} className='servives__slide'>
									<img src={slide.image} alt='' />
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ServivesSection;
