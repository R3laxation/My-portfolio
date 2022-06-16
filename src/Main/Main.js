import React from 'react';
import s from './Main.module.scss'
import {Particle} from './Particle';
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import { Link, animateScroll as scroll } from "react-scroll";

export const Main = () => {
    return (

        <div className={s.mainBlock} id='Main'>
            <Particle/>
            <Zoom>
                <div className={s.container}>
                    <div className={s.intro}>
                        <h1>Hi, I am Pankratov Konstantin</h1>
                        {/*<h1>Frontend Developer</h1>*/}
                        <ReactTypingEffect className={s.animatedText} eraseDelay={500} typingDelay={1000}
                            text='Frontend Developer'
                        />
                        <span>based in Nur-Sultan(ex. Astana)</span>
                        <span></span>
                        <div className={s.buttons}>
                            <Link className={`${s.btn} ${s.dark}`} to='Projects' activeClass={s.active} offset={1} spy={true} smooth={true} duration={1000}>View My Works
                                <span></span><span></span><span></span><span></span>
                            </Link>
                            <Link className={`${s.btn} ${s.link}`} to="Footer" activeClass={s.active} offset={1} spy={true} smooth={true} duration={1000}>Contact me</Link>
                        </div>
                    </div>
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <div className={s.photo}>
                            <div className={s.image}></div>
                        </div>
                    </Tilt>

                </div>
            </Zoom>
        </div>

    );
};

