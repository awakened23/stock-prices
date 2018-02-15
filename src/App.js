import React, { Component } from 'react';
import './App.css';
import ConnectedLog from './connectors/ConnectedLog';
import ConnectedSummary from './connectors/ConnectedSummary';

class App extends Component {

    render() {
        return (
            <div className="app">
                <ConnectedLog/>
                <ConnectedSummary/>
            </div>
        );
    }
}

export default App;
