import React, { Fragment, useContext } from 'react';
import { Store } from './store';
import s from './Chat.module.scss';
import cx from 'classnames';

const Telegram = () => {
    const { state, dispatch } = useContext(Store);

    const addAnswers = (e) => {
        dispatch({ type: 'ADD_ANSWER', payload: { message: e.target.innerText, index: +e.target.dataset.index, type: 'outgoing' } });
        dispatch({ type: 'GET_NEXT_STAGE', payload: { index: e.target.dataset.index } });
    };

    return (
        <div className={s.chat}>
            {console.log('state:', state)}
            <div className={s.messages}>
                {state.chat2.map(item => {
                    return (
                        <Fragment>
                            {item.type === 'incoming' && <div className={s.message}>
                                <p className={s.text}>
                                    {item.message}
                                </p>
                            </div>}
                            {item.type === 'outgoing' &&
                            <div className={cx(s.message, s.answerMessage)}>
                                <p className={s.text}>
                                    {item.message}
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
