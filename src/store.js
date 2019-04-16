import { createContext, useReducer } from "react";
import React from "react";


const initialState = {
    stage: 0,
    chat: [{ incomingMessage: {text: 'Добрый день. Начнем нашу игру?'}}, { outgoingMessage: {}}],
    chat2: [{ message: 'Добрый день. Начнем нашу игру?', type: 'incoming'}],
    answers: [],
    possibleAnswers: [
        {text: 'Я не хочу у вас работать!', index: 0},
        {text: 'Сколько ЗП дадите?', index: 1},
        {text: 'Дашь мне свой номер?', index: 2}]
};

const stages = {
    0: {
        messages: [
            { message: 'Ну и пошел ты на хер!', type: 'incoming' },
            { message: 'Да прибудет с тобой сила.', type: 'incoming' },
            { message: 'Я думала мы с тобой друзья.', type: 'incoming' }
        ]
    },
    1: {
        incomingMessage: [
            { text: 'Давайте на ты' },
            { text: 'Люблю тебя' },
            { text: 'Нет!' }
        ],
        possibleAnswers: [
            {text: 'Спаси и сохрани.', index: 0},
            {text: 'Мне нравится малиновый чизкейк.', index: 1},
            {text: 'Хочу 150к в неделю.', index: 2}
        ]
    }
};

const customMiddleware = store => next => action => {
    console.log("Action Triggered");
    console.log(action);
    next(action);
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return {
                ...state,
                chat2: [
                    ...state.chat2,
                    { message: action.payload.message, type: action.payload.type }],
                answers: [
                    ...state.answers,
                    { message: action.payload.message, index: action.payload.index }
                ]
            };

        case 'GET_NEXT_STAGE':
            return {
                ...state,
                chat2: [
                    ...state.chat2,
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
