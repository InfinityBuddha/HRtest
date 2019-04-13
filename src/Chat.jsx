import React from 'react';
import s from './Chat.module.scss';
import cx from 'classnames';

const Telegram = () => {
    return (
        <div className={s.chat}>
            <div className={s.messages}>
                <div className={s.message}>
                    <p className={s.text}>
                        Как поиски продвигаются? У вас резюме такое прикольное, думала, вы нашли работу с тех пор, как мы
                        общались, поэтому ничего не писала)
                    </p>
                </div>
                <div className={cx(s.message, s.answerMessage)}>
                    <p className={s.text}>
                        Я не хочу у вас работать!
                    </p>
                </div>
            </div>
            <div className={s.answerSection}>
                <div className={s.answer}><p className={s.text}>Я не хочу у вас работать!</p></div>
                <div className={s.answer}><p className={s.text}>Сколько ЗП дадите?</p></div>
                <div className={s.answer}><p className={s.text}>Дашь мне свой номер?</p></div>
            </div>
        </div>
    );
}

export default Telegram;
