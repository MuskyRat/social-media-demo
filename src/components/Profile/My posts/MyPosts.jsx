import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo( (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return <div className={style.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={Textarea} placeholder="Enter your post"
            validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;