import react from 'react';
import style from './Message.module.css';

const Message = (props) => {

    if (props.dir=="in") {

        return (
            <div className={style.in}>{props.message}</div>
        )
    }

    else{
        return (
            <div className={style.out}>{props.message}</div>
        )
    }
};

export default Message;