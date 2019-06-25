import React, { Fragment, useContext } from 'react';
import { Store, ADD_ANSWER, GET_NEXT_STAGE, ROUND_OVER, INCREMENT_STAGE } from './store';
import s from './Chat.module.scss';
import cx from 'classnames';

const Telegram = () => {
    const { state, dispatch } = useContext(Store);

    /**
     * Добавление ответов во время раунда
     * @param e
     */
    const addAnswers = (e) => {
        dispatch({
            type: INCREMENT_STAGE
        });
        dispatch({
            type: ADD_ANSWER,
            payload: { message: e.target.innerText, index: +e.target.dataset.index, type: 'outgoing' }
        });
        dispatch({ type: GET_NEXT_STAGE, payload: { index: e.target.dataset.index } });
    };

    /**
     * Завершение текущего раунда и переход к следующему
     */
    const completeRound = () => {
        dispatch({ type: ROUND_OVER });
    };

    /**
     * Старт текущего раунда
     */
    const startRound = () => {
        dispatch({
            type: INCREMENT_STAGE
        });
        dispatch({ type: GET_NEXT_STAGE, payload: { index: 0 } });
    };

    return (
        <div className={s.chat}>
            <div className={s.messages}>
                {console.log('state:', state)}
                {state.chat && state.chat.map(item => {
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
                {state.possibleAnswers && state.possibleAnswers.map(answer => {
                    if (answer.type === 'round_over') {
                        return (
                            <div className={s.possibleAnswer}>
                                <p className={s.text} onClick={(e) => completeRound(e)}>{answer.text}</p>
                            </div>)
                    }

                    return <div className={s.possibleAnswer}><p className={s.text} data-index={answer.index}
                                                                onClick={(e) => addAnswers(e)}>{answer.text}</p></div>
                })}
                {state.stage === 0 &&
                (<div className={s.possibleAnswer}
                      onClick={(e) => startRound(e)}>
                    <p className={s.text}>Начать раунд</p>
                </div>)}
            </div>
        </div>
    )
};

export default Telegram;
