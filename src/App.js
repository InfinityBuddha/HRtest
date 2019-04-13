import React, { Component } from 'react';
import { MainProvider } from "./Context";
import MainContainer from "./MainContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainProvider>
                    <MainContainer/>
                </MainProvider>
            </div>
        );
    }
}

export default App;
