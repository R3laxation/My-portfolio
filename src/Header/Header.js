import React from 'react';
import s from './Header.module.scss'
import {Nav} from './Nav/Nav';
import Zoom from 'react-reveal/Zoom';
import {BurgerNav} from './BurgerNav/BurgerNav';

export const Header = () => {
    return (
        <Zoom>
            <div className={s.header}>
                <Nav/>
                <BurgerNav/>
            </div>
        </Zoom>
    );
};

