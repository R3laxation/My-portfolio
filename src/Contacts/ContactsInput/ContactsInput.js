import React from 'react';
import s from './ContactsInput.module.scss'

export const ContactsInput = (props) => {
	return (
		<>
			<label className={s.label}>{props.name} </label>
			<input className={s.input} type="text" />
		</>



	);
};

