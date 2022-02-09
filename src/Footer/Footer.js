import React from 'react';
import s from './Footer.module.css'
import sContainer from '../Common/Styles/Container.module.css'
import {Icon} from './Icon/Icon';


export const Footer = () => {
	return (
		<div className={s.footerBlock}>
			<div className={`${sContainer.container} ${s.footerContainer}`}>
				<h2 className={s.title}>John Constantine</h2>
				<div className={s.socialNetworks}>
					<Icon/>
					<Icon/>
					<Icon/>
					<Icon/>
				</div>
				<span className={s.rights}>All rights reserved</span>
			</div>


		</div>
	);
};

