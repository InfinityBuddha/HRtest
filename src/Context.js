import React, { useReducer } from 'react'

const initialState = { stage: 0, chat: [{ message: {text: 'Добрый день. Начнем нашу игру?'}}, { answer: {}}] };
const MainContext = React.createContext(initialState);

const stages = {
    0: {
        answer: {
            0: {
                message: { text: 'Ну и пошел ты на хер!' }
            }
        }
    }
};

const reducer = (state, action) => {
    console.log('ACTION:', action.type, state, action);
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                chat: [
                    { message: [{text: 'Я вам не писала потому что думала что вы крутой разработчик'}] }
                ]
            };

        case 'ADD_ANSWER':
            return {
                ...state,
                answer: { text: action.payload.text, index: 0 }
            };

        case 'GET_NEXT_STAGE':
            console.log('stateanswer:', state.answer);
            return {
                ...state,
                chat: [
                    ...state.chat,
                    {
                        answer: state.answer
                    },
                    {
                        message: stages[0].answer[0].message
                    }
                ],
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
