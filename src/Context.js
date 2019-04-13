import React, { useReducer } from 'react'

const initialState = { messages: [{text: 'Добрый день. Начнем нашу игру?'}] };
const MainContext = React.createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [{text: 'Я вам не писала потому что думала что вы крутой разработчик'}]
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
