import React from 'react';
import s from './Skills.module.css'
import sContainer from '../Common/Styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {TitleSubtitle} from '../Common/Components/Title/TitleSubtitle';
import react from './react-brands.svg'
import js from './js-brands.svg'
import axios from './axios-icon.svg'
import form from './wpforms-brands.svg'
import code from './code-solid.svg'
import git from './github-brands.svg'
import material from './material-ui-1.svg'
import book from './book-solid.svg'
import Fade from 'react-reveal/Fade';


export const Skills = () => {
	return (
		<div className={s.skillsBlock} id='Skills'>
			<div className={`${sContainer.container} ${s.skillsContainer}`}>
				<Fade bottom>
				<TitleSubtitle title={'What I Do?'} subtitle={'My skills'}/>
				<div className={s.skills}>
					<Skill title={'React /  Redux'} description={'\n' +
						'I have an experience in developing user interfaces using the React library'} icon={react}/>
					<Skill title={'JavaScript'} description={'\n' +
						'I know native JS, I continue to study and improve it'} icon={js}/>
					<Skill title={'Axios / REST API'} description={'Worked with requests to the server, typed them'} icon={axios}/>
					<Skill title={'Formik / Redux-form'} description={'Worked with libraries for storing user data and validating them'} icon={form}/>
					<Skill title={'HTML & CSS / SCSS'} description={'I have experience with work and continue to study HTML, CSS'} icon={code}/>
					<Skill title={'Git / Github'} description={'Worked with Github both alone and in a team'} icon={git}/>
					<Skill title={'BEM / Material UI'} description={'Worked with MUI on layouts, reassigned styles'} icon={material}/>
					<Skill title={'English language'} description={'My English level is Intermediate/Upper-Intermediate'} icon={book}/>
				</div>
				</Fade>
			</div>
		</div>
	);
};

