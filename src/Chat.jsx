import React, { Fragment, useContext } from 'react';
import { Store } from './store';
import s from './Chat.module.scss';
import cx from 'classnames';

const Telegram = () => {
    const { state, dispatch } = useContext(Store);

    const addAnswers = (e) => {
        console.log('value:', e.target.innerText, e.target.dataset.index);
        dispatch({ type: 'ADD_ANSWER', payload: { text: e.target.innerText, index: 0 } });
        dispatch({ type: 'GET_NEXT_STAGE', payload: { index: e.target.dataset.index } });
    };

    return (
        <div className={s.chat}>
            {console.log('state:', state)}
            <div className={s.messages}>
                {state.chat.map(item => {
                    return (
                        <Fragment>
                            {item.incomingMessage && item.incomingMessage.text && <div className={s.message}>
                                <p className={s.text}>
                                    {item.incomingMessage.text}
                                </p>
                            </div>}
                            {item.outgoingMessage && item.outgoingMessage.text &&
                            <div className={cx(s.message, s.answerMessage)}>
                                <p className={s.text}>
                                    {item.outgoingMessage.text}
                                </p>
                            </div>}
                        </Fragment>)
                })}
            </div>
            <div className={s.answerSection}>
                {state.possibleAnswers.map(answer => {
                    return <div className={s.possibleAnswer}><p className={s.text} data-index={answer.index} onClick={(e) => addAnswers(e)}>{answer.text}</p></div>
                })}
            </div>
        </div>
    );
}

export default Telegram;
