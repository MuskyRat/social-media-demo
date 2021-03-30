import React from 'react';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css';
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = (props) => {
    return <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                {/*<MyPostsContainer store={props.store} />*/}
                <MyPostsContainer />
            </div>
}

export default Profile;