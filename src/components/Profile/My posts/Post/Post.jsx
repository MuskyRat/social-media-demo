import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    
    return (
                <div className={style.item}>
                    <img src='https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_5885988bd.jpg' />
                    {props.message}
                    <div>
                        <span>Like {props.likesCount}</span>
                    </div>
                </div>
    )
}

export default Post;