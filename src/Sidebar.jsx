import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import s from './Sidebar.module.scss';
import { Store } from "./store";

const Sidebar = () => {
    const { state, dispatch } = useContext(Store);
    return (
        <div className={s.sidebar}>
            {/*<div className={s.navigation}>*/}
            {/*<div className={s.hamburger}></div>*/}
            {/*<input className={s.search} type="text"/>*/}
            {/*</div>*/}
            <div className={s.user}>
                <div className={s.avatar}>
                    ES
                </div>
                <div className={s.info}>
                    <p className={s.name}>Оленька</p>
                    <p className={s.lastMessage}>{state.chat.length > 0 && state.chat[state.chat.length].message}</p>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
