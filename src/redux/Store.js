import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Лена", img: "https://user30887.clients-cdnnow.ru/uploads/5f42be1ca1de1006829794.jpg"},
                {id: 2, name: "Мама", img: "https://n1s1.hsmedia.ru/94/71/68/947168a6debcf7ab3499d0bd54257d87/665x495_0xac120003_4522973461562655669.jpg"},
                {id: 3, name: "Папа", img: "https://icdn.lenta.ru/images/2020/04/15/09/20200415090904048/pic_955be8047f0367a7eae80b18b6285196.jpg"},
                {id: 4, name: "Дима", img: "https://doshkolniki.org/images/vospitanie/ekologicheskoe/klassifikaciya-zhivotnyx-1901.jpg"},
                {id: 5, name: "Даня", img: "https://doshkolniki.org/images/vospitanie/ekologicheskoe/klassifikaciya-zhivotnyx-1901.jpg"},
                {id: 6, name: "Бабушка", img: "https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/08/23/18/4065778/a5b6fad1b9960c3a9563f90a01c80af5588cf1c3.jpg"}
            ],
            messages: [
                {id: 1, message: "Hi!", dir: "in"},
                {id: 2, message: "Yo", dir: "out"},
                {id: 3, message: "It was nice to meet you=)", dir: "in"},
                {id: 4, message: "Good day!", dir: "out"},
                {id: 5, message: "Wasup?", dir: "in"}
            ],
            newMessageBody: 'Hello, my friend!'
        },

        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", likesCount: 12},
                {id: 2, message: "It's my first post=)", likesCount: 11}
            ],
            newPostText: 'Hello world!'
        },

        sidebar: {}

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};


export default store;

window.store=store