import React from 'react';
import s from './Projects..module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Project} from './Project/Project';
import {TitleSubtitle} from '../Common/Components/Title/TitleSubtitle';
import socialImage from '../Assets/images/What_is_your_social_networking_style.jpg';
import todoImage from '../Assets/images/to-do-list-190702.jpg';
import questionnaire  from '../Assets/images/Questionnaire--1200x900.png';
import Fade from 'react-reveal/Fade';



export const Projects = () => {

	const social = {
		backgroundImage: `url(${socialImage})`,
	};
	const todo = {
		backgroundImage: `url(${todoImage})`,
	};
	const quest = {
		backgroundImage: `url(${questionnaire})`,
	};

	return (
		<div className={s.projectsBlock} id='Projects'>
			<Fade bottom>
			<div className={`${sContainer.container} ${s.projectsContainer}`}>
				<TitleSubtitle title={'Projects'} subtitle={'Some of my projects'}/>
				<div className={s.projects}>
					<Project buttonName={'Show'} projectTitle={'Social Network'}
					         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem!'}
					         style={social}

					/>
					<Project buttonName={'Show'}
					         projectTitle={'Todo List'}
					         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
					      'Ab aliquid iusto maiores maxime perspiciatis quisquam ratione sed tempore veritatis voluptatibus.'}
					         style={todo}
					/>
					<Project buttonName={'Show'}
					         projectTitle={'Questionnaire'}
					         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
					         'Ab aliquid iusto maiores maxime perspiciatis quisquam ratione sed tempore veritatis voluptatibus.'}
					         style={quest} link={'https://yurakholoimov.github.io/cards-front-2.0/'}
					/>
				</div>
			</div>
			</Fade>
		</div>
	);
};

