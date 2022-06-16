import React from 'react';
import s from './Nav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {
	return (
		<div className={s.nav}>
			<Link to='Main' activeClass={s.active} offset={1} spy={true} smooth={true} duration={1000}>Main</Link>
			<Link to='Skills' activeClass={s.active} offset={1} spy={true} smooth={true} duration={1000}>Skills</Link>
			<Link to='Projects' activeClass={s.active} offset={1} spy={true} smooth={true} duration={1000}>Projects</Link>
			<Link to="Footer" activeClass={s.active} offset={1} spy={true} smooth={true} duration={1000}>Contacts</Link>
		</div>
	);
};

