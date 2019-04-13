import React from 'react';
import Chat from './Chat';
import s from './Telegram.module.scss';

const Telegram = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1 className={s.title}>Telegram</h1>
            </div>
            <div className={s.workplaceWrapper}>
                <div className={s.sidebar}>
                    <div className={s.navigation}>
                        <div className={s.hamburger}></div>
                        <input className={s.search} type="text"/>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            ES
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>Eva Summer</p>
                            <p className={s.lastMessage}>Вам назначено собеседование</p>
                        </div>
                    </div>
                </div>
                <Chat />
            </div>
        </div>
    );
}

export default Telegram;
