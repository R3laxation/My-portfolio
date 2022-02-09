import React from 'react';
import s from './Project.module.css'


export const Project = (props) => {
	return (
		<div className={s.project}>
			<div className={s.imageContainer}>
				<img src="" alt=""/>
				<a className={s.button}>{props.buttonName}</a>
			</div>
			<h3>{props.projectName}</h3>
			<span>{props.shortDescr}</span>
		</div>
	);
};

