import React, { Fragment, useContext } from 'react';
import { MainContext } from './Context';
import s from './Chat.module.scss';
import cx from 'classnames';

const Telegram = () => {
    const { state, dispatch } = useContext(MainContext);

    const addAnswers = (e) => {
        console.log('value:', e.target.innerText);
        dispatch({ type: 'ADD_ANSWER', payload: { text: e.target.innerText, index: 0 } });
        dispatch({ type: 'GET_NEXT_STAGE' });
    };

    return (
        <div className={s.chat}>
            {console.log('context:', state)}
            <div className={s.messages}>
                {state.chat.map(item => {
                    {
                        console.log(':', item)
                    }
                    return (
                        <Fragment>
                            {item.message && item.message.text && <div className={s.message}>
                                <p className={s.text}>
                                    {item.message && item.message.text}
                                </p>
                            </div>}
                            {item.answer && item.answer.text &&
                            <div className={cx(s.message, s.answerMessage)}>
                                <p className={s.text}>
                                    {item.answer && item.answer.text}
                                </p>
                            </div>}
                        </Fragment>)
                })}
            </div>
            <div className={s.answerSection}>
                <div className={s.possibleAnswer}><p className={s.text} onClick={(e) => addAnswers(e)}>Я не хочу у вас
                    работать!</p></div>
                <div className={s.possibleAnswer}><p className={s.text}>Сколько ЗП дадите?</p></div>
                <div className={s.possibleAnswer}><p className={s.text}>Дашь мне свой номер?</p></div>
            </div>
        </div>
    );
}

export default Telegram;
