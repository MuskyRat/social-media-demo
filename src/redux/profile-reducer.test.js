import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: "Hi! How are you?", likesCount: 12},
        {id: 2, message: "It's my first post=)", likesCount: 11}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("Hello, world!!!")
    let newState = profileReducer(state,action);
    expect (newState.posts.length).toBe(3)

});

test('message of the new post should be correct', () => {
    let action = addPostActionCreator("Hello, world!!!")
    let newState = profileReducer(state,action);
    expect (newState.posts[2].message).toBe("Hello, world!!!")

});

test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action);
    expect (newState.posts.length).toBe(1)

});

test('after deleting length of messages shouldnt be decremented if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state,action);
    expect (newState.posts.length).toBe(2)

});