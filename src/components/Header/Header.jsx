import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import Logo from '../../assets/images/SM.png'

const Header = (props) => {
    return <header className={style.header}>
        <img src={Logo} />

        <div className={style.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;