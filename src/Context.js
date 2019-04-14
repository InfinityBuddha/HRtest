import React, { useReducer, createContext } from 'react'

const initialState = {
    stage: 0,
    chat: [{ incomingMessage: {text: 'Добрый день. Начнем нашу игру?'}}, { outgoingMessage: {}}],
    possibleAnswers: [
        {text: 'Я не хочу у вас работать!', index: 0},
        {text: 'Сколько ЗП дадите?', index: 1},
        {text: 'Дашь мне свой номер?', index: 2}]
};

const stages = {
    0: {
        incomingMessage: [
            { text: 'Ну и пошел ты на хер!' },
            { text: 'Да прибудет с тобой сила.' },
            { text: 'Я думала мы с тобой друзья.' }
        ]
    },
    1: {
        incomingMessage: [
            { text: 'Давайте 2' },
            { text: 'Да прибудет с тобой сила.2' },
            { text: 'Я думала мы с тобой друзья.2' }
        ],
        possibleAnswers: [
            {text: 'Спаси и сохрани.', index: 0},
            {text: 'Мне нравится малиновый чизкейк.', index: 1},
            {text: 'Хочу 150к в неделю.', index: 2}
        ]
    }
};

const MainContext = createContext(initialState);

const reducer = (state, action) => {
    console.log('ACTION:', action.type, action, state );
    switch (action.type) {
        case 'ADD_ANSWER':
            return {
                ...state,
                outgoingMessage: { text: action.payload.text, index: 0 }
            };

        case 'GET_NEXT_STAGE':
            return {
                ...state,
                chat: [
                    ...state.chat,
                    {
                        outgoingMessage: state.outgoingMessage
                    },
                    {
                        incomingMessage: stages[state.stage].incomingMessage[action.payload.index]
                    }
                ],
                possibleAnswers: stages[state.stage + 1].possibleAnswers,
                stage: state.stage + 1
            };
        default:
            return state;
    }
};

function MainProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MainContext.Provider value={{state, dispatch}}>
            {props.children}
        </MainContext.Provider>
    );
}
export { MainContext, MainProvider };
