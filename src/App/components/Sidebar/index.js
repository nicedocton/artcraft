import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './Sidebar.scss';

const Sidebar = ({ isOpen, toggle }) => {
	const { t } = useTranslation();

	return (
		<aside className={`sidebar ${isOpen ? 'isOpen' : ''}`} onClick={toggle}>
			<div className='sidebarContainer'>
				<ul className='sidebar__menu'>
					<li>
						<Link
							to='about'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.about')}
						</Link>
					</li>
					<li>
						<Link
							to='features'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.features')}
						</Link>
					</li>
					<li>
						<Link
							to='services'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.services')}
						</Link>
					</li>
					<li>
						<Link
							to='contacts'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.contacts')}
						</Link>
					</li>
				</ul>
				<div className='sidebar__info'>
					<div className='sidebar__info-adress'>
						<a href='tel:+998903210044'>+998 90 321 00 44</a>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
