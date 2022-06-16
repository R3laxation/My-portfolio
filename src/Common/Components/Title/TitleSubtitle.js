import React from 'react';
import s from './TitleSubtitle.module.scss';

export const TitleSubtitle = (props) => {
	return (
		<div className={s.titleWrapper}>
			<span className={s.title}>{props.title}</span>
			<h2 className={s.subtitle} style={{...props.color}}>{props.subtitle}</h2>
		</div>
	);
};

