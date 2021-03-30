import React from 'react';
import style from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} /> )

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} dir={m.dir} />)

    let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    if(!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <div className={style.form}>
        <form onSubmit={props.handleSubmit}>
            <div className={style.button}>
                <Field component={Textarea} validate={[required, maxLength50]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    </div>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;