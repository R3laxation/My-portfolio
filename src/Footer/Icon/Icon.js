import React from 'react';
import s from './Icon.module.css'
import {ReactComponent as Logo} from '../telegram-brands.svg'

export const Icon = (props) => {
	return (
		<div className={s.icon}>
				<Logo className={s.logo}/>
		</div>
	);
};

