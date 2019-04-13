import React, { Component } from 'react';
import s from './MainContainer.module.scss';
import Telegram from "./Telegram";

class MainContainer extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <Telegram />
            </div>
        );
    }
}

export default MainContainer;
