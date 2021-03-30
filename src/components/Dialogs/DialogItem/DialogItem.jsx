import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return(
        <div className={style.dialog}>
            <NavLink to={path}><img className={style.img} src={props.img} />{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;