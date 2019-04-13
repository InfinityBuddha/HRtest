import React, { useContext } from 'react';
import { MainContext } from './Context';
import s from './Chat.module.scss';
import cx from 'classnames';

const Telegram = () => {
    const {state, dispatch} = useContext(MainContext);
    return (
        <div className={s.chat}>
            {console.log('context:', state, dispatch)}
            <div className={s.messages}>
                {state.messages.map(message =>
                    <div className={s.message}>
                        <p className={s.text}>
                            {message.text}
                        </p>
                    </div>
                )}
                <div className={cx(s.message, s.answerMessage)}>
                    <p className={s.text}>
                        Я не хочу у вас работать!
                    </p>
                </div>
            </div>
            <div className={s.answerSection}>
                <div className={s.possibleAnswer}><p className={s.text} onClick={() => dispatch({ type: 'ADD_MESSAGE'})}>Я не хочу у вас работать!</p></div>
                <div className={s.possibleAnswer}><p className={s.text}>Сколько ЗП дадите?</p></div>
                <div className={s.possibleAnswer}><p className={s.text}>Дашь мне свой номер?</p></div>
            </div>
        </div>
    );
}

export default Telegram;
