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
					<Skill title={'React /  Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} icon={react}/>
					<Skill title={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={js}/>
					<Skill title={'Axios / REST API'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={axios}/>
					<Skill title={'Formik / Redux-form'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={form}/>
					<Skill title={'HTML & CSS / SCSS'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={code}/>
					<Skill title={'Git / Github'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={git}/>
					<Skill title={'BEM / Material UI'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={material}/>
					<Skill title={'English language'} description={'Lorem ipsum dolor sit amet, consectetur'} icon={book}/>
				</div>
				</Fade>
			</div>
		</div>
	);
};

