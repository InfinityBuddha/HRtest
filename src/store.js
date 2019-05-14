import { createContext, useReducer } from "react";
import React from "react";

export const ROUND_OVER = 'ROUND_OVER';
export const INIT_ROUND = 'INIT_ROUND';
export const ADD_ANSWER = 'ADD_ANSWER';
export const GET_NEXT_STAGE = 'GET_NEXT_STAGE';

const initialState = {
    stage: 0,
    chat: [{ message: 'Добрый день. Начнем нашу игру?', type: 'incoming' }],
    answers: [],
    possibleAnswers: [
        { text: 'Я не хочу у вас работать!', index: 0 },
        { text: 'Сколько ЗП дадите?', index: 1 },
        { text: 'Дашь мне свой номер?', index: 2 }]
};

const stages = [
    {
        messages: [
            { message: 'Добрый день. Начнем нашу игру?', type: 'incoming' },
        ],
        possibleAnswers: [
            { text: 'Я не хочу у вас работать!', index: 0 },
            { text: 'Сколько ЗП дадите?', index: 1 },
            { text: 'Дашь мне свой номер?', index: 2 }]
    },
    {
        messages: [
            { message: 'Ну и пошел ты на хер!', type: 'incoming' },
            { message: 'Да прибудет с тобой сила.', type: 'incoming' },
            { message: 'Я думала мы с тобой друзья.', type: 'incoming' }
        ]
    },
    {
        messages: [
            { message: 'Как дела брат?', type: 'incoming' },
            { message: 'Твоя машина моя машина', type: 'incoming' },
            { message: 'Есть 1000р в долг до завтра?', type: 'incoming' }
        ],
        possibleAnswers: [
            { text: 'Спаси и сохрани.', index: 0 },
            { text: 'Мне нравится малиновый чизкейк.', index: 1 },
            { text: 'Хочу 150к в неделю.', index: 2 }
        ]
    },
    {
        messages: [
            { message: 'А я нет', type: 'incoming' },
            { message: 'Если хочу то буду', type: 'incoming' },
            { message: 'Хочу завтрак на обед', type: 'incoming' }
        ],
        possibleAnswers: [
            { text: 'Рад подружиться', index: 0 },
            { text: 'Хватит верстать диванами', index: 1 },
            { text: 'Хочу летнюю резину', index: 2 }]
    },
    {
        messages: [
            { message: 'Похоже раунд закончен друг!', type: 'incoming' },
        ],
        possibleAnswers: [{ text: 'Раунд завершен!', index: 0 }]
    }
];

const customMiddleware = store => next => action => {
    console.log("Action Triggered");
    console.log(action);
    console.log(store.getState());
    next(action);
};

const reducer = (state, action) => {
    switch (action.type) {
        case INIT_ROUND:
            return {
                ...state,
                round: 0
            };

        case ROUND_OVER:
            return {
                ...state,
                chat: [
                    ...state.chat,
                    { message: 'Похоже ты прошел первый раунд!', type: 'incoming' }],
                round: state.round + 1
            };

        case ADD_ANSWER:
            return {
                ...state,
                chat: [
                    ...state.chat,
                    { message: action.payload.message, type: action.payload.type }],
                answers: [
                    ...state.answers,
                    { message: action.payload.message, index: action.payload.index }
                ],
                roundIsOver: typeof stages[state.stage + 1].messages === 'undefined'
            };

        case GET_NEXT_STAGE:
            return {
                ...state,
                chat: [
                    ...state.chat,
                    stages[state.stage].messages[action.payload.index]
                ],
                possibleAnswers: stages[state.stage + 1].possibleAnswers,
                stage: state.stage + 1
            };
        default:
            return state;
    }
};

const Store = createContext(initialState);

const compose = (...funcs) => x =>
    funcs.reduceRight((composed, f) => f(composed), x);

const createStore = (reducer, initialState, middlewares) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    if (typeof middlewares !== "undefined") {
        const middlewareAPI = {
            getState: () => state,
            dispatch: action => dispatch(action)
        };
        const chain = middlewares.map(middleware => middleware(middlewareAPI));
        const enhancedDispatch = compose(...chain)(dispatch);
        return { state, dispatch: enhancedDispatch };
    }

    return { state, dispatch };
};

function Provider(props) {
    const store = createStore(reducer, initialState, [customMiddleware]);
    return (
        <Store.Provider value={store}>
            {props.children}
        </Store.Provider>
    );
}

export { Store, Provider }
