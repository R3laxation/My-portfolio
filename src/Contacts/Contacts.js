import React from 'react';
import s from './Contacts.module.scss'
import {ContactsInput} from './ContactsInput/ContactsInput';
import {TitleSubtitle} from '../Common/Components/Title/TitleSubtitle';
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';


export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id="Footer">
            <div className={s.container}>
                {/*<Fade bottom>*/}
                    <div className={s.contactsText}>
                        <TitleSubtitle subtitle={'Let\'s get in touch'}/>
                        <p className={s.text}>I enjoy discussing new projects and accept any challenges. Please share as much info, as
                            possible
                            so we can get the most out of our first catch-up.</p>
                        <h3>Living in:</h3>
                        <address>the Republic of Kazakhstan, Nur-Sultan(ex. Astana)</address>
                        <h3>Call:</h3>
                        <p>(+060) 444 434 444</p>
                    </div>
                    <div className={s.contactsData}>
                        <TitleSubtitle subtitle={'Estimate your Project?'}/>
                        {/*<Shake>*/}
                            <form className={s.contactsForm}>
                                <ContactsInput name={'What is Your Name?'}/>
                                <ContactsInput name={'Your Email Address'}/>
                                <label className={s.label}>How can I Help You?</label>
                                <textarea className={s.contactsTextArea}></textarea>
                                <button type={'submit'} className={s.btn}>Send
                                    <span></span><span></span><span></span><span></span>
                                </button>
                            </form>
                        {/*</Shake>*/}
                    </div>
                {/*</Fade>*/}
            </div>


        </div>
    )
        ;
};

