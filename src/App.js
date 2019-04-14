import React, { Component } from 'react';
import { Provider } from './store';
import MainContainer from './MainContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider>
                    <MainContainer/>
                </Provider>
            </div>
        );
    }
}

export default App;
