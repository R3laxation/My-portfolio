import React from 'react';
import s from './OptionalWork.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import Fade from 'react-reveal/Fade';

export const OptionalWork = () => {
    return (
        <div className={s.optionalWorkBlock}>
            <Fade bottom>
                <div className={`${sContainer.container} ${s.optionalContainer}`}>
                    <h2 className={s.title}>Consider options for remote work</h2>
                    <a className={s.btn}>Hire Me!

                    </a>
                </div>
            </Fade>
        </div>
    );
};

