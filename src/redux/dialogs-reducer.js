const SEND_MESSAGE='SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "USER_1", img: "https://user30887.clients-cdnnow.ru/uploads/5f42be1ca1de1006829794.jpg"},
        {id: 2, name: "USER_2", img: "https://n1s1.hsmedia.ru/94/71/68/947168a6debcf7ab3499d0bd54257d87/665x495_0xac120003_4522973461562655669.jpg"},
        {id: 3, name: "USER_3", img: "https://icdn.lenta.ru/images/2020/04/15/09/20200415090904048/pic_955be8047f0367a7eae80b18b6285196.jpg"},
        {id: 4, name: "USER_4", img: "https://doshkolniki.org/images/vospitanie/ekologicheskoe/klassifikaciya-zhivotnyx-1901.jpg"},
        {id: 5, name: "USER_5", img: "https://doshkolniki.org/images/vospitanie/ekologicheskoe/klassifikaciya-zhivotnyx-1901.jpg"},
        {id: 6, name: "USER_6", img: "https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/08/23/18/4065778/a5b6fad1b9960c3a9563f90a01c80af5588cf1c3.jpg"}
    ],
    messages: [
        {id: 1, message: "Hi!", dir: "in"},
        {id: 2, message: "Yo", dir: "out"},
        {id: 3, message: "It was nice to meet you=)", dir: "in"},
        {id: 4, message: "Good day!", dir: "out"},
        {id: 5, message: "Wasup?", dir: "in"}
    ]
};

const dialogsReducer = (state = initialState, action) => {


    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newMessageBody,
                dir: "out"
            };
            return {
                ...state,
                messages: [ ...state.messages, newMessage]
            };
        }

        default:
            return state;
    }

}

export const addMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;