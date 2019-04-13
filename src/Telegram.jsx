import React from 'react';
import Chat from './Chat';
import s from './Telegram.module.scss';
import Sidebar from "./Sidebar";

const Telegram = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1 className={s.title}>Telegram</h1>
            </div>
            <div className={s.workplaceWrapper}>
                <Sidebar/>
                <Chat />
            </div>
        </div>
    );
}

export default Telegram;
