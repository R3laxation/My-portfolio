import React from 'react';
import s from './Skills.module.css'
import sContainer from '../Common/Styles/Container.module.css'
import {Skill} from './Skill/Skill';


export const Skills = () => {
	return (
		<div className={s.skillsBlock}>
			<div className={`${sContainer.container} ${s.skillsContainer}`}>
				<h2 className={s.title}>Skills</h2>
				<div className={s.skills}>
					<Skill title={'Js'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
					<Skill title={'Css'} description={'Lorem ipsum dolor sit amet, consectetur'}/>
				</div>
			</div>
		</div>
	);
};

