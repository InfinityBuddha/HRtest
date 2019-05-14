import React, { useContext } from 'react';
import s from './MainContainer.module.scss';
import Telegram from "./Telegram";
import { INIT_ROUND, Store } from "./store";

class MainContainer extends React.Component {
    static contextType = Store;
    componentDidMount() {
        this.context.dispatch({ type: INIT_ROUND });
    }

    render() {
        return (
            <div className={s.wrapper}>
                <Telegram />
            </div>
        );
    }
}

export default MainContainer;
