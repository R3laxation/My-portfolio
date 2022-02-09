import React from 'react';
import s from './OptionalWork.module.css'
import sContainer from '../Common/Styles/Container.module.css'

export const OptionalWork = () => {
	return (
		<div className={s.optionalWorkBlock}>
			<div className={`${sContainer.container} ${s.optionalContainer}`}>
				<h2 className={s.title}>Consider options for remote work</h2>
				<a className={s.button}>Hire me</a>
			</div>
		</div>
	);
};

