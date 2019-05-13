import React from 'react';
import s from './MainContainer.module.scss';
import Telegram from "./Telegram";

const MainContainer = () => {
    return (
        <div className={s.wrapper}>
            <Telegram />
        </div>
    );
}

export default MainContainer;
