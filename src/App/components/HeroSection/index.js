import React from 'react';
import Slider from 'react-slick';
import './HeroSection.scss';
import hero from '../../assets/img/hero.jpg';
import hero2 from '../../assets/img/hero2.jpg';

const HERO = [
	{
		image: hero,
	},
	{
		image: hero2,
	},
];

const HeroSection = () => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className='hero' id='hero'>
			<div className='hero__container'>
				<Slider {...settings} className='hero__slider'>
					{HERO.map((slide, index) => {
						return (
							<div className='hero__slide' key={index}>
								<div className='hero__content'>
									<button className='hero__play' />
								</div>
								<div className='hero__image'>
									<img src={slide.image} alt='' />
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
		<div className='hero__buttons-wrap'>
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
		<div className='hero__buttons-wrap'>
			<div className='_container'>
				<button className='slick-arrow slick-prev' onClick={onClick}>
					<span></span>
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
