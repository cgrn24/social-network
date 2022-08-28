import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css'

const DialogItem = (props: any) => {
    return (
        <div className={s.dialogs + '' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Dialogs = () => {
    // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    // let messagesElements = state.messages.map(m => <Message message={m.message} />)
    // let newMessageBody = state.newMessageBody

    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())

    // }

    // let onNewMessageChange = (e) => {
    //     let body = e.target.value
    //     props.store.dispatch(updateNewMessageBodyCreator(body))

    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='User1' id='1'/>
                <DialogItem name='User2' id='2'/>
                <DialogItem name='User3' id='3'/>
                <DialogItem name='User4' id='4'/>
            </div>
            <div className={s.messages}>
                <div>Не ну а хуле</div>
                <div>
                    <div><textarea placeholder='Enter your message'></textarea></div>
                    <div><button>Send</button></div>
                </div>
            </div>
        </div>
    )
}