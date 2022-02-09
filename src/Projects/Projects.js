import React from 'react';
import s from './Projects..module.css'
import sContainer from '../Common/Styles/Container.module.css'
import {Project} from './Project/Project';




export const Projects = () => {
	return (
		<div className={s.projectsBlock}>
			<div className={`${sContainer.container} ${s.projectsContainer}`}>
				<h2 className={s.title}>Projects</h2>
				<div className={s.projects}>
					<Project buttonName={'Show'} projectName={'projectName'} shortDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem!'}/>
					<Project buttonName={'Show'}
					         projectName={'projectName'}
					         shortDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
					      'Ab aliquid iusto maiores maxime perspiciatis quisquam ratione sed tempore veritatis voluptatibus.'}/>
				</div>
			</div>
		</div>
	);
};

