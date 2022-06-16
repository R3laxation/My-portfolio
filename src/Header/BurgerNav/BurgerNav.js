import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export const BurgerNav = () => {
	let [menuIsOpen, setMenuIsOpen] = useState(false);
	const onBurgerButtonClick = () =>{
		setMenuIsOpen(!menuIsOpen)
	}

	return (
		<div className={s.burgerNav}>
			<div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
				<Link to='Main' activeClass={s.active} offset={1} spy={true} smooth={true} duration={500}>Main</Link>
				<Link to='Skills' activeClass={s.active} offset={1} spy={true} smooth={true} duration={500}>Skills</Link>
				<Link to='Projects' activeClass={s.active} offset={1} spy={true} smooth={true} duration={500}>Projects</Link>
				<Link to="Footer" activeClass={s.active} offset={1} spy={true} smooth={true} duration={500}>Contacts</Link>
			</div>
			<div onClick={onBurgerButtonClick} className={s.burgerButtons}>
				<div className={s.burgerBtn}></div>
				<div className={s.burgerBtn}></div>
				<div className={s.burgerBtn}></div>
			</div>
		</div>
	);
};

