import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../Common/Styles/Container.module.css'
import {ContactsInput} from './ContactsInput/ContactsInput';



export const Contacts = () => {
	return (
		<div className={s.contactsBlock}>
			<div className={`${sContainer.container} ${s.contactsContainer}`}>
				<h2 className={s.title}>Contacts</h2>
					<form className={s.contactsForm}>
						<ContactsInput/>
						<ContactsInput/>
						<textarea className={s.contactsTextArea}></textarea>
					</form>
				<a className={s.button}>Send</a>
			</div>


		</div>
	);
};

