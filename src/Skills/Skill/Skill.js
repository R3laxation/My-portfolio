import React from 'react';
import s from './Skill.module.scss'



export const Skill = (props) => {
	return (
		<div className={s.skill}>
			<div className={s.icon}>
				<img src={props.icon} alt="react"/>
			</div>
			<div className={s.skillsInfo}>
				<h3 className={s.skillTitle}>{props.title}</h3>
				<span className={s.description}>{props.description}</span>
			</div>
		</div>
	);
};

