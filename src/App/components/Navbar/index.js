import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Language from '../Language';
import './Navbar.scss';
import logo from '../../assets/img/logo.png';

const Navbar = ({ isOpen, toggle }) => {
	const { t } = useTranslation();
	const [scrollNav, setScrollNav] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	return (
		<nav className={`navbar ${!isOpen && scrollNav ? '_scroll' : ''}`}>
			<div className='navbar__container _container'>
				<div className='navbar__logo logo' onClick={toggleHome}>
					<img src={logo} alt='' />
				</div>
				<div
					className={`mobileIcon ${isOpen ? '_active' : ''}`}
					onClick={toggle}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className='navbar__menu menu'>
					<li>
						<Link
							to='about'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.about')}
						</Link>
					</li>
					<li>
						<Link
							to='projects'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.features')}
						</Link>
					</li>
					<li>
						<Link
							to='projects'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.services')}
						</Link>
					</li>
					<li>
						<Link
							to='contacts'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.contacts')}
						</Link>
					</li>
				</ul>
				<div className='navbar__action'>
					<Language />
					<div className='navbar__info info'>
						<div className='info__adress'>
							<a href='tel:+998935330044'>+998 93 533 00 44</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
