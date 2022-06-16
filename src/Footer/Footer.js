import React from 'react';
import s from './Foter.module.scss'
import {ReactComponent as Telegram} from './telegram-brands.svg'
import {ReactComponent as Github} from './github-brands.svg'
import {ReactComponent as Linked} from './linkedin-in-brands.svg'
import {ReactComponent as CodeWars} from './download-icon-codewars-1324440140703576726_0.svg'
import Fade from 'react-reveal/Fade';


export const Footer = () => {
    return (
        <div className={s.footerBlock} >
            <div className={s.footerContainer}>
                <Fade bottom>
                    <h2 className={s.title}>Pankratov Konstantin</h2>
                    <div className={s.socialIcons}>
                        <div className={s.socialIcon}>
                            <a href="https://t.me/memoriesAst" target="_blank"> <Telegram className={s.logo}/></a>
                        </div>
                        <div className={s.socialIcon}>
                            <a href="https://github.com/R3laxation" target="_blank"> <Github className={s.logo}/></a>
                        </div>
                        <div className={s.socialIcon}>
                            <a href="https://ru.linkedin.com/" target="_blank"><Linked className={s.logo}/></a>
                        </div>
                        <div className={s.socialIcon}>
                            <a href="https://www.codewars.com/users/JohnConstantine" target="_blank"> <CodeWars className={s.logo}/></a>
                        </div>
                    </div>
                    <span className={s.copyRights}>Copyright © 2021 Pankratov. All Rights Reserved.</span>
                </Fade>

            </div>


        </div>
    );
};

