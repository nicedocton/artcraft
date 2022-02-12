import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';
import AboutSection from './components/AboutSection';
import OurWorksSection from './components/OurWorksSection';
import BenefitsSection from './components/BenefitsSection';
import ServivesSection from './components/ServivesSection';
import FeaturesSection from './components/FeaturesSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import AOS from 'aos';
import './scss/App.scss';
import 'aos/dist/aos.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`wrapper ${isOpen ? 'isOpen' : ''}`}>
			<Navbar isOpen={isOpen} toggle={toggle} />
			<main className='main'>
				<HeroSection />
				<AboutSection />
				<OurWorksSection />
				<BenefitsSection />
				<ServivesSection />
				<FeaturesSection />
				<VideoSection />
				<ContactSection />
			</main>
			<FooterSection />
		</div>
	);
}

export default App;
