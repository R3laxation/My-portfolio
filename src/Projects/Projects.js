import React from 'react';
import s from './Projects..module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Project} from './Project/Project';
import {TitleSubtitle} from '../Common/Components/Title/TitleSubtitle';
import socialImage from '../Assets/images/What_is_your_social_networking_style.jpg';
import todoImage from '../Assets/images/to-do-list-190702.jpg';
import questionnaire  from '../Assets/images/Questionnaire--1200x900.png';
import pizzaImage  from '../Assets/images/tasty-pepperoni-pizza-with-mushrooms-and-olives_79782-1976.jpg';
import perfume  from '../Assets/images/Beauty-extra-still-slide-FTPZ-videoSixteenByNineJumbo1600.jpg';
import film  from '../Assets/images/film.jpg';
import googleKeep  from '../Assets/images/keep.jpg';
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
	const pizza = {
		backgroundImage: `url(${pizzaImage})`,
	};
	const fragrance = {
		backgroundImage: `url(${perfume})`,
	};
	const movie = {
		backgroundImage: `url(${film})`,
	};
	const keep = {
		backgroundImage: `url(${googleKeep})`,
	};
	return (
		<div className={s.projectsBlock} id='Projects'>
			<Fade bottom>
			<div className={`${sContainer.container} ${s.projectsContainer}`}>
				<TitleSubtitle title={'Projects'} subtitle={'Some of my projects'}/>
				<div className={s.projects}>
					<Project buttonName={'Show'}
							 projectTitle={'Todo List'}
							 description={'Student Todolist project based on Class components with Material UI lib.'}
							 style={todo} link={'https://github.com/R3laxation/todoList2021'}
					/>
					<Project buttonName={'Show'} projectTitle={'Google Keep clone'}
							 description={'Test task, building Google Keep Clone without Redux, use only Context'}
							 style={keep} link={'https://github.com/R3laxation/Google-Keep-Clone'}

					/>
					<Project buttonName={'Show'} projectTitle={'Social Network'}
					         description={'Student social-network project based on React class components'}
					         style={social} link={'https://r3laxation.github.io/Social-Network/#/'}
					/>
					<Project buttonName={'Show'}
					         projectTitle={'Questionnaire'}
					         description={'Student project, elaborated with team and Git technologies'}
					         style={quest} link={'https://yurakholoimov.github.io/cards-front-2.0/'}
					/>
					<Project buttonName={'Show'}
							 projectTitle={'React-Pizza'}
							 description={'Student project Pizza-shop with mocApi API'}
							 style={pizza} link={'https://r3laxation.github.io/React-Pizza/'}
					/>
					<Project buttonName={'Show'}
							 projectTitle={'Fragrance Shop'}
							 description={'Student project Fragrance shop with stripe and commerce lib-es'}
							 style={fragrance} link={'https://r3laxation.github.io/Fragrance-Shop/'}
					/>
					<Project buttonName={'Show'}
							 projectTitle={'Movie-search'}
							 description={'Simple student project Movie-search with omdbapi.com API'}
							 style={movie} link={'https://r3laxation.github.io/Movie-Search/'}
					/>
				</div>
			</div>
			</Fade>
		</div>
	);
};

